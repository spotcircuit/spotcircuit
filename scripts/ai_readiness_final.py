#!/usr/bin/env python3
"""
AI Search Readiness Analyzer - Final Working Version
Based on the exact working test_exact_copy.py
"""

import asyncio
import json
import re
from datetime import datetime
from playwright.async_api import async_playwright

# Coordinates for common locations
LOCATION_COORDS = {
    "ashburn, va": "@39.0089867,-77.4929329,11z",
    "ashburn": "@39.0089867,-77.4929329,11z",
    "sterling, va": "@39.0063,-77.4286,11z",
    "leesburg, va": "@39.1157,-77.5636,11z",
    "reston, va": "@38.9586,-77.3570,11z",
    "herndon, va": "@38.9695,-77.3861,11z",
    "fairfax, va": "@38.8462,-77.3064,11z",
    "tysons, va": "@38.9187,-77.2311,11z",
    "arlington, va": "@38.8816,-77.1083,11z",
    "alexandria, va": "@38.8048,-77.0469,11z",
    "richmond, va": "@37.5407,-77.4360,11z",
    "virginia beach, va": "@36.8529,-75.9780,11z",
    "austin, tx": "@30.2672,-97.7431,11z",
    "dallas, tx": "@32.7767,-96.7970,11z",
    "houston, tx": "@29.7604,-95.3698,11z",
    "san antonio, tx": "@29.4241,-98.4936,11z",
    "miami, fl": "@25.7617,-80.1918,11z",
    "orlando, fl": "@28.5383,-81.3792,11z",
    "tampa, fl": "@27.9506,-82.4572,11z",
    "atlanta, ga": "@33.7490,-84.3880,11z",
    "charlotte, nc": "@35.2271,-80.8431,11z",
    "phoenix, az": "@33.4484,-112.0740,11z",
    "las vegas, nv": "@36.1699,-115.1398,11z",
    "los angeles, ca": "@34.0522,-118.2437,11z",
    "san diego, ca": "@32.7157,-117.1611,11z",
    "san francisco, ca": "@37.7749,-122.4194,11z",
    "seattle, wa": "@47.6062,-122.3321,11z",
    "portland, or": "@45.5152,-122.6784,11z",
    "denver, co": "@39.7392,-104.9903,11z",
    "chicago, il": "@41.8781,-87.6298,11z",
    "new york, ny": "@40.7128,-74.0060,11z",
    "boston, ma": "@42.3601,-71.0589,11z",
    "philadelphia, pa": "@39.9526,-75.1652,11z",
    "washington, dc": "@38.9072,-77.0369,11z",
    "dc": "@38.9072,-77.0369,11z",
}

