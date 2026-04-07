#!/usr/bin/env python3
"""
Google Maps Scraper - Two-Pass Two-Browser Approach
Pass 1: Get all competitors at 25% zoom (2560x1440)
Pass 2: Fresh browser at 50% zoom (1920x1080) for details
"""

import asyncio
import json
import re
from datetime import datetime
from playwright.async_api import async_playwright

async def scrape_google_maps_competitors():
    """Two-pass scraping with two separate browser instances"""
    
    maps_url = "https://www.google.com/maps/search/Medical+Spas/@39.0089867,-77.4929329,11z"
    
    print(f"🗺️ Scraping: {maps_url}")
    print(f"🔍 Two-browser approach: Pass 1 at 25% zoom, Pass 2 fresh at 50% zoom")
    
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
                    business_name = None
                    for line in lines[:10]:
                        if line.strip().isdigit() or re.match(r'^\d+\.$', line):
                            continue
                        if line.lower() in ['ad', 'ads', 'sponsored', 'open', 'closed', 'open now']:
                            continue
                        if re.match(r'^\d\.\d$', line) or re.match(r'^\(\d+\)$', line):
                            continue
                        
                        if is_valid_business_name(line):
                            business_name = clean_business_name(line)
                            if business_name:
                                break
                    
                    if not business_name:
                        continue
                    
                    # Extract basic info
                    rating = extract_rating(lines)
                    review_count = extract_review_count(lines)
                    address = extract_address(lines)
                    category = determine_category(lines)
                    
                    competitor = {
                        "business_name": business_name,
                        "google_rank": len(competitors) + 1,
                        "average_rating": rating,
                        "number_of_reviews": review_count,
                        "main_category": category,
                        "address": address,
                        "city": "",
                        "state": "",
                        "website": None,
                        "phone": None,
                        "plus_code": None,
                        "hours": None,
                        "attributes": []
                    }
                    
                    competitors.append(competitor)
                    print(f"✅ #{len(competitors)}: {business_name}")
                    
                except Exception as e:
                    continue
            
            print(f"\n✅ PASS 1 COMPLETE: Found {len(competitors)} competitors")
            
        except Exception as e:
            print(f"❌ Error in Pass 1: {e}")
            
        finally:
            print("🔄 Closing Pass 1 browser...")
            await browser1.close()
        
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
            
            print("🔍 Starting to click on businesses for details...")
            
            # Process each competitor
            successful_clicks = 0
            for idx, competitor in enumerate(competitors[:30]):
                try:
                    print(f"\n🔍 Getting details for #{idx + 1}: {competitor['business_name']}")
                    
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
                                await asyncio.sleep(0.5)  # Much shorter wait
                                
                                # Get ALL text from the entire page
                                full_page_text = await page2.inner_text('body')
                                print(f"   📋 Page has {len(full_page_text)} total chars")
                                
                                # Look for website in full page
                                lines = full_page_text.split('\n')
                                website_found = False
                                for line in lines:
                                    line = line.strip()
                                    if ('.com' in line or '.org' in line or '.net' in line) and len(line) < 50:
                                        if not any(skip in line.lower() for skip in ['google', 'maps', '@']):
                                            website_match = re.search(r'([\w\-]+\.(com|org|net|biz|co|us|health))', line)
                                            if website_match:
                                                competitor['website'] = website_match.group(1)
                                                print(f"   ✅ Website: {competitor['website']}")
                                                website_found = True
                                                break
                                
                                # Look for phone in full page
                                phone_found = False
                                for line in lines:
                                    phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', line)
                                    if phone_match:
                                        competitor['phone'] = phone_match.group()
                                        print(f"   ✅ Phone: {competitor['phone']}")
                                        phone_found = True
                                        break
                                
                                # If no data found, try clicking inside the popup
                                if not website_found and not phone_found:
                                    print("   🔍 No data in page text, trying to click inside popup...")
                                    
                                    # Try to find and click on "About" or info section
                                    try:
                                        about_button = await page2.query_selector('button:has-text("About")')
                                        if about_button:
                                            await about_button.click()
                                            await asyncio.sleep(0.3)
                                            print("   👆 Clicked About button")
                                    except:
                                        pass
                                    
                                    # Get text again after clicking
                                    full_page_text = await page2.inner_text('body')
                                    lines = full_page_text.split('\n')
                                    
                                    # Try again for website/phone
                                    for line in lines:
                                        if not website_found and ('.com' in line or '.org' in line):
                                            website_match = re.search(r'([\w\-]+\.(com|org|net|biz|co|us|health))', line)
                                            if website_match:
                                                competitor['website'] = website_match.group(1)
                                                print(f"   ✅ Website (after click): {competitor['website']}")
                                                website_found = True
                                        
                                        if not phone_found:
                                            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', line)
                                            if phone_match:
                                                competitor['phone'] = phone_match.group()
                                                print(f"   ✅ Phone (after click): {competitor['phone']}")
                                                phone_found = True
                                
                                if not website_found and not phone_found:
                                    print("   ⚠️ Still no data found!")
                                
                                # Close with Escape
                                await page2.keyboard.press('Escape')
                                await asyncio.sleep(0.3)
                                break  # Don't click multiple businesses
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
            
            print(f"\n📊 Pass 2 Summary: Successfully clicked on {successful_clicks} businesses")
            
            # Prepare final result
            result = {
                "success": True,
                "method": "two_pass_two_browser",
                "total_found": len(competitors),
                "timestamp": datetime.now().isoformat(),
                "data": {"competitors": competitors}
            }
            
            print(f"\n🎉 SCRAPING COMPLETE!")
            print(f"Total competitors: {len(competitors)}")
            websites_found = sum(1 for c in competitors if c.get('website'))
            phones_found = sum(1 for c in competitors if c.get('phone'))
            print(f"Websites found: {websites_found}/{len(competitors)}")
            print(f"Phone numbers found: {phones_found}/{len(competitors)}")
            
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

