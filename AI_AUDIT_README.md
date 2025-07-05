# AI Visibility Audit System for Medical Spas

## Overview
This system provides automated AI visibility audits for medical spas, analyzing their presence across AI platforms like ChatGPT, Claude, and Google's AI Overview.

## Components

### 1. Lead Capture Page
**URL:** `/medical-spa-ai-audit`
- High-converting landing page with audit request form
- Captures: Name, Email, Medical Spa Name, Website, Phone
- Shows loading states and success/error messages

### 2. API Endpoint
**Path:** `/app/api/medical-spa-audit/route.ts`
- Handles form submissions
- Validates input data
- Triggers async audit process
- Returns confirmation to user

### 3. Python Scrapers

#### a) Quick Demo Script (For Testing)
**File:** `scripts/quick_audit_demo.py`
```bash
# Run the demo
python3 scripts/quick_audit_demo.py

# Or make it executable
chmod +x scripts/quick_audit_demo.py
./scripts/quick_audit_demo.py
```
- No setup required
- Generates sample audit data
- Shows what a full audit looks like

#### b) Full AI Audit Scraper
**File:** `scripts/ai_audit_scraper.py`
```bash
# Run with parameters
python3 scripts/ai_audit_scraper.py --business "Bella Medical Spa" --location "Austin, TX" --audit-id "audit_123"
```
- Requires Playwright: `pip install playwright && playwright install chromium`
- Optional: OpenAI API key for AI analysis
- Scrapes real competitor data from Google Maps
- Generates comprehensive audit report

#### c) Original Scraper (Hardcoded)
**File:** `scripts/fresh_scraper.py`
- Original version with hardcoded location
- Two-pass scraping approach
- Can be modified for custom use

## Setup Instructions

### 1. Install Dependencies

```bash
# For the web app
npm install

# For Python scripts
pip install playwright asyncio openai
playwright install chromium
```

### 2. Environment Variables

Create `.env.local`:
```env
# Optional - for AI analysis
OPENAI_API_KEY=your_api_key_here

# For email notifications (optional)
SENDGRID_API_KEY=your_sendgrid_key
```

### 3. Run the System

```bash
# Start the web server
npm run dev

# Visit the landing page
http://localhost:3006/medical-spa-ai-audit
```

## How It Works

1. **User submits form** on landing page
2. **API validates** and saves request
3. **Python scraper runs** (async in background)
4. **Scraper analyzes** competitors on Google Maps
5. **AI generates insights** (if API key provided)
6. **Report is saved** as JSON file
7. **Email sent** to user with results (when implemented)

## Audit Report Contents

- **Visibility Status**: Current AI search visibility
- **Competitor Analysis**: Top 10 competitors with metrics
- **Missing Elements**: What's preventing AI visibility
- **Recommendations**: Specific actions to improve
- **Expected Timeline**: 30/60/90 day projections

## Customization

### Modify Search Parameters
Edit `scripts/ai_audit_scraper.py`:
- Change `max_results` for more competitors
- Adjust search query format
- Add more data extraction

### Enhance Analysis
- Add more AI platforms (Perplexity, Bing Chat)
- Include voice search testing
- Add screenshot capture
- Implement email templates

### Production Deployment
1. Use background job queue (Bull, BullMQ)
2. Store results in database (PostgreSQL, MongoDB)
3. Implement email service (SendGrid, AWS SES)
4. Add authentication for audit retrieval
5. Create dashboard for viewing reports

## Testing

### Quick Test (No Setup)
```bash
python3 scripts/quick_audit_demo.py
```

### Full Test
1. Submit form on landing page
2. Check `audits/` directory for JSON files
3. Review generated reports

## Sample Audit Output
```json
{
  "audit_id": "audit_123",
  "business_name": "Bella Medical Spa",
  "visibility_status": "INVISIBLE",
  "position": "Not Found",
  "recommendations": {
    "immediate_actions": [
      "Add comprehensive FAQ section",
      "Implement medical schema markup",
      "Create Q&A format content"
    ]
  }
}
```

## Troubleshooting

### Common Issues
1. **Playwright not installed**: Run `playwright install chromium`
2. **Permission denied**: Use `chmod +x` on Python scripts
3. **Module not found**: Install dependencies with pip
4. **API endpoint 404**: Ensure Next.js server is running

### Debug Mode
Add `--verbose` flag to Python scripts for detailed output

## Next Steps

1. **Email Integration**: Implement SendGrid for automated delivery
2. **Database Storage**: Move from JSON files to database
3. **Real-time Updates**: Add WebSocket for live progress
4. **Analytics Dashboard**: Build reporting interface
5. **Scheduling**: Add cron jobs for regular audits

## Support
For issues or questions, check the individual script files for detailed comments and documentation.