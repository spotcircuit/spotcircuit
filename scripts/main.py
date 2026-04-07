import asyncio
import re
import json
from urllib.parse import quote_plus
from apify import Actor
from playwright.async_api import async_playwright, TimeoutError

# ======================================================================
# HELPER FUNCTIONS v1.9 - Generic category extraction
# ======================================================================
def is_valid_business_name(name):
    if not name or len(name.strip()) < 1: return False
    if name.strip().startswith('"') and name.strip().endswith('"'): return False
    name_lower = name.strip().lower()
    if len(name_lower) > 80: return False
    # Reject single digits or numbers - these are list markers
    if name.strip().isdigit(): return False
    # Reject common UI elements
    if name_lower in ['x', '+', '-', '·', '|', '/', '\\', '^', '*']: return False
    if name_lower.startswith(('·', '$', '#', '@', 'http', 'sponsored')): return False
    # Skip if it looks like an address (starts with number and has street suffix)
    if re.match(r'^\d+\s+\w+\s+(st|street|ave|rd|dr|blvd)', name_lower, re.IGNORECASE): return False
    # Skip if it's just a number followed by a dot (like "1." or "9.")
    if re.match(r'^\d+\.?$', name.strip()): return False
    # Skip "Open/Closes" entries
    if re.match(r'^(open|closes?)\s*[⋅·]\s*(closes?|opens?)\s*\d+', name_lower): return False
    skip_patterns = ['google maps', 'search results', 'filter by', 'sort by', 'reviews', 'directions', 'open now', 'closed']
    if any(pattern in name_lower for pattern in skip_patterns): return False
    return True

def clean_business_name(name):
    if not name: return ""
    cleaned = name.strip().rstrip('&|\\').strip()
    cleanup_patterns = [
        r'\s*·.*$', r'^\s*\d+\.\s*', r'\s*\(\d+\)\s*$', r'\s*\d+\s*reviews?$',
        r'\s*\$+.*$', r'\s*Open\s*(24\s*hours?|now).*$', r'\s*Closed.*$'
    ]
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
            except: continue
    return None

def extract_review_count(lines):
    for line in lines:
        match = re.search(r'\((\d{1,5})\)', line)
        if match:
            try: return int(match.group(1))
            except: continue
    return None

def extract_category(lines):
    """Extract the Google-provided business category"""
    # Google typically shows category in one of these formats:
    # 1. "Restaurant · $$ · Address"
    # 2. "Restaurant"  (on its own line)
    # 3. "Italian restaurant · Address"
    # 4. "4.5 (123) · Restaurant · Address"
    
    category_found = None
    
    for i, line in enumerate(lines):
        line = line.strip()
        
        # Skip empty lines, numbers, ratings, etc.
        if not line or line.isdigit() or re.match(r'^\d\.\d$', line) or re.match(r'^\(\d+\)$', line):
            continue
            
        # Skip common UI elements
        if line.lower() in ['ad', 'ads', 'sponsored', 'open', 'closed', 'open now', 'temporarily closed']:
            continue
            
        # Skip if it's clearly an address (starts with number + street)
        if re.match(r'^\d+\s+\w+\s+(st|street|ave|avenue|rd|road|dr|drive)', line, re.IGNORECASE):
            continue
            
        # Check if line contains separator (·) - often used to separate category from address
        if '·' in line:
            parts = [p.strip() for p in line.split('·')]
            for part in parts:
                # Skip price indicators ($, $$, $$$)
                if re.match(r'^\$+$', part):
                    continue
                # Skip if it looks like an address
                if re.search(r'\d+.*?(st|street|ave|avenue|rd|road|dr|drive)', part, re.IGNORECASE):
                    continue
                # Skip if it's a rating
                if re.match(r'^\d\.\d$', part):
                    continue
                # Skip if it's empty or too short
                if not part or len(part) < 3:
                    continue
                    
                # This could be our category
                # Categories are usually generic terms without too many capital letters
                capital_count = sum(1 for c in part if c.isupper())
                if capital_count <= len(part.split()) + 1:  # Allow one capital per word plus one
                    # Common business type indicators
                    if any(indicator in part.lower() for indicator in 
                          ['restaurant', 'cafe', 'bar', 'shop', 'store', 'salon', 'spa', 
                           'clinic', 'center', 'service', 'company', 'agency', 'studio',
                           'gym', 'fitness', 'market', 'pharmacy', 'hotel', 'motel',
                           'bakery', 'deli', 'pizza', 'sushi', 'thai', 'chinese', 'mexican',
                           'dental', 'medical', 'law', 'repair', 'auto', 'car']):
                        category_found = part
                        break
        
        # If no category found with separator, check standalone lines
        if not category_found and i < 5:  # Categories usually appear early
            # Skip if line is too long (probably not a category)
            if len(line) < 50:
                # Check if it contains common category words
                if any(indicator in line.lower() for indicator in 
                      ['restaurant', 'cafe', 'bar', 'shop', 'store', 'salon', 'spa', 
                       'clinic', 'center', 'service', 'company', 'agency', 'studio',
                       'gym', 'fitness', 'market', 'pharmacy', 'hotel', 'motel']):
                    # Make sure it's not a business name (check capitalization pattern)
                    if not re.match(r'^[A-Z][a-z]+(\s+[A-Z][a-z]+){2,}', line):  # Not like "John Smith Auto Repair"
                        category_found = line
                        break
    
    # Return the found category or a generic fallback
    return category_found if category_found else "Business"

