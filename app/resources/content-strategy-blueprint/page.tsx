"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import ResourceNavigation from '@/components/ResourceNavigation';
import { 
  FaBookOpen, 
  FaChartLine, 
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
  FaEdit,
  FaCopy,
  FaDownload,
  FaShare,
  FaBullseye,
  FaBookmark,
  FaBullhorn,
  FaBrain,
  FaPuzzlePiece,
  FaCalendarAlt,
  FaPencilAlt,
  FaRocket,
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

const ContentStrategyBlueprint: React.FC = () => {
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
        'content-audit',
        'keyword-research',
        'content-planning',
        'creation-guidelines',
        'distribution',
        'measurement',
        'ai-optimization',
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

  // Common content challenges
  const contentChallenges = [
    { 
      icon: <FaEdit className="text-2xl text-white" />,
      title: "No Clear Strategy", 
      description: "Creating content without a cohesive plan that aligns with business goals and audience needs."
    },
    { 
      icon: <FaUsers className="text-2xl text-white" />,
      title: "Wrong Target Audience", 
      description: "Failing to understand your audience's pain points, questions, and content preferences."
    },
    { 
      icon: <FaSearch className="text-2xl text-white" />,
      title: "Poor SEO Integration", 
      description: "Not incorporating keyword research and SEO best practices into your content planning."
    },
    { 
      icon: <FaCalendarAlt className="text-2xl text-white" />,
      title: "Inconsistent Publishing", 
      description: "Irregular content publishing schedule that fails to build audience trust and engagement."
    },
    { 
      icon: <FaChartLine className="text-2xl text-white" />,
      title: "No Performance Tracking", 
      description: "Not measuring content performance against defined KPIs to inform future strategy."
    },
    { 
      icon: <FaBullhorn className="text-2xl text-white" />,
      title: "Weak Distribution", 
      description: "Creating great content but failing to distribute it effectively across appropriate channels."
    }
  ];

  // Content strategy framework
  const strategyFramework = [
    {
      id: 'content-audit',
      title: 'Content Audit',
      icon: <FaListAlt />,
      description: 'Analyze your existing content to identify gaps, opportunities, and areas for improvement.',
      steps: [
        { title: 'Catalog existing content', description: 'Create a comprehensive inventory of all content assets.' },
        { title: 'Assess performance', description: 'Evaluate metrics like traffic, engagement, and conversions.' },
        { title: 'Identify content gaps', description: 'Find topics and formats that are missing from your library.' },
        { title: 'Determine what to keep, update, or remove', description: 'Make data-driven decisions about your content.' }
      ]
    },
    {
      id: 'keyword-research',
      title: 'Keyword Research',
      icon: <FaSearch />,
      description: 'Discover the exact terms and questions your audience is searching for online.',
      steps: [
        { title: 'Identify seed keywords', description: 'Start with core topics relevant to your business.' },
        { title: 'Expand with keyword tools', description: 'Use tools like Ahrefs, SEMrush, or Google Keyword Planner.' },
        { title: 'Analyze search intent', description: 'Determine if keywords have informational, commercial, or navigational intent.' },
        { title: 'Prioritize by volume and competition', description: 'Focus on attainable keywords with sufficient search volume.' }
      ]
    },
    {
      id: 'content-planning',
      title: 'Content Planning',
      icon: <FaSitemap />,
      description: 'Create a structured plan that aligns content with business goals and audience needs.',
      steps: [
        { title: 'Define content pillars', description: 'Establish 3-5 main topics that align with your expertise.' },
        { title: 'Develop topic clusters', description: 'Create supporting subtopics around each pillar.' },
        { title: 'Map content to buyer journey', description: 'Plan content for awareness, consideration, and decision stages.' },
        { title: 'Create an editorial calendar', description: 'Schedule content creation and publication consistently.' }
      ]
    },
    {
      id: 'creation-guidelines',
      title: 'Creation Guidelines',
      icon: <FaPencilAlt />,
      description: 'Establish standards for creating high-quality, effective content.',
      steps: [
        { title: 'Develop brand voice guidelines', description: 'Define your tone, style, and personality.' },
        { title: 'Create content templates', description: 'Standardize formats for different content types.' },
        { title: 'Establish quality standards', description: 'Set benchmarks for research, accuracy, and readability.' },
        { title: 'Implement SEO best practices', description: 'Incorporate keywords, headers, and internal linking.' }
      ]
    },
    {
      id: 'distribution',
      title: 'Distribution Strategy',
      icon: <FaBullhorn />,
      description: 'Ensure your content reaches your target audience through the right channels.',
      steps: [
        { title: 'Identify optimal channels', description: 'Determine where your audience spends their time online.' },
        { title: 'Create channel-specific strategies', description: 'Adapt content for different platforms and formats.' },
        { title: 'Develop promotion workflows', description: 'Establish processes for consistent content promotion.' },
        { title: 'Plan for content repurposing', description: 'Transform existing content into multiple formats.' }
      ]
    },
    {
      id: 'measurement',
      title: 'Performance Measurement',
      icon: <FaChartLine />,
      description: 'Track key metrics to evaluate content effectiveness and ROI.',
      steps: [
        { title: 'Define key performance indicators (KPIs)', description: 'Select metrics that align with business goals.' },
        { title: 'Implement tracking tools', description: 'Set up analytics to monitor performance.' },
        { title: 'Create regular reporting cadence', description: 'Schedule regular performance reviews.' },
        { title: 'Implement continuous improvement', description: 'Use data to refine your content strategy.' }
      ]
    },
    {
      id: 'ai-optimization',
      title: 'AI & LLM Optimization',
      icon: <FaBrain />,
      description: 'Structure content to perform well with AI search engines and large language models.',
      steps: [
        { title: 'Use FAQ formats', description: 'Structure content as questions and answers for AI retrieval.' },
        { title: 'Implement proper schema markup', description: 'Add structured data to help AI understand your content.' },
        { title: 'Focus on semantic relevance', description: 'Build topical authority beyond just keywords.' },
        { title: 'Create authoritative, factual content', description: 'Ensure content is accurate and cites credible sources.' }
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What is a content strategy and why is it important?",
      answer: "A content strategy is a comprehensive plan that guides the creation, delivery, and management of content to achieve specific business goals. It encompasses everything from understanding your audience and planning what content to create, to determining how to measure its effectiveness. Having a content strategy is crucial because it ensures that all content aligns with your business objectives, resonates with your target audience, and delivers consistent value. Without a strategy, content creation becomes ad hoc and inefficient, leading to wasted resources and missed opportunities to connect with potential customers."
    },
    {
      question: "How often should I update my content strategy?",
      answer: "Your content strategy should be reviewed quarterly and updated annually at minimum. However, certain components may require more frequent adjustments. For example, keyword research should be refreshed quarterly to capture changing search trends, while your editorial calendar might need monthly refinements. Additionally, major business changes (new products, services, or target markets), significant algorithm updates, or shifts in industry trends should trigger an immediate strategy review. The key is to maintain a balance—your strategy should be stable enough to provide consistent direction but flexible enough to adapt to new opportunities and changing market conditions."
    },
    {
      question: "How do I create content that ranks well in search engines but also converts visitors?",
      answer: "Creating content that both ranks well and converts requires balancing SEO best practices with compelling messaging that addresses user needs. Start by conducting thorough keyword research focused on search terms with commercial intent, then map these keywords to specific stages of your customer journey. When creating content, prioritize addressing the user's search intent first—answer their questions comprehensively and provide genuine value. Incorporate strategic calls-to-action that feel like natural next steps rather than interruptions. Use data from both search analytics and conversion metrics to continuously refine your approach. Remember that truly helpful, authoritative content tends to perform well for both rankings and conversions, as search engines increasingly prioritize content that satisfies user needs."
    },
    {
      question: "What types of content should I include in my content strategy?",
      answer: "An effective content strategy should include a diverse mix of content types tailored to your audience and business goals. Core content types typically include: 1) Blog posts and articles for SEO and thought leadership, 2) Landing pages that convert visitors into leads or customers, 3) Product/service pages that highlight your offerings, 4) Case studies and testimonials that provide social proof, 5) White papers and ebooks for lead generation, 6) Email newsletters for nurturing prospects, 7) Video content for engagement and complex explanations, 8) Infographics and visual content for shareability, and 9) FAQ content for addressing common questions. The right mix depends on your specific audience preferences, industry norms, available resources, and where your prospects are in their buyer's journey. Track performance metrics to determine which content types deliver the best results for your specific goals."
    },
    {
      question: "How do I measure the ROI of my content marketing efforts?",
      answer: "Measuring content marketing ROI requires tracking both costs and outcomes across the entire content lifecycle. First, calculate your total investment, including content creation, distribution, tools, and team time. Then, establish clear conversion paths and attribution models to connect content engagement to business outcomes like leads, sales, or retention. Set up proper tracking for content-specific metrics (traffic, engagement, shares) and business metrics (conversion rates, revenue influenced, customer lifetime value). For complex B2B sales cycles, implement multi-touch attribution models that acknowledge content's role throughout the buyer's journey. Finally, calculate ROI using the formula: (Revenue attributed to content - Content cost) / Content cost × 100. Remember that some content benefits (brand awareness, authority building) may take longer to directly impact revenue but still provide significant value."
    },
    {
      question: "How do I create content that performs well with AI search engines like ChatGPT and Google's AI Overview?",
      answer: "To optimize content for AI search engines and large language models, focus on structure, accuracy, and comprehensive coverage. First, organize content in a clear question-and-answer format whenever possible, as this mirrors how users interact with AI tools. Implement proper schema markup, especially FAQ, HowTo, and Article schemas, to provide structural context. Focus on building topical authority by creating comprehensive content clusters around key subjects rather than isolated pieces. Ensure factual accuracy and cite reputable sources, as AI systems increasingly verify information against trusted references. Use clear headings, bullet points, and tables to make information easily extractable. Address multiple related questions within a single piece to demonstrate depth. Finally, focus on E-E-A-T principles (Experience, Expertise, Authoritativeness, and Trustworthiness) by showcasing your credentials and first-hand experience with the topic."
    },
    {
      question: "What's the difference between content strategy and content marketing?",
      answer: "Content strategy and content marketing are related but distinct concepts. Content strategy is the comprehensive planning framework that governs all content activities, defining why and how content is created, managed, and measured across an organization. It encompasses governance, workflow, technical considerations, and aligns content with broader business objectives. Content marketing, meanwhile, is a specific application of content—a tactical approach that uses content to attract, engage, and convert a defined audience. In simple terms, content strategy is the overarching plan that defines the purpose, standards, and management of all content, while content marketing is the execution of creating and distributing valuable content to drive profitable customer action. A strong content strategy should inform your content marketing efforts, ensuring they align with business goals and audience needs."
    },
    {
      question: "How do I balance creating content for SEO versus creating content for my audience?",
      answer: "The perceived tension between creating content for SEO and for your audience is largely a false dichotomy in modern digital marketing. Today's search algorithms are increasingly sophisticated at recognizing content that genuinely serves user needs. The best approach is to start with audience research—understand their questions, pain points, and information needs. Then use keyword research to identify how they're expressing those needs in search. Create comprehensive, valuable content that addresses these audience needs first and foremost, then optimize it using SEO best practices like proper heading structure, internal linking, and strategic keyword usage. This audience-first, SEO-informed approach satisfies both requirements, as search engines reward content that demonstrates expertise, authoritativeness, and trustworthiness while genuinely meeting user search intent. The content that performs best in search is typically the content that best serves your audience."
    }
  ];

  // Content tools
  const contentTools = [
    {
      name: "SEMrush Content Marketing Platform",
      description: "End-to-end content marketing platform with topic research, SEO writing assistant, and content audit tools.",
      url: "https://www.semrush.com/",
      category: "All-in-one",
      features: ["Topic research", "SEO content template", "Content audit", "Performance tracking"]
    },
    {
      name: "Ahrefs",
      description: "Comprehensive SEO tool with powerful keyword research and content gap analysis features.",
      url: "https://ahrefs.com/",
      category: "Research",
      features: ["Keyword research", "Content gap analysis", "Competitor content analysis", "Rank tracking"]
    },
    {
      name: "Clearscope",
      description: "AI-powered content optimization tool that helps improve content relevance and comprehensiveness.",
      url: "https://www.clearscope.io/",
      category: "Creation",
      features: ["Content grading", "Keyword optimization", "Competitor analysis", "Readability scores"]
    },
    {
      name: "CoSchedule",
      description: "Marketing calendar and workflow management tool for content planning and execution.",
      url: "https://coschedule.com/",
      category: "Planning",
      features: ["Editorial calendar", "Content workflow", "Team collaboration", "Social scheduling"]
    },
    {
      name: "BuzzSumo",
      description: "Content research tool for discovering top-performing content and trending topics.",
      url: "https://buzzsumo.com/",
      category: "Research",
      features: ["Content discovery", "Trend analysis", "Influencer research", "Content alerts"]
    },
    {
      name: "Google Search Console",
      description: "Free Google tool for monitoring and optimizing your website's presence in search results.",
      url: "https://search.google.com/search-console",
      category: "Analysis",
      features: ["Keyword performance", "Page indexing", "Mobile usability", "Search appearance"]
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
            "headline": "Content Strategy Blueprint: The Complete Guide to Effective Content Marketing",
            "description": "A comprehensive framework for developing and executing a content strategy that drives traffic, engagement, and conversions.",
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
            "datePublished": "2025-04-10",
            "dateModified": "2025-04-10",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.spotcircuit.com/resources/content-strategy-blueprint"
            },
            "image": "https://www.spotcircuit.com/static/images/content-strategy-blueprint-og.png"
          })
        }}
      />

      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="icon-container mb-6 glow-effect">
              <FaBookOpen className="text-4xl text-white" />
            </div>
            <h1 className="gradient-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Content Strategy Blueprint
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              The comprehensive framework for developing and executing a content strategy that drives traffic, engagement, and conversions
            </p>
            
            {/* What you'll learn bullets */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-10">
              <h3 className="text-2xl font-bold mb-6 text-white">What You'll Learn:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>How to develop a content strategy aligned with business goals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Creating content that ranks in search and converts visitors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Building content optimized for both SEO and AI platforms</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Measuring content performance and proving ROI</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#content-audit">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                  View Complete Blueprint
                </span>
              </Link>
              <a href="/downloads/content-strategy-template.pdf" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
                <FaDownload className="mr-2" />
                Download Strategy Template
              </a>
            </div>
          </div>
        </section>
        
        {/* Resource Navigation */}
        <ResourceNavigation currentPage="content-strategy-blueprint" className="mb-12" />

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
                <h3 className="text-xl font-bold mb-6 text-white">Blueprint Contents</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', title: 'Introduction', icon: <FaBookOpen /> },
                    { id: 'content-audit', title: 'Content Audit', icon: <FaListAlt /> },
                    { id: 'keyword-research', title: 'Keyword Research', icon: <FaSearch /> },
                    { id: 'content-planning', title: 'Content Planning', icon: <FaSitemap /> },
                    { id: 'creation-guidelines', title: 'Creation Guidelines', icon: <FaPencilAlt /> },
                    { id: 'distribution', title: 'Distribution Strategy', icon: <FaBullhorn /> },
                    { id: 'measurement', title: 'Performance Measurement', icon: <FaChartLine /> },
                    { id: 'ai-optimization', title: 'AI Optimization', icon: <FaBrain /> },
                    { id: 'tools', title: 'Content Tools', icon: <FaTools /> },
                    { id: 'faqs', title: 'FAQs', icon: <FaQuestion /> }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 ${
                        activeSection === item.id 
                          ? 'bg-yellow-600 text-white' 
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
                <h3 className="text-xl font-bold mb-6 text-white">Blueprint Contents</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', title: 'Introduction', icon: <FaBookOpen /> },
                    { id: 'content-audit', title: 'Content Audit', icon: <FaListAlt /> },
                    { id: 'keyword-research', title: 'Keyword Research', icon: <FaSearch /> },
                    { id: 'content-planning', title: 'Content Planning', icon: <FaSitemap /> },
                    { id: 'creation-guidelines', title: 'Creation Guidelines', icon: <FaPencilAlt /> },
                    { id: 'distribution', title: 'Distribution Strategy', icon: <FaBullhorn /> },
                    { id: 'measurement', title: 'Performance Measurement', icon: <FaChartLine /> },
                    { id: 'ai-optimization', title: 'AI Optimization', icon: <FaBrain /> },
                    { id: 'tools', title: 'Content Tools', icon: <FaTools /> },
                    { id: 'faqs', title: 'FAQs', icon: <FaQuestion /> }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 ${
                        activeSection === item.id 
                          ? 'bg-yellow-600 text-white' 
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

              <div className="mt-6 bg-gradient-to-br from-yellow-900/60 to-orange-900/60 rounded-2xl p-6 border border-yellow-800/50">
                <h3 className="text-lg font-bold mb-3 text-white">Download Template</h3>
                <p className="text-sm text-gray-300 mb-4">Get our content strategy template to create your own plan.</p>
                <a 
                  href="/downloads/content-strategy-template.pdf"
                  className="flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <FaDownload className="mr-2" />
                  Download Template
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-full lg:max-w-4xl">
            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why You Need a Content Strategy</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  In today's digital landscape, creating content without a strategy is like building a house without a blueprint. 
                  A content strategy provides the framework, direction, and purpose that transforms random content creation into 
                  a powerful business asset.
                </p>
                
                <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">The Value of Strategic Content</h3>
                  <p className="text-lg text-gray-200 mb-4">
                    A well-executed content strategy delivers compounding benefits that random content creation simply cannot achieve:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaSearch className="text-xl text-yellow-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Increased Search Visibility</h4>
                      </div>
                      <p className="text-gray-300">
                        Strategic content that targets the right keywords and search intent drives sustainable organic traffic.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaUsers className="text-xl text-blue-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Audience Trust & Authority</h4>
                      </div>
                      <p className="text-gray-300">
                        Consistent, valuable content establishes your brand as an authoritative voice in your industry.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaChartLine className="text-xl text-green-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Higher Conversion Rates</h4>
                      </div>
                      <p className="text-gray-300">
                        Content mapped to buyer journey stages nurtures prospects toward purchase decisions.
                      </p>
                    </div>
                    <div className="bg-black/30 p-5 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaRocket className="text-xl text-purple-400 mt-1" />
                        <h4 className="text-lg font-semibold text-white">Operational Efficiency</h4>
                      </div>
                      <p className="text-gray-300">
                        A documented strategy reduces wasted efforts and aligns teams around common goals and metrics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Common Content Strategy Challenges</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {contentChallenges.map((challenge, index) => (
                      <div key={index} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-3 rounded-lg flex-shrink-0">
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
                  <h3 className="text-2xl font-bold mb-4 text-white">About This Blueprint</h3>
                  <p className="text-gray-300 mb-6">
                    This comprehensive content strategy blueprint provides a step-by-step framework for developing, implementing, and 
                    measuring an effective content strategy. Whether you're starting from scratch or refining an existing approach, 
                    these proven methods will help you create content that drives measurable business results.
                  </p>
                  <div className="flex items-start mb-4">
                    <FaQuoteLeft className="text-3xl text-yellow-500 mr-4 flex-shrink-0" />
                    <blockquote className="text-lg text-gray-300 italic">
                      "The difference between content strategy and content marketing is the difference between the chef developing 
                      a menu concept versus cooking the actual meals. Both are essential, but they're distinct skills serving 
                      different purposes."
                      <footer className="text-gray-400 mt-2 not-italic text-sm">— Kristina Halvorson, Content Strategy Pioneer</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy Framework Sections */}
            {strategyFramework.map((section) => (
              <section id={section.id} key={section.id} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 p-2 rounded-lg mr-4 flex-shrink-0">
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
                            <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                              {stepIndex + 1}
                            </span>
                            {step.title}
                          </h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {section.id === 'content-audit' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaTools className="mr-2 text-yellow-500" />
                        Content Audit Template
                      </h4>
                      <p className="text-gray-300 mb-4">Use this structure to organize your content audit:</p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-700">
                          <thead>
                            <tr className="bg-gray-800">
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Content URL</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Type</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Topic</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Traffic</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Conversions</th>
                              <th className="py-2 px-4 border-b border-gray-700 text-left">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 px-4 text-blue-400">/blog/example-post</td>
                              <td className="py-2 px-4">Blog Post</td>
                              <td className="py-2 px-4">SEO</td>
                              <td className="py-2 px-4">1,250</td>
                              <td className="py-2 px-4">15</td>
                              <td className="py-2 px-4 text-yellow-500">Update</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-blue-400">/resources/guide</td>
                              <td className="py-2 px-4">Guide</td>
                              <td className="py-2 px-4">Analytics</td>
                              <td className="py-2 px-4">450</td>
                              <td className="py-2 px-4">32</td>
                              <td className="py-2 px-4 text-green-500">Keep</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {section.id === 'keyword-research' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaSearch className="mr-2 text-yellow-500" />
                        Keyword Prioritization Matrix
                      </h4>
                      <div className="relative h-80 md:h-96 p-4 bg-gray-800 rounded-lg">
                        <div className="absolute inset-0 p-6">
                          <div className="border-b border-l border-gray-600 h-full relative">
                            <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-90 text-sm text-gray-400 whitespace-nowrap">
                              Search Volume
                            </div>
                            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 text-sm text-gray-400">
                              Competition
                            </div>
                            
                            {/* Quadrant Labels */}
                            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                              <span className="bg-green-900/70 text-green-200 px-3 py-1 rounded-lg text-xs">
                                Quick Wins
                              </span>
                            </div>
                            <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                              <span className="bg-yellow-900/70 text-yellow-200 px-3 py-1 rounded-lg text-xs">
                                Big Bets
                              </span>
                            </div>
                            <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                              <span className="bg-gray-700/70 text-gray-300 px-3 py-1 rounded-lg text-xs">
                                Low Priority
                              </span>
                            </div>
                            <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                              <span className="bg-blue-900/70 text-blue-200 px-3 py-1 rounded-lg text-xs">
                                Long-Term
                              </span>
                            </div>
                            
                            {/* Sample Keywords */}
                            <div className="absolute top-[20%] left-[30%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                              <span className="bg-white/10 px-2 py-1 rounded text-xs">
                                local seo guide
                              </span>
                            </div>
                            <div className="absolute top-[10%] left-[70%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                              <span className="bg-white/10 px-2 py-1 rounded text-xs">
                                content marketing
                              </span>
                            </div>
                            <div className="absolute top-[80%] left-[20%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                              <span className="bg-white/10 px-2 py-1 rounded text-xs">
                                blog optimization tips
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'content-planning' && (
                    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center">
                        <FaSitemap className="mr-2 text-yellow-500" />
                        Content Pillar Example
                      </h4>
                      <div className="relative bg-gray-800 rounded-lg p-6">
                        <div className="flex flex-col items-center">
                          <div className="bg-yellow-600 px-4 py-2 rounded-lg mb-6 text-white">
                            <strong>Content Pillar: SEO Strategy</strong>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-bold text-blue-400 mb-2">Topic Cluster: Technical SEO</h5>
                              <ul className="space-y-2 text-sm">
                                <li className="text-gray-300">• Site Speed Optimization</li>
                                <li className="text-gray-300">• Mobile-First Indexing</li>
                                <li className="text-gray-300">• Structured Data Implementation</li>
                                <li className="text-gray-300">• JavaScript SEO Challenges</li>
                              </ul>
                            </div>
                            
                            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-bold text-green-400 mb-2">Topic Cluster: On-Page SEO</h5>
                              <ul className="space-y-2 text-sm">
                                <li className="text-gray-300">• Content Optimization</li>
                                <li className="text-gray-300">• Internal Linking Strategy</li>
                                <li className="text-gray-300">• E-A-T Principles</li>
                                <li className="text-gray-300">• Featured Snippet Optimization</li>
                              </ul>
                            </div>
                            
                            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-bold text-purple-400 mb-2">Topic Cluster: Local SEO</h5>
                              <ul className="space-y-2 text-sm">
                                <li className="text-gray-300">• Google Business Profile</li>
                                <li className="text-gray-300">• Local Link Building</li>
                                <li className="text-gray-300">• Citation Management</li>
                                <li className="text-gray-300">• Review Strategies</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Content Tools Section */}
            <section id="tools" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 p-2 rounded-lg mr-4 flex-shrink-0">
                  <FaTools />
                </span>
                Content Strategy Tools
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-8">
                  The right tools can significantly enhance your content strategy efforts across research, planning, creation, and analysis phases.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {contentTools.map((tool, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tool.category === 'Research' ? 'bg-blue-900 text-blue-200' :
                          tool.category === 'Creation' ? 'bg-green-900 text-green-200' :
                          tool.category === 'Planning' ? 'bg-purple-900 text-purple-200' :
                          tool.category === 'Analysis' ? 'bg-yellow-900 text-yellow-200' :
                          'bg-orange-900 text-orange-200'
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
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
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
                  Common questions about content strategy development and implementation.
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
              <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-3xl p-12 text-center border border-yellow-700">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Need Help With Your Content Strategy?
                  </h2>
                  <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                    Our team of content strategists and SEO experts can help you develop and implement a content strategy that drives measurable results.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaLightbulb className="text-3xl text-yellow-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Strategy Development</h3>
                      <p className="text-sm text-yellow-200">Custom content strategy aligned with your goals</p>
                    </div>
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaPencilAlt className="text-3xl text-orange-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Content Creation</h3>
                      <p className="text-sm text-orange-200">Expert content writers and SEO specialists</p>
                    </div>
                    <div className="bg-black/30 rounded-2xl p-6">
                      <FaChartLine className="text-3xl text-red-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Performance Analysis</h3>
                      <p className="text-sm text-red-200">Data-driven optimization and reporting</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                        Get a Free Strategy Consultation
                      </span>
                    </Link>
                    <Link href="/services">
                      <span className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
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
                <h3 className="text-2xl font-bold mb-6 text-white">Share This Blueprint</h3>
                <p className="text-gray-300 mb-6">
                  Help others improve their content strategy
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=Content Strategy Blueprint: The Complete Guide&url=${encodeURIComponent('https://www.spotcircuit.com/resources/content-strategy-blueprint')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                  >
                    <FaShare className="mr-2" />
                    Share on Twitter
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('https://www.spotcircuit.com/resources/content-strategy-blueprint');
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
                          title: 'Content Strategy Blueprint',
                          url: '/resources/content-strategy-blueprint',
                          date: new Date().toISOString()
                        };
                        bookmarks.push(bookmark);
                        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                        alert('Blueprint bookmarked!');
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
                  <Link href="/resources/technical-seo-checklist" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-purple-400 mb-2">Technical SEO Checklist</h4>
                    <p className="text-sm text-gray-300">Complete guide to technical website optimization</p>
                    <span className="text-xs text-purple-500 mt-2 inline-block">Read Guide →</span>
                  </Link>
                  <Link href="/resources/analytics-conversion-guide" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <h4 className="font-bold text-green-400 mb-2">Analytics & Conversion Guide</h4>
                    <p className="text-sm text-gray-300">Set up proper tracking and optimize conversions</p>
                    <span className="text-xs text-green-500 mt-2 inline-block">Read Guide →</span>
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

export default ContentStrategyBlueprint;