async def scrape_google_maps_competitors():
    """Two-pass scraping with two separate browser instances"""
    
    # Get user input
    print("🤖 AI SEARCH READINESS ANALYZER")
    print("="*50)
    
    business_name = input("Your business name: ").strip()
    if not business_name:
        print("❌ Business name is required!")
        return
    
    location = input("Location (e.g., 'Ashburn, VA'): ").strip().lower()
    if not location:
        location = "ashburn, va"
    
    industry = input("Industry (default: Medical Spas): ").strip()
    if not industry:
        industry = "Medical Spas"
    
    # Get coordinates for the location
    coords = LOCATION_COORDS.get(location, None)
    if not coords:
        # Try without state
        city_only = location.split(',')[0].strip()
        coords = LOCATION_COORDS.get(city_only, "@39.8283,-98.5795,5z")  # US center as default
        print(f"⚠️  Using approximate location for '{location}'")
    
    # Construct URL with coordinates
    search_term = industry.replace(' ', '+')
    maps_url = f"https://www.google.com/maps/search/{search_term}/{coords}"
    
    print(f"\n🗺️ Searching: {industry} in {location}")
    print(f"🔗 URL: {maps_url}")
    print(f"🔍 Two-browser approach: Pass 1 at 25% zoom, Pass 2 at 50% zoom")
    
    async with async_playwright() as p:
        # ========== PASS 1: DISCOVERY AT 25% ZOOM ==========
        print("\n📍 PASS 1: Loading page and discovering all competitors...")
        
        browser1 = await p.chromium.launch(headless=False)
        context1 = await browser1.new_context(
            viewport={'width': 2560, 'height': 1440},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        )
        page1 = await context1.new_page()
        
        competitors = []
        target_found = False
        target_position = None
        
        try:
            await page1.goto(maps_url, wait_until='domcontentloaded', timeout=45000)
            
            # Set zoom to 25% for maximum results
            await page1.evaluate('document.body.style.zoom = "0.25"')
            await asyncio.sleep(3)
            
            # Trigger content loading
            print("🖱️ Triggering content loading...")
            await page1.mouse.move(960, 540)
            await page1.mouse.wheel(0, 500)
            await asyncio.sleep(2)
            await page1.mouse.wheel(0, -500)
            await asyncio.sleep(3)
            
            # Find all business elements
            selectors = [
                '[role="article"]',
                '.Nv2PK.THOPZb.CpccDe',
                '.lI9IFe',
                '.hfpxzc'
            ]
            
            elements = []
            for selector in selectors:
                elements = await page1.query_selector_all(selector)
                if elements and len(elements) > 5:
                    print(f"✅ Found {len(elements)} results with selector: {selector}")
                    break
            
            if not elements:
                print("❌ No elements found")
                return {"success": False, "error": "No elements found", "data": {"competitors": []}}
            
            await asyncio.sleep(5)  # Let everything load
            
            # Extract basic info from all competitors
            print(f"\n📊 Extracting basic info from {len(elements)} elements...")
            
            for i, element in enumerate(elements[:35]):  # Extra for duplicates
                try:
                    text = await element.inner_text()
                    if not text or len(text.strip()) < 5:
                        continue
                    
                    lines = [line.strip() for line in text.split('\n') if line.strip()]
                    
                    # Extract business name
                    business_name_found = None
                    for line in lines[:10]:
                        if line.strip().isdigit() or re.match(r'^\d+\.$', line):
                            continue
                        if line.lower() in ['ad', 'ads', 'sponsored', 'open', 'closed', 'open now']:
                            continue
                        if re.match(r'^\d\.\d$', line) or re.match(r'^\(\d+\)$', line):
                            continue
                        
                        if is_valid_business_name(line):
                            business_name_found = clean_business_name(line)
                            if business_name_found:
                                break
                    
                    if not business_name_found:
                        continue
                    
                    # Extract basic info
                    rating = extract_rating(lines)
                    review_count = extract_review_count(lines)
                    address = extract_address(lines)
                    category = determine_category(lines)
                    
                    # Check if target
                    is_target = business_name.lower() in business_name_found.lower() or business_name_found.lower() in business_name.lower()
                    if is_target:
                        target_found = True
                        target_position = len(competitors) + 1
                    
                    competitor = {
                        "business_name": business_name_found,
                        "google_rank": len(competitors) + 1,
                        "average_rating": rating,
                        "number_of_reviews": review_count,
                        "main_category": category,
                        "address": address,
                        "website": None,
                        "phone": None,
                        "is_target": is_target,
                        "in_3pack": len(competitors) < 3,
                        "ai_score": 0,
                        "ai_factors": {}
                    }
                    
                    competitors.append(competitor)
                    print(f"✅ #{len(competitors)}: {business_name_found} {'🎯 TARGET' if is_target else ''}")
                    
                except Exception as e:
                    continue
            
            print(f"\n✅ PASS 1 COMPLETE: Found {len(competitors)} competitors")
            if target_found:
                print(f"🎯 Target '{business_name}' found at position #{target_position}")
            else:
                print(f"❌ Target '{business_name}' NOT FOUND in results")
            
        except Exception as e:
            print(f"❌ Error in Pass 1: {e}")
            
        finally:
            print("🔄 Closing Pass 1 browser...")
            await browser1.close()
        
        # Wait before Pass 2
        print("\n⏳ Waiting before Pass 2...")
        await asyncio.sleep(2)
        
        # ========== PASS 2: GET DETAILS AT 50% ZOOM WITH FRESH BROWSER ==========
        print(f"\n📍 PASS 2: Opening fresh browser at 50% zoom (1920x1080)...")
        
        browser2 = await p.chromium.launch(headless=False)
        context2 = await browser2.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        )
        page2 = await context2.new_page()
        
        try:
            await page2.goto(maps_url, wait_until='domcontentloaded', timeout=45000)
            
            # Set zoom to 50% from the start
            await page2.evaluate('document.body.style.zoom = "0.5"')
            await asyncio.sleep(5)  # Give it time to fully load at this zoom
            
            # Trigger some interaction to ensure content loads
            await page2.mouse.move(500, 400)
            await page2.mouse.wheel(0, 300)
            await asyncio.sleep(2)
            await page2.mouse.wheel(0, -300)
            await asyncio.sleep(3)
            
            print("🔍 Starting to analyze AI readiness factors...")
            
            # Process each competitor
            successful_clicks = 0
            for idx, competitor in enumerate(competitors[:30]):
                # Focus on top 5 + target
                if idx >= 5 and not competitor['is_target']:
                    continue
                    
                try:
                    print(f"\n🔍 Getting AI factors for #{competitor['google_rank']}: {competitor['business_name']}")
                    
                    # Find and click on businesses that are visible
                    elements = await page2.query_selector_all('[role="article"]')
                    if not elements:
                        elements = await page2.query_selector_all('.Nv2PK.THOPZb.CpccDe')
                    
                    clicked = False
                    for element in elements:
                        try:
                            text = await element.inner_text()
                            
                            # Flexible matching
                            competitor_name_parts = [part for part in competitor['business_name'].lower().split() if len(part) > 2]
                            element_text_lower = text.lower()
                            
                            matches = sum(1 for part in competitor_name_parts if part in element_text_lower)
                            
                            if matches >= max(1, len(competitor_name_parts) * 0.6):
                                print(f"   ✅ Found match: {text[:50]}...")
                                await element.click()
                                clicked = True
                                successful_clicks += 1
                                await asyncio.sleep(0.5)
                                
                                # Get ALL text from the entire page
                                full_page_text = await page2.inner_text('body')
                                print(f"   📋 Analyzing {len(full_page_text)} chars for AI signals...")
                                
                                # AI READINESS FACTORS
                                ai_score = 0
                                ai_factors = {}
                                
                                # Q&A Section (Critical for AI)
                                if "Questions & answers" in full_page_text:
                                    ai_score += 20
                                    ai_factors['has_qa'] = True
                                    print("   ✅ Has Q&A section (+20) - CRITICAL FOR AI")
                                else:
                                    ai_factors['has_qa'] = False
                                    print("   ❌ NO Q&A section - Missing critical AI factor")
                                
                                # Google Posts (Shows activity)
                                if any(p in full_page_text for p in ["Updates from", "Latest from", "posts from"]):
                                    ai_score += 15
                                    ai_factors['has_posts'] = True
                                    print("   ✅ Has Google Posts (+15)")
                                else:
                                    ai_factors['has_posts'] = False
                                
                                # Review Responses (Trust signal)
                                if "Response from the owner" in full_page_text:
                                    ai_score += 15
                                    ai_factors['responds_to_reviews'] = True
                                    print("   ✅ Responds to reviews (+15)")
                                else:
                                    ai_factors['responds_to_reviews'] = False
                                
                                # Review Volume
                                if competitor['number_of_reviews'] and competitor['number_of_reviews'] > 50:
                                    ai_score += 20
                                    ai_factors['high_review_volume'] = True
                                    print(f"   ✅ High review count: {competitor['number_of_reviews']} (+20)")
                                else:
                                    ai_factors['high_review_volume'] = False
                                
                                # Rating
                                if competitor['average_rating'] and competitor['average_rating'] >= 4.5:
                                    ai_score += 10
                                    ai_factors['high_rating'] = True
                                    print(f"   ✅ High rating: {competitor['average_rating']} (+10)")
                                else:
                                    ai_factors['high_rating'] = False
                                
                                # Services/Products Listed
                                if any(s in full_page_text for s in ["Services", "Products", "Menu", "Treatments"]):
                                    ai_score += 10
                                    ai_factors['has_services'] = True
                                    print("   ✅ Has services/products listed (+10)")
                                else:
                                    ai_factors['has_services'] = False
                                
                                # Verified Business
                                if "Claim this business" not in full_page_text:
                                    ai_score += 10
                                    ai_factors['verified'] = True
                                    print("   ✅ Verified business (+10)")
                                else:
                                    ai_factors['verified'] = False
                                    print("   ❌ NOT VERIFIED - Basic requirement missing")
                                
                                competitor['ai_score'] = ai_score
                                competitor['ai_factors'] = ai_factors
                                print(f"   🤖 Total AI Score: {ai_score}/100")
                                
                                # Look for website
                                lines = full_page_text.split('\n')
                                for line in lines:
                                    line = line.strip()
                                    if ('.com' in line or '.org' in line or '.net' in line) and len(line) < 50:
                                        if not any(skip in line.lower() for skip in ['google', 'maps', '@', 'facebook', 'instagram']):
                                            website_match = re.search(r'([\w\-]+\.(com|org|net|biz|co|us|health))', line)
                                            if website_match:
                                                competitor['website'] = website_match.group(1)
                                                print(f"   ✅ Website: {competitor['website']}")
                                                break
                                
                                # Close with Escape
                                await page2.keyboard.press('Escape')
                                await asyncio.sleep(0.3)
                                break
                        except Exception as e:
                            continue
                    
                    if not clicked:
                        print(f"   ⚠️ Could not find {competitor['business_name']} in view")
                        continue
                    
                except Exception as e:
                    print(f"   ❌ Error: {str(e)}")
                    try:
                        await page2.keyboard.press('Escape')
                    except:
                        pass
                    await asyncio.sleep(2)
                    continue
            
            print(f"\n📊 Pass 2 Summary: Successfully analyzed {successful_clicks} businesses")
            
            # Prepare final result
            result = {
                "success": True,
                "analysis_date": datetime.now().isoformat(),
                "search_query": f"{industry} in {location}",
                "target_business": business_name,
                "target_found": target_found,
                "target_position": target_position,
                "total_found": len(competitors),
                "data": {"competitors": competitors}
            }
            
            print(f"\n🎉 ANALYSIS COMPLETE!")
            
            # AI READINESS SUMMARY
            print("\n" + "="*60)
            print("AI SEARCH READINESS REPORT")
            print("="*60)
            
            # Get analyzed competitors
            analyzed = [c for c in competitors if c.get('ai_score', 0) > 0]
            analyzed.sort(key=lambda x: x['ai_score'], reverse=True)
            
            # Top 3 Analysis
            print("\n🏆 TOP 3 BY AI READINESS:")
            for i, comp in enumerate(analyzed[:3], 1):
                print(f"\n{i}. {comp['business_name']} - AI Score: {comp['ai_score']}/100")
                if comp['is_target']:
                    print("   🎯 THIS IS YOUR BUSINESS")
                factors = comp.get('ai_factors', {})
                print(f"   Q&A: {'✅' if factors.get('has_qa') else '❌'} | " +
                      f"Posts: {'✅' if factors.get('has_posts') else '❌'} | " +
                      f"Reviews: {'✅' if factors.get('responds_to_reviews') else '❌'}")
            
            # Target Analysis
            target = next((c for c in competitors if c['is_target']), None)
            if target and target.get('ai_score', 0) > 0:
                print(f"\n🎯 YOUR BUSINESS ANALYSIS:")
                print(f"Position: #{target['google_rank']} | AI Score: {target['ai_score']}/100")
                
                # Critical Gaps
                factors = target.get('ai_factors', {})
                gaps = []
                if not factors.get('has_qa'):
                    gaps.append("No Q&A section (CRITICAL)")
                if not factors.get('has_posts'):
                    gaps.append("Not using Google Posts")
                if not factors.get('responds_to_reviews'):
                    gaps.append("Not responding to reviews")
                if not factors.get('verified'):
                    gaps.append("Business not verified")
                if not factors.get('high_review_volume'):
                    gaps.append("Low review count (<50)")
                
                if gaps:
                    print("\n🚨 CRITICAL GAPS TO FIX:")
                    for gap in gaps:
                        print(f"   • {gap}")
                
                # Recommendations
                print("\n💡 IMMEDIATE ACTIONS:")
                print("   1. Add Q&A section with FAQs about your services")
                print("   2. Start posting weekly Google Posts")
                print("   3. Respond to ALL reviews within 24 hours")
                print("   4. Verify your business if not already done")
                print("   5. Launch review campaign to reach 50+ reviews")
            
            elif not target_found:
                print(f"\n❌ CRITICAL ISSUE: Your business '{business_name}' was NOT FOUND!")
                print("   This means you're invisible to both traditional and AI search.")
                print("\n💡 IMMEDIATE ACTIONS:")
                print("   1. Claim/create your Google Business Profile")
                print("   2. Verify your business")
                print("   3. Complete all profile information")
                print("   4. Add photos and services")
            
            # Keep browser open for a bit
            print("\n⏳ Keeping browser open for 10 seconds...")
            await asyncio.sleep(10)
            
            return result
            
        except Exception as e:
            print(f"❌ Error in Pass 2: {str(e)}")
            import traceback
            traceback.print_exc()
            return {"success": False, "error": str(e), "data": {"competitors": competitors}}
        
        finally:
            print("🔄 Closing Pass 2 browser...")
            await browser2.close()

