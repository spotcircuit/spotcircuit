"use client";

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';
import { LegalPageSchema } from '@/components/schemas/LegalPageSchema';

const TermsPage = () => {
  const pageUrl = 'https://spotcircuit.com/terms';
  const pageTitle = 'Terms of Service | SpotCircuit';
  const pageDescription = 'Read our Terms of Service to understand the rules and guidelines for using SpotCircuit\'s services and website.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={pageUrl} />
      </Head>
      <LegalPageSchema 
        title={pageTitle}
        description={pageDescription}
        datePublished="2023-01-01"
        dateModified="2023-12-31"
        url={pageUrl}
      />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-grow">
          {/* Header Image Section */}
          <img
            src="/static/images/hero.svg"
            alt="SpotCircuit terms image"
            className="h-[75px] w-full object-cover overflow-hidden"
          />
          
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
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                  Terms of Service
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Please read these terms carefully before using our services.
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
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing or using SpotCircuit's services, website, or any applications made available by SpotCircuit (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>

                <h2>2. Description of Services</h2>
                <p>
                  SpotCircuit provides AI-powered automation and SEO solutions for various industries, including but not limited to home services businesses. Our Services may include website optimization, content creation, local SEO, technical SEO, analytics, and other digital marketing services.
                </p>

                <h2>3. User Accounts</h2>
                <p>
                  Some aspects of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h2>4. Fees and Payment</h2>
                <p>
                  Certain Services may require payment of fees. All fees are stated in U.S. dollars and are non-refundable unless otherwise specified. We reserve the right to change our prices at any time. Any price changes will be communicated to you in advance.
                </p>

                <h2>5. Intellectual Property Rights</h2>
                <p>
                  The Services and their original content, features, and functionality are owned by SpotCircuit and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h2>6. User Content</h2>
                <p>
                  You retain all rights to any content you submit, post, or display on or through the Services ("User Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with providing the Services.
                </p>

                <h2>7. Prohibited Uses</h2>
                <p>
                  You agree not to use the Services:
                </p>
                <ul>
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
                  <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                  <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services</li>
                </ul>

                <h2>8. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
                </p>

                <h2>9. Limitation of Liability</h2>
                <p>
                  In no event shall SpotCircuit, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
                </p>

                <h2>10. Disclaimer</h2>
                <p>
                  Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. The Services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </p>

                <h2>11. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>

                <h2>12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2>13. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                    Contact Page
                  </Link>
                </p>

                <div className="mt-12 text-center">
                  <p className="text-gray-400">Last updated: April 16, 2025</p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