def extract_address(lines):
    """Extract address from text lines"""
    # Try multiple patterns to find address
    address_parts = []
    found_address_start = False
    
    for i, line in enumerate(lines):
        # Skip very short lines (likely not addresses)
        if len(line) < 5:
            continue
            
        # Skip common non-address elements
        if line.lower() in ['ad', 'ads', 'sponsored', 'open', 'closed', 'open now', 'temporarily closed', 'opens soon', 'onsite services']:
            continue
            
        # Skip lines that are just hours/status info
        if re.match(r'^(opens?|closes?)\s+', line, re.IGNORECASE):
            continue
            
        # Skip if it's just a number (list marker)
        if line.strip().isdigit():
            continue
            
        # Check if this line contains rating or review count (not part of address)
        if re.match(r'^[\d.]+$', line) or re.match(r'^\(\d+\)$', line):
            continue
            
        # Check if line contains a category separator (·)
        # If so, extract the part after it as potential address
        if '·' in line and not found_address_start:
            parts = line.split('·')
            # Look for address patterns in each part
            for j, part in enumerate(parts):
                part = part.strip()
                if re.search(r'\d+.*?(?:st|street|ave|avenue|rd|road|dr|drive|blvd|boulevard|way|lane|ln|pkwy|parkway|ct|court|pl|place|suite|ste|unit|apt|#)', part, re.IGNORECASE):
                    found_address_start = True
                    # Include this part and all remaining parts (they might be part of address)
                    address_parts.extend([p.strip() for p in parts[j:] if p.strip()])
                    break
            if found_address_start:
                continue
                
        # Look for common address patterns
        has_street_pattern = re.search(r'\d+.*?(?:st|street|ave|avenue|rd|road|dr|drive|blvd|boulevard|way|lane|ln|pkwy|parkway|ct|court|pl|place|suite|ste|unit|apt|#)', line, re.IGNORECASE)
        has_state_zip = re.search(r'\b[A-Z]{2}\s+\d{5}\b', line)
        has_po_box = re.search(r'(p\.?o\.?\s*box|pmb)\s*\d+', line, re.IGNORECASE)
        
        if has_street_pattern or has_state_zip or has_po_box:
            # Found start of address
            found_address_start = True
            # Clean up the line
            cleaned_line = line.split('·')[-1].strip()
            # Remove common prefixes
            cleaned_line = re.sub(r'^(Open|Closed|Hours|Directions).*?·\s*', '', cleaned_line, flags=re.IGNORECASE)
            # Remove "Onsite services" suffix
            cleaned_line = re.sub(r',?\s*Onsite services\s*$', '', cleaned_line, flags=re.IGNORECASE)
            address_parts.append(cleaned_line)
        elif found_address_start and i < len(lines) - 1:
            # Stop if we hit status/hours info
            if re.search(r'(closes?|opens?|hours|open now|closed now|temporarily)', line, re.IGNORECASE):
                break
            # Skip if it looks like category info
            if any(word in line.lower() for word in ['restaurant', 'cafe', 'shop', 'salon', 'clinic', 'service']):
                if len(line) < 30:  # Short category lines
                    continue
            # Skip if it contains other non-address info
            if re.search(r'(reviews?|rating|website|call|directions)', line, re.IGNORECASE):
                continue
            # Skip "Onsite services"
            if 'onsite services' in line.lower():
                continue
            # Check if it might be city/state/zip
            if re.search(r'\b[A-Z]{2}\b', line) or re.search(r'\b\d{5}\b', line) or (len(line) < 50 and not line[0].isdigit()):
                address_parts.append(line.strip())
            else:
                # Probably not part of address anymore
                break
    
    # Join address parts
    if address_parts:
        # Join with comma if parts don't already have commas
        full_address = address_parts[0]
        for part in address_parts[1:]:
            if not full_address.endswith(',') and not part.startswith(','):
                full_address += ', ' + part
            else:
                full_address += ' ' + part
        return full_address.strip()
    
    return ""

