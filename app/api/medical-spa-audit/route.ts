import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, medSpaName, website, location, phone } = body;

    // Validate required fields
    if (!name || !email || !medSpaName || !website || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create audit request payload
    const auditRequest = {
      auditId: generateAuditId(),
      businessName: medSpaName,
      location: location,
      email: email,
      contactName: name,
      website: website,
      phone: phone || '',
      timestamp: new Date().toISOString(),
      industry: 'Medical Spas' // Default for medical spa funnel
    };

    // Send to n8n webhook
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/ai-audit';
    
    try {
      const n8nResponse = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auditRequest)
      });

      if (!n8nResponse.ok) {
        console.error('n8n webhook failed:', await n8nResponse.text());
        // Don't fail the request - queue it for retry
      }
    } catch (webhookError) {
      console.error('Failed to send to n8n:', webhookError);
      // Continue anyway - we don't want to lose the lead
    }

    // Return success to the user immediately
    return NextResponse.json({
      success: true,
      message: 'Audit request received. You will receive your personalized AI visibility audit within 48 hours.',
      auditId: auditRequest.auditId
    });

  } catch (error) {
    console.error('Audit request error:', error);
    return NextResponse.json(
      { error: 'Failed to process audit request' },
      { status: 500 }
    );
  }
}

function generateAuditId(): string {
  return `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}