def is_valid_business_name(name):
    """Check if a line looks like a valid business name"""
    if not name or len(name.strip()) < 3:
        return False
    
    name_lower = name.strip().lower()
    
    if len(name_lower) < 3 or len(name_lower) > 80:
        return False
    
    if name_lower.startswith(('·', '$', '#', '@', 'http', 'sponsored')):
        return False
    
    if name.replace('.', '').replace(',', '').replace('(', '').replace(')', '').isdigit():
        return False
    
    # Skip addresses
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
    """Clean up business name"""
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
    """Extract rating from text lines"""
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
    """Extract review count from text lines"""
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
    """Extract address from text lines"""
    for line in lines:
        if re.search(r'\d+.*(?:st|street|ave|avenue|rd|road|dr|drive|blvd|boulevard)', line, re.IGNORECASE):
            address = line.strip()
            address = re.sub(r'^[·•\-\s]+', '', address)
            return address
    return ""

def determine_category(lines):
    """Determine business category"""
    text = ' '.join(lines).lower()
    if 'dermatology' in text:
        return "Dermatology clinic"
    elif any(word in text for word in ['wellness', 'wellness center']):
        return "Wellness center"
    elif any(word in text for word in ['aesthetic', 'aesthetics']):
        return "Aesthetic clinic"
    else:
        return "Medical spa"

def parse_city_state(address):
    """Extract city and state from address"""
    if not address:
        return '', ''
    
    # Extract state
    state_match = re.search(r'\b([A-Z]{2})\s+\d{5}', address)
    state = state_match.group(1) if state_match else ''
    
    # Known cities
    known_cities = ['Ashburn', 'Sterling', 'Leesburg', 'Herndon', 'Reston', 'Chantilly', 'Fairfax']
    
    city = ''
    for known_city in known_cities:
        if known_city in address:
            city = known_city
            break
    
    return city, state

async def main():
    """Main function"""
    print("🚀 Google Maps Scraper - Two-Pass Two-Browser Approach")
    print("🎯 Pass 1: Get 30+ competitors at 25% zoom (2560x1440)")
    print("🎯 Pass 2: Fresh browser at 50% zoom (1920x1080)")
    
    results = await scrape_google_maps_competitors()
    
    # Save results
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f'two_pass_competitors_{timestamp}.json'
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 Results saved to: {filename}")
    
    if results.get('success') and results['data']['competitors']:
        print(f"\n🏆 TOP 10 COMPETITORS:")
        for i, comp in enumerate(results['data']['competitors'][:10], 1):
            print(f"\n{i}. {comp['business_name']}")
            if comp.get('website'):
                print(f"   🌐 {comp['website']}")
            if comp.get('phone'):
                print(f"   📞 {comp['phone']}")
            if comp.get('address'):
                print(f"   📍 {comp['address']}")

if __name__ == "__main__":
    asyncio.run(main())