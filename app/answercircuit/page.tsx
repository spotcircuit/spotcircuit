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
  FaShieldAlt
} from 'react-icons/fa';
import { 
  HiOutlineClock,
  HiOutlineTrendingDown,
  HiOutlineLightBulb
} from 'react-icons/hi';

const AnswerCircuitSalesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Urgency timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();
      
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
              <Image
                src="/static/images/answercircuit.png"
                alt="AnswerCircuit - AI Visibility Platform"
                width={400}
                height={225}
                className="rounded-xl shadow-2xl border border-gray-800"
                priority
              />
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
                <span className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 inline-block border border-gray-700">
                  Learn How AI Search Works
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Agitation */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The <span className="text-red-400">Hidden Pipeline Killer</span> That's Costing You Millions
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <HiOutlineTrendingDown className="text-4xl text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Organic Pipeline Declining</h3>
                <p className="text-gray-300">
                  Your organic traffic looks fine, but qualified demos are down 20-30%. 
                  The best prospects are finding competitors through AI instead.
                </p>
              </div>
              
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <HiOutlineClock className="text-4xl text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">6-Month Lock-In Window</h3>
                <p className="text-gray-300">
                  AI platforms are forming permanent category associations. Once your 
                  competitor is the default, it takes 10x effort to displace them.
                </p>
              </div>
              
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <FaExclamationTriangle className="text-4xl text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Weaker Products Winning</h3>
                <p className="text-gray-300">
                  Inferior competitors are winning deals because AI positions them as 
                  the "expert choice" in your category. Features don't matter if you're invisible.
                </p>
              </div>
            </div>
            
            <div className="bg-red-900/10 border border-red-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                The Real Cost of AI Invisibility
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-white">15</p>
                  <p className="text-gray-400">Lost demos/month</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">$2.5M</p>
                  <p className="text-gray-400">Annual revenue loss</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">41%</p>
                  <p className="text-gray-400">Higher CAC</p>
                </div>
                <div>
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
            
            <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              The only AI visibility platform that guarantees you'll be cited as the top solution 
              in your category within 90 days—or we work free until you are.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">What We Do Differently</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">AI-Native Content Architecture</h4>
                      <p className="text-gray-300">
                        Restructure your best content for maximum LLM comprehension and citation priority.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Real-Time Citation Tracking</h4>
                      <p className="text-gray-300">
                        Monitor exactly when and how AI platforms cite you vs competitors across all major platforms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Competitive Intelligence</h4>
                      <p className="text-gray-300">
                        Know exactly where competitors are winning AI mindshare and how to displace them.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">White-Glove Implementation</h4>
                      <p className="text-gray-300">
                        Done-for-you execution plus weekly strategy sessions to ensure rapid results.
                      </p>
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
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 1-2</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Discovery & Audit</h4>
                <p className="text-gray-300">
                  Complete AI visibility audit. Competitor analysis. Content gap identification.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 3-4</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Content Optimization</h4>
                <p className="text-gray-300">
                  Restructure top pages. Implement schema. Deploy AI-native formats.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 5-8</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Authority Building</h4>
                <p className="text-gray-300">
                  Create citation-worthy content. Build semantic frameworks. Establish expertise.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Week 9-12</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Scale & Dominate</h4>
                <p className="text-gray-300">
                  Monitor citations. Expand coverage. Lock in category leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Investment & <span className="text-green-400">Guarantee</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-800 mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">AnswerCircuit for B2B SaaS</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-5xl font-bold">$4,997</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-300">
                    For SaaS companies $15M-$30M ARR
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold mb-4 text-blue-400">What's Included:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Complete AI visibility audit & strategy</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Done-for-you content optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Real-time citation tracking dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Weekly strategy sessions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-purple-400">Plus:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Competitive intelligence reports</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Custom AI-native content creation</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>C-suite reporting dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Dedicated Slack channel</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-900/20 border border-green-800 rounded-xl p-6 text-center">
                  <FaShieldAlt className="text-4xl text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-green-400">90-Day Citation Guarantee</h4>
                  <p className="text-gray-300">
                    If you're not cited in the top AI results for at least 3 of your core topics 
                    within 90 days, we'll continue working at no charge until you are.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  Only 3 spots available this month • 
                  <span className="text-white font-semibold">{timeLeft.days} days left</span>
                </p>
                <Link href="#audit">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block text-lg">
                    Claim Your Spot Today
                  </span>
                </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common <span className="text-blue-400">Questions</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-3">
                  How is this different from traditional SEO?
                </h3>
                <p className="text-gray-300">
                  Traditional SEO optimizes for search engine algorithms. We optimize for AI comprehension 
                  and citation. While SEO gets you ranked, we ensure you're the answer AI provides to users.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-3">
                  How quickly will we see results?
                </h3>
                <p className="text-gray-300">
                  Initial improvements often appear within 30 days as we optimize existing content. 
                  Significant citation increases typically occur by day 60, with full results by day 90.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-3">
                  What if we're already doing content marketing?
                </h3>
                <p className="text-gray-300">
                  Perfect. We'll audit your existing content and show you exactly how to restructure it 
                  for AI visibility. Most companies see immediate gains just from optimization.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-3">
                  How do you track AI citations?
                </h3>
                <p className="text-gray-300">
                  We use proprietary monitoring across ChatGPT, Claude, Perplexity, and other platforms. 
                  You'll see exactly when, where, and how you're cited versus competitors.
                </p>
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
                <h3 className="text-2xl font-bold mb-6">Your Free AI Visibility Audit Includes:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Complete analysis of your AI citation status</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Competitor AI visibility comparison</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Revenue impact calculation</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>30-day quick win roadmap</span>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <span className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-12 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block text-xl">
                  Get Your Free AI Visibility Audit
                </span>
              </Link>
              
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