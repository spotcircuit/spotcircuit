#!/usr/bin/env python3
"""
n8n Integration Script for AI Readiness Audits
This script accepts JSON input and returns audit results as JSON output
"""

import asyncio
import json
import sys
from datetime import datetime
from ai_readiness_final import scrape_google_maps_competitors

async def run_audit_for_n8n(input_data):
    """Run audit and return results in n8n-friendly format"""
    
    # Extract data from n8n input
    business_name = input_data.get('businessName', '')
    location = input_data.get('location', '')
    audit_id = input_data.get('auditId', '')
    email = input_data.get('email', '')
    contact_name = input_data.get('contactName', '')
    
    if not business_name or not location:
        return {
            "success": False,
            "error": "Missing required fields: businessName and location"
        }
    
    # Mock the input prompts
    import builtins
    original_input = builtins.input
    
    inputs = iter([business_name, location, input_data.get('industry', 'Medical Spas')])
    def mock_input(prompt):
        try:
            return next(inputs)
        except StopIteration:
            return ""
    
    builtins.input = mock_input
    
    try:
        # Run the scraper
        results = await scrape_google_maps_competitors()
        
        if results and results.get('success'):
            # Process results for n8n
            competitors = results.get('data', {}).get('competitors', [])
            target = next((c for c in competitors if c.get('is_target')), None)
            top_3 = [c for c in competitors if c.get('in_3pack')]
            
            # Build response
            output = {
                "success": True,
                "auditId": audit_id,
                "businessName": business_name,
                "location": location,
                "email": email,
                "contactName": contact_name,
                "analysisDate": datetime.now().isoformat(),
                "targetFound": results.get('target_found', False),
                "targetPosition": results.get('target_position'),
                "totalCompetitors": len(competitors),
                "rawResults": results  # Full results for detailed analysis
            }
            
            # Add target analysis
            if target:
                output["targetAnalysis"] = {
                    "position": target.get('google_rank'),
                    "aiScore": target.get('ai_score', 0),
                    "rating": target.get('average_rating'),
                    "reviewCount": target.get('number_of_reviews'),
                    "website": target.get('website'),
                    "factors": target.get('ai_factors', {}),
                    "in3Pack": target.get('in_3pack', False)
                }
                
                # Generate recommendations
                recommendations = []
                factors = target.get('ai_factors', {})
                
                if not factors.get('has_qa'):
                    recommendations.append({
                        "priority": "HIGH",
                        "issue": "No Q&A Section",
                        "impact": "Missing 20 AI points",
                        "action": "Add Q&A section to Google Business Profile with FAQs about your services"
                    })
                
                if not factors.get('has_posts'):
                    recommendations.append({
                        "priority": "HIGH",
                        "issue": "No Google Posts",
                        "impact": "Missing 15 AI points",
                        "action": "Post weekly updates about treatments, specials, and patient success stories"
                    })
                
                if not factors.get('responds_to_reviews'):
                    recommendations.append({
                        "priority": "MEDIUM",
                        "issue": "Not Responding to Reviews",
                        "impact": "Missing 15 AI points",
                        "action": "Respond to all reviews within 24-48 hours with personalized messages"
                    })
                
                if not factors.get('verified'):
                    recommendations.append({
                        "priority": "CRITICAL",
                        "issue": "Business Not Verified",
                        "impact": "Missing 10 AI points + trust issues",
                        "action": "Complete Google Business Profile verification immediately"
                    })
                
                if target.get('number_of_reviews', 0) < 50:
                    recommendations.append({
                        "priority": "MEDIUM",
                        "issue": "Low Review Count",
                        "impact": "Missing 10 AI points",
                        "action": f"Launch review campaign to reach 50+ reviews (currently: {target.get('number_of_reviews', 0)})"
                    })
                
                output["recommendations"] = recommendations
            else:
                output["targetAnalysis"] = None
                output["recommendations"] = [{
                    "priority": "CRITICAL",
                    "issue": "Business Not Found",
                    "impact": "Invisible to AI and local search",
                    "action": "Claim and verify your Google Business Profile immediately"
                }]
            
            # Add top 3 competitor analysis
            output["top3Competitors"] = []
            for comp in top_3[:3]:
                output["top3Competitors"].append({
                    "name": comp.get('business_name'),
                    "position": comp.get('google_rank'),
                    "aiScore": comp.get('ai_score', 0),
                    "rating": comp.get('average_rating'),
                    "reviewCount": comp.get('number_of_reviews'),
                    "factors": comp.get('ai_factors', {})
                })
            
            # Calculate AI readiness summary
            if target:
                ai_score = target.get('ai_score', 0)
                if ai_score >= 80:
                    readiness_level = "EXCELLENT"
                    readiness_message = "Your business is well-optimized for AI search"
                elif ai_score >= 60:
                    readiness_level = "GOOD"
                    readiness_message = "Your business has good AI visibility but room for improvement"
                elif ai_score >= 40:
                    readiness_level = "FAIR"
                    readiness_message = "Your business has basic AI visibility but needs significant improvement"
                else:
                    readiness_level = "POOR"
                    readiness_message = "Your business is largely invisible to AI search platforms"
            else:
                readiness_level = "CRITICAL"
                readiness_message = "Your business was not found - immediate action required"
                
            output["aiReadinessSummary"] = {
                "level": readiness_level,
                "message": readiness_message,
                "score": target.get('ai_score', 0) if target else 0
            }
            
            return output
            
        else:
            return {
                "success": False,
                "error": "Failed to analyze competitors",
                "details": results.get('error', 'Unknown error')
            }
            
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
    finally:
        builtins.input = original_input

def main():
    """Main entry point for n8n"""
    # Read JSON from stdin (n8n sends data this way)
    try:
        input_data = json.loads(sys.stdin.read())
    except:
        # If no stdin, check for command line argument
        if len(sys.argv) > 1:
            input_data = json.loads(sys.argv[1])
        else:
            print(json.dumps({"success": False, "error": "No input data provided"}))
            sys.exit(1)
    
    # Run the audit
    result = asyncio.run(run_audit_for_n8n(input_data))
    
    # Output JSON for n8n
    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()