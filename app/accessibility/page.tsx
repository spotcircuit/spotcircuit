import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUniversalAccess } from 'react-icons/fa';
import { LegalPageSchema } from '@/components/schemas/LegalPageSchema';

export const metadata: Metadata = {
  title: 'Accessibility Statement | SpotCircuit',
  description: 'SpotCircuit is committed to ensuring digital accessibility for people with disabilities. Learn about our ongoing efforts to meet WCAG 2.1 Level AA standards and how to contact us with accessibility concerns.',
  keywords: 'accessibility statement, WCAG compliance, digital accessibility, web accessibility, assistive technologies',
  alternates: {
    canonical: 'https://www.spotcircuit.com/accessibility',
    languages: {
      'x-default': 'https://www.spotcircuit.com/accessibility',
      'en': 'https://www.spotcircuit.com/accessibility',
    },
  },
  openGraph: {
    title: 'Accessibility Statement | SpotCircuit',
    description: 'SpotCircuit is committed to ensuring digital accessibility for people with disabilities. Learn about our ongoing efforts to meet WCAG 2.1 Level AA standards.',
    url: 'https://www.spotcircuit.com/accessibility',
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/static/images/accessibility-og.webp',
      width: 1200,
      height: 630,
      alt: 'SpotCircuit Accessibility Statement',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Statement | SpotCircuit',
    description: 'SpotCircuit is committed to ensuring digital accessibility for people with disabilities. Learn about our ongoing efforts to meet WCAG 2.1 Level AA standards.',
    images: ['/static/images/accessibility-og.webp'],
    creator: '@spotcircuit',
  },
};

"use client";

const AccessibilityPage = () => {
  const pageUrl = 'https://www.spotcircuit.com/accessibility';
  const pageTitle = 'Accessibility Statement | SpotCircuit';
  const pageDescription = 'SpotCircuit is committed to ensuring digital accessibility for people with disabilities. Learn about our ongoing efforts to meet WCAG 2.1 Level AA standards and how to contact us with accessibility concerns.';

  return (
    <>
      <LegalPageSchema
        title={pageTitle}
        description={pageDescription}
        datePublished="2023-01-01"
        dateModified="2023-12-31"
        url={pageUrl}
      />
      <div className="flex flex-col min-h-screen overflow-hidden">        <main className="flex-grow">
          {/* Header Image Section */}
          <div className="relative h-[75px] w-full overflow-hidden">
            <Image
              src="/static/images/hero.svg"
              alt="SpotCircuit accessibility image"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Hero Section */}
          <section className="gradient-bg-dark py-16 md:py-24 text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Enhanced Icon */}
                <div className="icon-container mb-6 glow-effect">
                  <FaUniversalAccess className="text-2xl text-white" />
                </div>
                <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                  Accessibility Statement
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Our commitment to making our website accessible to all users.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 md:py-24 bg-black relative">
            <div className="section-divider absolute top-0 left-0 right-0"></div>
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="prose prose-lg prose-invert max-w-4xl mx-auto"
              >
                <h2>Our Commitment to Accessibility</h2>
                <p>
                  SpotCircuit is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>

                <h2>Conformance Status</h2>
                <p>
                  The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                </p>
                <p>
                  SpotCircuit strives to conform to WCAG 2.1 level AA. We are working to achieve this by implementing the following measures:
                </p>
                <ul>
                  <li>Providing text alternatives for non-text content</li>
                  <li>Providing captions and other alternatives for multimedia</li>
                  <li>Creating content that can be presented in different ways without losing information</li>
                  <li>Making it easier for users to see and hear content</li>
                  <li>Making all functionality available from a keyboard</li>
                  <li>Giving users enough time to read and use content</li>
                  <li>Not designing content in a way that is known to cause seizures</li>
                  <li>Providing ways to help users navigate, find content, and determine where they are</li>
                  <li>Making text content readable and understandable</li>
                  <li>Making web pages appear and operate in predictable ways</li>
                  <li>Helping users avoid and correct mistakes</li>
                  <li>Maximizing compatibility with current and future user tools</li>
                </ul>

                <h2>Accessibility Features</h2>
                <p>
                  Our website includes the following accessibility features:
                </p>
                <ul>
                  <li><strong>Semantic HTML:</strong> We use semantic HTML to ensure that content is properly structured and can be interpreted correctly by assistive technologies.</li>
                  <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard navigation.</li>
                  <li><strong>Alt Text for Images:</strong> We provide alternative text descriptions for images to ensure that users who cannot see the images can understand their content.</li>
                  <li><strong>Color Contrast:</strong> We ensure sufficient color contrast between text and background colors to make content readable for users with low vision or color blindness.</li>
                  <li><strong>Responsive Design:</strong> Our website is designed to be responsive and accessible on various devices and screen sizes.</li>
                  <li><strong>Focus Indicators:</strong> We provide visible focus indicators to help keyboard users navigate through interactive elements.</li>
                  <li><strong>ARIA Attributes:</strong> Where necessary, we use ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility for complex components.</li>
                </ul>

                <h2>Feedback and Contact Information</h2>
                <p>
                  We welcome your feedback on the accessibility of the SpotCircuit website. Please let us know if you encounter any accessibility barriers:
                </p>
                <ul>
                  <li>Phone: [Your Phone Number]</li>
                  <li>E-mail: <Link href="mailto:accessibility@spotcircuit.com" className="text-blue-400 hover:text-blue-300">accessibility@spotcircuit.com</Link></li>
                  <li>Visitor Address: [Your Physical Address]</li>
                  <li>
                    <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                      Contact Form
                    </Link>
                  </li>
                </ul>
                <p>
                  We try to respond to feedback within 3 business days.
                </p>

                <h2>Assessment and Compliance</h2>
                <p>
                  SpotCircuit assesses the accessibility of our website in the following ways:
                </p>
                <ul>
                  <li>Self-evaluation using automated testing tools</li>
                  <li>External evaluation by accessibility experts</li>
                  <li>User testing with assistive technologies</li>
                </ul>

                <h2>Limitations and Alternatives</h2>
                <p>
                  Despite our best efforts to ensure accessibility of the SpotCircuit website, there may be some limitations. Below is a description of known limitations, and potential solutions:
                </p>
                <ul>
                  <li><strong>PDF Documents:</strong> Some of our older PDF documents may not be fully accessible. We are working to remediate these documents or provide alternative formats upon request.</li>
                  <li><strong>Third-Party Content:</strong> Some content provided by third parties may not be fully accessible. We are working with our partners to improve the accessibility of this content.</li>
                </ul>
                <p>
                  If you encounter any issues not listed above, please contact us. We will try to provide the information in an alternative format.
                </p>

                <h2>Ongoing Improvements</h2>
                <p>
                  SpotCircuit is committed to making continuous improvements to enhance the accessibility of our website. We are actively working to increase the accessibility and usability of our website and in doing so, adhere to many of the available standards and guidelines.
                </p>

                <div className="mt-12 text-center">
                  <p className="text-gray-400">Last updated: April 16, 2025</p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>      </div>
    </>
  );
};

export default AccessibilityPage;
