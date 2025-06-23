"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronDownIcon, 
  RocketLaunchIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  DocumentCheckIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  ClockIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LaunchPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [animateStats, setAnimateStats] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    if (animateStats) {
      stats.forEach((stat, index) => {
        const node = document.getElementById(`stat-value-${index}`);
        if (node) {
          const controls = animate(0, stat.value, {
            duration: 1.5, 
            delay: index * 0.2,
            ease: "easeOut", 
            onUpdate(value) {
              node.textContent = Math.round(value).toString(); 
            }
          });
          controls.then(() => {
             if (node) node.textContent = `${stat.value}${stat.suffix}`; 
          });
        }
      });
    }
    
    return () => {
      clearTimeout(timer);
      clearInterval(testimonialInterval);
    };
  }, [animateStats]); 

  const painPoints = [
    { 
      icon: <CursorArrowRaysIcon className="h-12 w-12 text-green-400" />,
      title: "Unoptimized for LLMs", 
      description: "Your competitors are already leveraging AI-optimized content while traditional SEO approaches fall behind in the new era of search." 
    },
    { 
      icon: <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-400" />,
      title: "Missing AI Traffic", 
      description: "AI search engines process information differently. Without proper optimization, you're missing out on the fastest growing segment of search traffic." 
    },
    { 
      icon: <ClockIcon className="h-12 w-12 text-purple-400" />,
      title: "Outdated Content Strategy", 
      description: "Static content fails to adapt to real-time trends and AI-driven user queries, leaving you stuck in the past while technology moves forward." 
    }
  ];

  const solutions = [
    {
      title: "Semantic Structuring",
      description: "We implement AI-friendly data structures that make your content readily consumable by advanced language models."
    },
    {
      title: "Entity Recognition",
      description: "Our system identifies and emphasizes key entities that AI systems prioritize when processing content."
    },
    {
      title: "Pattern Optimization",
      description: "We analyze AI response patterns and optimize your content to match what modern search engines prefer."
    },
    {
      title: "Dynamic Adaptation",
      description: "Your content automatically adapts to emerging trends and search patterns through our proprietary algorithms."
    }
  ];

  const testimonials = [
    {
      quote: "We saw a 245% increase in AI-sourced traffic within 60 days of implementing SpotCircuit's LLM optimization strategy.",
      author: "Sarah J.",
      company: "TechFront Solutions",
      image: "/static/images/testimonial1.jpg"
    },
    {
      quote: "The ROI has been incredible. Our content is now being featured in AI search results far more frequently than our competitors.",
      author: "Michael T.",
      company: "Growth Marketing Partners",
      image: "/static/images/testimonial2.jpg"
    },
    {
      quote: "SpotCircuit helped us future-proof our content strategy. We're now prepared for whatever changes come next in the search landscape.",
      author: "Elena R.",
      company: "Innovate Digital",
      image: "/static/images/testimonial3.jpg"
    }
  ];

  const stats = [
    { value: 245, label: "Average increase in AI traffic", suffix: "%" },
    { value: 12, label: "Typical implementation time", suffix: " days" },
    { value: 98, label: "Client satisfaction rate", suffix: "%" }
  ];

  const faqItems = [
    {
      question: "How does LLM optimization differ from traditional SEO?",
      answer: "Traditional SEO focuses on keywords, backlinks, and metadata for traditional search engines. LLM optimization goes deeper, structuring content for AI comprehension, emphasizing semantic relationships, entity recognition, and natural language patterns that AI models prioritize when retrieving and presenting information. It's about making your content the preferred source for AI systems, not just ranking well on traditional search results pages."
    },
    {
      question: "What results can I expect?",
      answer: "Our clients typically see a 200-300% increase in AI-driven traffic within 90 days. Beyond traffic, you'll notice higher engagement metrics as visitors find precisely what they're looking for, improved conversion rates due to better matching of intent, and stronger positioning as an authority in your industry. We provide comprehensive analytics dashboards that track both traditional metrics and AI-specific performance indicators."
    },
    {
      question: "How long until I see results?",
      answer: "Initial improvements appear within 30 days as AI systems begin to recognize and index your optimized content. Significant gains typically manifest around the 60-90 day mark as machine learning models build confidence in your content as an authoritative source. Our phased implementation ensures continuous improvement rather than waiting for a single 'big bang' moment."
    },
    {
      question: "How is your approach different from competitors?",
      answer: "Most agencies are still applying traditional SEO tactics with minimal adaptations for AI. Our approach is built from the ground up specifically for LLMs, based on extensive research and testing with various AI models. We've developed proprietary methodologies and tools that analyze AI response patterns and continuously optimize your content as these systems evolve. Additionally, we provide clients with educational resources to help them understand the shifting landscape."
    },
    {
      question: "Do I need to completely redo my existing content?",
      answer: "No. Our process begins with a comprehensive audit to identify high-value content that would benefit most from LLM optimization. We then apply targeted enhancements to these assets first, gradually expanding to your broader content library. This approach minimizes disruption while maximizing impact. In some cases, we may recommend creating new cornerstone content specifically designed for AI consumption."
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We analyze your current content performance and identify optimization opportunities.",
      icon: <LightBulbIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Strategy",
      description: "We develop a customized LLM optimization plan tailored to your industry and goals.",
      icon: <DocumentCheckIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Implementation",
      description: "Our team executes the optimization strategy across your content ecosystem.",
      icon: <ChartBarIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Measurement",
      description: "We track performance and continuously refine the approach for maximum results.",
      icon: <UserGroupIcon className="h-8 w-8 text-white" />
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="relative">
          {/* Background geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-40">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                  SEO 2.0: Optimize for the AI Era
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10">
                Future-proof your content with AI-first optimization strategies that put you ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-lg font-bold text-lg shadow-xl flex items-center justify-center gap-2"
                >
                  <RocketLaunchIcon className="h-6 w-6" />
                  Start Your AI Optimization
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-lg"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black/30 backdrop-blur-md py-12 border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animateStats ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-white mb-2">
                    <span id={`stat-value-${index}`}>0</span>{/* Initial value 0 */}
                    {!animateStats && stat.suffix} {/* Show suffix immediately if not animating */}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div id="problems" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Traditional SEO Is Failing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As AI transforms search, businesses clinging to outdated strategies are being left behind. 
              Here's what's happening:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20"
              >
                <div className="bg-black/30 rounded-full p-4 inline-block mb-6">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div id="solutions" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI-First Approach</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've developed proprietary methodologies specifically engineered for the new AI-driven search ecosystem.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex items-start gap-4"
                >
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-full p-2 mt-1">
                    <CheckCircleIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-12 text-center"
            >
              <Link href="#process">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2">
                  See Our Process <ArrowRightIcon className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Process Section */}
        <div id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to transforming your content for the AI-first world
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden md:block"></div>
            
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="md:w-1/2 relative">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                      <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-0 relative flex items-center justify-center">
                    <div className="absolute w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="bg-black/30 backdrop-blur-md py-24 border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from businesses who've transformed their digital presence with our AI optimization
              </p>
            </motion.div>
            
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  currentTestimonial === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 md:p-12 max-w-3xl mx-auto text-center">
                        <div className="text-green-400 text-6xl font-serif">"</div>
                        <p className="text-xl md:text-2xl text-white mb-8 italic">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gray-700 relative overflow-hidden">
                            {/* This would be a real image in production */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500"></div>
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-white">{testimonial.author}</div>
                            <div className="text-gray-400">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${                      currentTestimonial === index 
                        ? 'bg-green-500 w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24">
          {/* Background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Future-Proof Your Content?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Join the forward-thinking businesses that are already dominating AI search results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-lg font-bold text-lg shadow-xl flex items-center justify-center gap-2"
                >
                  <BoltIcon className="h-6 w-6" />
                  Start Your AI Transformation
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-lg"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our AI optimization services
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-5 flex justify-between items-center text-left transition-all duration-300"
                >
                  <span className="text-white font-medium text-lg">{item.question}</span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-white transform transition-transform duration-300 ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white/5 backdrop-blur-md border-x border-b border-white/10 rounded-b-lg p-5 text-gray-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
