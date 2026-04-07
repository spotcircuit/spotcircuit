// Test script to send an email using SendGrid
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create test email message
const msg = {
  to: 'novahokie1998@gmail.com', // Recipient email
  from: process.env.EMAIL_FROM || 'noreply@spotcircuit.com', // Sender email (must be verified in SendGrid)
  subject: 'Test Email from SpotCircuit',
  text: 'This is a test email to verify that SendGrid is working correctly.',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
      <h2 style="color: #4a6ee0;">SpotCircuit Email Test</h2>
      <p>This is a test email to verify that SendGrid is working correctly with your SpotCircuit website.</p>
      <p>If you're receiving this email, it means your email configuration is working properly!</p>
      <p>Time sent: ${new Date().toLocaleString()}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">This is an automated test message. No action is required.</p>
    </div>
  `,
};

// Log the configuration being used
console.log('Sending test email with the following configuration:');
console.log(`From: ${msg.from}`);
console.log(`To: ${msg.to}`);
console.log(`Subject: ${msg.subject}`);

// Send the email
sgMail.send(msg)
  .then(() => {
    console.log('\nTest email sent successfully!');
  })
  .catch((error) => {
    console.error('\nError sending test email:');
    
    // If there's a response, log it for more details
    if (error.response) {
      console.error(`Status code: ${error.code || error.response.statusCode}`);
      console.error('Error details:', JSON.stringify(error.response.body, null, 2));
    } else {
      console.error(error);
    }
    
    console.log('\nTROUBLESHOOTING TIPS:');
    console.log('1. Make sure your sender email is verified in SendGrid');
    console.log('2. Check that your API key has full access or at least "Mail Send" permissions');
    console.log('3. Verify there are no SendGrid restrictions on your account');
  });