def extract_place_ids(html_content: str) -> dict:
    ids = {'place_id': None, 'cid': None, 'website': None}
    place_id_match = re.search(r'(ChIJ[A-Za-z0-9_-]+)', html_content)
    if place_id_match:
        ids['place_id'] = place_id_match.group(1)
    cid_match = re.search(r'(0x[a-f0-9:]+)', html_content)
    if cid_match:
        ids['cid'] = cid_match.group(1)
    return ids

def parse_address_components(address):
    """Extract city and state from address string"""
    if not address:
        return {'city': '', 'state': ''}
    
    components = {'city': '', 'state': ''}
    original_address = address
    
    # Remove "Onsite services" which is not part of address
    address = re.sub(r',?\s*Onsite services\s*,?', '', address, flags=re.IGNORECASE)
    
    # Common cities for this data - expanded to include Seattle area
    known_wa_cities = ['Seattle', 'Bellevue', 'Kirkland', 'Redmond', 'Renton', 'Newcastle', 
                       'Issaquah', 'Sammamish', 'Bothell', 'Kenmore', 'Woodinville', 'Shoreline',
                       'Lake Forest Park', 'Mercer Island', 'Tukwila', 'Burien', 'SeaTac']
    known_va_cities = ['Ashburn', 'Sterling', 'Leesburg', 'Herndon', 'Reston', 'Chantilly', 'Fairfax']
    known_ca_cities = ['Los Angeles', 'Santa Monica', 'Beverly Hills', 'Pasadena', 'Whittier', 
                       'Encino', 'Burbank', 'Glendale', 'Hollywood', 'Sherman Oaks']
    
    all_known_cities = known_wa_cities + known_va_cities + known_ca_cities
    
    
    # Try to extract state (2 letter abbreviation)
    # IMPORTANT: Exclude NE, NW, SE, SW when they appear after street names
    state_pattern = r'\b(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY|DC)\b'
    
    # Look for state abbreviation, but check context to avoid matching NE/NW/SE/SW as state
    state_matches = []
    for match in re.finditer(state_pattern, address, re.IGNORECASE):
        # Check if this is actually a directional (NE) after a street name
        if match.group(1).upper() == 'NE':
            # Look at what comes before - if it's a street pattern, skip this match
            before_text = address[:match.start()].strip()
            if re.search(r'(Ave|Avenue|St|Street|Rd|Road|Dr|Drive|Way|Pl|Place|Blvd|Boulevard)\s*$', before_text, re.IGNORECASE):
                continue
        state_matches.append(match)
    
    if state_matches:
        # Use the last state match (most likely to be the actual state)
        state_match = state_matches[-1]
        components['state'] = state_match.group(1).upper()
        # Remove state and clean up
        address = address[:state_match.start()] + address[state_match.end():]
        address = address.strip().rstrip(',').strip()
    
    # Try to find city from known cities first
    city_found = False
    for known_city in all_known_cities:
        if known_city.lower() in original_address.lower():
            components['city'] = known_city
            city_found = True
            break
    
    # If no known city found and we have certain indicators, make educated guesses
    if not city_found:
        # For Seattle area addresses (contain NE, NW, SE, SW in street)
        if re.search(r'\b\d+\s+\d+\w*\s+(?:Ave|Avenue|St|Street|Way|Pl|Place)\s+(?:NE|NW|SE|SW)\b', original_address, re.IGNORECASE):
            # If we see these patterns, it's likely Seattle area
            if components['state'] == 'WA' or 'WA' in original_address:
                # Default to Seattle for unspecified WA addresses with directionals
                components['city'] = 'Seattle'
            elif re.search(r'(Kirkland|Bellevue|Redmond)', original_address, re.IGNORECASE):
                # Check surrounding text for city hints
                for city in ['Kirkland', 'Bellevue', 'Redmond']:
                    if city.lower() in original_address.lower():
                        components['city'] = city
                        break
    
    # If still no city, try to extract from address structure
    if not components['city']:
        # Remove street address parts to find city
        # Split by comma and analyze parts
        parts = original_address.split(',')
        for part in reversed(parts):  # Start from the end
            part = part.strip()
            
            # Skip if it's empty or too short
            if not part or len(part) < 3:
                continue
            
            # Skip "Onsite services" and similar
            if part.lower() in ['onsite services', 'online', 'virtual']:
                continue
                
            # Skip if it's a street address (starts with number)
            if re.match(r'^\d+\s+', part):
                continue
                
            # Skip if it contains suite/unit/building info
            if re.search(r'\b(suite|ste|unit|apt|building|bldg|floor|fl|#)\s*[\w\d-]*\b', part, re.IGNORECASE):
                continue
                
            # Skip if it ends with street type
            if re.search(r'\b(st|street|ave|avenue|rd|road|dr|drive|blvd|boulevard|way|lane|ln|pkwy|parkway|ct|court|pl|place|plaza|plz|cir|circle|ter|terrace|commons|cmns)\s*(?:#?\d+)?$', part, re.IGNORECASE):
                continue
            
            # Skip if it's just a state + zip pattern
            if re.match(r'^[A-Z]{2}\s+\d{5}(?:-\d{4})?$', part):
                continue
            
            # This might be the city
            if part and not re.match(r'^\d', part):
                components['city'] = part
                break
    
    # Final pass - if we identified the state but not city, use common defaults
    if components['state'] and not components['city']:
        if components['state'] == 'WA':
            # For WA addresses without city, check if address suggests certain areas
            if 'Green Lake' in original_address or 'Greenlake' in original_address:
                components['city'] = 'Seattle'
            elif any(indicator in original_address for indicator in ['120th', '122nd', '116th', '130th', '148th', '164th']):
                # These numbered streets are common in Bellevue/Kirkland area
                if 'NE' in original_address:
                    components['city'] = 'Bellevue'  # Default for NE numbered streets
        elif components['state'] == 'VA' and any(city in original_address for city in known_va_cities):
            for city in known_va_cities:
                if city.lower() in original_address.lower():
                    components['city'] = city
                    break
    
    return components

