# Google Cloud Server Deployment Guide for AI Audit Scripts

## Overview
This guide explains how to deploy the AI readiness audit scripts to your Google Cloud server where n8n is running.

## Prerequisites
- Google Cloud server with n8n installed
- SSH access to the server
- Python 3.8+ installed on the server

## Step 1: Prepare the Scripts

First, create a deployment package with only the necessary scripts:

```bash
# On your local machine
cd /mnt/c/Users/Big\ Daddy\ Pyatt/CascadeProjects/SpotCircuit/scripts

# Create deployment directory
mkdir ai-audit-deployment
cp n8n_audit_runner.py ai-audit-deployment/
cp ai_audit_wrapper.py ai-audit-deployment/
cp ai_readiness_final.py ai-audit-deployment/
```

## Step 2: Transfer to Google Cloud Server

```bash
# Use SCP to copy files to your server
scp -r ai-audit-deployment/ your-username@your-server-ip:/home/your-username/

# Or use gcloud command
gcloud compute scp --recurse ai-audit-deployment/ your-instance-name:/home/your-username/ --zone=your-zone
```

## Step 3: SSH into Your Server

```bash
# Using standard SSH
ssh your-username@your-server-ip

# Or using gcloud
gcloud compute ssh your-instance-name --zone=your-zone
```

## Step 4: Set Up Python Environment

```bash
# Update system packages
sudo apt-get update
sudo apt-get upgrade -y

# Install Python and pip if not already installed
sudo apt-get install python3 python3-pip python3-venv -y

# Create virtual environment
cd /home/your-username/ai-audit-deployment
python3 -m venv venv
source venv/bin/activate

# Install required packages
pip install playwright aiohttp python-dotenv

# Install Playwright browsers
playwright install chromium
playwright install-deps chromium
```

## Step 5: Test the Scripts

```bash
# Test the n8n runner script
echo '{"businessName": "Test Spa", "location": "Austin, TX", "email": "test@example.com"}' | python3 n8n_audit_runner.py

# You should see JSON output with audit results
```

## Step 6: Configure n8n Workflow

1. **Login to your n8n instance**

2. **Create a new workflow** named "AI Audit Processor"

3. **Add Webhook Node**:
   - Name: "Audit Request"
   - HTTP Method: POST
   - Path: /ai-audit
   - Response Mode: Immediately
   - Response Data: First Entry JSON

4. **Add Code Node** (Prepare Command):
   ```javascript
   const auditData = $input.first().json;
   
   return {
     json: {
       ...auditData,
       scriptPath: '/home/your-username/ai-audit-deployment',
       command: `cd /home/your-username/ai-audit-deployment && source venv/bin/activate && python3 n8n_audit_runner.py '${JSON.stringify(auditData)}'`
     }
   };
   ```

5. **Add Execute Command Node**:
   - Name: "Run Audit Script"
   - Command: `{{$json.command}}`
   - Execute Once: Yes