# Helper functions (exact copies from fresh_scraper)
def is_valid_business_name(name):
    if not name or len(name.strip()) < 3:
        return False
    
    name_lower = name.strip().lower()
    
    if len(name_lower) < 3 or len(name_lower) > 80:
        return False
    
    if name_lower.startswith(('·', '$', '#', '@', 'http', 'sponsored')):
        return False
    
    if name.replace('.', '').replace(',', '').replace('(', '').replace(')', '').isdigit():
        return False
    
    address_patterns = [
        r'\d+.*(?:st|street|ave|avenue|rd|road|dr|drive|suite|ste)',
        r'·.*\d+.*',
        r'^\d+\s',
    ]
    
    for pattern in address_patterns:
        if re.search(pattern, name_lower, re.IGNORECASE):
            return False
    
    skip_patterns = ['google maps', 'search results', 'filter by', 'sort by', 'reviews', 'directions']
    if any(pattern in name_lower for pattern in skip_patterns):
        return False
    
    return True

def clean_business_name(name):
    if not name:
        return ""
    
    cleanup_patterns = [
        r'\s*·.*$',
        r'^\s*\d+\.\s*',
        r'\s*\(\d+\)\s*$',
        r'\s*\d+\s*reviews?\s*$',
        r'\s*\$+.*$',
        r'\s*Open\s*(24\s*hours?|now).*$',
        r'\s*Closed.*$',
        r'\s*Medical spa.*$',
    ]
    
    cleaned = name
    for pattern in cleanup_patterns:
        cleaned = re.sub(pattern, '', cleaned, flags=re.IGNORECASE)
    
    return cleaned.strip()