def parse_location_type(location_str):
    """Determine if the location is an address, Place ID, or coordinates"""
    location_str = location_str.strip()
    
    # Check if it's a Place ID (starts with ChIJ)
    if location_str.startswith('ChIJ'):
        return 'place_id', location_str
    
    # Check if it's coordinates (format: lat,lng) - now more forgiving
    # Remove spaces around comma for better matching
    normalized = location_str.replace(' ', '')
    coord_pattern = r'^-?\d+\.?\d*,-?\d+\.?\d*$'
    if re.match(coord_pattern, normalized):
        parts = normalized.split(',')
        try:
            lat = float(parts[0])
            lng = float(parts[1])
            return 'coordinates', (lat, lng)
        except:
            pass
    
    # Otherwise, treat as address
    return 'address', location_str

# ======================================================================
# ACTOR SCRAPING LOGIC - UPDATED WITH TWO-PASS APPROACH
# ======================================================================
async def geocode_with_address(page, address: str) -> dict:
    Actor.log.info(f"Geocoding address: {address}...")
    query = quote_plus(address)
    maps_url = f"https://www.google.com/maps/search/{query}"
    await page.goto(maps_url, wait_until='load', timeout=25000)
    await asyncio.sleep(5)
    coord_match = re.search(r'@(-?\d+\.\d+),(-?\d+\.\d+)', page.url)
    if not coord_match:
        return {'found': False, 'error': 'Could not find coordinates from address'}
    lat, lng = float(coord_match.group(1)), float(coord_match.group(2))
    html_content = await page.content()
    ids = extract_place_ids(html_content)
    return {'found': True, 'latitude': lat, 'longitude': lng, **ids}

async def geocode_with_place_id(page, place_id: str) -> dict:
    Actor.log.info(f"Geocoding Place ID: {place_id}...")
    maps_url = f"https://www.google.com/maps/search/?api=1&query=some_text&query_place_id={place_id}"
    await page.goto(maps_url, wait_until='load', timeout=25000)
    await asyncio.sleep(5)
    coord_match = re.search(r'@(-?\d+\.\d+),(-?\d+\.\d+)', page.url)
    if not coord_match: return {'found': False, 'error': 'Could not find coordinates from Place ID'}
    lat, lng = float(coord_match.group(1)), float(coord_match.group(2))
    html_content = await page.content()
    ids = extract_place_ids(html_content)
    return {'found': True, 'latitude': lat, 'longitude': lng, 'place_id': place_id, **ids}

