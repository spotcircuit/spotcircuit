#!/usr/bin/env python3
"""
Quick AI Audit Demo - Simplified version for immediate testing
No API keys required - generates sample audit
"""

import json
import random
from datetime import datetime

def generate_demo_audit(business_name, location):
    """Generate a demo audit report without actual scraping"""
    
    # Sample competitor names
    competitor_names = [
        "Glow Aesthetics & Wellness",
        "Elite Medical Spa",
        "Radiance MedSpa",
        "Bella Vita Aesthetic Center",
        "Luxe Beauty Medical Spa",
        "Rejuvenate Wellness Center",
        "Pure Bliss MedSpa",
        "Vitality Aesthetics",
        "Serenity Medical Spa",
        "Harmony Wellness & Beauty"
    ]
    
    # Generate competitor data
    competitors = []
    target_position = random.choice([0, 0, 0, 7, 12, 15, None])  # 50% chance of being in top 3
    
    for i in range(10):
        if target_position == i:
            comp_name = business_name
            is_target = True
        else:
            comp_name = random.choice(competitor_names)
            competitor_names.remove(comp_name)  # Don't repeat
            is_target = False
        
        competitors.append({
            "rank": i + 1,
            "name": comp_name,
            "rating": round(random.uniform(3.5, 5.0), 1),
            "reviews": random.randint(20, 500),
            "has_faq": random.choice([True, True, False]),  # 66% have FAQ
            "has_website": True,
            "ai_optimized": random.choice([True, False]) if not is_target else False,
            "is_target": is_target
        })
    
    # Determine visibility status
    if target_position is None:
        status = "INVISIBLE"
        status_detail = f"{business_name} does not appear in AI search results"
    elif target_position < 3:
        status = "VISIBLE"
        status_detail = f"{business_name} ranks #{target_position + 1} - Good visibility"
    elif target_position < 10:
        status = "POOR"
        status_detail = f"{business_name} ranks #{target_position + 1} - Limited visibility"
    else:
        status = "VERY POOR"
        status_detail = f"{business_name} ranks #{target_position + 1} - Minimal visibility"
    
    # Generate insights
    avg_reviews = sum(c['reviews'] for c in competitors[:5]) / 5
    faq_count = sum(1 for c in competitors[:5] if c['has_faq'])
    ai_optimized = sum(1 for c in competitors[:5] if c.get('ai_optimized', False))
    
    report = {
        "audit_id": f"demo_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        "business_name": business_name,
        "location": location,
        "audit_date": datetime.now().isoformat(),
        "summary": {
            "visibility_status": status,
            "status_detail": status_detail,
            "position": target_position + 1 if target_position is not None else "Not Found",
            "competitors_analyzed": len(competitors)
        },
        "competitor_analysis": {
            "top_competitors": competitors[:5],
            "insights": {
                "average_reviews": int(avg_reviews),
                "competitors_with_faq": faq_count,
                "ai_optimized_competitors": ai_optimized
            }
        },
        "ai_visibility_factors": {
            "missing_elements": [
                "No structured FAQ content found",
                "Missing schema markup for medical procedures",
                "Limited treatment-specific content",
                "No AI-friendly Q&A format",
                "Weak local entity signals"
            ],
            "competitor_advantages": [
                f"{faq_count}/5 competitors have comprehensive FAQs",
                f"Top competitors average {int(avg_reviews)} reviews",
                f"{ai_optimized} competitors use AI-optimized content",
                "Competitors have detailed service descriptions",
                "Strong local SEO signals in competitor content"
            ]
        },
        "recommendations": {
            "immediate_actions": [
                "Add comprehensive FAQ section covering all treatments",
                "Implement medical schema markup on all pages",
                "Create detailed service pages with Q&A format",
                "Optimize Google Business Profile with rich content"
            ],
            "content_priorities": [
                "Create 'Is [Treatment] safe?' content for each service",
                "Add 'What to expect' sections for all procedures",
                "Include pricing transparency information",
                "Develop 'Before and after care' guides"
            ],
            "technical_improvements": [
                "Add FAQPage schema markup",
                "Implement MedicalBusiness structured data",
                "Create speakable content for voice search",
                "Optimize for 'near me' local queries"
            ]
        },
        "expected_results": {
            "30_days": "Initial visibility improvements, appearing in more AI responses",
            "60_days": "Move into top 5 AI recommendations for key treatments",
            "90_days": "Achieve consistent top 3 positioning across all AI platforms"
        },
        "demo_note": "This is a demonstration audit. A full audit includes actual competitor scraping, AI platform testing, and personalized recommendations."
    }
    
    return report

def print_audit_summary(report):
    """Print a formatted summary of the audit"""
    print("\n" + "="*60)
    print("AI VISIBILITY AUDIT REPORT")
    print("="*60)
    print(f"\nBusiness: {report['business_name']}")
    print(f"Location: {report['location']}")
    print(f"Date: {report['audit_date'][:10]}")
    
    print(f"\n📊 VISIBILITY STATUS: {report['summary']['visibility_status']}")
    print(f"   {report['summary']['status_detail']}")
    
    print("\n🔍 KEY FINDINGS:")
    print(f"   • Your position: #{report['summary']['position']}")
    print(f"   • Competitors analyzed: {report['summary']['competitors_analyzed']}")
    print(f"   • Average competitor reviews: {report['competitor_analysis']['insights']['average_reviews']}")
    print(f"   • Competitors with FAQ content: {report['competitor_analysis']['insights']['competitors_with_faq']}/5")
    
    print("\n⚠️  MISSING AI OPTIMIZATION ELEMENTS:")
    for item in report['ai_visibility_factors']['missing_elements'][:3]:
        print(f"   • {item}")
    
    print("\n✅ TOP RECOMMENDATIONS:")
    for item in report['recommendations']['immediate_actions'][:3]:
        print(f"   • {item}")
    
    print("\n📈 EXPECTED RESULTS:")
    print(f"   • 30 days: {report['expected_results']['30_days']}")
    print(f"   • 60 days: {report['expected_results']['60_days']}")
    print(f"   • 90 days: {report['expected_results']['90_days']}")
    
    print("\n" + "-"*60)
    print("💡 " + report['demo_note'])
    print("="*60 + "\n")

def main():
    """Run demo audit"""
    print("\n🤖 AI VISIBILITY AUDIT DEMO")
    print("This demonstrates what a full audit report looks like\n")
    
    # Get input
    business_name = input("Enter medical spa name (or press Enter for 'Bella Medical Spa'): ").strip()
    if not business_name:
        business_name = "Bella Medical Spa"
    
    location = input("Enter location (or press Enter for 'Austin, TX'): ").strip()
    if not location:
        location = "Austin, TX"
    
    print(f"\n🔍 Generating demo audit for {business_name} in {location}...")
    print("   (In production, this would scrape actual competitor data)")
    
    # Generate report
    report = generate_demo_audit(business_name, location)
    
    # Print summary
    print_audit_summary(report)
    
    # Save full report
    filename = f"demo_audit_{business_name.replace(' ', '_')}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(filename, 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"\n💾 Full report saved to: {filename}")
    
    # Show sample competitor data
    print("\n📊 TOP 5 COMPETITORS:")
    for comp in report['competitor_analysis']['top_competitors']:
        star = "⭐" if comp['is_target'] else ""
        faq = "✓ FAQ" if comp['has_faq'] else "✗ No FAQ"
        print(f"   #{comp['rank']}. {comp['name']} {star}")
        print(f"       Rating: {comp['rating']} ({comp['reviews']} reviews) | {faq}")

if __name__ == "__main__":
    main()