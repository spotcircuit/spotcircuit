import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - SpotCircuit | Agentic AI Engineering',
  description: 'Get in touch with SpotCircuit. Let\'s talk about agentic AI frameworks, Claude Code implementation, knowledge bases, and data pipelines.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/contact',
  },
  openGraph: {
    title: 'Contact - SpotCircuit | Agentic AI Engineering',
    description: 'Get in touch with SpotCircuit about agentic AI engineering.',
    url: 'https://www.spotcircuit.com/contact',
    siteName: 'SpotCircuit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - SpotCircuit',
    description: 'Get in touch with SpotCircuit about agentic AI engineering.',
    creator: '@spotcircuit',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm mb-4">CONTACT</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Let&apos;s talk</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you need a full framework implementation, Claude Code setup for your team, or just want to explore what agentic AI can do — reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
              <h2 className="text-xl font-bold mb-6">Send a message</h2>
              <ContactForm />
            </div>

            {/* Other ways to connect */}
            <div className="space-y-6">
              {/* Schedule a Call */}
              <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Schedule a call</h2>
                <p className="text-gray-400 mb-6">
                  Book a 30-minute conversation to discuss your needs.
                </p>
                <a
                  href="https://calendar.app.google/Lh8TY5PBrDSZvjR87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
                >
                  Book Free Consultation
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Direct Links */}
              <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Connect directly</h2>
                <div className="space-y-3">
                  <a href="mailto:info@spotcircuit.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@spotcircuit.com
                  </a>
                  <a href="https://github.com/spotcircuit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/company/spotcircuit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.76-1.38-1.76-.74 0-1.62.44-1.62 1.72V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.4.86 3.4 4.2z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
