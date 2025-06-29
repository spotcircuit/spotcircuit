'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaCommentDots, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaRobot,
  FaHeadset,
  FaClock,
  FaLanguage,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaMobileAlt,
  FaEnvelope
} from 'react-icons/fa';
import ChatCircuitPageSchema from './components/ChatCircuitPageSchema';

const ChatCircuitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <ChatCircuitPageSchema />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-cyan-500">ChatCircuit</span> - AI Customer Support Revolution
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Deploy intelligent chatbots that provide instant customer support, qualify leads, and handle complex conversations with human-like accuracy across all channels. Part of our comprehensive <Link href="/services#ai-chatbot" className="text-cyan-400 hover:text-cyan-300 underline">AI chatbot development services</Link>.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaRobot className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI Conversations</h3>
                    <p className="text-sm text-gray-400">Human-like interactions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaClock className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">24/7 Support</h3>
                    <p className="text-sm text-gray-400">Always available</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaLanguage className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Multi-Language</h3>
                    <p className="text-sm text-gray-400">Global communication</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Smart Analytics</h3>
                    <p className="text-sm text-gray-400">Conversation insights</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Start Free Trial
                  </span>
                </Link>
                <Link href="/demo">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition duration-300 inline-block">
                    Try Demo Chat
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-cyan-900/80 to-black rounded-2xl p-6 shadow-xl border border-cyan-800/30">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                      <FaCommentDots className="text-cyan-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Intelligent Chat Interface</h3>
                  </div>
                  
                  {/* Chatbot Interface SVG */}
                  <div className="mb-6">
                    <Image 
                      src="/static/images/chatbot-interface.svg" 
                      alt="ChatCircuit AI Interface" 
                      width={400} 
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Handle thousands of simultaneous conversations with AI that understands context, emotion, and intent to provide personalized customer experiences.
                  </p>
                  <div className="border-t border-cyan-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-500">92%</p>
                        <p className="text-xs text-gray-400">Customer Satisfaction</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-500">74%</p>
                        <p className="text-xs text-gray-400">Cost Reduction</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-500">5.2x</p>
                        <p className="text-xs text-gray-400">Response Speed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="text-cyan-500">AI Chatbot</span> Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              ChatCircuit delivers intelligent, context-aware conversations that feel natural while automating customer support, lead qualification, and sales processes. Explore all our <Link href="/services" className="text-cyan-400 hover:text-cyan-300 underline">AI-powered services</Link> to maximize your customer engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/50 hover:border-cyan-700/50 transition-all">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Conversations</h3>
              <p className="text-gray-300 mb-4">
                Advanced natural language processing enables ChatCircuit to understand context, emotions, and complex queries for human-like interactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Context awareness</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Emotion detection</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Intent recognition</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/50 hover:border-cyan-700/50 transition-all">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaGlobe className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Omnichannel Deployment</h3>
              <p className="text-gray-300 mb-4">
                Deploy your chatbot across websites, mobile apps, social media, and messaging platforms with unified conversation management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Website integration</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Social media channels</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Mobile apps</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/50 hover:border-cyan-700/50 transition-all">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeadset className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Human Handoff</h3>
              <p className="text-gray-300 mb-4">
                Automatically escalate complex issues to human agents with full conversation context and customer history for seamless support transitions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Smart escalation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Context transfer</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Agent dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-cyan-800/10 skew-y-1 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="text-cyan-500">Applications</span> for Every Business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30 text-center">
              <FaHeadset className="text-cyan-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Customer Support</h3>
              <p className="text-sm text-gray-400">24/7 instant assistance</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30 text-center">
              <FaUsers className="text-cyan-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Lead Qualification</h3>
              <p className="text-sm text-gray-400">Automated lead scoring</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30 text-center">
              <FaShieldAlt className="text-cyan-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Appointment Booking</h3>
              <p className="text-sm text-gray-400">Smart scheduling</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30 text-center">
              <FaEnvelope className="text-cyan-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sales Assistance</h3>
              <p className="text-sm text-gray-400">Product recommendations</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-cyan-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-cyan-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500">
                  <Image 
                    src="/images/testimonial-support.jpg" 
                    alt="Customer Success Manager" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-cyan-600 rounded-full p-2">
                  <FaCommentDots className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <div className="flex mb-4">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              
              <blockquote className="text-xl italic text-gray-300 mb-6">
                "ChatCircuit handles 80% of our customer inquiries automatically, with customers often not realizing they're talking to AI. Our support costs dropped by 60% while customer satisfaction scores increased to 94%."
              </blockquote>
              
              <div>
                <p className="font-bold">Jennifer Park</p>
                <p className="text-cyan-400 text-sm">Customer Success Manager, RetailPlus</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-cyan-500">80%</p>
                  <p className="text-xs text-gray-400">Automation Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-500">60%</p>
                  <p className="text-xs text-gray-400">Cost Reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-500">94%</p>
                  <p className="text-xs text-gray-400">Satisfaction Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-cyan-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/30">
                <h3 className="text-xl font-bold mb-3">How quickly can I deploy ChatCircuit on my website?</h3>
                <p className="text-gray-300">
                  ChatCircuit can be deployed on your website in minutes with our simple embed code. No technical expertise required. Our AI training process takes 24-48 hours to learn your business specifics and can immediately handle basic inquiries.
                </p>
              </div>
              
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/30">
                <h3 className="text-xl font-bold mb-3">Can ChatCircuit understand and respond in multiple languages?</h3>
                <p className="text-gray-300">
                  Yes, ChatCircuit supports over 50 languages with automatic language detection and seamless switching. The AI maintains consistent personality and knowledge across all languages while respecting cultural communication preferences.
                </p>
              </div>
              
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/30">
                <h3 className="text-xl font-bold mb-3">How does ChatCircuit handle complex customer issues that require human intervention?</h3>
                <p className="text-gray-300">
                  ChatCircuit intelligently recognizes when conversations require human expertise and seamlessly transfers to your support team with full context. Agents receive conversation history, customer data, and suggested solutions for efficient resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Customer Support?
            </h2>
            
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using ChatCircuit to provide instant, intelligent customer support that delights customers and reduces costs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-cyan-900 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Start Free Trial
                </span>
              </Link>
              
              <Link href="/demo">
                <span className="bg-transparent hover:bg-cyan-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Try Demo Chat
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatCircuitPage;