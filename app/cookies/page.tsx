"use client";

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCookieBite } from 'react-icons/fa';
import { LegalPageSchema } from '@/components/schemas/LegalPageSchema';

const CookiesPage = () => {
  const pageUrl = 'https://spotcircuit.com/cookies';
  const pageTitle = 'Cookie Policy | SpotCircuit';
  const pageDescription = 'Learn how SpotCircuit uses cookies and similar technologies to enhance your browsing experience and analyze website traffic.';

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
            alt="SpotCircuit cookies image"
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
                  <FaCookieBite className="text-2xl text-white" />
                </div>
                <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                  Cookie Policy
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Learn how and why we use cookies on our website.
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
                <h2>1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies enhance user experience by remembering your preferences and enabling certain site functions.
                </p>

                <h2>2. How We Use Cookies</h2>
                <p>
                  SpotCircuit uses cookies for a variety of purposes, including:
                </p>
                <ul>
                  <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
                  <li><strong>Performance cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
                  <li><strong>Functional cookies:</strong> These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                  <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
                </ul>

                <h2>3. Types of Cookies We Use</h2>
                <p>
                  Our website uses the following types of cookies:
                </p>
                <ul>
                  <li><strong>Session cookies:</strong> These are temporary cookies that expire when you close your browser. They enable our website to recognize you as you navigate between pages during a single browser session.</li>
                  <li><strong>Persistent cookies:</strong> These cookies remain on your device for a set period or until you delete them manually. They enable our website to remember you for future visits.</li>
                  <li><strong>First-party cookies:</strong> These are cookies set by our website domain.</li>
                  <li><strong>Third-party cookies:</strong> These are cookies set by domains other than our website, such as analytics services, advertising networks, and social media platforms.</li>
                </ul>

                <h2>4. Specific Cookies We Use</h2>
                <p>
                  Here is a list of the main cookies we use and what we use them for:
                </p>
                <ul>
                  <li><strong>_ga, _gid, _gat (Google Analytics):</strong> These cookies are used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the website. The cookies collect information in an anonymous form, including the number of visitors to the website, where visitors have come to the website from, and the pages they visited.</li>
                  <li><strong>_fbp, fr (Facebook):</strong> These cookies are used to deliver, measure, and improve the relevancy of ads on Facebook.</li>
                  <li><strong>CONSENT, VISITOR_INFO1_LIVE, YSC (YouTube):</strong> These cookies are set by YouTube videos embedded on our website. They register anonymous statistical data on, for example, how many times the video is displayed and what settings are used for playback.</li>
                  <li><strong>_hjid, _hjIncludedInSample (Hotjar):</strong> These cookies are set to let Hotjar know whether that visitor is included in the sample which is used to generate heatmaps, funnels, recordings, etc.</li>
                </ul>

                <h2>5. Managing Cookies</h2>
                <p>
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. However, you can usually find information on cookie management for your browser through the help function or by visiting the website of the browser developer.
                </p>
                <p>
                  Please note that if you choose to block cookies, you may not be able to use the full functionality of our website.
                </p>

                <h2>6. Changes to Our Cookie Policy</h2>
                <p>
                  We may update our Cookie Policy from time to time. Any changes we make to our Cookie Policy in the future will be posted on this page and, where appropriate, notified to you by email. Please check back frequently to see any updates or changes to our Cookie Policy.
                </p>

                <h2>7. Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please contact us:
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

export default CookiesPage;
