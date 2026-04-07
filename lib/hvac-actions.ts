'use server';

import { Resend } from 'resend';

interface HvacFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  trucks: string;
  callVolume: string;
  currentSoftware: string;
  hearAbout: string;
}

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendHvacLeadEmail(formData: HvacFormData) {
  try {
    // Format email content
    const emailContent = `
      <h2>New HVAC Qualification Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <h3>Business Details:</h3>
      <p><strong>Number of Trucks:</strong> ${formData.trucks}</p>
      <p><strong>Monthly Call Volume:</strong> ${formData.callVolume}</p>
      <p><strong>Current Software:</strong> ${formData.currentSoftware || 'Not provided'}</p>
      <p><strong>How they heard about us:</strong> ${formData.hearAbout || 'Not provided'}</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'SpotCircuit HVAC Leads <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'info@spotcircuit.com'],
      subject: `New HVAC Lead: ${formData.name} from ${formData.company}`,
      html: emailContent,
      replyTo: formData.email,  // Set reply-to as the submitter's email
    });
    
    // Check for errors
    if (error) {
      console.error('Error sending HVAC lead email with Resend:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
    
    console.log('HVAC lead email sent successfully with ID:', data?.id);

    return { success: true };
  } catch (error: any) {
    console.error('Detailed error in sendHvacLeadEmail:', error); 
    return {
      success: false,
      message: `Failed to send email: ${error.message || 'Unknown error'}`,
    };
  }
}
