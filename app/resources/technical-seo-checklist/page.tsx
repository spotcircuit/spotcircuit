"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import { 
  FaCode,
  FaLaptopCode,
  FaChartLine, 
  FaCheckCircle, 
  FaLightbulb, 
  FaFileAlt, 
  FaChartBar, 
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaCloudDownloadAlt,
  FaSearch,
  FaMobileAlt,
  FaListAlt,
  FaQuestion,
  FaVideo,
  FaTools,
  FaDatabase,
  FaCog,
  FaCopy,
  FaDownload,
  FaExclamationTriangle,
  FaShare,
  FaWrench,
  FaBolt,
  FaLock,
  FaBookmark,
  FaTachometerAlt,
  FaLink,
  FaSitemap
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

const TechnicalSEOChecklist: React.FC = () => {
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
      const scrollPosition = window.scrollY + 100;
      
      // Get all section elements
      const sections = [
        'introduction',
        'crawlability',
        'indexation',
        'mobile-friendliness',
        'page-speed',
        'security',
        'structured-data',
        'website-architecture',
        'technical-audit-tools',
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

  // Technical SEO common issues
  const technicalIssues = [
    { 
      icon: <FaSearch className="text-2xl text-white" />,
      title: "Poor Crawlability", 
      description: "Search engines can't properly crawl your website due to issues with robots.txt, sitemap, or internal linking."
    },
    { 
      icon: <FaMobileAlt className="text-2xl text-white" />,
      title: "Not Mobile-Friendly", 
      description: "Your website provides a poor experience on mobile devices, hurting rankings and user engagement."
    },
    { 
      icon: <FaBolt className="text-2xl text-white" />,
      title: "Slow Page Speed", 
      description: "Pages load too slowly, causing high bounce rates and lower search rankings."
    },
    { 
      icon: <FaLock className="text-2xl text-white" />,
      title: "Security Issues", 
      description: "Lack of HTTPS implementation or other security vulnerabilities damage trust and rankings."
    },
    { 
      icon: <FaCode className="text-2xl text-white" />,
      title: "Missing Structured Data", 
      description: "Without proper schema markup, your content misses opportunities for rich results in search."
    },
    { 
      icon: <FaSitemap className="text-2xl text-white" />,
      title: "Poor Site Architecture", 
      description: "Confusing URL structure and site organization makes it difficult for search engines to understand your content."
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What is technical SEO and why is it important?",
      answer: "Technical SEO refers to the process of optimizing your website's infrastructure to help search engines efficiently crawl, index, and render your content. It focuses on the technical aspects of your website rather than content or links. It's important because even the best content won't rank well if search engines can't properly access, understand, and index your site. Technical SEO creates the foundation that allows all your other SEO efforts to succeed."
    },
    {
      question: "How often should I conduct a technical SEO audit?",
      answer: "For most websites, we recommend conducting a comprehensive technical SEO audit every 3-6 months. However, you should also perform smaller checks when making significant changes to your website, such as redesigns, migrations, or CMS updates. Additionally, implementing ongoing monitoring tools can help you catch technical issues as they arise, rather than waiting for scheduled audits."
    },
    {
      question: "What are the most critical technical SEO issues to fix first?",
      answer: "You should prioritize fixing issues in this order: 1) Crawlability problems (robots.txt errors, broken internal links), 2) Indexation issues (incorrect canonical tags, noindex tags), 3) Mobile usability problems, 4) Page speed issues, 5) Security concerns (implementing HTTPS), and 6) Structured data implementation. This prioritization ensures search engines can first access your content before addressing user experience and enhanced features."
    },
    {
      question: "How do I know if my website has technical SEO issues?",
      answer: "Several indicators suggest technical SEO problems: 1) Declining organic traffic despite good content, 2) Pages not appearing in search results, 3) Search console warnings or errors, 4) Slow page load times, 5) Poor mobile experience, and 6) Crawl errors in your analytics. Using tools like Google Search Console, Screaming Frog, Ahrefs, or Semrush can help identify specific technical issues that need addressing."
    },
    {
      question: "Do I need to be a developer to fix technical SEO issues?",
      answer: "While having development knowledge is helpful, many technical SEO issues can be addressed without advanced coding skills. Basic issues like meta tags, XML sitemaps, and some structured data can be implemented using plugins or simple HTML edits. However, more complex issues related to JavaScript rendering, server configuration, or advanced site architecture may require developer assistance. The key is knowing which issues you can handle yourself and when to bring in technical expertise."
    },
    {
      question: "How does page speed affect SEO and how can I improve it?",
      answer: "Page speed is a confirmed ranking factor for both mobile and desktop searches. Faster-loading pages provide better user experience, lower bounce rates, and higher conversion rates. To improve page speed: 1) Optimize image sizes and formats, 2) Enable browser caching, 3) Minify CSS, JavaScript, and HTML, 4) Reduce server response time, 5) Implement lazy loading for images and videos, 6) Use a content delivery network (CDN), and 7) Eliminate render-blocking resources. Testing with tools like Google PageSpeed Insights can help identify specific opportunities for improvement."
    },
    {
      question: "What's the difference between technical SEO and on-page SEO?",
      answer: "Technical SEO focuses on your website's infrastructure and how search engines access, crawl, and index your content. It includes elements like site speed, mobile-friendliness, indexability, site architecture, and structured data. On-page SEO focuses on optimizing the content and HTML source code of individual pages, including elements like title tags, meta descriptions, headings, content quality, keyword usage, and internal linking. Both aspects are essential for a comprehensive SEO strategy, but technical SEO creates the foundation that allows on-page optimization to be effective."
    },
    {
      question: "How important is structured data for technical SEO?",
      answer: "Structured data (schema markup) is increasingly important for technical SEO. While it's not a direct ranking factor, it helps search engines better understand your content and can lead to enhanced search results like rich snippets, knowledge panels, and featured snippets. These enhanced results typically have higher click-through rates. Additionally, as search engines evolve toward semantic search and AI-driven results, properly implemented structured data helps position your content as an authoritative source. We recommend implementing at minimum the most relevant schema types for your content, such as Organization, LocalBusiness, Product, Article, or FAQPage."
    }
  ];

  // Checklist categories and items
  const checklistCategories = [
    {
      id: 'crawlability',
      title: 'Crawlability',
      icon: <FaSearch />,
      items: [
        { text: 'Robots.txt file is properly configured', importance: 'critical' },
        { text: 'XML sitemap is valid and submitted to Google Search Console', importance: 'critical' },
        { text: 'No crawl errors in Google Search Console', importance: 'high' },
        { text: 'Internal links use proper URL formats (no broken links)', importance: 'high' },
        { text: 'Pagination is properly implemented (rel="next" and rel="prev")', importance: 'medium' },
        { text: 'No orphaned pages (pages without internal links)', importance: 'medium' },
        { text: 'Custom 404 page is implemented', importance: 'medium' },
        { text: 'Redirect chains are minimized or eliminated', importance: 'high' }
      ]
    },
    {
      id: 'indexation',
      title: 'Indexation',
      icon: <FaDatabase />,
      items: [
        { text: 'Canonical tags are correctly implemented', importance: 'critical' },
        { text: 'No duplicate content issues', importance: 'high' },
        { text: 'Meta robots tags are properly used', importance: 'critical' },
        { text: 'Hreflang tags implemented correctly for multi-language sites', importance: 'medium' },
        { text: 'No indexation of utility pages (login, cart, etc.)', importance: 'medium' },
        { text: 'Pages appear in Google index as expected', importance: 'high' },
        { text: 'Google Search Console shows no indexing issues', importance: 'high' }
      ]
    },
    {
      id: 'mobile-friendliness',
      title: 'Mobile-Friendliness',
      icon: <FaMobileAlt />,
      items: [
        { text: 'Website passes Google Mobile-Friendly Test', importance: 'critical' },
        { text: 'Responsive design implemented across all pages', importance: 'critical' },
        { text: 'Viewport meta tag is properly set', importance: 'high' },
        { text: 'Touch elements are properly sized and spaced', importance: 'medium' },
        { text: 'No horizontal scrolling needed on mobile devices', importance: 'high' },
        { text: 'Text is readable without zooming', importance: 'high' },
        { text: 'Mobile and desktop versions have content parity', importance: 'medium' }
      ]
    },
    {
      id: 'page-speed',
      title: 'Page Speed',
      icon: <FaBolt />,
      items: [
        { text: 'Images are optimized for web (WebP format when possible)', importance: 'high' },
        { text: 'CSS and JavaScript files are minified', importance: 'high' },
        { text: 'Browser caching is enabled', importance: 'medium' },
        { text: 'GZIP compression is enabled', importance: 'medium' },
        { text: 'Core Web Vitals metrics meet recommended thresholds', importance: 'critical' },
        { text: 'Lazy loading implemented for images and videos', importance: 'high' },
        { text: 'Reduce server response time (TTFB under 200ms)', importance: 'high' },
        { text: 'Eliminate render-blocking resources', importance: 'high' },
        { text: 'Properly sized images are served', importance: 'medium' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <FaLock />,
      items: [
        { text: 'HTTPS is implemented across the entire site', importance: 'critical' },
        { text: 'HTTP to HTTPS redirects are properly set up', importance: 'critical' },
        { text: 'SSL certificate is valid and up to date', importance: 'critical' },
        { text: 'Mixed content issues are resolved', importance: 'high' },
        { text: 'Security headers are properly implemented', importance: 'medium' }
      ]
    },
    {
      id: 'structured-data',
      title: 'Structured Data',
      icon: <FaCode />,
      items: [
        { text: 'Organization schema is implemented', importance: 'high' },
        { text: 'Breadcrumb schema is implemented', importance: 'medium' },
        { text: 'Appropriate content-type schemas are used (Article, Product, etc.)', importance: 'high' },
        { text: 'LocalBusiness schema used for location-based businesses', importance: 'high' },
        { text: 'FAQ schema implemented for FAQ sections', importance: 'high' },
        { text: 'No structured data errors in Google Search Console', importance: 'high' },
        { text: 'Schema validation passes on Schema.org Validator', importance: 'high' }
      ]
    },
    {
      id: 'website-architecture',
      title: 'Website Architecture',
      icon: <FaSitemap />,
      items: [
        { text: 'URL structure is logical and organized', importance: 'high' },
        { text: 'URL format is SEO-friendly (descriptive, not parameter-heavy)', importance: 'high' },
        { text: 'Site navigation is intuitive and accessible', importance: 'medium' },
        { text: 'Internal linking structure follows a logical hierarchy', importance: 'high' },
        { text: 'Clear categorization of content', importance: 'medium' },
        { text: 'Breadcrumb navigation is implemented', importance: 'medium' },
        { text: 'No content buried deeper than 3 clicks from home page', importance: 'medium' },
        { text: 'URL parameters are handled properly', importance: 'medium' }
      ]
    }
  ];

  // Audit tools data
  const auditTools = [
    {
      name: "Google Search Console",
      description: "Official Google tool for monitoring indexing status, errors, and site performance in search.",
      url: "https://search.google.com/search-console",
      free: true,
      features: ["Indexing status", "Core Web Vitals", "Mobile usability", "Rich results testing", "URL inspection"]
    },
    {
      name: "Screaming Frog SEO Spider",
      description: "Desktop program that crawls websites to identify technical SEO issues.",
      url: "https://www.screamingfrog.co.uk/seo-spider/",
      free: "Freemium",
      features: ["Site crawling", "Technical audit", "Redirect chains", "Meta data analysis", "XML sitemap generation"]
    },
    {
      name: "PageSpeed Insights",
      description: "Google tool that analyzes page performance on mobile and desktop devices.",
      url: "https://pagespeed.web.dev/",
      free: true,
      features: ["Core Web Vitals", "Page speed analysis", "Performance suggestions", "Mobile and desktop testing"]
    },
    {
      name: "Semrush Site Audit",
      description: "Comprehensive site auditing tool that identifies 130+ technical and SEO issues.",
      url: "https://www.semrush.com/",
      free: "Paid (trial available)",
      features: ["Comprehensive audits", "Site health score", "Issue prioritization", "Regular monitoring", "Custom reports"]
    },
    {
      name: "Schema Markup Validator",
      description: "Official Schema.org tool to validate structured data implementation.",
      url: "https://validator.schema.org/",
      free: true,
      features: ["Schema validation", "Error detection", "JSON-LD testing"]
    },
    {
      name: "Mobile-Friendly Test",
      description: "Google tool to test how easily a visitor can use your page on a mobile device.",
      url: "https://search.google.com/test/mobile-friendly",
      free: true,
      features: ["Mobile compatibility check", "Mobile usability issues", "Mobile rendering view"]
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
            "@type": "TechArticle",
            "headline": "Technical SEO Audit Checklist: The Complete Guide",
            "description": "A comprehensive technical SEO checklist to help identify and fix technical issues affecting your website's search visibility.",
            "author": {
              "@type": "Organization",
              "name": "SpotCircuit"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SpotCircuit",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spotcircuit.com/static/images/logo.png"
              }
            },
            "datePublished": "2025-04-01",
            "dateModified": "2025-04-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://spotcircuit.com/resources/technical-seo-checklist"
            },
            "image": "https://spotcircuit.com/static/images/tech-seo-checklist-og.png"
          })
        }}
      />

      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="icon-container mb-6 glow-effect">
              <FaCode className="text-4xl text-white" />
            </div>
            <h1 className="gradient-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Technical SEO Audit Checklist
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              The complete guide to identifying and fixing technical issues that are holding back your website's search performance
            </p>
            
            {/* What you'll learn bullets */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-10">
              <h3 className="text-2xl font-bold mb-6 text-white">What You'll Learn:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>How to identify critical technical SEO issues</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Step-by-step audit process with 50+ checkpoints</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Recommended tools for technical SEO analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>How to prioritize fixes for maximum impact</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#crawlability">
                <span className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                  View Complete Checklist
                </span>
              </Link>
              <a href="/downloads/technical-seo-checklist.pdf" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
                <FaDownload className="mr-2" />
                Download PDF Checklist
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
                <h3 className="text-xl font-bold mb-6 text-white">Checklist Contents</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', title: 'Introduction', icon: <FaLaptopCode /> },
                    { id: 'crawlability', title: 'Crawlability', icon: <FaSearch /> },
                    { id: 'indexation', title: 'Indexation', icon: <FaDatabase /> },
                    { id: 'mobile-friendliness', title: 'Mobile-Friendliness', icon: <FaMobileAlt /> },
                    { id: 'page-speed', title: 'Page Speed', icon: <FaBolt /> },
                    { id: 'security', title: 'Security', icon: <FaLock /> },
                    { id: 'structured-data', title: 'Structured Data', icon: <FaCode /> },
                    { id: 'website-architecture', title: 'Website Architecture', icon: <FaSitemap /> },
                    { id: 'technical-audit-tools', title: 'Audit Tools', icon: <FaTools /> },
                    { id: 'faqs', title: 'FAQs', icon: <FaQuestion /> }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 ${
                        activeSection === item.id 
                          ? 'bg-purple-600 text-white' 
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
                <h3 className="text-xl font-bold mb-6 text-white">Checklist Contents</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', title: 'Introduction', icon: <FaLaptopCode /> },
                    { id: 'crawlability', title: 'Crawlability', icon: <FaSearch /> },
                    { id: 'indexation', title: 'Indexation', icon: <FaDatabase /> },
                    { id: 'mobile-friendliness', title: 'Mobile-Friendliness', icon: <FaMobileAlt /> },
                    { id: 'page-speed', title: 'Page Speed', icon: <FaBolt /> },
                    { id: 'security', title: 'Security', icon: <FaLock /> },
                    { id: 'structured-data', title: 'Structured Data', icon: <FaCode /> },
                    { id: 'website-architecture', title: 'Website Architecture', icon: <FaSitemap /> },
                    { id: 'technical-audit-tools', title: 'Audit Tools', icon: <FaTools /> },
                    { id: 'faqs', title: 'FAQs', icon: <FaQuestion /> }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 ${
                        activeSection === item.id 
                          ? 'bg-purple-600 text-white' 
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

              <div className="mt-6 bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl p-6 border border-purple-800/50">
                <h3 className="text-lg font-bold mb-3 text-white">Download Checklist</h3>
                <p className="text-sm text-gray-300 mb-4">Get the complete checklist as a PDF to use for your site audits.</p>
                <a 
                  href="/downloads/technical-seo-checklist.pdf"
                  className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <FaDownload className="mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-full lg:max-w-4xl">
            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Understanding Technical SEO</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Technical SEO is the foundation upon which all other SEO efforts are built. Without a technically sound website, 
                  even the best content and backlink strategies will struggle to deliver results.
                </p>
                
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Why Technical SEO Matters</h3>
                  <p className="text-lg text-gray-200 mb-4">
                    Technical SEO focuses on improving the technical aspects of your website to help search engines crawl, 
                    index, and render your site more effectively. A technically optimized website:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaSearch className="text-xl text-purple-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Improves Crawlability</h4>
                      </div>
                      <p className="text-gray-300">
                        Ensures search engines can discover and access all important pages on your site.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaDatabase className="text-xl text-blue-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Enhances Indexability</h4>
                      </div>
                      <p className="text-gray-300">
                        Helps search engines understand which pages should be indexed and ranked.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaBolt className="text-xl text-yellow-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Improves User Experience</h4>
                      </div>
                      <p className="text-gray-300">
                        Faster page speeds and mobile optimization lead to better user engagement.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaChartLine className="text-xl text-green-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Boosts Rankings</h4>
                      </div>
                      <p className="text-gray-300">
                        Technical factors like page speed and mobile-friendliness are direct ranking signals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Common Technical SEO Issues</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {technicalIssues.map((issue, index) => (
                      <div key={index} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-lg flex-shrink-0">
                            {issue.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">{issue.title}</h4>
                            <p className="text-gray-300 text-sm">{issue.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">How to Use This Checklist</h3>
                  <ol className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <p><strong className="text-white">Work through each section</strong> - The checklist is organized by technical category, making it easy to focus on specific areas.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <p><strong className="text-white">Prioritize by importance</strong> - Items are marked as critical, high, or medium importance to help you tackle the most impactful issues first.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <p><strong className="text-white">Use the recommended tools</strong> - We suggest specific tools for each section to help you identify and fix issues efficiently.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <p><strong className="text-white">Document your findings</strong> - Download the PDF version to track your progress and create an action plan.</p>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Checklist Sections */}
            {checklistCategories.map((category) => (
              <section id={category.id} key={category.id} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg mr-4 flex-shrink-0">
                    {category.icon}
                  </span>
                  {category.title} Checklist
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-8">
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start bg-gray-800 p-4 rounded-lg border border-gray-700">
                          <div className="mr-3 mt-1">
                            <input 
                              type="checkbox" 
                              id={`${category.id}-item-${itemIndex}`} 
                              className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 focus:ring-opacity-25"
                            />
                          </div>
                          <div className="flex-1">
                            <label htmlFor={`${category.id}-item-${itemIndex}`} className="text-white cursor-pointer flex items-center space-x-2">
                              <span>{item.text}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ml-2 ${
                                item.importance === 'critical' ? 'bg-red-900 text-red-200' :
                                item.importance === 'high' ? 'bg-yellow-900 text-yellow-200' :
                                'bg-blue-900 text-blue-200'
                              }`}>
                                {item.importance.toUpperCase()}
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Technical Audit Tools Section */}
            <section id="technical-audit-tools" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg mr-4 flex-shrink-0">
                  <FaTools />
                </span>
                Technical SEO Audit Tools
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-8">
                  The right tools can make technical SEO auditing much more efficient. Here are our recommended tools for 
                  identifying and fixing technical issues.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {auditTools.map((tool, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tool.free === true ? 'bg-green-900 text-green-200' :
                          tool.free === 'Freemium' ? 'bg-blue-900 text-blue-200' :
                          'bg-purple-900 text-purple-200'
                        }`}>
                          {typeof tool.free === 'string' ? tool.free : 'Free'}
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
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
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
                  Common questions about technical SEO and audit processes.
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
                      "@type": "FAQPage",
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
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-12 text-center border border-purple-700">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Need Help With Your Technical SEO?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Our team of technical SEO experts can identify and fix the issues that are holding your website back from ranking.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaSearch className="text-3xl text-purple-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Comprehensive Audit</h3>
                      <p className="text-sm text-purple-200">Complete technical analysis of your site</p>
                    </div>
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaWrench className="text-3xl text-blue-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Issue Resolution</h3>
                      <p className="text-sm text-blue-200">Expert fixes for all technical problems</p>
                    </div>
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaChartLine className="text-3xl text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Ongoing Monitoring</h3>
                      <p className="text-sm text-green-200">Prevent future technical issues</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                        Get a Free Technical Audit
                      </span>
                    </Link>
                    <Link href="/services">
                      <span className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
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
                <h3 className="text-2xl font-bold mb-6 text-white">Share This Checklist</h3>
                <p className="text-gray-300 mb-6">
                  Help others improve their technical SEO
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=The Complete Technical SEO Audit Checklist&url=${encodeURIComponent('https://spotcircuit.com/resources/technical-seo-checklist')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                  >
                    <FaShare className="mr-2" />
                    Share on Twitter
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('https://spotcircuit.com/resources/technical-seo-checklist');
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
                          title: 'Technical SEO Audit Checklist',
                          url: '/resources/technical-seo-checklist',
                          date: new Date().toISOString()
                        };
                        bookmarks.push(bookmark);
                        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                        alert('Checklist bookmarked!');
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
                  <Link href="/resources/ai-search-optimization" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-blue-400 mb-2">AI Search Optimization Guide</h4>
                    <p className="text-sm text-gray-300">Learn how to optimize your content for AI platforms</p>
                    <span className="text-xs text-blue-500 mt-2 inline-block">Read Guide →</span>
                  </Link>
                  <Link href="/resources/local-seo-guide" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-green-400 mb-2">Local SEO Guide</h4>
                    <p className="text-sm text-gray-300">Dominate local search results for your business</p>
                    <span className="text-xs text-green-500 mt-2 inline-block">Read Guide →</span>
                  </Link>
                  <Link href="/resources/content-strategy-blueprint" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-purple-400 mb-2">Content Strategy Blueprint</h4>
                    <p className="text-sm text-gray-300">Create SEO-optimized content that converts</p>
                    <span className="text-xs text-purple-500 mt-2 inline-block">Read Guide →</span>
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

export default TechnicalSEOChecklist;