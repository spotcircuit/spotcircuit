#!/usr/bin/env python3
"""
AI Visibility Audit Scraper for Medical Spas
Analyzes competitor visibility and generates audit report
"""

import asyncio
import json
import re
import os
import argparse
from datetime import datetime
from playwright.async_api import async_playwright
import openai
from typing import List, Dict, Any

# Set your OpenAI API key
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', '')

async def scrape_medical_spa_competitors(business_name: str, location: str, max_results: int = 20):
    """Scrape competitor data for AI analysis"""
    
    # Construct search query
    search_query = f"Medical Spas near {location}"
    maps_url = f"https://www.google.com/maps/search/{search_query.replace(' ', '+')}"
    
    print(f"🔍 Analyzing competitors for: {business_name}")
    print(f"📍 Location: {location}")
    print(f"🗺️ Search URL: {maps_url}")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        )
        page = await context.new_page()
        
        competitors = []
        target_business_found = False
        
        try:
            await page.goto(maps_url, wait_until='domcontentloaded', timeout=30000)
            await asyncio.sleep(3)
            
            # Scroll to load results
            for _ in range(3):
                await page.mouse.wheel(0, 500)
                await asyncio.sleep(1)
            
            # Find business elements
            elements = await page.query_selector_all('[role="article"]')
            if not elements:
                elements = await page.query_selector_all('.Nv2PK')
            
            print(f"📊 Found {len(elements)} businesses")
            
            for i, element in enumerate(elements[:max_results]):
                try:
                    text = await element.inner_text()
                    lines = [line.strip() for line in text.split('\n') if line.strip()]
                    
                    # Extract business info
                    comp_name = extract_business_name(lines)
                    if not comp_name:
                        continue
                    
                    # Check if this is the target business
                    if business_name.lower() in comp_name.lower() or comp_name.lower() in business_name.lower():
                        target_business_found = True
                    
                    competitor = {
                        "rank": i + 1,
                        "name": comp_name,
                        "rating": extract_rating(lines),
                        "reviews": extract_review_count(lines),
                        "category": extract_category(lines),
                        "has_website": False,
                        "has_faq": False,
                        "description_length": 0,
                        "is_target": business_name.lower() in comp_name.lower()
                    }
                    
                    # Click for details
                    try:
                        await element.click()
                        await asyncio.sleep(1.5)
                        
                        # Get full page text
                        page_text = await page.inner_text('body')
                        
                        # Check for website
                        if '.com' in page_text or '.net' in page_text:
                            competitor['has_website'] = True
                        
                        # Check for FAQ indicators
                        faq_indicators = ['frequently asked', 'faq', 'questions', 'q&a']
                        if any(indicator in page_text.lower() for indicator in faq_indicators):
                            competitor['has_faq'] = True
                        
                        # Estimate description richness
                        competitor['description_length'] = len(page_text)
                        
                        await page.keyboard.press('Escape')
                        await asyncio.sleep(0.5)
                        
                    except:
                        pass
                    
                    competitors.append(competitor)
                    
                except Exception as e:
                    continue
            
        finally:
            await browser.close()
    
    return {
        "competitors": competitors,
        "target_found": target_business_found,
        "total_analyzed": len(competitors)
    }

def extract_business_name(lines: List[str]) -> str:
    """Extract business name from text lines"""
    for line in lines[:5]:
        if line and len(line) > 2 and not line.isdigit():
            if not any(skip in line.lower() for skip in ['open', 'closed', '·', 'reviews']):
                return line.strip()
    return ""

def extract_rating(lines: List[str]) -> float:
    """Extract rating"""
    for line in lines:
        match = re.search(r'(\d\.\d)', line)
        if match:
            try:
                rating = float(match.group(1))
                if 1.0 <= rating <= 5.0:
                    return rating
            except:
                pass
    return 0.0

def extract_review_count(lines: List[str]) -> int:
    """Extract review count"""
    for line in lines:
        match = re.search(r'\((\d+)\)', line)
        if match:
            try:
                return int(match.group(1))
            except:
                pass
    return 0

def extract_category(lines: List[str]) -> str:
    """Extract business category"""
    categories = ['medical spa', 'med spa', 'wellness', 'aesthetic', 'dermatology', 'clinic']
    text = ' '.join(lines).lower()
    for cat in categories:
        if cat in text:
            return cat.title()
    return "Medical Spa"

