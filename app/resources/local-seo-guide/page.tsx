"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
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
  FaClipboardList
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

const LocalSEOGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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
      <Header />
      
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
        
        {/* Main content with sidebar */}
        <div className="container mx-auto px-4 pt-12 flex flex-col lg:flex-row gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
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
          <div className="flex-1">
            {/* ... Content sections go here ... */}
            <div className="space-y-16">
              {/* Introduction section */}
              <section id="introduction">
                {/* Section content */}
              </section>

              {/* More sections... */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalSEOGuide;