async def scrape_competitors_two_pass(playwright_instance, source_company_name: str, lat: float, lon: float, 
                                     search_query: str, max_competitors: int, search_location: str = None, 
                                     verbose: bool = False):
    """Two-pass scraping approach: Pass 1 at 25% zoom, Pass 2 at 50% zoom for details"""
    
    Actor.log.info(f"Starting two-pass scraping at {lat},{lon} for '{search_query}'...")
    query = quote_plus(search_query)
    zoom_level = 11
    url = f"https://www.google.com/maps/search/{query}/@{lat},{lon},{zoom_level}z"
    
    # ========== PASS 1: DISCOVERY AT 25% ZOOM ==========
    Actor.log.info("PASS 1: Discovering competitors at 25% zoom...")
    
    browser1 = await playwright_instance.chromium.launch(headless=False)
    context1 = await browser1.new_context(
        viewport={'width': 2560, 'height': 1440},
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )
    page1 = await context1.new_page()
    
    competitors = []
    
    try:
        await page1.goto(url, wait_until='domcontentloaded', timeout=45000)
        
        # Set zoom to 25% for maximum results
        await page1.evaluate('document.body.style.zoom = "0.25"')
        await asyncio.sleep(3)
        
        # Trigger content loading
        Actor.log.info("Triggering content loading...")
        await page1.mouse.move(960, 540)
        await page1.mouse.wheel(0, 500)
        await asyncio.sleep(2)
        await page1.mouse.wheel(0, -500)
        await asyncio.sleep(3)
        
        # Find all business elements
        selectors = ['[role="article"]', '.Nv2PK.THOPZb.CpccDe', '.lI9IFe', '.hfpxzc']
        elements = []
        for selector in selectors:
            elements = await page1.query_selector_all(selector)
            if elements and len(elements) > 5:
                Actor.log.info(f"Found {len(elements)} results with selector: {selector}")
                break
        
        if not elements:
            Actor.log.error("No elements found in Pass 1")
            return []
        
        await asyncio.sleep(5)  # Let everything load
        
        # Extract basic info from all competitors
        Actor.log.info(f"Extracting basic info from {len(elements)} elements...")
        cleaned_source_name = re.sub(r'[^a-z0-9]', '', source_company_name.lower()) if source_company_name else ""
        
        for i, element in enumerate(elements[:max_competitors + 5]):  # Extra for duplicates
            if len(competitors) >= max_competitors:
                break
                
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
                
                # Check for duplicates
                if any(c['business_name'] == business_name for c in competitors):
                    continue
                
                # Check if it's the source business
                is_source = False
                if cleaned_source_name:
                    cleaned_competitor_name = re.sub(r'[^a-z0-9]', '', business_name.lower())
                    is_source = cleaned_source_name in cleaned_competitor_name or cleaned_competitor_name in cleaned_source_name
                
                # Extract basic info
                rating = extract_rating(lines)
                review_count = extract_review_count(lines)
                address = extract_address(lines)
                category = extract_category(lines)
                price_range = extract_price_range(lines)
                
                competitor = {
                    'business_name': business_name,
                    'google_rank': len(competitors) + 1,
                    'is_source_business': is_source,
                    'average_rating': rating,
                    'number_of_reviews': review_count,
                    'main_category': category,
                    'address': address,
                    'city': '',
                    'state': '',
                    'website': '',
                    'phone': '',
                    'place_id': '',
                    'price_range': price_range,
                    'services_offered': [],
                    'attributes': [],
                    'highlights': [],
                    'photo_count': 0,
                    'hours': {},
                    'booking_url': ''
                }
                
                competitors.append(competitor)
                Actor.log.info(f"#{len(competitors)}: {business_name} - {category}")
                
            except Exception as e:
                continue
        
        Actor.log.info(f"PASS 1 COMPLETE: Found {len(competitors)} competitors")
        
    except Exception as e:
        Actor.log.error(f"Error in Pass 1: {e}")
        
    finally:
        Actor.log.info("Closing Pass 1 browser...")
        await browser1.close()
    
    # ========== PASS 2: GET DETAILS AT 50% ZOOM ==========
    if not competitors:
        return []
        
    Actor.log.info("PASS 2: Getting detailed information at 50% zoom...")
    
    browser2 = await playwright_instance.chromium.launch(headless=False)
    context2 = await browser2.new_context(
        viewport={'width': 1920, 'height': 1080},
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )
    page2 = await context2.new_page()
    
    try:
        await page2.goto(url, wait_until='domcontentloaded', timeout=45000)
        
        # Set zoom to 50% from the start
        await page2.evaluate('document.body.style.zoom = "0.5"')
        await asyncio.sleep(5)
        
        # Trigger some interaction to ensure content loads
        await page2.mouse.move(500, 400)
        await page2.mouse.wheel(0, 300)
        await asyncio.sleep(2)
        await page2.mouse.wheel(0, -300)
        await asyncio.sleep(3)
        
        Actor.log.info("Starting to click on businesses for details...")
        
        # Process each competitor
        successful_extractions = 0
        last_clicked_name = None  # Track what we last clicked
        
        for idx, competitor in enumerate(competitors[:max_competitors]):
            try:
                Actor.log.info(f"Getting details for #{idx + 1}: {competitor['business_name']}")
                
                # IMPORTANT: Ensure we're starting fresh by closing any open panels
                try:
                    await page2.keyboard.press('Escape')
                    await asyncio.sleep(0.5)
                except:
                    pass
                
                # Find and click on businesses that are visible
                elements = await page2.query_selector_all('[role="article"]')
                if not elements:
                    elements = await page2.query_selector_all('.Nv2PK.THOPZb.CpccDe')
                
                clicked = False
                for element in elements:
                    try:
                        # First check if element is visible
                        is_visible = await element.is_visible()
                        if not is_visible:
                            continue
                            
                        text = await element.inner_text()
                        
                        # Skip if this looks like the last business we clicked
                        if last_clicked_name and last_clicked_name.lower() in text.lower():
                            continue
                        
                        # Flexible matching
                        competitor_name_parts = [part for part in competitor['business_name'].lower().split() if len(part) > 2]
                        element_text_lower = text.lower()
                        
                        matches = sum(1 for part in competitor_name_parts if part in element_text_lower)
                        
                        if matches >= max(1, len(competitor_name_parts) * 0.6):
                            # Store what we're clicking
                            last_clicked_name = competitor['business_name']
                            
                            await element.click()
                            clicked = True
                            
                            # Wait for panel to fully load
                            await asyncio.sleep(1.5)  # Slightly longer wait for panel to load
                            
                            # Get text ONLY from the detail panel, not the entire page
                            # Try to find the detail panel specifically
                            detail_panel = None
                            try:
                                # Common selectors for Google Maps detail panels
                                panel_selectors = [
                                    '[role="main"]',
                                    '.m6QErb.DxyBCb',
                                    '.xaLxOe',
                                    'div[jslog*="panel"]'
                                ]
                                
                                for selector in panel_selectors:
                                    panels = await page2.query_selector_all(selector)
                                    if panels:
                                        # Get the last panel (usually the detail panel)
                                        detail_panel = panels[-1]
                                        break
                            except:
                                pass
                            
                            # Get text from detail panel or fallback to full page
                            if detail_panel:
                                panel_text = await detail_panel.inner_text()
                                lines = panel_text.split('\n')
                            else:
                                # Fallback to full page but be more careful
                                full_page_text = await page2.inner_text('body')
                                lines = full_page_text.split('\n')
                            
                            # Extract website with improved filtering
                            website = extract_website_from_page(lines)
                            if website:
                                # Double-check this website isn't the same as previous
                                if idx > 0 and competitors[idx-1].get('website') == website:
                                    Actor.log.info(f"  Detected duplicate website {website}, skipping")
                                else:
                                    competitor['website'] = website
                                    successful_extractions += 1
                                    Actor.log.info(f"  Website: {website}")
                            
                            # Extract booking URL
                            booking_url = extract_booking_url(lines)
                            if booking_url and booking_url != competitor.get('website'):
                                competitor['booking_url'] = booking_url
                                Actor.log.info(f"  Booking URL: {booking_url}")
                            
                            # Look for phone in detail panel
                            for line in lines[:50]:  # Check first 50 lines only
                                phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', line)
                                if phone_match:
                                    competitor['phone'] = phone_match.group()
                                    Actor.log.info(f"  Phone: {competitor['phone']}")
                                    break
                            
                            # Extract additional details
                            services = extract_services_offered(lines)
                            if services:
                                competitor['services_offered'] = services
                                Actor.log.info(f"  Services found: {len(services)}")
                            
                            attributes = extract_attributes(lines)
                            if attributes:
                                competitor['attributes'] = attributes
                                Actor.log.info(f"  Attributes: {', '.join(attributes[:3])}...")
                            
                            highlights = extract_highlights(lines)
                            if highlights:
                                competitor['highlights'] = highlights
                            
                            photo_count = extract_photo_count(lines)
                            if photo_count:
                                competitor['photo_count'] = photo_count
                                Actor.log.info(f"  Photos: {photo_count}")
                            
                            hours = extract_hours(lines)
                            if hours:
                                competitor['hours'] = hours
                                Actor.log.info(f"  Hours: Found for {len(hours)} days")
                            
                            # Extract place_id from page content
                            page_html = await page2.content()
                            place_id_match = re.search(r'(ChIJ[A-Za-z0-9_-]+)', page_html)
                            if place_id_match:
                                competitor['place_id'] = place_id_match.group(1)
                            
                            # IMPORTANT: Close panel and wait
                            await page2.keyboard.press('Escape')
                            await asyncio.sleep(1)  # Wait for panel to close
                            break
                            
                    except Exception as e:
                        continue
                
                if not clicked:
                    Actor.log.info(f"  Could not find {competitor['business_name']} in view")
                    # Try scrolling to find more businesses
                    try:
                        await page2.evaluate('document.querySelector("[role=\'feed\']").scrollTop += 500')
                        await asyncio.sleep(1.5)  # Wait for scroll to complete
                    except:
                        pass
                        
            except Exception as e:
                Actor.log.error(f"  Error: {str(e)}")
                # Always try to close any open panel on error
                try:
                    await page2.keyboard.press('Escape')
                    await asyncio.sleep(0.5)
                except:
                    pass
                continue
        
        Actor.log.info(f"PASS 2 COMPLETE: Extracted details for {successful_extractions} businesses")
        
        # Parse city/state for all competitors
        for competitor in competitors:
            if competitor['address']:
                components = parse_address_components(competitor['address'])
                competitor['city'] = components['city']
                competitor['state'] = components['state']
                
                # Use search location as fallback
                if search_location and (not competitor['city'] or not competitor['state']):
                    search_components = parse_address_components(search_location)
                    if not competitor['city'] and search_components['city']:
                        competitor['city'] = search_components['city']
                    if not competitor['state'] and search_components['state']:
                        competitor['state'] = search_components['state']
        
    except Exception as e:
        Actor.log.error(f"Error in Pass 2: {e}")
        
    finally:
        Actor.log.info("Closing Pass 2 browser...")
        await browser2.close()
    
    return competitors# ======================================================================
# MAIN ACTOR FUNCTION
# ======================================================================
async def main() -> None:
    async with Actor:
        actor_input = await Actor.get_input() or {}
        
        # Parse input from new schema
        input_method = actor_input.get('inputMethod', 'structured')
        search_query = actor_input.get('searchQuery', '')
        
        # Make search query required
        if not search_query:
            Actor.log.error("No search query provided. Please specify what type of business to search for.")
            await Actor.push_data({
                'error': 'No search query provided',
                'message': 'Please provide a search query (e.g., "restaurant", "auto repair", "dentist")'
            })
            return
            
        max_competitors = actor_input.get('maxCompetitors', 30)
        proxy_configuration = actor_input.get('proxyConfiguration')
        verbose = actor_input.get('verbose', False)
        
        # Process locations based on input method
        locations = []
        business_names = []
        
        if input_method == 'structured':
            # Handle city/state/zip input
            city = actor_input.get('city', '').strip()
            state = actor_input.get('state', '').strip()
            zip_code = actor_input.get('zipCode', '').strip()
            business_name = actor_input.get('businessName', '').strip()
            
            # Build location string
            location_parts = []
            if city:
                location_parts.append(city)
            if state:
                location_parts.append(state)
            if zip_code:
                location_parts.append(zip_code)
            
            if location_parts:
                location_str = ', '.join(location_parts)
                locations.append(location_str)
                business_names.append(business_name)
                Actor.log.info(f"Structured input: {location_str} | Business: {business_name or 'None'}")
        
        elif input_method == 'bulk':
            # Handle bulk paste input
            bulk_text = actor_input.get('bulkLocations', '')
            if bulk_text:
                lines = [line.strip() for line in bulk_text.strip().split('\n') if line.strip()]
                for line in lines:
                    # Check if line contains pipe separator for business name
                    if '|' in line:
                        location, business = line.split('|', 1)
                        locations.append(location.strip())
                        business_names.append(business.strip())
                    else:
                        locations.append(line)
                        business_names.append('')
                Actor.log.info(f"Bulk input: {len(locations)} locations parsed")
        
        # Also check for legacy locations array
        locations_data = actor_input.get('locations', [])
        if locations_data and not locations:
            for item in locations_data:
                if isinstance(item, dict):
                    locations.append(item.get('key', ''))
                    business_names.append(item.get('value', ''))
                else:
                    locations.append(str(item))
                    business_names.append('')
            Actor.log.info(f"Legacy input: {len(locations)} locations from array")
        
        # Log input summary
        Actor.log.info(f"Total locations to process: {len(locations)}")
        Actor.log.info(f"Search query: '{search_query}'")
        Actor.log.info(f"Max competitors: {max_competitors}")
        if verbose:
            Actor.log.info(f"Verbose mode: ENABLED")
        
        if not locations:
            Actor.log.error("No locations provided. Please add at least one location.")
            await Actor.push_data({
                'error': 'No locations provided',
                'message': 'Please provide at least one location (address, Place ID, or coordinates)'
            })
            return
        
        Actor.log.info(f"Processing {len(locations)} locations...")
        Actor.log.info(f"Search query: '{search_query}'")
        Actor.log.info(f"Max competitors: {max_competitors}")
        
        # Track total results pushed
        total_results = 0
        
        # Launch browser for geocoding only
        async with async_playwright() as p:
            # Handle proxy if configured
            browser_options = {"headless": True}
            
            if proxy_configuration and proxy_configuration.get('useApifyProxy'):
                try:
                    # For Apify proxy, you might need to check the correct method
                    # This is a placeholder - check Apify docs for your SDK version
                    Actor.log.info("Proxy requested but implementation needs to be verified for your Apify SDK version")
                except Exception as e:
                    Actor.log.warning(f"Could not set up proxy: {e}")
            
            Actor.log.info("Launching geocoding browser...")
            browser = await p.chromium.launch(**browser_options)
            context = await browser.new_context(
                viewport={'width': 1920, 'height': 1080},
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            )
            page = await context.new_page()

            # Process each location
            for idx, location_str in enumerate(locations):
                # Get business name from the paired value
                business_name = business_names[idx] if idx < len(business_names) else None
                
                # Skip empty locations
                if not location_str or not location_str.strip():
                    continue
                
                # Parse location type
                location_type, location_data = parse_location_type(location_str)
                
                Actor.log.info(f"\nProcessing location {idx + 1}/{len(locations)}: {location_str}")
                if business_name:
                    Actor.log.info(f"Business name: {business_name}")
                
                geo = {'found': False}
                
                try:
                    if location_type == 'coordinates':
                        lat, lng = location_data
                        Actor.log.info(f"Using provided coordinates: {lat}, {lng}")
                        geo = {'found': True, 'latitude': lat, 'longitude': lng}
                    elif location_type == 'place_id':
                        geo = await geocode_with_place_id(page, location_data)
                    else:  # address
                        geo = await geocode_with_address(page, location_data)
                except Exception as e:
                    Actor.log.exception(f"Geocoding failed: {e}")
                    geo = {'found': False, 'error': str(e)}
                
                # Scrape competitors if geocoding succeeded
                competitors_list = []
                if geo.get('found'):
                    try:
                        # Use the two-pass approach
                        competitors_list = await scrape_competitors_two_pass(
                            p,  # Pass playwright instance
                            business_name, 
                            geo['latitude'], 
                            geo['longitude'],
                            search_query,
                            max_competitors,
                            location_str,  # Pass the search location for inference
                            verbose  # Pass verbose flag
                        )
                        Actor.log.info(f"Found {len(competitors_list)} competitors for {business_name or location_str}")
                    except Exception as e:
                        Actor.log.exception(f"Competitor scraping failed: {e}")
                else:
                    Actor.log.warning(f"Skipping competitor search - geocoding failed: {geo.get('error', 'Unknown error')}")
                
                # Push results - FLATTENED for CSV
                if competitors_list:
                    # One row per competitor
                    for competitor in competitors_list:
                        result = {
                            # Competitor details in EXACT requested order
                            'competitor_name': str(competitor['business_name']),
                            'competitor_address': str(competitor['address'] or ''),
                            'competitor_city': str(competitor['city'] or ''),
                            'competitor_state': str(competitor['state'] or ''),
                            'competitor_category': str(competitor['main_category']),
                            'competitor_rank': int(competitor['google_rank']),
                            'competitor_rating': float(competitor['average_rating']) if competitor['average_rating'] is not None else None,
                            'competitor_reviews': int(competitor['number_of_reviews']) if competitor['number_of_reviews'] is not None else None,
                            'competitor_place_id': str(competitor['place_id'] or ''),
                            'latitude': float(geo.get('latitude')) if geo.get('latitude') is not None else None,
                            'longitude': float(geo.get('longitude')) if geo.get('longitude') is not None else None,
                            'search_query': str(search_query),
                            'competitor_website': str(competitor.get('website', '')),
                            'competitor_phone': str(competitor.get('phone', '')),
                            # Source business info at the end
                            'is_source_business': bool(competitor['is_source_business']),
                            'input_location': str(location_str),
                            'input_business_name': str(business_name or '')
                        }
                        # Debug: Log the result before pushing
                        if verbose:
                            Actor.log.info(f"Pushing result: {json.dumps(result, indent=2)}")
                        await Actor.push_data(result)
                        total_results += 1
                else:
                    # No competitors found - still push location info
                    result = {
                        # Empty competitor details in EXACT requested order
                        'competitor_name': '',
                        'competitor_address': '',
                        'competitor_city': '',
                        'competitor_state': '',
                        'competitor_category': '',
                        'competitor_rank': None,
                        'competitor_rating': None,
                        'competitor_reviews': None,
                        'competitor_place_id': '',
                        'latitude': float(geo.get('latitude')) if geo.get('latitude') is not None else None,
                        'longitude': float(geo.get('longitude')) if geo.get('longitude') is not None else None,
                        'search_query': str(search_query),
                        'competitor_website': '',
                        'competitor_phone': '',
                        # Source business info at the end
                        'is_source_business': False,
                        'input_location': str(location_str),
                        'input_business_name': str(business_name or '')
                    }
                    await Actor.push_data(result)
                    total_results += 1
            
            await browser.close()
            Actor.log.info(f"\nScraping completed! Processed {len(locations)} locations and found {total_results} total results.")

# Entry point
if __name__ == "__main__":
    asyncio.run(main())