6. **Add Code Node** (Process Results):
   ```javascript
   const output = $input.first().json.stdout;
   let results;
   
   try {
     results = JSON.parse(output);
   } catch (e) {
     throw new Error(`Failed to parse output: ${output}`);
   }
   
   if (!results.success) {
     throw new Error(results.error || 'Audit failed');
   }
   
   // Format email content
   const emailHtml = `
   <!DOCTYPE html>
   <html>
   <head>
     <style>
       body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
       .header { background-color: #4A90E2; color: white; padding: 20px; text-align: center; }
       .content { padding: 20px; }
       .score { font-size: 48px; color: #4A90E2; font-weight: bold; }
       .recommendation { background-color: #f4f4f4; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2; }
       .priority-high { border-left-color: #e74c3c; }
       .priority-critical { border-left-color: #c0392b; }
     </style>
   </head>
   <body>
     <div class="header">
       <h1>AI Search Visibility Audit Results</h1>
     </div>
     <div class="content">
       <p>Hello ${results.contactName},</p>
       <p>Thank you for requesting an AI visibility audit for <strong>${results.businessName}</strong>. Here are your results:</p>
       
       <h2>Overall AI Score</h2>
       <div class="score">${results.targetAnalysis?.aiScore || 0}/100</div>
       <p><strong>Readiness Level:</strong> ${results.aiReadinessSummary.level}</p>
       <p>${results.aiReadinessSummary.message}</p>
       
       <h2>Your Position</h2>
       <p>Current Google Maps Position: <strong>#${results.targetPosition || 'Not Found'}</strong></p>
       
       <h2>Key Recommendations</h2>
       ${results.recommendations.map(rec => `
         <div class="recommendation priority-${rec.priority.toLowerCase()}">
           <strong>${rec.priority} Priority:</strong> ${rec.issue}<br>
           <em>Impact:</em> ${rec.impact}<br>
           <em>Action:</em> ${rec.action}
         </div>
       `).join('')}
       
       <h2>Next Steps</h2>
       <p>Ready to dominate AI search results? Schedule a consultation to discuss your personalized AI optimization strategy.</p>
       <p><a href="https://spotcircuit.com/booking" style="background-color: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Book Your Strategy Call</a></p>
       
       <p>Best regards,<br>The SpotCircuit Team</p>
     </div>
   </body>
   </html>
   `;
   
   return {
     json: {
       to: results.email,
       subject: `AI Visibility Audit Results for ${results.businessName}`,
       html: emailHtml,
       auditId: results.auditId,
       businessName: results.businessName,
       aiScore: results.targetAnalysis?.aiScore || 0
     }
   };
   ```

7. **Add Email Node**:
   - Resource: Email (SMTP)
   - Operation: Send
   - To: `{{$json.to}}`
   - Subject: `{{$json.subject}}`
   - HTML: `{{$json.html}}`

8. **Add Error Handling**:
   - Connect error outputs to a logging/notification system
   - Consider adding retry logic for failed audits

## Step 7: Update Vercel Environment

Add your n8n webhook URL to your Vercel environment:

```bash
# In Vercel dashboard or .env.local
N8N_WEBHOOK_URL=https://your-n8n-domain.com/webhook/ai-audit
```

## Step 8: Security Considerations

1. **Webhook Authentication** (optional but recommended):
   ```javascript
   // In your API route, add authentication
   const webhookSecret = process.env.N8N_WEBHOOK_SECRET;
   
   // Include in webhook payload
   const auditRequest = {
     ...existingData,
     secret: webhookSecret
   };
   
   // In n8n, verify the secret in a Code node
   ```

2. **Rate Limiting**:
   - Consider implementing rate limiting in your API
   - Add delays between audits in n8n to prevent overload

3. **Resource Limits**:
   ```bash
   # Create a systemd service to limit resources
   sudo nano /etc/systemd/system/ai-audit.service
   ```

## Step 9: Monitoring and Logs

1. **Create log directory**:
   ```bash
   mkdir -p /home/your-username/ai-audit-deployment/logs
   ```

2. **Update n8n_audit_runner.py** to log errors:
   ```python
   # Add at the top of the script
   import logging
   logging.basicConfig(
       filename='/home/your-username/ai-audit-deployment/logs/audit.log',
       level=logging.INFO,
       format='%(asctime)s - %(levelname)s - %(message)s'
   )
   ```

3. **Monitor logs**:
   ```bash
   tail -f /home/your-username/ai-audit-deployment/logs/audit.log
   ```

## Step 10: Test End-to-End

1. Submit a test form on your medical spa audit page
2. Check n8n execution history
3. Verify email delivery
4. Check logs for any errors

## Troubleshooting

### Common Issues:

1. **Playwright not working**:
   ```bash
   # Install missing dependencies
   sudo playwright install-deps
   ```

2. **Permission errors**:
   ```bash
   # Fix permissions
   chmod +x n8n_audit_runner.py
   ```

3. **Memory issues**:
   ```bash
   # Increase swap if needed
   sudo fallocate -l 4G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

## Maintenance

1. **Regular updates**:
   ```bash
   # Update packages monthly
   source venv/bin/activate
   pip install --upgrade playwright aiohttp
   playwright install chromium
   ```

2. **Backup audit results**:
   ```bash
   # Create backup script
   gsutil cp -r /home/your-username/ai-audit-deployment/audits gs://your-backup-bucket/
   ```

## Support

If you encounter issues:
1. Check n8n execution logs
2. Review Python script logs
3. Verify all environment variables are set
4. Test individual components separately