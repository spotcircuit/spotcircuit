#!/usr/bin/env python3
"""
Wrapper script to run AI readiness analyzer with command-line arguments
"""

import asyncio
import argparse
import json
import sys
from datetime import datetime
from ai_readiness_final import scrape_google_maps_competitors

async def run_audit(business_name, location, audit_id=None):
    """Run the audit with provided parameters"""
    
    print(f"🚀 Starting AI Readiness Audit")
    print(f"📍 Business: {business_name}")
    print(f"📍 Location: {location}")
    print(f"📍 Audit ID: {audit_id or 'Manual run'}")
    
    # Mock the input prompts by setting the values
    import builtins
    original_input = builtins.input
    
    # Create a mock input function that returns our values
    inputs = iter([business_name, location, "Medical Spas"])
    def mock_input(prompt):
        try:
            return next(inputs)
        except StopIteration:
            return ""
    
    # Replace input temporarily
    builtins.input = mock_input
    
    try:
        # Run the scraper
        results = await scrape_google_maps_competitors()
        
        if results and results.get('success'):
            # Save results with audit ID if provided
            if audit_id:
                filename = f'audits/ai_readiness_{audit_id}.json'
            else:
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                filename = f'ai_readiness_{business_name.replace(" ", "_")}_{timestamp}.json'
            
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(results, f, indent=2, ensure_ascii=False)
            
            print(f"\n✅ Audit complete! Results saved to: {filename}")
            
            # Create a summary for email
            if audit_id:
                create_email_summary(results, business_name, audit_id)
            
            return True
        else:
            print("❌ Audit failed")
            return False
            
    finally:
        # Restore original input
        builtins.input = original_input

def create_email_summary(results, business_name, audit_id):
    """Create a summary file for email delivery"""
    
    competitors = results.get('data', {}).get('competitors', [])
    target = next((c for c in competitors if c.get('is_target')), None)
    
    summary = {
        "audit_id": audit_id,
        "business_name": business_name,
        "analysis_date": results.get('analysis_date'),
        "target_found": results.get('target_found'),
        "target_position": results.get('target_position'),
        "total_competitors": len(competitors)
    }
    
    if target:
        summary["ai_score"] = target.get('ai_score', 0)
        summary["ai_factors"] = target.get('ai_factors', {})
        summary["recommendations"] = []
        
        # Generate recommendations based on missing factors
        factors = target.get('ai_factors', {})
        if not factors.get('has_qa'):
            summary["recommendations"].append("Add a Q&A section to your Google Business Profile")
        if not factors.get('has_posts'):
            summary["recommendations"].append("Start posting weekly Google Posts")
        if not factors.get('responds_to_reviews'):
            summary["recommendations"].append("Respond to all customer reviews")
        if not factors.get('verified'):
            summary["recommendations"].append("Verify your Google Business Profile")
        if target.get('number_of_reviews', 0) < 50:
            summary["recommendations"].append("Launch a review campaign to reach 50+ reviews")
    
    # Save summary
    summary_file = f'audits/ai_summary_{audit_id}.json'
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)
    
    print(f"📧 Email summary saved to: {summary_file}")

def main():
    parser = argparse.ArgumentParser(description='Run AI Readiness Audit')
    parser.add_argument('--business', required=True, help='Business name')
    parser.add_argument('--location', required=True, help='Location (city, state)')
    parser.add_argument('--audit-id', help='Audit ID for tracking')
    
    args = parser.parse_args()
    
    # Run the async function
    success = asyncio.run(run_audit(args.business, args.location, args.audit_id))
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()