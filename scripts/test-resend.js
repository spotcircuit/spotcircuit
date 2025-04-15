// Test script for Resend email delivery
require('dotenv').config();
const { Resend } = require('resend');

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  console.log('Testing Resend email delivery...');
  console.log(`API Key (first 10 chars): ${process.env.RESEND_API_KEY?.substring(0, 10)}...`);
  console.log(`Recipient: ${process.env.EMAIL_TO || 'info@spotcircuit.com'}`);
  
  try {
    // Send a test email
    const { data, error } = await resend.emails.send({
      from: 'SpotCircuit Contact <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'info@spotcircuit.com'],
      subject: 'Test Email from SpotCircuit Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #4a6ee0;">SpotCircuit Contact Form Test</h2>
          <p>This is a test email to verify that your contact form email delivery is working correctly.</p>
          <p>If you're receiving this email, it means your contact form is properly configured for production!</p>
          <p>Time sent: ${new Date().toLocaleString()}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated test message. No action is required.</p>
        </div>
      `,
      replyTo: 'test@example.com',
    });
    
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully!');
      console.log('Email ID:', data.id);
    }
  } catch (error) {
    console.error('Exception occurred:', error);
  }
}

main();
