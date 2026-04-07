# Manual Setup on Your Google Cloud Server

Since you're already logged in as brian, here are the commands to run:

## 1. Create directory for AI audit scripts
```bash
mkdir -p ~/ai-audit-scripts
cd ~/ai-audit-scripts
```

## 2. Install Python and dependencies
```bash
# Update packages
sudo apt-get update
sudo apt-get install -y python3 python3-pip python3-venv

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python packages
pip install playwright==1.40.0 aiohttp==3.9.1 python-dotenv==1.0.0

# Install Playwright browsers
playwright install chromium
playwright install-deps chromium
```

## 3. Create the Python scripts

You'll need to create these files on the server. You can either:
- Copy them from your local machine using scp
- Or create them directly on the server using nano

From your local WSL:
```bash
# Copy the scripts to the server
scp -i ~/.ssh/spotSSHKEY /mnt/c/Users/Big\ Daddy\ Pyatt/CascadeProjects/SpotCircuit/scripts/n8n_audit_runner.py brian@34.21.58.120:~/ai-audit-scripts/
scp -i ~/.ssh/spotSSHKEY /mnt/c/Users/Big\ Daddy\ Pyatt/CascadeProjects/SpotCircuit/scripts/ai_audit_wrapper.py brian@34.21.58.120:~/ai-audit-scripts/
scp -i ~/.ssh/spotSSHKEY /mnt/c/Users/Big\ Daddy\ Pyatt/CascadeProjects/SpotCircuit/scripts/ai_readiness_final.py brian@34.21.58.120:~/ai-audit-scripts/
```

## 4. Test the setup
```bash
cd ~/ai-audit-scripts
source venv/bin/activate

# Test with sample data
echo '{"businessName": "Test Spa", "location": "Austin, TX", "email": "test@example.com"}' | python3 n8n_audit_runner.py
```

## 5. Configure n8n Workflow

Since your n8n is at https://n8n.spotcircuit.com, create a new workflow:

### Webhook Node
- HTTP Method: POST
- Path: `/webhook/ai-audit`
- Response: Immediately

### Execute Command Node
```bash
cd /home/brian/ai-audit-scripts && source venv/bin/activate && python3 n8n_audit_runner.py '{{JSON.stringify($json)}}'
```

### Code Node (Process Results)
```javascript
const output = $input.first().json.stdout;
const results = JSON.parse(output);

if (!results.success) {
  throw new Error(results.error);
}

// Format email HTML
const emailHtml = `
<h2>AI Visibility Audit for ${results.businessName}</h2>
<p>AI Score: ${results.targetAnalysis?.aiScore || 0}/100</p>
<p>Position: #${results.targetPosition || 'Not Found'}</p>
<h3>Recommendations:</h3>
<ul>
${results.recommendations.map(r => `<li>${r.priority}: ${r.action}</li>`).join('')}
</ul>
`;

return {
  json: {
    to: results.email,
    subject: `AI Audit Results for ${results.businessName}`,
    html: emailHtml
  }
};
```

### Email Node
- Configure with your SMTP settings
- To: `{{$json.to}}`
- Subject: `{{$json.subject}}`
- HTML: `{{$json.html}}`

## 6. Update your Vercel environment

Add to your `.env.local`:
```
N8N_WEBHOOK_URL=https://n8n.spotcircuit.com/webhook/ai-audit
```

## Alternative: Run in Docker

Since you're using Docker for n8n, you could also create a Docker container for the Python scripts:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y wget gnupg \
    && playwright install-deps chromium \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install -r requirements.txt
RUN playwright install chromium

COPY *.py .

CMD ["python3", "n8n_audit_runner.py"]
```

This would make it easier to manage alongside your n8n container.