# n8n Integration Guide for AI Readiness Audits

## Overview
This guide explains how to set up n8n to process AI readiness audit requests from your SpotCircuit website.

## Architecture
1. User submits form on `/medical-spa-ai-audit` page
2. Next.js API sends webhook to n8n with audit request data
3. n8n workflow triggers Python script on your local machine
4. Script runs AI readiness analysis using Playwright
5. Results are processed and email is sent to customer

## Setup Instructions

### 1. Set Up n8n Webhook

1. Create a new workflow in n8n
2. Add a **Webhook** node as the trigger
3. Set it to POST method
4. Copy the webhook URL (e.g., `https://your-n8n.com/webhook/ai-audit`)

### 2. Configure Environment Variable

Add to your `.env.local` file:
```
N8N_WEBHOOK_URL=https://your-n8n.com/webhook/ai-audit
```

### 3. n8n Workflow Setup

Create this workflow in n8n:

```
1. Webhook (Trigger)
   ↓
2. Code Node (Prepare Data)
   ↓
3. Execute Command (Run Python Script)
   ↓
4. Email Node (Send Results)
```

#### Node Configurations:

**1. Webhook Node:**
- HTTP Method: POST
- Path: /ai-audit
- Response Mode: Immediately

**2. Code Node (Prepare Command):**
```javascript
const auditData = $input.first().json;

// Prepare the command
return {
  json: {
    ...auditData,
    command: `cd /path/to/spotcircuit/scripts && python3 n8n_audit_runner.py '${JSON.stringify(auditData)}'`
  }
};
```

**3. Execute Command Node:**
- Command: `{{$json.command}}`
- Execute Once: Yes

**4. Process Results Node (Code):**
```javascript
const output = $input.first().json.stdout;
const results = JSON.parse(output);

if (!results.success) {
  throw new Error(results.error);
}

// Format email content
const emailHtml = `
<h2>AI Search Readiness Audit Results</h2>
<p>Hello ${results.contactName},</p>
<p>Here are your AI visibility audit results for ${results.businessName}:</p>

<h3>Overall AI Score: ${results.targetAnalysis?.aiScore || 0}/100</h3>
<p>Readiness Level: ${results.aiReadinessSummary.level}</p>
<p>${results.aiReadinessSummary.message}</p>

<h3>Key Recommendations:</h3>
<ul>
${results.recommendations.map(rec => `
  <li>
    <strong>${rec.priority}:</strong> ${rec.issue}<br>
    <em>Action:</em> ${rec.action}
  </li>
`).join('')}
</ul>

<h3>Your Position: #${results.targetPosition || 'Not Found'}</h3>

<p>Best regards,<br>SpotCircuit Team</p>
`;

return {
  json: {
    to: results.email,
    subject: `AI Visibility Audit Results for ${results.businessName}`,
    html: emailHtml,
    auditResults: results
  }
};
```

**5. Email Node:**
- To: `{{$json.to}}`
- Subject: `{{$json.subject}}`
- HTML: `{{$json.html}}`

### 4. Running the Python Script

The Python script requires:
- Python 3.8+
- Playwright installed (`pip install playwright`)
- Browsers installed (`playwright install chromium`)

### 5. Alternative: n8n on Same Server

If n8n runs on the same server as your Python environment, you can use the Execute Command node directly:

```javascript
// In Execute Command node
cd /home/your-user/SpotCircuit/scripts && python3 n8n_audit_runner.py '{{JSON.stringify($input.first().json)}}'
```

### 6. Error Handling

Add error handling nodes:
- If webhook fails, save to error log
- If Python script fails, notify admin
- If email fails, retry with backoff

## Testing

1. Test the webhook:
```bash
curl -X POST https://your-n8n.com/webhook/ai-audit \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Test Medical Spa",
    "location": "Austin, TX",
    "email": "test@example.com",
    "contactName": "John Doe",
    "auditId": "test_123"
  }'
```

2. Check n8n execution history
3. Verify email delivery

## Security Notes

1. Use HTTPS for webhook URL
2. Consider adding webhook authentication
3. Validate input data in n8n workflow
4. Rate limit audit requests
5. Store sensitive data securely

## Automation Ideas

1. **Scheduled Re-audits**: Run monthly audits for paying customers
2. **Competitor Monitoring**: Track competitor AI scores over time
3. **Alert System**: Notify when competitors improve their AI visibility
4. **Report Generation**: Create PDF reports with charts
5. **CRM Integration**: Add audit results to your CRM