def extract_rating(lines):
    for line in lines:
        match = re.search(r'\b(\d\.\d)\b', line)
        if match:
            try:
                rating = float(match.group(1))
                if 1.0 <= rating <= 5.0:
                    return rating
            except:
                continue
    return None

def extract_review_count(lines):
    for line in lines:
        match = re.search(r'\((\d+)\)', line)
        if match:
            try:
                count = int(match.group(1))
                if 0 <= count <= 100000:
                    return count
            except:
                continue
    return None

def extract_address(lines):
    for line in lines:
        if re.search(r'\d+.*(?:st|street|ave|avenue|rd|road|dr|drive|blvd|boulevard)', line, re.IGNORECASE):
            address = line.strip()
            address = re.sub(r'^[·•\-\s]+', '', address)
            return address
    return ""

def determine_category(lines):
    text = ' '.join(lines).lower()
    if 'dermatology' in text:
        return "Dermatology clinic"
    elif any(word in text for word in ['wellness', 'wellness center']):
        return "Wellness center"
    elif any(word in text for word in ['aesthetic', 'aesthetics']):
        return "Aesthetic clinic"
    else:
        return "Medical spa"

async def main():
    """Main function"""
    print("🚀 Google Maps AI Readiness Analyzer v2.0")
    print("📊 Analyze why competitors rank in the 3-pack and get AI-ready")
    print("="*50)
    
    results = await scrape_google_maps_competitors()
    
    # Save results
    if results and results.get('success'):
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f'ai_readiness_analysis_{timestamp}.json'
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        
        print(f"\n💾 Full results saved to: {filename}")
        
        # Create summary report
        if results.get('target_found'):
            target = next((c for c in results['data']['competitors'] if c['is_target']), None)
            if target:
                summary = f"""
AI READINESS SUMMARY REPORT
Generated: {datetime.now().strftime("%Y-%m-%d %H:%M")}
Business: {results['target_business']}
Location: {results['search_query']}
Position: #{target['google_rank']}
AI Score: {target.get('ai_score', 0)}/100

CRITICAL GAPS:
"""
                factors = target.get('ai_factors', {})
                if not factors.get('has_qa'):
                    summary += "- No Q&A section (costs 20 points)\n"
                if not factors.get('has_posts'):
                    summary += "- No Google Posts (costs 15 points)\n"
                if not factors.get('responds_to_reviews'):
                    summary += "- Not responding to reviews (costs 15 points)\n"
                
                summary_file = f'ai_summary_{results["target_business"].replace(" ", "_")}_{timestamp}.txt'
                with open(summary_file, 'w') as f:
                    f.write(summary)
                print(f"📄 Summary report saved to: {summary_file}")

if __name__ == "__main__":
    asyncio.run(main())