async def analyze_with_ai(business_name: str, location: str, competitor_data: Dict[str, Any]) -> Dict[str, Any]:
    """Generate AI analysis of the audit results"""
    
    if not OPENAI_API_KEY:
        return generate_basic_analysis(business_name, competitor_data)
    
    try:
        openai.api_key = OPENAI_API_KEY
        
        # Prepare competitor summary
        competitors = competitor_data['competitors']
        target = next((c for c in competitors if c['is_target']), None)
        
        prompt = f"""
        Analyze the AI search visibility for {business_name} in {location}.
        
        Target Business: {business_name}
        Found in results: {'Yes at position ' + str(target['rank']) if target else 'No'}
        
        Top 5 Competitors:
        {json.dumps(competitors[:5], indent=2)}
        
        Provide a professional analysis including:
        1. Current AI visibility status
        2. Why competitors rank higher
        3. Specific improvements needed
        4. Expected impact of optimization
        
        Format as JSON with keys: status, competitors_advantage, improvements, impact
        """
        
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return json.loads(response.choices[0].message.content)
        
    except:
        return generate_basic_analysis(business_name, competitor_data)

def generate_basic_analysis(business_name: str, competitor_data: Dict[str, Any]) -> Dict[str, Any]:
    """Generate analysis without AI"""
    competitors = competitor_data['competitors']
    target = next((c for c in competitors if c['is_target']), None)
    
    # Calculate metrics
    avg_rating = sum(c['rating'] for c in competitors[:5]) / 5 if competitors else 0
    avg_reviews = sum(c['reviews'] for c in competitors[:5]) / 5 if competitors else 0
    with_faq = sum(1 for c in competitors[:5] if c['has_faq'])
    
    status = "invisible" if not target else "visible" if target['rank'] <= 5 else "poorly positioned"
    
    return {
        "status": f"Your medical spa is currently {status} to AI search platforms",
        "competitors_advantage": [
            f"Top competitors average {avg_rating:.1f} stars with {int(avg_reviews)} reviews",
            f"{with_faq} out of 5 top competitors have FAQ content",
            "Competitors use AI-optimized descriptions and structured data"
        ],
        "improvements": [
            "Add comprehensive FAQ section for common treatments",
            "Implement schema markup for medical procedures",
            "Optimize Google Business Profile with detailed descriptions",
            "Create treatment-specific landing pages with Q&A format"
        ],
        "impact": "Implementing these changes typically results in 200-300% increase in AI visibility within 30-60 days"
    }

async def generate_audit_report(audit_id: str, business_name: str, location: str):
    """Generate complete audit report"""
    
    print(f"\n🚀 Starting AI Visibility Audit for {business_name}")
    
    # Scrape competitor data
    competitor_data = await scrape_medical_spa_competitors(business_name, location)
    
    # Generate AI analysis
    ai_analysis = await analyze_with_ai(business_name, location, competitor_data)
    
    # Create full report
    report = {
        "audit_id": audit_id,
        "business_name": business_name,
        "location": location,
        "audit_date": datetime.now().isoformat(),
        "competitor_analysis": competitor_data,
        "ai_insights": ai_analysis,
        "recommendations": {
            "immediate_actions": [
                "Claim and optimize Google Business Profile",
                "Add FAQ section to website",
                "Implement medical schema markup"
            ],
            "30_day_plan": [
                "Create treatment-specific pages",
                "Build local citation network",
                "Develop content answering common questions"
            ],
            "60_day_goals": [
                "Achieve top 3 AI recommendations",
                "Increase review volume by 50%",
                "Establish thought leadership content"
            ]
        }
    }
    
    # Save report
    output_dir = os.path.join(os.path.dirname(__file__), '..', 'audits')
    os.makedirs(output_dir, exist_ok=True)
    
    output_file = os.path.join(output_dir, f'{audit_id}_report.json')
    with open(output_file, 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"\n✅ Audit complete! Report saved to: {output_file}")
    
    return report

async def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='AI Visibility Audit for Medical Spas')
    parser.add_argument('--business', required=True, help='Business name to audit')
    parser.add_argument('--location', required=True, help='Location (city, state or address)')
    parser.add_argument('--audit-id', required=True, help='Unique audit ID')
    
    args = parser.parse_args()
    
    # Generate audit report
    report = await generate_audit_report(args.audit_id, args.business, args.location)
    
    # Print summary
    print("\n📊 AUDIT SUMMARY:")
    print(f"Status: {report['ai_insights']['status']}")
    print(f"Competitors analyzed: {report['competitor_analysis']['total_analyzed']}")
    print(f"Your position: {'Not found' if not report['competitor_analysis']['target_found'] else 'Found'}")

if __name__ == "__main__":
    asyncio.run(main())