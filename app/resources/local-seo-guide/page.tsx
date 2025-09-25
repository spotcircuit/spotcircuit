import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'resource',
  service: 'local-seo-guide'
});

"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedResources, { ResourceItem } from '@/components/RelatedResources';
import ResourceNavigation from '@/components/ResourceNavigation';
import { 
  FaMapMarkerAlt, 
  FaStore, 
  FaChartLine, 
  FaCheckCircle, 
  FaLightbulb, 
  FaFileAlt, 
  FaChartBar, 
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaSearch,
  FaMobileAlt,
  FaListAlt,
  FaQuestion,
  FaVideo,
  FaTools,
  FaLink,
  FaCog,
  FaCopy,
  FaDownload,
  FaBookmark,
  FaShare,
  FaGoogle,
  FaBuilding,
  FaComments,
  FaCamera,
  FaThumbsUp,
  FaGlobe,
  FaClipboardList,
  FaNewspaper,
  FaCalendarAlt
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
import { metadata } from './metadata';

const LocalSEOGuide = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // Define the related resources for different sections
  const relatedResources: {[key: string]: ResourceItem[]} = {
    introduction: [
      {
        title: "AI Search Optimization Guide",
        description: "Learn how to optimize your content for AI-powered search results",
        href: "/resources/ai-search-optimization",
        color: "blue",
        ctaText: "Explore Guide"
      },
      {
        title: "Content Strategy Blueprint",
        description: "Create a comprehensive content strategy for maximum visibility",
        href: "/resources/content-strategy-blueprint",
        color: "green",
        ctaText: "View Blueprint"
      },
      {
        title: "Technical SEO Checklist",
        description: "Ensure your website's technical foundation is solid",
        href: "/resources/technical-seo-checklist",
        color: "purple",
        ctaText: "Get Checklist"
      }
    ],
    "google-business-profile": [
      {
        title: "Analytics & Conversion Guide",
        description: "Track your local SEO performance and optimize for conversions",
        href: "/resources/analytics-conversion-guide",
        color: "purple",
        ctaText: "Read Guide"
      },
      {
        title: "AI Marketing Tools",
        description: "Discover tools to enhance your local business presence",
        href: "/resources/ai-marketing-tools",
        color: "blue",
        ctaText: "Explore Tools"
      },
      {
        title: "Content Strategy Blueprint",
        description: "Learn how to create content that supports your local SEO",
        href: "/resources/content-strategy-blueprint",
        color: "green",
        ctaText: "View Blueprint"
      }
    ],
    "local-content-strategy": [
      {
        title: "Content Strategy Blueprint",
        description: "Comprehensive guide to creating effective content",
        href: "/resources/content-strategy-blueprint",
        color: "green",
        ctaText: "View Blueprint"
      },
      {
        title: "AI Search Optimization",
        description: "Optimize your local content for AI-powered search",
        href: "/resources/ai-search-optimization",
        color: "blue",
        ctaText: "Learn More"
      },
      {
        title: "Technical SEO Checklist",
        description: "Technical SEO best practices for local businesses",
        href: "/resources/technical-seo-checklist",
        color: "purple",
        ctaText: "Get Checklist"
      }
    ],
    "citation-building": [
      {
        title: "Technical SEO Checklist",
        description: "Ensure your website meets all technical requirements",
        href: "/resources/technical-seo-checklist",
        color: "purple",
        ctaText: "View Checklist"
      },
      {
        title: "Analytics & Conversion Guide",
        description: "Track the impact of your citation building efforts",
        href: "/resources/analytics-conversion-guide",
        color: "blue",
        ctaText: "Read Guide"
      },
      {
        title: "AI Marketing Tools",
        description: "Tools to help manage and monitor your citations",
        href: "/resources/ai-marketing-tools",
        color: "green",
        ctaText: "Discover Tools"
      }
    ],
    "review-management": [
      {
        title: "Analytics & Conversion Guide",
        description: "Measure the impact of reviews on your conversion rates",
        href: "/resources/analytics-conversion-guide",
        color: "blue",
        ctaText: "Read Guide"
      },
      {
        title: "AI Marketing Tools",
        description: "Discover tools for managing and automating reviews",
        href: "/resources/ai-marketing-tools",
        color: "green",
        ctaText: "Explore Tools"
      },
      {
        title: "Content Strategy Blueprint",
        description: "Learn how to incorporate reviews into your content",
        href: "/resources/content-strategy-blueprint",
        color: "purple",
        ctaText: "View Blueprint"
      }
    ]
  };

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
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
      
      // Get all section elements
      const sections = [
        'introduction',
        'local-seo-fundamentals',
        'google-business-profile',
        'local-content-strategy',
        'citation-building',
        'review-management',
        'local-link-building',
        'local-schema-markup',
        'measuring-local-success',
        'local-seo-tools',
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
  
  // Copy code function
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Local SEO pain points for service businesses
  const painPoints = [
    { 
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      title: "Invisible on Maps", 
      description: "Your business isn't showing up in Google Maps, even for relevant local searches in your service area."
    },
    { 
      icon: <FaSearch className="text-2xl text-white" />,
      title: "Low Local Rankings", 
      description: "You're stuck on page 2 or 3 of search results for important local service keywords."
    },
    { 
      icon: <FaUsers className="text-2xl text-white" />,
      title: "Competitors Dominating", 
      description: "Your competitors consistently outrank you in local searches, even with inferior service quality."
    },
    { 
      icon: <FaComments className="text-2xl text-white" />,
      title: "Few Reviews", 
      description: "Your business lacks the quantity and quality of reviews needed to build local search credibility."
    },
    { 
      icon: <FaMobileAlt className="text-2xl text-white" />,
      title: "Poor Mobile Experience", 
      description: "Your website isn't optimized for the mobile devices that most local customers use."
    },
    { 
      icon: <FaClipboardList className="text-2xl text-white" />,
      title: "Inconsistent Citations", 
      description: "Your business information varies across directories, harming your local search visibility."
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "What is local SEO and why is it important for service businesses?",
      answer: "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. It's particularly important for service businesses because most customers search for local services like plumbing, HVAC, electrical work, and roofing when they have an immediate need. Showing up prominently in these searches directly impacts your revenue potential. Unlike traditional SEO, local SEO focuses on appearing in the 'Local Pack,' local map listings, and optimizing for 'near me' searches."
    },
    {
      question: "How long does it take to see results from local SEO efforts?",
      answer: "Local SEO results typically begin to appear faster than traditional SEO, with initial improvements often visible within 30-90 days. However, significant results usually take 3-6 months, depending on your market competition, starting position, and the consistency of your optimization efforts. Some high-competition markets may take 6-12 months to see dramatic improvements. The good news is that once achieved, local rankings tend to be more stable than general search rankings."
    },
    {
      question: "What's more important: Google Business Profile optimization or website optimization?",
      answer: "Both are essential components of a successful local SEO strategy, but they serve different purposes. Your Google Business Profile (GBP) is crucial for appearing in the Local Pack and Maps results, and often provides the first impression to potential customers. Your website builds authority and provides detailed information to convert prospects into customers. For most service businesses, we recommend starting with GBP optimization for quick wins, then focusing on comprehensive website optimization for long-term success."
    },
    {
      question: "How many citations do I need to build for my local service business?",
      answer: "Quality trumps quantity with citations. Focus first on the 'core four' platforms (Google Business Profile, Bing Places, Apple Maps, and Yelp), then add 15-20 high-authority general directories (like Yellow Pages, BBB, and Angie's List), and finally add 10-15 industry-specific directories relevant to your service category. Maintaining consistent NAP (Name, Address, Phone) information across all platforms is more important than building hundreds of low-quality citations."
    },
    {
      question: "How can I get more Google reviews for my service business?",
      answer: "Implement a systematic review generation process: 1) Ask at the right moment (usually right after providing excellent service), 2) Make it easy with direct review links, 3) Create review cards or follow-up emails with QR codes, 4) Train your team to request reviews as part of the service wrap-up, 5) Consider offering incentives (but never pay for reviews), and 6) Respond promptly to all reviews, positive and negative. Consistent effort is key—aim to get 2-5 new reviews weekly rather than 20 at once."
    },
    {
      question: "Do I need different local SEO strategies for different service areas?",
      answer: "Yes, especially if you serve multiple distinct areas. For your primary location (where your physical office is located), focus on comprehensive GBP optimization and local content. For secondary service areas, create dedicated location-specific landing pages with unique content, local testimonials, and area-specific offers. Avoid simply changing the city name across multiple pages. For businesses serving a wide radius, consider a radius-based strategy rather than creating too many city pages, which could appear spammy to Google."
    },
    {
      question: "How should I handle local SEO for a service business without a storefront?",
      answer: "For service-area businesses without a public office, you can still create a powerful local presence: 1) Set up a Google Business Profile as a service-area business, 2) Use your real business address (even if it's your home) but hide it in your GBP settings, 3) Clearly define your service areas in GBP, 4) Create service-area pages on your website with localized content, 5) Build citations that allow service-area designations, and 6) Gather reviews that mention specific neighborhoods or cities you serve."
    },
    {
      question: "What tools does SpotCircuit provide to help with local SEO?",
      answer: "SpotCircuit offers a comprehensive suite of local SEO tools specifically designed for service businesses: 1) Local Ranking Tracker that monitors positions for service + location keywords, 2) Citation Builder and Monitor to maintain consistent business information across directories, 3) Review Generation Platform with customizable templates and QR codes, 4) Competitor Analysis Tool for local market insights, 5) Local Content Generator for service area pages, and 6) Local Schema Markup Generator for technical optimization. All these tools are included in our service packages or available as standalone solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">      
      <main className="pt-20 pb-20">
        {/* Hero section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-black py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                The Ultimate Local SEO Guide for Service Businesses
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Master proven strategies to dominate local search, attract nearby customers, and outrank your competition
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a href="#google-business-profile" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                  <FaGoogle className="mr-2" />
                  Google Business Optimization
                </a>
                
                <a href="#review-management" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                  <FaStar className="mr-2" />
                  Review Management
                </a>
                
                <a href="#citation-building" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                  <FaLink className="mr-2" />
                  Citation Building
                </a>
              </div>
              
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <HiOutlineClock className="text-lg" />
                  <span>25 minute read</span>
                  <span className="mx-2">•</span>
                  <FaFileAlt className="text-lg" />
                  <span>Updated June 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resource Navigation */}
        <ResourceNavigation currentPage="local-seo-guide" className="mb-12" />
        
        {/* Main content with sidebar */}
        <div className="container mx-auto px-4 pt-12 flex flex-col lg:flex-row gap-8 overflow-x-hidden">
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
                  <h3 className="text-xl font-bold mb-6 text-white">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a 
                      href="#introduction" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'introduction' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      Introduction
                    </a>
                    <a 
                      href="#local-seo-fundamentals" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'local-seo-fundamentals' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      Local SEO Fundamentals
                    </a>
                    <a 
                      href="#google-business-profile" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'google-business-profile' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      Google Business Profile
                    </a>
                    <a 
                      href="#local-content-strategy" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'local-content-strategy' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      Local Content Strategy
                    </a>
                    <a 
                      href="#citation-building" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'citation-building' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      Citation Building
                    </a>
                    <a 
                      href="#review-management" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'review-management' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      Review Management
                    </a>
                    <a 
                      href="#faqs" 
                      className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === 'faqs' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
                    >
                      FAQs
                    </a>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <nav className="bg-gray-900 rounded-xl p-5">
                <h3 className="text-lg font-bold mb-4 text-gray-200">Guide Contents</h3>
                <ul className="space-y-1">
                  <li>
                    <a 
                      href="#introduction" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'introduction' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#local-seo-fundamentals" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'local-seo-fundamentals' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Local SEO Fundamentals
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#google-business-profile" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'google-business-profile' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Google Business Profile
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#local-content-strategy" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'local-content-strategy' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Local Content Strategy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#citation-building" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'citation-building' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Citation Building
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#review-management" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'review-management' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Review Management
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#local-link-building" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'local-link-building' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Local Link Building
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#local-schema-markup" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'local-schema-markup' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Local Schema Markup
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#measuring-local-success" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'measuring-local-success' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Measuring Success
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#local-seo-tools" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'local-seo-tools' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      Local SEO Tools
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#faqs" 
                      className={`block px-3 py-2 rounded-lg transition-colors ${activeSection === 'faqs' ? 'bg-blue-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-8 bg-blue-900 rounded-xl p-5">
                <h3 className="text-lg font-bold mb-3">Get Personalized Help</h3>
                <p className="text-sm text-gray-300 mb-4">Need custom local SEO guidance for your service business? We can help.</p>
                <Link href="/contact">
                  <span className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Schedule Free Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <article className="flex-1 max-w-full lg:max-w-4xl">
            <div className="space-y-16">
              {/* Introduction section */}
              <section id="introduction" className="bg-gray-900 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Why Local SEO Matters for Service Businesses</h2>
                
                <p className="text-gray-300 mb-6">
                  For service businesses—from plumbers and electricians to HVAC contractors and roofers—local search visibility 
                  isn't just another marketing channel. It's often the primary way new customers find and choose your services. 
                  With 46% of all Google searches having local intent and 88% of consumers who search for a local business on 
                  mobile visiting or calling within 24 hours, mastering local SEO translates directly to revenue.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-900 bg-opacity-40 p-6 rounded-lg border border-blue-700">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold">78%</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      of local mobile searches result in offline purchases within 24 hours
                    </p>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-40 p-6 rounded-lg border border-blue-700">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                        <FaSearch className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold">46%</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      of all Google searches have local intent
                    </p>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-40 p-6 rounded-lg border border-blue-700">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                        <FaStore className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold">92%</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      of consumers choose businesses on the first page of local search results
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaLightbulb className="text-yellow-400 mr-3" />
                    Local Search vs. Traditional SEO
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black bg-opacity-30 p-5 rounded-lg">
                      <h4 className="font-bold mb-3 text-blue-400">Traditional SEO</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          Focuses on ranking for general keywords
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          Competition is global or national
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          Results appear in standard organic listings
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          Often requires months to see significant results
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          Primary factors: content, backlinks, technical SEO
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-black bg-opacity-30 p-5 rounded-lg">
                      <h4 className="font-bold mb-3 text-green-400">Local SEO</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Targets location-specific keywords (e.g., "plumber in Boston")
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Competition limited to your geographic area
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Results appear in map pack, local pack, and "near me" searches
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Can see results in days or weeks (not months)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Primary factors: proximity, relevance, prominence, reviews
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Common Local SEO Challenges for Service Businesses</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {painPoints.map((point, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                          {point.icon}
                        </div>
                        <h4 className="text-lg font-bold mb-2">{point.title}</h4>
                        <p className="text-gray-400 text-sm">{point.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaDownload className="text-blue-400 mr-3" />
                    Free Local SEO Checklist
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    Get a head start on your local SEO implementation with our comprehensive checklist for service businesses.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/resources/downloads/local-seo-checklist.pdf" 
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <FaDownload className="mr-2" />
                      Download Checklist (PDF)
                    </a>
                    
                    <a 
                      href="/resources/downloads/local-seo-checklist.xlsx" 
                      target="_blank"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <FaFileAlt className="mr-2" />
                      Download Spreadsheet (Excel)
                    </a>
                  </div>
                </div>
                
                <RelatedResources resources={relatedResources.introduction} title="Explore Related Resources" />
              </section>

              {/* Local Link Building section */}
              <section id="local-link-building" className="bg-gray-900 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Local Link Building</h2>
                
                <p className="text-gray-300 mb-6">
                  Building high-quality local backlinks helps establish your business as an authority in your service area 
                  and improves your organic search rankings for local queries.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Local Link Building Opportunities</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                        <FaLink className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Local Business Associations</h4>
                        <p className="text-sm text-gray-300">
                          Join your Chamber of Commerce, BNI chapter, or industry-specific local associations.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                        <FaLink className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Sponsorships</h4>
                        <p className="text-sm text-gray-300">
                          Sponsor local events, sports teams, or community initiatives to earn backlinks.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                        <FaLink className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Local News Coverage</h4>
                        <p className="text-sm text-gray-300">
                          Create newsworthy stories about your business to get featured in local publications.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                        <FaLink className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Community Involvement</h4>
                        <p className="text-sm text-gray-300">
                          Participate in community service and charitable events to earn mentions from organizations.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                        <FaLink className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Guest Blogging</h4>
                        <p className="text-sm text-gray-300">
                          Write expert articles for local blogs, news sites, and industry publications.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                        <FaLink className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Partnerships with Complementary Businesses</h4>
                        <p className="text-sm text-gray-300">
                          Create referral partnerships with non-competing local businesses for mutual linking.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              
              {/* Local Schema Markup section */}
              <section id="local-schema-markup" className="bg-gray-900 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Local Schema Markup</h2>
                
                <p className="text-gray-300 mb-6">
                  Schema markup helps search engines understand your business information, which can improve your local search visibility
                  and enable rich results in search listings.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Essential Local Business Schema</h3>
                  
                  <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <button 
                        onClick={() => copyToClipboard(`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://www.yourbusiness.com/images/logo.jpg",
  "@id": "https://www.yourbusiness.com",
  "url": "https://www.yourbusiness.com",
  "telephone": "+15551234567",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/yourbusiness",
    "https://www.twitter.com/yourbusiness",
    "https://www.instagram.com/yourbusiness"
  ]
}
</script>`, "basic-schema")} 
                        className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors"
                      >
                        {copiedCode === "basic-schema" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre className="text-green-300 text-xs overflow-x-auto">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://www.yourbusiness.com/images/logo.jpg",
  "@id": "https://www.yourbusiness.com",
  "url": "https://www.yourbusiness.com",
  "telephone": "+15551234567",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/yourbusiness",
    "https://www.twitter.com/yourbusiness",
    "https://www.instagram.com/yourbusiness"
  ]
}
</script>`}
                    </pre>
                  </div>
                </div>
              </section>
              
              {/* Measuring Local Success section */}
              <section id="measuring-local-success" className="bg-gray-900 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Measuring Local SEO Success</h2>
                
                <p className="text-gray-300 mb-6">
                  Tracking the right metrics helps you understand the effectiveness of your local SEO efforts and identify
                  areas for improvement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border border-blue-800">
                    <div className="bg-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FaChartBar className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ranking Metrics</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Local pack positions
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Map rankings for key terms
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Organic rankings for "city + service" keywords
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg border border-purple-800">
                    <div className="bg-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FaGoogle className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">GBP Metrics</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Search views
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Clicks (website, directions, calls)
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Photos views
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Review quantity and average rating
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900 bg-opacity-30 p-6 rounded-lg border border-green-800">
                    <div className="bg-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FaChartLine className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Conversion Metrics</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Phone calls from local search
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Form submissions from local visitors
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Direction requests
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Local landing page conversions
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Local SEO Tools section */}
              <section id="local-seo-tools" className="bg-gray-900 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Essential Local SEO Tools</h2>
                
                <p className="text-gray-300 mb-6">
                  The right tools can help you implement, manage, and track your local SEO efforts more efficiently.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Free Tools</h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-600 p-2 rounded-full mr-3">
                          <FaGoogle className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Google Business Profile Manager</h4>
                          <p className="text-xs text-gray-400">Manage your business listing and view insights</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-blue-600 p-2 rounded-full mr-3">
                          <FaSearch className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Google Search Console</h4>
                          <p className="text-xs text-gray-400">Monitor search performance and technical issues</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-blue-600 p-2 rounded-full mr-3">
                          <FaChartBar className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Google Analytics</h4>
                          <p className="text-xs text-gray-400">Track local traffic and conversion metrics</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-blue-600 p-2 rounded-full mr-3">
                          <FaTools className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Schema Markup Generator</h4>
                          <p className="text-xs text-gray-400">Create structured data for your local business</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Paid Tools</h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-600 p-2 rounded-full mr-3">
                          <FaChartLine className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">BrightLocal</h4>
                          <p className="text-xs text-gray-400">Track local rankings, manage citations, and monitor reviews</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-600 p-2 rounded-full mr-3">
                          <FaLink className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Moz Local</h4>
                          <p className="text-xs text-gray-400">Distribute and manage business listings across directories</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-600 p-2 rounded-full mr-3">
                          <FaStar className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Grade.us</h4>
                          <p className="text-xs text-gray-400">Generate, monitor, and manage customer reviews</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-600 p-2 rounded-full mr-3">
                          <FaSearch className="text-sm text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Semrush</h4>
                          <p className="text-xs text-gray-400">Research local keywords and competitor strategies</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQs section */}
              <section id="faqs" className="bg-gray-900 rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
                
                <p className="text-gray-300 mb-8">
                  Get answers to common questions about local SEO for service businesses.
                </p>
                
                <FaqAccordion 
                  faqs={faqItems}
                  title="Frequently Asked Questions" 
                  subtitle="Get answers to common questions about local SEO for service businesses." 
                />
                
                <div className="mt-10 bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Need More Help With Your Local SEO?</h3>
                  
                  <p className="text-gray-300 mb-5">
                    SpotCircuit specializes in local SEO for service businesses. Our team can help you implement all the strategies outlined in this guide.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="text-blue-400 mb-2">
                        <FaMapMarkerAlt className="text-2xl" />
                      </div>
                      <h4 className="font-bold mb-1">Map Pack Domination</h4>
                      <p className="text-sm text-gray-400">Get your business in the top 3 Google Map results for your target keywords.</p>
                    </div>
                    
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="text-green-400 mb-2">
                        <FaStar className="text-2xl" />
                      </div>
                      <h4 className="font-bold mb-1">Review Generation</h4>
                      <p className="text-sm text-gray-400">Automated systems to consistently generate 5-star reviews from happy customers.</p>
                    </div>
                    
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="text-purple-400 mb-2">
                        <FaLink className="text-2xl" />
                      </div>
                      <h4 className="font-bold mb-1">Citation Building</h4>
                      <p className="text-sm text-gray-400">Get consistent business listings across all major directories and platforms.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <span className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                        Get a Free Local SEO Audit
                      </span>
                    </Link>
                    
                    <Link href="/booking">
                      <span className="block text-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors">
                        Schedule a Consultation
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
        
        {/* All Resources Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Explore Our Resource Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-search-optimization" className="block bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">AI Search Optimization</h3>
                  <p className="text-gray-400 text-sm mb-4">Master the strategies for getting your content cited by AI platforms like ChatGPT and Claude</p>
                  <span className="text-blue-400 text-sm flex items-center">Read Guide <FaArrowRight className="ml-1 text-xs" /></span>
                </div>
              </Link>
              
              <Link href="/resources/content-strategy-blueprint" className="block bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Content Strategy Blueprint</h3>
                  <p className="text-gray-400 text-sm mb-4">Build a comprehensive content framework that attracts visitors and converts them into customers</p>
                  <span className="text-green-400 text-sm flex items-center">View Blueprint <FaArrowRight className="ml-1 text-xs" /></span>
                </div>
              </Link>
              
              <Link href="/resources/analytics-conversion-guide" className="block bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Analytics & Conversion Guide</h3>
                  <p className="text-gray-400 text-sm mb-4">Turn your website visitors into customers with data-driven optimization techniques</p>
                  <span className="text-purple-400 text-sm flex items-center">Read Guide <FaArrowRight className="ml-1 text-xs" /></span>
                </div>
              </Link>
              
              <Link href="/resources/ai-marketing-tools" className="block bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="bg-gradient-to-r from-yellow-600 to-amber-600 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">AI Marketing Tools Directory</h3>
                  <p className="text-gray-400 text-sm mb-4">Discover the best AI tools to enhance your marketing efficiency and results</p>
                  <span className="text-yellow-400 text-sm flex items-center">View Directory <FaArrowRight className="ml-1 text-xs" /></span>
                </div>
              </Link>
              
              <Link href="/resources/local-seo-guide" className="block bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Local SEO Guide</h3>
                  <p className="text-gray-400 text-sm mb-4">Dominate local search results with strategies tailored for service businesses</p>
                  <span className="text-cyan-400 text-sm flex items-center">Read Guide <FaArrowRight className="ml-1 text-xs" /></span>
                </div>
              </Link>
              
              <Link href="/resources/technical-seo-checklist" className="block bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Technical SEO Checklist</h3>
                  <p className="text-gray-400 text-sm mb-4">Ensure your website's technical foundation is solid with our comprehensive checklist</p>
                  <span className="text-red-400 text-sm flex items-center">View Checklist <FaArrowRight className="ml-1 text-xs" /></span>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link href="/resources">
                <span className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors">
                  View All Resources
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>    </div>
  );
};

export default LocalSEOGuide;