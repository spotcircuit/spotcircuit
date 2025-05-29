"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaRocket, 
  FaChartLine, 
  FaCheckCircle,
  FaExclamationTriangle,
  FaQuoteLeft,
  FaBrain,
  FaShieldAlt,
  FaRobot,
  FaFileAlt,
  FaTools,
  FaChartBar
} from 'react-icons/fa';
import { 
  HiOutlineClock,
  HiOutlineTrendingDown,
  HiOutlineLightBulb
} from 'react-icons/hi';

const AnswerCircuitSalesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Urgency timer - set to end 7 days from now for scarcity
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Set end date to 7 days from current date instead of end of month
      const endDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
      const difference = endDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "We went from zero AI visibility to being the #1 cited source for 'project management software' in ChatGPT. Our demo requests increased 47% in 90 days.",
      author: "Michael Chen",
      title: "VP Marketing, TaskFlow Pro",
      metric: "+47% demos"
    },
    {
      quote: "AnswerCircuit helped us discover we were losing 15 deals per month to a competitor who was optimized for AI. We fixed it in 60 days and our win rate jumped 32%.",
      author: "Sarah Williams",
      title: "Head of Growth, DataSync",
      metric: "+32% win rate"
    },
    {
      quote: "Our CAC dropped 41% after implementing their AI optimization strategy. We're now the default recommendation in our category across all AI platforms.",
      author: "James Park",
      title: "CMO, CloudMetrics",
      metric: "-41% CAC"
    },
    {
      quote: "Before AnswerCircuit, we spent $150K on content that AI platforms ignored. Within 60 days, we became the top recommendation for our category.",
      author: "Emily Rodriguez",
      title: "Director of Digital, SecureStack",
      metric: "5X ROI"
    },
    {
      quote: "The AI visibility audit revealed we were completely invisible to ChatGPT despite ranking #1 on Google. AnswerCircuit fixed this in just 6 weeks.",
      author: "David Kim",
      title: "CEO, DataFlowHQ",
      metric: "+68% leads"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Urgency Banner */}
      <div className="bg-red-900/20 border-y border-red-800 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            <FaExclamationTriangle className="inline mr-2 text-red-400" />
            <span className="font-bold text-red-400">Limited Availability:</span> Only accepting 3 new clients this month. 
            <span className="ml-2 font-mono">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
            </span>
          </p>
        </div>
      </div>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-4 text-center relative overflow-hidden">
          {/* Hero Images - Right under header */}
          <div className="container mx-auto px-4 relative z-10 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Image
                src="/static/images/aicircuit3.png"
                alt="AI Circuit 3 - Core AI Engine"
                width={400}
                height={225}
                className="rounded-xl shadow-2xl border border-gray-800"
                priority
              />
              <div className="relative group">
                <Image
                  src="/static/images/answercircuit.png"
                  alt="AnswerCircuit - AI Visibility Platform"
                  width={400}
                  height={225}
                  className="rounded-xl shadow-2xl border border-gray-800 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-1 px-3 rounded-full text-sm shadow-lg">
                  Featured
                </div>
              </div>
              <div className="w-[400px] h-[225px] rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
                <Image
                  src="/static/images/aicircuit2.png"
                  alt="AI Circuit 2 - Advanced AI Features"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-8">
            <div className="inline-flex items-center bg-blue-900/30 border border-blue-800 rounded-full px-4 py-2 mb-6">
              <FaBrain className="mr-2 text-blue-400" />
              <span className="text-sm text-blue-300">For B2B SaaS Companies $15M-$30M ARR</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Competitors Are Getting<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                All The AI Mentions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              While you rank #1 on Google, ChatGPT recommends them.<br />
              <span className="text-white font-semibold">You're losing 10-15 qualified demos every month to AI invisibility.</span>
            </p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg mb-4">Quick test: Ask ChatGPT about your product category...</p>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-left">
                <span className="text-green-400">You:</span> "What's the best [your category] software?"<br />
                <span className="text-blue-400">ChatGPT:</span> *Lists your competitors, not you*
              </div>
              <p className="text-red-400 mt-4 font-semibold">
                That's 72% of B2B buyers who will never know you exist.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#audit">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                  Get Your Free AI Visibility Audit
                </span>
              </Link>
              <Link href="/resources/ai-search-optimization">
                <span className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
                  <FaFileAlt className="mr-2" /> 
                  Ultimate AI Optimization Guide
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Agitation */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The <span className="text-red-400">Hidden Pipeline Killer</span> That's Costing You Millions
            </h2>
            
            <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              While your SEO metrics look strong, AI is redirecting your best prospects to competitors
              before they ever reach your website.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
                <div className="rounded-full bg-red-900/20 p-4 mb-4">
                  <HiOutlineTrendingDown className="text-4xl text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Organic Pipeline Declining</h3>
                <p className="text-gray-300">
                  Your organic traffic looks fine, but qualified demos are down 20-30%. 
                  The best prospects are finding competitors through AI instead.
                </p>
              </div>
              
              <div className="bg-black rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
                <div className="rounded-full bg-orange-900/20 p-4 mb-4">
                  <HiOutlineClock className="text-4xl text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">6-Month Lock-In Window</h3>
                <p className="text-gray-300">
                  AI platforms are forming permanent category associations. Once your 
                  competitor is the default, it takes 10x effort to displace them.
                </p>
              </div>
              
              <div className="bg-black rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
                <div className="rounded-full bg-yellow-900/20 p-4 mb-4">
                  <FaExclamationTriangle className="text-4xl text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Weaker Products Winning</h3>
                <p className="text-gray-300">
                  Inferior competitors are winning deals because AI positions them as 
                  the "expert choice" in your category. Features don't matter if you're invisible.
                </p>
              </div>
            </div>
            
            <div className="bg-red-900/10 border border-red-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">
                The Real Cost of AI Invisibility
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-white">15</p>
                  <p className="text-gray-400">Lost demos/month</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-white">$2.5M</p>
                  <p className="text-gray-400">Annual revenue loss</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-white">41%</p>
                  <p className="text-gray-400">Higher CAC</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-white">6mo</p>
                  <p className="text-gray-400">Behind competitors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Introducing <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AnswerCircuit</span>
            </h2>
            
            <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-gray-300">
                The only AI visibility platform that guarantees you'll be cited as the top solution 
                in your category within 90 days—or we work free until you are.
              </p>
              <div className="bg-blue-900/30 border border-blue-800 rounded-xl p-4 mx-auto max-w-2xl">
                <h3 className="font-bold text-blue-400 mb-2">What is AI Visibility?</h3>
                <p className="text-sm text-left">
                  When users ask ChatGPT, Claude, or Perplexity about your product category, 
                  AI visibility determines whether your company is recommended or ignored. 
                  Our platform ensures you're the top cited solution across all major AI platforms.
                </p>
                <div className="mt-3 text-right">
                  <Link href="/resources/ai-search-optimization" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center">
                    Learn more about AI search
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">What We Do Differently</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">AI-Native Content Architecture</h4>
                      <p className="text-gray-300">
                        We restructure your content with FAQ formatting, semantic markup, and citation triggers that LLMs prefer when selecting sources.
                      </p>
                      <Link href="/resources/ai-search-optimization#content-formats" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                        See our content templates →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Real-Time Citation Tracking</h4>
                      <p className="text-gray-300">
                        Monitor exactly when and how AI platforms cite you vs competitors across all major platforms.
                      </p>
                      <Link href="/resources/ai-search-optimization#measuring-success" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                        View our tracking methodology →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Competitive Intelligence</h4>
                      <p className="text-gray-300">
                        Know exactly where competitors are winning AI mindshare and how to displace them.
                      </p>
                      <Link href="/resources/ai-search-optimization#ai-search-behavior" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                        Understand AI citations →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">White-Glove Implementation</h4>
                      <p className="text-gray-300">
                        Done-for-you execution plus weekly strategy sessions to ensure rapid results.
                      </p>
                      <Link href="/resources/ai-search-optimization#implementation-guide" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                        See our implementation methodology →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-center">Guaranteed Outcomes</h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3">Metric</th>
                      <th className="text-right py-3">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Qualified Demos</td>
                      <td className="text-right font-bold text-green-400">+10-20% in 90 days</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">AI Citations</td>
                      <td className="text-right font-bold text-green-400">Top 3 for 5+ queries</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Customer Acquisition Cost</td>
                      <td className="text-right font-bold text-green-400">-15-25% reduction</td>
                    </tr>
                    <tr>
                      <td className="py-3">Organic Revenue</td>
                      <td className="text-right font-bold text-green-400">30%+ YoY maintained</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              SaaS Leaders <span className="text-green-400">Winning</span> With AI Visibility
            </h2>
            
            <div className="relative h-64 md:h-48">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  currentTestimonial === index && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
                      <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-bold text-white">{testimonial.author}</p>
                          <p className="text-gray-400">{testimonial.title}</p>
                        </div>
                        <div className="bg-green-900/30 border border-green-800 rounded-lg px-4 py-2">
                          <p className="text-green-400 font-bold">{testimonial.metric}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Path to <span className="text-blue-400">AI Dominance</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-black/30 rounded-xl p-6 border border-blue-900/50 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 1-2</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Discovery & Audit</h4>
                <div className="flex items-center justify-center mb-3">
                  <div className="h-px w-10 bg-blue-800"></div>
                </div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Complete AI visibility audit</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Competitor citation analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Content gap identification</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-blue-900/50 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 3-4</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Content Optimization</h4>
                <div className="flex items-center justify-center mb-3">
                  <div className="h-px w-10 bg-blue-800"></div>
                </div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Restructure top pages</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Implement schema markup</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Deploy AI-native formats</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-blue-900/50 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 5-8</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Authority Building</h4>
                <div className="flex items-center justify-center mb-3">
                  <div className="h-px w-10 bg-blue-800"></div>
                </div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Create citation-worthy content</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Build semantic frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Establish domain expertise</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-blue-900/50 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 9-12</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Scale & Dominate</h4>
                <div className="flex items-center justify-center mb-3">
                  <div className="h-px w-10 bg-blue-800"></div>
                </div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Monitor AI citations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Expand topic coverage</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Lock in category leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-green-400">Guarantee</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-800 mb-8">
                <div className="bg-green-900/20 border border-green-800 rounded-xl p-6 text-center mb-8">
                  <FaShieldAlt className="text-4xl text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-green-400">90-Day Citation Guarantee</h4>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      If you're not cited in the top 3 AI results for at least 3 of your core topics 
                      within 90 days across ChatGPT, Claude, and Perplexity, we'll continue working at no charge until you are.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3 text-left">
                      <p className="text-sm text-white mb-2 font-bold">Guaranteed metrics include:</p>
                      <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                        <li>Top 3 citation position for primary category terms</li>
                        <li>Direct mentions in at least 5 high-intent queries</li>
                        <li>Consistent recommendation across all major AI platforms</li>
                      </ul>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Link href="/resources/ai-search-optimization#case-studies" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium">
                        View case studies and results
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link href="/resources/ai-search-optimization#evolution-of-search" className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Explore the evolution of AI search
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-black/30 rounded-lg p-5 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">93%</div>
                    <p className="text-gray-300">Client citation rate within 90 days</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-5 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">6x</div>
                    <p className="text-gray-300">Average ROI in first quarter</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-5 text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">24hrs</div>
                    <p className="text-gray-300">Average implementation time</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  Only 3 spots available this month • 
                  <span className="text-white font-semibold">{timeLeft.days} days left</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                  <Link href="#audit">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block text-lg">
                      Claim Your Free Audit
                    </span>
                  </Link>
                  <Link href="/resources/ai-search-optimization">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block text-lg flex items-center">
                      <FaRobot className="mr-2" /> AI Search Guide
                    </span>
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  30-minute strategy call • No obligations • See your AI gaps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Common <span className="text-blue-400">Questions</span>
            </h2>
            
            <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Here are the answers to the questions we hear most often about AI visibility and optimization
            </p>
            
            <div className="text-center mb-10">
              <Link href="/resources/ai-search-optimization#faq" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium">
                View our comprehensive AI Search FAQ
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 text-blue-400">Q</span>
                  <span>How is this different from traditional SEO?</span>
                </h3>
                <p className="text-gray-300 pl-11">
                  Traditional SEO optimizes for search engine algorithms. We optimize for AI comprehension 
                  and citation. While SEO gets you ranked, we ensure you're the answer AI provides to users.
                </p>
                <div className="mt-2 pl-11">
                  <Link href="/resources/ai-search-optimization#traditional-seo-failing" className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center">
                    Read our comparison of traditional SEO vs AI optimization
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 text-blue-400">Q</span>
                  <span>How quickly will we see results?</span>
                </h3>
                <p className="text-gray-300 pl-11">
                  Initial improvements appear within 30 days. Significant citation increases 
                  typically occur by day 60, with full results by day 90.
                </p>
                <div className="mt-2 pl-11">
                  <Link href="/resources/ai-search-optimization#measuring-success" className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center">
                    See our measurement framework & typical ROI
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 text-blue-400">Q</span>
                  <span>What if we're already doing content?</span>
                </h3>
                <p className="text-gray-300 pl-11">
                  Perfect! We'll audit your existing content and show you exactly how to restructure it 
                  for AI visibility. Most companies see immediate gains just from optimization.
                </p>
                <div className="mt-3 ml-11">
                  <Link href="/resources/ai-search-optimization#content-formats" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center">
                    Learn about AI content optimization
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 text-blue-400">Q</span>
                  <span>How do you track AI citations?</span>
                </h3>
                <p className="text-gray-300 pl-11">
                  We use proprietary monitoring across ChatGPT, Claude, Perplexity, and other platforms. 
                  You'll see exactly when, where, and how you're cited versus competitors.
                </p>
                <div className="mt-3 ml-11">
                  <Link href="/resources/ai-search-optimization#tools-resources" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center">
                    View our monitoring system
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="audit" className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stop Losing Deals to <span className="text-red-400">AI Invisibility</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Every day you wait, competitors lock in more of your category. 
                Get your free AI visibility audit and see exactly where you're losing to competitors.
              </p>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="rounded-full bg-gray-900 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Your Free AI Visibility Audit Includes:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                  <div className="flex items-start bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Complete analysis of your AI citation status</span>
                  </div>
                  <div className="flex items-start bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Competitor AI visibility comparison</span>
                  </div>
                  <div className="flex items-start bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Revenue impact calculation</span>
                  </div>
                  <div className="flex items-start bg-black/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>30-day quick win roadmap</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block text-lg">
                      Get Your Free AI Visibility Audit
                    </span>
                  </Link>
                  <Link href="/resources/ai-search-optimization#technical">
                    <span className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-5 px-8 rounded-xl border border-blue-900 transition duration-300 inline-flex items-center text-lg">
                      <FaRobot className="mr-2 text-blue-400" />
                      AI Schema Blueprint
                    </span>
                  </Link>
                </div>
                
                {/* Resource Buttons Bar */}
                <div className="bg-gray-900 p-4 rounded-xl border border-blue-800 grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                  <Link href="/resources/ai-search-optimization#content-formats">
                    <span className="bg-black/30 hover:bg-blue-900/30 text-white font-medium py-3 px-4 rounded-lg border border-blue-900/50 transition duration-300 inline-flex items-center text-sm w-full">
                      <FaFileAlt className="mr-2 text-blue-400" />
                      Content Formats Guide
                    </span>
                  </Link>
                  <Link href="/resources/ai-search-optimization#implementation-guide">
                    <span className="bg-black/30 hover:bg-blue-900/30 text-white font-medium py-3 px-4 rounded-lg border border-blue-900/50 transition duration-300 inline-flex items-center text-sm w-full">
                      <FaTools className="mr-2 text-green-400" />
                      Implementation Steps
                    </span>
                  </Link>
                  <Link href="/resources/ai-search-optimization#measuring-success">
                    <span className="bg-black/30 hover:bg-blue-900/30 text-white font-medium py-3 px-4 rounded-lg border border-blue-900/50 transition duration-300 inline-flex items-center text-sm w-full">
                      <FaChartBar className="mr-2 text-purple-400" />
                      Track Your Success
                    </span>
                  </Link>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-white bg-blue-900/30 border border-blue-800 rounded-lg py-2 px-4 inline-block">
                    <span className="font-bold">Average Result:</span> 16 new qualified demos within 60 days
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link href="/resources/ai-search-optimization" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center">
                    Read our complete guide to AI Search Optimization
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Limited to 3 audits per month • 100% free • No obligation
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnswerCircuitSalesPage;