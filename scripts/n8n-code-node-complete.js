// Complete Code node for n8n
// Copy this entire code into your Code node

const auditData = {
  code: `
async def run_audit():
    """Run Google Maps competitor analysis"""
    
    # Get input data passed from n8n
    business_name = input_data.get('businessName', '')
    location = input_data.get('location', '').lower()
    industry = input_data.get('industry', 'Medical Spas')
    email = input_data.get('email', '')
    contact_name = input_data.get('contactName', '')
    audit_id = input_data.get('auditId', '')
    
    # Location coordinates mapping
    LOCATION_COORDS = {
        "austin, tx": "@30.2672,-97.7431,11z",
        "dallas, tx": "@32.7767,-96.7970,11z",
        "houston, tx": "@29.7604,-95.3698,11z",
        "san antonio, tx": "@29.4241,-98.4936,11z",
    }
    
    # Get coordinates or use the location as-is
    coords = LOCATION_COORDS.get(location, location)
    if not coords.startswith('@'):
        coords = location
    
    # Build search query
    search_query = f"{industry} near {location}"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        try:
            context = await browser.new_context(
                viewport={'width': 1920, 'height': 1080},
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            )
            
            page = await context.new_page()
            
            # Search Google Maps
            maps_url = f"https://www.google.com/maps/search/{search_query}"
            await page.goto(maps_url, wait_until='networkidle')
            
            # Wait for results
            await page.wait_for_timeout(3000)
            
            # Extract competitor data
            competitors = []
            
            # Find all business cards
            cards = await page.query_selector_all('[role="article"]')
            
            for i, card in enumerate(cards[:10]):  # Top 10 results
                try:
                    # Extract business info
                    name_elem = await card.query_selector('[class*="fontHeadlineSmall"]')
                    name = await name_elem.inner_text() if name_elem else "Unknown"
                    
                    # Skip if it's an ad
                    if "Sponsored" in await card.inner_text():
                        continue
                    
                    # Extract rating
                    rating_elem = await card.query_selector('[role="img"][aria-label*="stars"]')
                    rating = 0.0
                    if rating_elem:
                        aria_label = await rating_elem.get_attribute('aria-label')
                        rating_match = re.search(r'([\\d.]+)\\s+stars?', aria_label)
                        if rating_match:
                            rating = float(rating_match.group(1))
                    
                    # Extract review count
                    review_elem = await card.query_selector('[class*="fontBodyMedium"]:has-text("(")')
                    reviews = 0
                    if review_elem:
                        review_text = await review_elem.inner_text()
                        review_match = re.search(r'\\((\\d+)\\)', review_text)
                        if review_match:
                            reviews = int(review_match.group(1))
                    
                    # Check if this is the target business
                    is_target = business_name.lower() in name.lower()
                    
                    competitor = {
                        "position": i + 1,
                        "name": name,
                        "rating": rating,
                        "reviewCount": reviews,
                        "isTarget": is_target
                    }
                    
                    competitors.append(competitor)
                    
                except Exception as e:
                    continue
            
            # Find target business
            target = next((c for c in competitors if c['isTarget']), None)
            
            # Calculate AI readiness score
            ai_score = 0
            recommendations = []
            
            if target:
                # Base score from reviews
                if target['reviewCount'] >= 100:
                    ai_score += 30
                elif target['reviewCount'] >= 50:
                    ai_score += 20
                elif target['reviewCount'] >= 20:
                    ai_score += 10
                else:
                    recommendations.append({
                        "priority": "HIGH",
                        "issue": "Low review count",
                        "action": f"Build review count to 50+ (currently {target['reviewCount']})"
                    })
                
                # Rating score
                if target['rating'] >= 4.5:
                    ai_score += 20
                elif target['rating'] >= 4.0:
                    ai_score += 10
                
                # Position score
                if target['position'] <= 3:
                    ai_score += 30
                elif target['position'] <= 5:
                    ai_score += 20
                elif target['position'] <= 10:
                    ai_score += 10
                
                # Add recommendations based on position
                if target['position'] > 3:
                    recommendations.append({
                        "priority": "HIGH",
                        "issue": "Not in top 3 results",
                        "action": "Optimize Google Business Profile with Q&A, posts, and photos"
                    })
            else:
                recommendations.append({
                    "priority": "CRITICAL",
                    "issue": "Business not found",
                    "action": "Claim and verify your Google Business Profile"
                })
            
            # Build response
            result = {
                "success": True,
                "auditId": audit_id,
                "businessName": business_name,
                "location": location,
                "email": email,
                "contactName": contact_name,
                "analysisDate": datetime.now().isoformat(),
                "targetFound": target is not None,
                "targetPosition": target['position'] if target else None,
                "competitors": competitors[:5],  # Top 5 for summary
                "aiScore": ai_score,
                "recommendations": recommendations,
                "summary": {
                    "level": "GOOD" if ai_score >= 60 else "NEEDS IMPROVEMENT" if ai_score >= 30 else "CRITICAL",
                    "message": f"Your business scored {ai_score}/100 for AI visibility"
                }
            }
            
            return result
            
        finally:
            await browser.close()

# Run the audit
result = asyncio.run(run_audit())
print(json.dumps(result, indent=2))
`,
  data: {
    businessName: $json.businessName || "Test Spa",
    location: $json.location || "Austin, TX",
    email: $json.email || "test@example.com",
    contactName: $json.contactName || "",
    auditId: $json.auditId || "test-123",
    industry: $json.industry || "Medical Spas"
  }
};

// Generate a unique filename
const filename = `/tmp/n8n_audit_${Date.now()}.json`;

return {
  json: {
    filename: filename,
    content: JSON.stringify(auditData)
  }
};