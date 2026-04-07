#!/bin/bash
# Deploy AI Audit Scripts to Google Cloud Server

SERVER_IP="34.21.58.120"
SERVER_USER="brian"
SSH_KEY="$HOME/.ssh/spotSSHKEY"

echo "🚀 Deploying AI Audit Scripts to Google Cloud Server..."

# Create deployment package
echo "📦 Creating deployment package..."
cd /mnt/c/Users/Big\ Daddy\ Pyatt/CascadeProjects/SpotCircuit/scripts
mkdir -p ai-audit-deploy
cp n8n_audit_runner.py ai-audit-deploy/
cp ai_audit_wrapper.py ai-audit-deploy/
cp ai_readiness_final.py ai-audit-deploy/

# Create requirements file
cat > ai-audit-deploy/requirements.txt << EOF
playwright==1.40.0
aiohttp==3.9.1
python-dotenv==1.0.0
EOF

# Create setup script
cat > ai-audit-deploy/setup.sh << 'EOF'
#!/bin/bash
echo "🔧 Setting up AI Audit Scripts..."

# Install Python dependencies
sudo apt-get update
sudo apt-get install -y python3 python3-pip python3-venv

# Create directory for scripts
mkdir -p ~/ai-audit-scripts
cd ~/ai-audit-scripts

# Copy scripts
cp ~/ai-audit-deploy/* .

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Install Playwright browsers
playwright install chromium
playwright install-deps chromium

# Create logs directory
mkdir -p logs

# Test the script
echo '{"businessName": "Test Spa", "location": "Austin, TX", "email": "test@example.com"}' | python3 n8n_audit_runner.py

echo "✅ Setup complete!"
EOF

chmod +x ai-audit-deploy/setup.sh

# Copy to server
echo "📤 Copying files to server..."
scp -i "$SSH_KEY" -r ai-audit-deploy/ ${SERVER_USER}@${SERVER_IP}:~/

# Run setup on server
echo "🔧 Running setup on server..."
ssh -i "$SSH_KEY" ${SERVER_USER}@${SERVER_IP} "bash ~/ai-audit-deploy/setup.sh"

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Configure n8n webhook URL in your .env.local:"
echo "   N8N_WEBHOOK_URL=https://n8n.spotcircuit.com/webhook/ai-audit"
echo ""
echo "2. Create the n8n workflow with these nodes:"
echo "   - Webhook trigger"
echo "   - Execute Command: cd ~/ai-audit-scripts && source venv/bin/activate && python3 n8n_audit_runner.py"
echo "   - Process results and send email"

# Clean up local deploy directory
rm -rf ai-audit-deploy