'use server';

import nodemailer from 'nodemailer';
import { google } from 'googleapis';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  token: string;
}

const OAuth2 = google.auth.OAuth2;

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${formData.token}`,
      { method: 'POST' }
    );
    
    const recaptchaData = await recaptchaResponse.json();
    
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return { 
        success: false, 
        message: 'reCAPTCHA verification failed. Please try again.' 
      };
    }

    // Create OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground' // Redirect URL
    );

    // Set refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });

    // Get access token with better error handling
    let accessToken;
    try {
      console.log('Attempting to get access token...'); 
      const tokenResponse = await oauth2Client.getAccessToken();
      console.log('Received token response:', tokenResponse); 
      accessToken = tokenResponse?.token || null;
      console.log('Extracted access token:', accessToken); 

      if (!accessToken) {
        console.error('Failed to obtain access token, tokenResponse:', tokenResponse); 
        throw new Error('Failed to obtain access token');
      }
    } catch (error: any) {
      console.error('Error getting access token:', error);
      throw new Error('Authentication failed: ' + (error?.message || 'Unknown error'));
    }

    console.log('Creating transporter with access token:', accessToken); 
    // Create email transporter with OAuth2
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER, // Make sure this matches the account used for OAuth
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken 
      },
      debug: true 
    });

    // Format email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <h3>Message:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@spotcircuit.com',
      to: 'info@spotcircuit.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
      replyTo: formData.email,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Detailed error in sendContactEmail:', error); 
    return {
      success: false,
      message: `Failed to send email: ${error.message || 'Unknown error'}`,
    };
  }
}
