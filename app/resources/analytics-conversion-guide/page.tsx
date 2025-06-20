"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import { 
  FaChartLine, 
  FaChartBar,
  FaChartPie,
  FaCheckCircle, 
  FaLightbulb, 
  FaFileAlt, 
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaCloudDownloadAlt,
  FaSearch,
  FaListAlt,
  FaQuestion,
  FaTools,
  FaCopy,
  FaDownload,
  FaShare,
  FaBookmark,
  FaBullseye,
  FaFunnelDollar,
  FaCode,
  FaTags,
  FaExchangeAlt,
  FaPercentage,
  FaRocket,
  FaFilter,
  FaRegEye,
  FaClock,
  FaMobile,
  FaDesktop,
  FaGlobe
} from 'react-icons/fa';
import { 
  HiOutlineCursorClick, 
  HiOutlineChatAlt2, 
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineDocumentText,
  HiOutlineMenu,
  HiOutlineX
} from 'react-icons/hi';

const AnalyticsConversionGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (sidebarOpen && !target.closest('.mobile-sidebar') && !target.closest('.mobile-menu-button')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  // Scroll spy functionality to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Get all section elements
      const sections = [
        'introduction',
        'analytics-setup',
        'key-metrics',
        'conversion-tracking',
        'user-journey',
        'ab-testing',
        'optimization',
        'reporting',
        'tools',
        'faqs'
      ];
      
      // Find the current section in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on mount
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Common analytics challenges
  const analyticsChallenges = [
    { 
      icon: <FaCode className="text-2xl text-white" />,
      title: "Improper Implementation", 
      description: "Tracking codes incorrectly installed, leading to missing or inaccurate data."
    },
    { 
      icon: <FaFilter className="text-2xl text-white" />,
      title: "Data Filtering Issues", 
      description: "Failing to filter out internal traffic, bots, or implement proper view settings."
    },
    { 
      icon: <FaTags className="text-2xl text-white" />,
      title: "Incomplete Tracking", 
      description: "Not tracking key user interactions, form submissions, or conversion events."
    },
    { 
      icon: <FaRegEye className="text-2xl text-white" />,
      title: "Data Blindness", 
      description: "Collecting data but not using it to make informed business decisions."
    },
    { 
      icon: <FaBullseye className="text-2xl text-white" />,
      title: "Unfocused Analysis", 
      description: "Getting lost in vanity metrics rather than focusing on business-impacting KPIs."
    },
    { 
      icon: <FaUsers className="text-2xl text-white" />,
      title: "Privacy Compliance", 
      description: "Not adhering to GDPR, CCPA, and other privacy regulations for data collection."
    }
  ];

  // Analytics framework
  const analyticsFramework = [
    {
      id: 'analytics-setup',
      title: 'Analytics Setup & Configuration',
      icon: <FaCode />,
      description: 'Properly implement analytics tracking to capture accurate, complete data.',
      steps: [
        { title: 'Install base tracking code', description: 'Implement Google Analytics, Meta Pixel, or other core tracking systems.' },
        { title: 'Set up filtered views', description: 'Create raw, test, and production views with appropriate filters.' },
        { title: 'Configure user permissions', description: 'Establish proper access controls based on team roles.' },
        { title: 'Implement enhanced tracking', description: 'Set up enhanced ecommerce, cross-domain tracking, or other advanced features as needed.' }
      ]
    },
    {
      id: 'key-metrics',
      title: 'Essential Metrics & KPIs',
      icon: <FaChartPie />,
      description: 'Identify and track the metrics that actually matter for your business goals.',
      steps: [
        { title: 'Define business objectives', description: 'Clarify what success looks like for your specific business model.' },
        { title: 'Select primary KPIs', description: 'Choose 3-5 key performance indicators aligned with business goals.' },
        { title: 'Establish secondary metrics', description: 'Identify supporting metrics that provide additional context.' },
        { title: 'Set up custom dimensions', description: 'Create custom dimensions and metrics for business-specific needs.' }
      ]
    },
    {
      id: 'conversion-tracking',
      title: 'Conversion Tracking',
      icon: <FaExchangeAlt />,
      description: 'Accurately track the actions that drive business value.',
      steps: [
        { title: 'Define conversion actions', description: 'Identify all valuable user actions (purchases, leads, signups, etc.).' },
        { title: 'Implement event tracking', description: 'Set up event tracking for user interactions and micro-conversions.' },
        { title: 'Create goal funnels', description: 'Build conversion funnels to visualize the user path to completion.' },
        { title: 'Assign goal values', description: 'Allocate monetary values to non-revenue goals for ROI calculation.' }
      ]
    },
    {
      id: 'user-journey',
      title: 'User Journey Analysis',
      icon: <FaFunnelDollar />,
      description: 'Understand how users navigate your site and identify optimization opportunities.',
      steps: [
        { title: 'Map customer journeys', description: 'Document ideal paths users should take to convert.' },
        { title: 'Analyze behavior flows', description: 'Use behavior flow reports to see actual user navigation patterns.' },
        { title: 'Identify drop-off points', description: 'Locate where users abandon conversion processes.' },
        { title: 'Segment user behavior', description: 'Compare journeys across different user segments (traffic source, device, etc.).' }
      ]
    },
    {
      id: 'ab-testing',
      title: 'A/B Testing Framework',
      icon: <FaPercentage />,
      description: 'Systematically test changes to improve conversion rates.',
      steps: [
        { title: 'Identify testing opportunities', description: 'Select high-impact pages and elements for testing.' },
        { title: 'Develop clear hypotheses', description: 'Create specific, measurable hypotheses for each test.' },
        { title: 'Implement proper testing tools', description: 'Set up Google Optimize, VWO, or other testing platforms.' },
        { title: 'Analyze and implement results', description: 'Properly interpret test data and implement winning variations.' }
      ]
    },
    {
      id: 'optimization',
      title: 'Conversion Rate Optimization',
      icon: <FaRocket />,
      description: 'Systematically improve your site to increase conversion rates.',
      steps: [
        { title: 'Conduct qualitative research', description: 'Use surveys, heatmaps, and session recordings to understand user behavior.' },
        { title: 'Perform heuristic analysis', description: 'Evaluate your site against established UX and conversion principles.' },
        { title: 'Prioritize opportunities', description: 'Rank potential improvements based on impact, confidence, and effort.' },
        { title: 'Create optimization roadmap', description: 'Develop a systematic plan for testing and implementing improvements.' }
      ]
    },
    {
      id: 'reporting',
      title: 'Reporting & Analysis',
      icon: <FaChartBar />,
      description: 'Transform data into actionable insights and communicate findings effectively.',
      steps: [
        { title: 'Create custom dashboards', description: 'Build dashboards that visualize key metrics and trends.' },
        { title: 'Set up automated reports', description: 'Establish regular reporting schedule with automated delivery.' },
        { title: 'Perform trend analysis', description: 'Identify patterns and changes in performance over time.' },
        { title: 'Develop action plans', description: 'Convert insights into specific, prioritized action items.' }
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What's the difference between Google Analytics 4 and Universal Analytics?",
      answer: "Google Analytics 4 (GA4) represents a fundamental shift from Universal Analytics (UA) in how data is collected, processed, and analyzed. The key differences include: 1) Event-based model: GA4 uses an event-based data model where everything is an event, unlike UA's session-based model. 2) Identity resolution: GA4 offers better cross-device tracking with more sophisticated user identification. 3) Machine learning: GA4 incorporates AI for predictive metrics and automatic insights. 4) Privacy-focused: GA4 is designed to work without cookies and provides more privacy controls. 5) Data retention: GA4 has more limited data retention periods. 6) Interface and reports: GA4 has a completely redesigned interface with different standard reports. 7) BigQuery integration: Free BigQuery export is available to all GA4 properties. 8) Different metrics: Some familiar metrics like bounce rate are replaced (with engagement rate in GA4). Since Universal Analytics is being sunset, migrating to GA4 is essential, but requires rethinking your analytics strategy rather than simply replacing one tool with another."
    },
    {
      question: "Which metrics should I focus on for my business website?",
      answer: "The metrics you should focus on depend on your business type and objectives, but can generally be categorized by business model. For ecommerce sites, prioritize: conversion rate, average order value, shopping cart abandonment rate, revenue per user, and ROAS (Return on Ad Spend). For lead generation sites, focus on: cost per lead, lead-to-customer conversion rate, form completion rate, lead quality score, and marketing channel effectiveness. For content/media sites, track: page views per session, time on page, scroll depth, return visitor rate, and ad revenue per user. For SaaS businesses, monitor: trial-to-paid conversion rate, customer acquisition cost (CAC), monthly recurring revenue (MRR), churn rate, and customer lifetime value (CLV). Regardless of business type, always prioritize outcome metrics that directly relate to revenue and business goals over vanity metrics like total traffic or social media likes that don't necessarily indicate business success. Start with a small set of key performance indicators (3-5 KPIs) that directly tie to your business objectives, then add supporting metrics to provide context for your primary KPIs."
    },
    {
      question: "How can I accurately track ROI for my digital marketing campaigns?",
      answer: "Accurately tracking digital marketing ROI requires implementing a comprehensive attribution system that connects marketing activities to revenue outcomes. Start by properly tagging all campaigns with UTM parameters to identify traffic sources. Implement conversion tracking for all valuable actions (purchases, form submissions, etc.) and assign monetary values to non-revenue conversions based on their average value to your business. Choose an attribution model appropriate for your sales cycle—last-click attribution for short sales cycles or multi-touch attribution for complex B2B decisions. For ecommerce, implement enhanced ecommerce tracking to capture the full purchase funnel. For lead-based businesses, integrate your CRM with your analytics platform to connect marketing-generated leads to actual sales outcomes. Implement proper tracking for offline conversions, such as phone calls or in-store visits. Calculate ROI using the formula: (Revenue - Cost) / Cost × 100. Finally, segment your ROI analysis by channel, campaign, audience, and other relevant dimensions to identify specific opportunities for optimization. Remember that perfect attribution is impossible, so focus on consistent, comparative measurement over time rather than absolute precision."
    },
    {
      question: "What's a good conversion rate for my industry?",
      answer: "Average conversion rates vary significantly by industry, business model, and conversion type. For ecommerce, the overall average conversion rate typically ranges from 1-4%, with luxury goods on the lower end and commodities on the higher end. B2B lead generation sites often see conversion rates of 2-5% for lead form submissions. SaaS businesses might see trial-to-paid conversion rates of 5-15% depending on their pricing model and onboarding process. However, rather than focusing solely on industry benchmarks, which can be misleading due to differences in how businesses define and track conversions, focus on improving your own conversion rates over time. A more productive approach is to: 1) Establish your baseline conversion rate with proper tracking, 2) Segment your conversion data by traffic source, device type, and user demographics to identify underperforming segments, 3) Implement A/B testing and optimization efforts focused on your specific user experience issues, and 4) Measure improvements against your own historical performance. Ultimately, a 'good' conversion rate is one that's better than your previous rate and delivers profitable customer acquisition costs for your specific business model."
    },
    {
      question: "How do I set up proper goal tracking in Google Analytics?",
      answer: "Setting up proper goal tracking in Google Analytics involves several steps depending on whether you're using Universal Analytics (UA) or Google Analytics 4 (GA4). For Universal Analytics: 1) Navigate to Admin > Goals > New Goal, 2) Select a template or custom goal, 3) Name your goal and select the type (destination, duration, pages/screens, or event), 4) Configure the goal details (such as the thank you page URL for destination goals), 5) Set a goal value if applicable, and 6) Verify the goal to test its implementation. For Google Analytics 4: 1) Events are tracked automatically but you can create custom events in the Events section, 2) Mark important events as Conversions by going to Configure > Events > select an event > Mark as conversion, 3) For custom events, use the Measurement Protocol or Google Tag Manager. For both systems, use Google Tag Manager for more complex tracking needs: 1) Create triggers for user interactions (button clicks, form submissions, etc.), 2) Set up tags that fire based on these triggers, 3) Use variables to capture additional information, and 4) Test thoroughly in Preview mode before publishing. Always verify your implementation by testing the user flows that should trigger your goals and checking real-time reports to confirm proper tracking."
    },
    {
      question: "What is A/B testing and how do I get started?",
      answer: "A/B testing (split testing) is a method of comparing two versions of a webpage or element to determine which performs better for a given conversion goal. To get started: 1) Identify opportunities by analyzing your analytics data to find pages with high traffic but poor conversion rates. 2) Develop hypotheses based on user research, heatmaps, and best practices—each hypothesis should clearly state what you're changing, what improvement you expect, and why. 3) Select a testing tool like Google Optimize (free), VWO, or Optimizely. 4) Create variations that test one specific change at a time (e.g., headline, button color, form length). 5) Determine your sample size and test duration using a calculator to ensure statistical significance. 6) Implement proper tracking to measure the impact on your actual conversion goals. 7) Run the test until you reach statistical significance (typically 95% confidence) or your predetermined sample size. 8) Analyze results beyond just the winning variation—look for insights in segment performance. 9) Implement the winner and plan follow-up tests. Start with high-impact, easy-to-implement changes on your most valuable pages. Common elements to test include headlines, call-to-action buttons, form fields, images, and page layouts. Remember that A/B testing is an ongoing process of incremental improvement, not a one-time project."
    },
    {
      question: "How do I comply with privacy regulations (GDPR, CCPA) while still collecting analytics data?",
      answer: "Complying with privacy regulations while collecting analytics data requires implementing several technical and operational measures. First, create a comprehensive privacy policy that clearly explains what data you collect, how it's used, and user rights regarding their data. Implement a consent management platform (CMP) that allows users to provide informed, explicit consent before tracking begins, with granular options for different tracking types (analytics, advertising, etc.). Configure your analytics tools to respect user choices by using features like Google's 'Consent mode' that adapts tracking based on user consent. Anonymize IP addresses in your analytics configuration to reduce personally identifiable information collection. Use server-side tracking where possible to reduce reliance on cookies. Set appropriate data retention periods and regularly purge old data. Implement data subject access request (DSAR) processes that allow users to access, correct, or delete their data. For international audiences, consider using regional settings for data processing. Document your compliance efforts and maintain records of consent. Regular privacy impact assessments and staff training complete a robust compliance program. Remember that while these measures may reduce the quantity of data collected, they often improve data quality by focusing on engaged, consenting users."
    },
    {
      question: "What are the most common mistakes people make with analytics and how can I avoid them?",
      answer: "The most common analytics mistakes include: 1) Poor implementation - not properly installing tracking codes or testing tracking across all user journeys. Avoid by using tag managers and validation tools to verify proper data collection. 2) Not filtering internal traffic - skewing data with employee visits. Create filters to exclude internal IP addresses and implement proper view settings. 3) Ignoring data quality issues - broken tracking, duplicate transactions, or bot traffic contaminating data. Regularly audit data quality and implement bot filtering. 4) Focusing on vanity metrics - tracking page views but not conversions or revenue metrics. Define business-aligned KPIs before implementing analytics. 5) Improper attribution - giving credit to the wrong marketing channels. Implement multi-touch attribution appropriate for your sales cycle. 6) Analysis paralysis - collecting data without taking action. Create a regular reporting schedule with specific action items. 7) Not segmenting data - looking at aggregate numbers that hide important insights. Always segment data by traffic source, device, user type, etc. 8) Misinterpreting statistical significance - making decisions based on insufficient data. Use proper sample size calculators for testing. 9) Tool proliferation - using too many disconnected tools. Focus on a core analytics stack with integrated tools. 10) Neglecting user privacy - not implementing proper consent management. Stay compliant with privacy regulations through proper consent implementation and data governance."
    }
  ];

  // Analytics tools
  const analyticsTools = [
    {
      name: "Google Analytics 4",
      description: "Free analytics platform that provides insights into website and app performance.",
      url: "https://analytics.google.com/",
      category: "Analytics",
      features: ["User behavior tracking", "Conversion tracking", "Audience insights", "Custom reports"]
    },
    {
      name: "Google Tag Manager",
      description: "Free tag management system that simplifies adding and updating marketing tags.",
      url: "https://tagmanager.google.com/",
      category: "Implementation",
      features: ["Tag deployment", "Trigger configuration", "Version control", "Debug mode"]
    },
    {
      name: "Hotjar",
      description: "Visual analytics tool that reveals user behavior through heatmaps and recordings.",
      url: "https://www.hotjar.com/",
      category: "Behavior",
      features: ["Heatmaps", "Session recordings", "Conversion funnels", "User surveys"]
    },
    {
      name: "Google Optimize",
      description: "Free A/B testing and personalization platform integrated with Google Analytics.",
      url: "https://optimize.google.com/",
      category: "Testing",
      features: ["A/B testing", "Multivariate testing", "Personalization", "Analytics integration"]
    },
    {
      name: "Mixpanel",
      description: "Advanced analytics platform focused on user behavior and product analytics.",
      url: "https://mixpanel.com/",
      category: "Product Analytics",
      features: ["Event tracking", "User cohorts", "Retention analysis", "Funnel analysis"]
    },
    {
      name: "Looker Studio",
      description: "Free data visualization tool for creating interactive dashboards and reports.",
      url: "https://lookerstudio.google.com/",
      category: "Reporting",
      features: ["Interactive dashboards", "Multi-source data", "Scheduled reports", "Team sharing"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      {/* Structured data - Article Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Analytics & Conversion Guide: Master Data-Driven Growth",
            "description": "A comprehensive guide to implementing analytics, tracking conversions, and optimizing your website for maximum results.",
            "author": {
              "@type": "Organization",
              "name": "SpotCircuit"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SpotCircuit",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.spotcircuit.com/static/images/logo.png"
              }
            },
            "datePublished": "2025-04-12",
            "dateModified": "2025-04-12",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.spotcircuit.com/resources/analytics-conversion-guide"
            },
            "image": "https://www.spotcircuit.com/static/images/analytics-guide-og.png"
          })
        }}
      />

      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="icon-container mb-6 glow-effect">
              <FaChartLine className="text-4xl text-white" />
            </div>
            <h1 className="gradient-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Analytics & Conversion Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              The complete framework for implementing analytics, tracking conversions, and optimizing your website for maximum results
            </p>
            
            {/* What you'll learn bullets */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-10">
              <h3 className="text-2xl font-bold mb-6 text-white">What You'll Learn:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>How to properly set up analytics tracking on your website</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Identify and track the metrics that actually matter</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Implement a systematic conversion optimization process</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Create actionable reports that drive business decisions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#analytics-setup">
                <span className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                  View Complete Guide
                </span>
              </Link>
              <a href="/downloads/analytics-setup-template.pdf" className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
                <FaDownload className="mr-2" />
                Download Analytics Checklist
              </a>
            </div>
          </div>
        </section>

        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-20 right-4 z-50">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mobile-menu-button bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-700 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <HiOutlineX className="text-2xl text-white" />
            ) : (
              <HiOutlineMenu className="text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-sidebar fixed inset-0 bg-black/80 z-40 lg:hidden overflow-auto"
            >
              <div className="bg-gray-900 h-full w-80 max-w-[80vw] p-6 pt-24">
                <h3 className="text-xl font-bold mb-6 text-white">Guide Contents</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', title: 'Introduction', icon: <FaChartLine /> },
                    { id: 'analytics-setup', title: 'Analytics Setup', icon: <FaCode /> },
                    { id: 'key-metrics', title: 'Key Metrics', icon: <FaChartPie /> },
                    { id: 'conversion-tracking', title: 'Conversion Tracking', icon: <FaExchangeAlt /> },
                    { id: 'user-journey', title: 'User Journey Analysis', icon: <FaFunnelDollar /> },
                    { id: 'ab-testing', title: 'A/B Testing', icon: <FaPercentage /> },
                    { id: 'optimization', title: 'CRO Process', icon: <FaRocket /> },
                    { id: 'reporting', title: 'Reporting', icon: <FaChartBar /> },
                    { id: 'tools', title: 'Analytics Tools', icon: <FaTools /> },
                    { id: 'faqs', title: 'FAQs', icon: <FaQuestion /> }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 ${
                        activeSection === item.id 
                          ? 'bg-red-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          // Set active section
                          setActiveSection(item.id);
                          // Close sidebar on mobile
                          setSidebarOpen(false);
                          
                          // Scroll to the element with offset for header
                          setTimeout(() => {
                            const headerOffset = 100; // Increased offset to ensure visibility
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                            
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }, 50); // Small delay to ensure DOM is ready
                        }
                      }}
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-sm">{item.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8 overflow-x-hidden">
          {/* Sticky Sidebar Table of Contents - Desktop Only */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="bg-gray-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Guide Contents</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', title: 'Introduction', icon: <FaChartLine /> },
                    { id: 'analytics-setup', title: 'Analytics Setup', icon: <FaCode /> },
                    { id: 'key-metrics', title: 'Key Metrics', icon: <FaChartPie /> },
                    { id: 'conversion-tracking', title: 'Conversion Tracking', icon: <FaExchangeAlt /> },
                    { id: 'user-journey', title: 'User Journey Analysis', icon: <FaFunnelDollar /> },
                    { id: 'ab-testing', title: 'A/B Testing', icon: <FaPercentage /> },
                    { id: 'optimization', title: 'CRO Process', icon: <FaRocket /> },
                    { id: 'reporting', title: 'Reporting', icon: <FaChartBar /> },
                    { id: 'tools', title: 'Analytics Tools', icon: <FaTools /> },
                    { id: 'faqs', title: 'FAQs', icon: <FaQuestion /> }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 ${
                        activeSection === item.id 
                          ? 'bg-red-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          // Set active section
                          setActiveSection(item.id);
                          
                          // Scroll to the element with offset for header
                          setTimeout(() => {
                            const headerOffset = 100; // Increased offset to ensure visibility
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                            
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }, 50); // Small delay to ensure DOM is ready
                        }
                      }}
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-sm">{item.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-6 bg-gradient-to-br from-red-900/60 to-blue-900/60 rounded-2xl p-6 border border-red-800/50">
                <h3 className="text-lg font-bold mb-3 text-white">Download Checklist</h3>
                <p className="text-sm text-gray-300 mb-4">Get our analytics implementation checklist to ensure proper setup.</p>
                <a 
                  href="/downloads/analytics-setup-template.pdf"
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <FaDownload className="mr-2" />
                  Download Checklist
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-full lg:max-w-4xl">
            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">The Power of Data-Driven Decisions</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  In the digital landscape, making decisions based on gut feelings is a recipe for wasted resources and missed opportunities. 
                  Proper analytics implementation and conversion optimization create a foundation for continuous improvement based on actual user behavior.
                </p>
                
                <div className="bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Why Analytics & Conversion Optimization Matter</h3>
                  <p className="text-lg text-gray-200 mb-4">
                    A properly implemented analytics and conversion strategy delivers clear advantages:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaLightbulb className="text-xl text-yellow-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Informed Decision Making</h4>
                      </div>
                      <p className="text-gray-300">
                        Replace assumptions with data-driven insights that reveal what actually works.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaChartLine className="text-xl text-green-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Higher ROI</h4>
                      </div>
                      <p className="text-gray-300">
                        Maximize returns by focusing resources on the highest-performing channels and tactics.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaUsers className="text-xl text-blue-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Better User Experience</h4>
                      </div>
                      <p className="text-gray-300">
                        Identify and fix user pain points to create smoother conversion journeys.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaRocket className="text-xl text-purple-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Continuous Improvement</h4>
                      </div>
                      <p className="text-gray-300">
                        Establish a systematic process for ongoing optimization and growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Common Analytics & Conversion Challenges</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {analyticsChallenges.map((challenge, index) => (
                      <div key={index} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-red-600 to-blue-600 p-3 rounded-lg flex-shrink-0">
                            {challenge.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">{challenge.title}</h4>
                            <p className="text-gray-300 text-sm">{challenge.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">About This Guide</h3>
                  <p className="text-gray-300 mb-6">
                    This comprehensive guide provides a framework for implementing analytics, tracking conversions, and optimizing your website 
                    for maximum results. Whether you're starting from scratch or refining your existing approach, these proven methods will help you 
                    establish a data-driven foundation for growth.
                  </p>
                  <div className="flex items-start mb-4">
                    <FaQuoteLeft className="text-3xl text-red-500 mr-4 flex-shrink-0" />
                    <blockquote className="text-lg text-gray-300 italic">
                      "Without data, you're just another person with an opinion."
                      <footer className="text-gray-400 mt-2 not-italic text-sm">— W. Edwards Deming, Data Science Pioneer</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>

            {/* Analytics Framework Sections */}
            {analyticsFramework.map((section) => (
              <section id={section.id} key={section.id} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 p-2 rounded-lg mr-4 flex-shrink-0">
                    {section.icon}
                  </span>
                  {section.title}
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl text-gray-300 mb-6">{section.description}</p>
                  
                  <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-8">
                    <div className="space-y-6">
                      {section.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                          <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                            <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                              {stepIndex + 1}
                            </span>
                            {step.title}
                          </h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {section.id === 'analytics-setup' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaCode className="mr-2 text-red-500" />
                        Google Analytics 4 Setup Code
                      </h4>
                      <p className="text-gray-300 mb-4">Place this code in the <code>&lt;head&gt;</code> section of your website:</p>
                      <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>`}</code>
                        </pre>
                      </div>
                      <p className="text-gray-400 mt-2 text-sm">Replace G-XXXXXXXXXX with your actual Google Analytics 4 measurement ID.</p>
                    </div>
                  )}

                  {section.id === 'key-metrics' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaChartPie className="mr-2 text-red-500" />
                        Key Metrics by Business Type
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-700">
                          <thead>
                            <tr className="bg-gray-800">
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Business Type</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Primary KPIs</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Secondary Metrics</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 px-4 font-medium">E-commerce</td>
                              <td className="py-2 px-4">
                                <ul className="list-disc pl-4 text-sm">
                                  <li>Conversion Rate</li>
                                  <li>Average Order Value</li>
                                  <li>Revenue Per User</li>
                                  <li>ROAS</li>
                                </ul>
                              </td>
                              <td className="py-2 px-4">
                                <ul className="list-disc pl-4 text-sm">
                                  <li>Cart Abandonment Rate</li>
                                  <li>Product Page Views</li>
                                  <li>Checkout Funnel Completion</li>
                                </ul>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 px-4 font-medium">Lead Generation</td>
                              <td className="py-2 px-4">
                                <ul className="list-disc pl-4 text-sm">
                                  <li>Cost Per Lead</li>
                                  <li>Lead-to-Customer Rate</li>
                                  <li>Form Completion Rate</li>
                                </ul>
                              </td>
                              <td className="py-2 px-4">
                                <ul className="list-disc pl-4 text-sm">
                                  <li>Traffic-to-Lead Ratio</li>
                                  <li>Lead Quality Score</li>
                                  <li>Channel Effectiveness</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 font-medium">SaaS</td>
                              <td className="py-2 px-4">
                                <ul className="list-disc pl-4 text-sm">
                                  <li>Trial-to-Paid Conversion</li>
                                  <li>MRR/ARR</li>
                                  <li>Customer Acquisition Cost</li>
                                  <li>Churn Rate</li>
                                </ul>
                              </td>
                              <td className="py-2 px-4">
                                <ul className="list-disc pl-4 text-sm">
                                  <li>Customer Lifetime Value</li>
                                  <li>Feature Adoption Rate</li>
                                  <li>Time to Value</li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {section.id === 'conversion-tracking' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaExchangeAlt className="mr-2 text-red-500" />
                        Sample Event Tracking Code
                      </h4>
                      <p className="text-gray-300 mb-4">JavaScript code for tracking a form submission event:</p>
                      <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`// Form submission event tracking
document.getElementById('contact-form').addEventListener('submit', function() {
  gtag('event', 'form_submission', {
    'form_id': 'contact-form',
    'form_name': 'Contact Form',
    'form_destination': 'contact-success.html'
  });
});`}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {section.id === 'user-journey' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaFunnelDollar className="mr-2 text-red-500" />
                        Conversion Funnel Example
                      </h4>
                      <div className="relative bg-gray-900 rounded-lg p-6 py-12">
                        <div className="max-w-lg mx-auto">
                          {/* Funnel stages */}
                          <div className="relative mb-2">
                            <div className="w-full h-16 bg-blue-900 rounded-t-lg flex items-center justify-center">
                              <span className="text-white font-bold">Homepage Visitors</span>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 px-2 py-1 rounded text-xs">100%</span>
                            </div>
                          </div>
                          
                          <div className="relative mb-2 w-[85%] mx-auto">
                            <div className="w-full h-16 bg-blue-800 flex items-center justify-center">
                              <span className="text-white font-bold">Product Page Views</span>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 px-2 py-1 rounded text-xs">85%</span>
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-sm flex items-center">
                              <span>-15%</span>
                              <FaArrowRight className="ml-1" />
                            </div>
                          </div>
                          
                          <div className="relative mb-2 w-[40%] mx-auto">
                            <div className="w-full h-16 bg-blue-700 flex items-center justify-center">
                              <span className="text-white font-bold">Add to Cart</span>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 px-2 py-1 rounded text-xs">40%</span>
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-sm flex items-center">
                              <span>-45%</span>
                              <FaArrowRight className="ml-1" />
                            </div>
                          </div>
                          
                          <div className="relative mb-2 w-[25%] mx-auto">
                            <div className="w-full h-16 bg-blue-600 flex items-center justify-center">
                              <span className="text-white font-bold">Checkout Started</span>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 px-2 py-1 rounded text-xs">25%</span>
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-sm flex items-center">
                              <span>-15%</span>
                              <FaArrowRight className="ml-1" />
                            </div>
                          </div>
                          
                          <div className="relative w-[15%] mx-auto">
                            <div className="w-full h-16 bg-blue-500 rounded-b-lg flex items-center justify-center">
                              <span className="text-white font-bold">Purchase</span>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-400 px-2 py-1 rounded text-xs">15%</span>
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-sm flex items-center">
                              <span>-10%</span>
                              <FaArrowRight className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 mt-2 text-sm text-center">Identifying the largest drop-offs helps prioritize optimization efforts.</p>
                    </div>
                  )}

                  {section.id === 'ab-testing' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaPercentage className="mr-2 text-red-500" />
                        A/B Test Hypothesis Framework
                      </h4>
                      <div className="bg-gray-900 p-5 rounded-lg">
                        <p className="text-gray-300 mb-4">Use this framework to create clear, testable hypotheses:</p>
                        <div className="bg-gray-800 p-4 rounded-lg mb-6">
                          <p className="text-white mb-2"><strong>Hypothesis Format:</strong></p>
                          <p className="text-gray-300 italic">By changing [element] from [control] to [variation], we expect to see [outcome] because [rationale].</p>
                        </div>
                        
                        <div className="border-t border-gray-700 pt-4 mt-4">
                          <p className="text-white mb-2"><strong>Example:</strong></p>
                          <p className="text-gray-300">By changing our primary CTA button from green to red, we expect to see a 10% increase in click-through rate because red creates more visual contrast on our predominantly blue page design and may create a stronger sense of urgency.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'optimization' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaRocket className="mr-2 text-red-500" />
                        PIE Prioritization Framework
                      </h4>
                      <div className="bg-gray-900 p-5 rounded-lg">
                        <p className="text-gray-300 mb-4">The PIE framework helps prioritize which elements to optimize first:</p>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h5 className="text-red-400 font-bold mb-2">Potential</h5>
                            <p className="text-sm text-gray-300">How much improvement can be made on this page or element?</p>
                            <div className="mt-3 flex items-center">
                              <span className="text-xs text-gray-400 mr-2">Low</span>
                              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full rounded-full" style={{width: '70%'}}></div>
                              </div>
                              <span className="text-xs text-gray-400 ml-2">High</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h5 className="text-blue-400 font-bold mb-2">Importance</h5>
                            <p className="text-sm text-gray-300">How valuable is the traffic to this page? How many visitors will be affected?</p>
                            <div className="mt-3 flex items-center">
                              <span className="text-xs text-gray-400 mr-2">Low</span>
                              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full" style={{width: '85%'}}></div>
                              </div>
                              <span className="text-xs text-gray-400 ml-2">High</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h5 className="text-green-400 font-bold mb-2">Ease</h5>
                            <p className="text-sm text-gray-300">How difficult will it be to implement the test or change?</p>
                            <div className="mt-3 flex items-center">
                              <span className="text-xs text-gray-400 mr-2">Hard</span>
                              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full rounded-full" style={{width: '40%'}}></div>
                              </div>
                              <span className="text-xs text-gray-400 ml-2">Easy</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                          <p className="text-sm text-gray-300">Calculate a PIE score (1-10 for each factor) and prioritize opportunities with the highest average scores.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Analytics Tools Section */}
            <section id="tools" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
                <span className="bg-gradient-to-r from-red-600 to-blue-600 p-2 rounded-lg mr-4 flex-shrink-0">
                  <FaTools />
                </span>
                Analytics & Conversion Tools
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-8">
                  The right tools can significantly enhance your analytics and optimization efforts across implementation, analysis, and testing.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {analyticsTools.map((tool, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tool.category === 'Analytics' ? 'bg-blue-900 text-blue-200' :
                          tool.category === 'Implementation' ? 'bg-purple-900 text-purple-200' :
                          tool.category === 'Behavior' ? 'bg-green-900 text-green-200' :
                          tool.category === 'Testing' ? 'bg-yellow-900 text-yellow-200' :
                          tool.category === 'Reporting' ? 'bg-orange-900 text-orange-200' :
                          'bg-red-900 text-red-200'
                        }`}>
                          {tool.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{tool.description}</p>
                      
                      <div className="mb-5">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href={tool.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                      >
                        Visit Website <FaArrowRight className="ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Common questions about analytics implementation and conversion optimization.
                </p>

                <FaqAccordion 
                  faqs={faqItems}
                />

                {/* FAQ Schema for SEO */}
                <script 
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "QAContent",
                      "mainEntity": faqItems.map(item => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": item.answer
                        }
                      }))
                    })
                  }}
                />
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-red-900 to-blue-900 rounded-3xl p-12 text-center border border-red-700">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Need Help With Analytics & Conversion?
                  </h2>
                  <p className="text-xl text-red-100 mb-8 leading-relaxed">
                    Our team of analytics experts and conversion specialists can help you implement proper tracking and optimize your website for maximum results.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaCode className="text-3xl text-red-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Analytics Setup</h3>
                      <p className="text-sm text-red-200">Proper implementation of tracking and goals</p>
                    </div>
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaChartBar className="text-3xl text-blue-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Performance Analysis</h3>
                      <p className="text-sm text-blue-200">Insightful reporting and recommendations</p>
                    </div>
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaRocket className="text-3xl text-purple-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">CRO Services</h3>
                      <p className="text-sm text-purple-200">Data-driven optimization that drives growth</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <span className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                        Get a Free Analytics Audit
                      </span>
                    </Link>
                    <Link href="/services">
                      <span className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                        View Our Services
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Sharing */}
            <section className="mb-16">
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Share This Guide</h3>
                <p className="text-gray-300 mb-6">
                  Help others improve their analytics and conversion rates
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=Analytics & Conversion Guide: Master Data-Driven Growth&url=${encodeURIComponent('https://www.spotcircuit.com/resources/analytics-conversion-guide')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                  >
                    <FaShare className="mr-2" />
                    Share on Twitter
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('https://www.spotcircuit.com/resources/analytics-conversion-guide');
                      alert('Link copied to clipboard!');
                    }}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                  >
                    <FaCopy className="mr-2" />
                    Copy Link
                  </button>
                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined' && 'localStorage' in window) {
                        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
                        const bookmark = {
                          title: 'Analytics & Conversion Guide',
                          url: '/resources/analytics-conversion-guide',
                          date: new Date().toISOString()
                        };
                        bookmarks.push(bookmark);
                        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                        alert('Guide bookmarked!');
                      }
                    }}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                  >
                    <FaBookmark className="mr-2" />
                    Bookmark
                  </button>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Related Resources</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/resources/technical-seo-checklist" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-purple-400 mb-2">Technical SEO Checklist</h4>
                    <p className="text-sm text-gray-300">Complete guide to technical website optimization</p>
                    <span className="text-xs text-purple-500 mt-2 inline-block">Read Guide →</span>
                  </Link>
                  <Link href="/resources/content-strategy-blueprint" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-yellow-400 mb-2">Content Strategy Blueprint</h4>
                    <p className="text-sm text-gray-300">Create content that converts visitors into customers</p>
                    <span className="text-xs text-yellow-500 mt-2 inline-block">Read Guide →</span>
                  </Link>
                  <Link href="/resources/ai-marketing-tools" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-blue-400 mb-2">AI Marketing Tools Directory</h4>
                    <p className="text-sm text-gray-300">Explore AI tools to enhance your marketing efforts</p>
                    <span className="text-xs text-blue-500 mt-2 inline-block">Read Guide →</span>
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalyticsConversionGuide;