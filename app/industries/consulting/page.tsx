'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaBrain, 
  FaCheckCircle, 
  FaChartLine, 
  FaStar, 
  FaLightbulb,
  FaProjectDiagram, 
  FaAngleRight,
  FaChartBar,
  FaBook,
  FaSearch,
  FaCogs,
  FaRobot
} from 'react-icons/fa';
import ConsultingPageSchema from './components/ConsultingPageSchema';

const ConsultingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <ConsultingPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Solutions for <span className="text-indigo-500">Consulting Firms</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Scale your consulting practice with AI-driven research, automated insights generation, and intelligent project management that delivers 3x more value to clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaSearch className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI Research</h3>
                    <p className="text-sm text-gray-400">Instant market insights</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartBar className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Auto Reports</h3>
                    <p className="text-sm text-gray-400">Hours not weeks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaBook className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Knowledge Base</h3>
                    <p className="text-sm text-gray-400">Leverage firm expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaProjectDiagram className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Project AI</h3>
                    <p className="text-sm text-gray-400">Optimize resources</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Transform Your Practice
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition duration-300 inline-block">
                    View All Services
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-indigo-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-500/20 p-3 rounded-full">
                      <FaRobot className="text-indigo-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">AI Consulting Assistant</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI processes vast data sources instantly, generates comprehensive analyses, and creates client-ready deliverables while maintaining your firm's unique methodology.
                  </p>
                  <div className="border-t border-indigo-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-500">3x</p>
                        <p className="text-xs text-gray-400">Faster Delivery</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-500">50%</p>
                        <p className="text-xs text-gray-400">More Billable</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-500">2.5x</p>
                        <p className="text-xs text-gray-400">Higher Margins</p>
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
      <section className="py-20 bg-gradient-to-b from-indigo-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Tools Designed for <span className="text-indigo-500">Elite Consulting Firms</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Amplify your expertise and deliver unprecedented value to clients with AI-powered tools built specifically for management consulting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-700/50 transition-all">
              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaSearch className="text-indigo-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Research Assistant</h3>
              <p className="text-gray-300 mb-4">
                Accelerate market research and competitive analysis with AI that instantly synthesizes insights from millions of sources.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Market intelligence gathering</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Competitive benchmarking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Trend identification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-700/50 transition-all">
              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartBar className="text-indigo-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Report Generation</h3>
              <p className="text-gray-300 mb-4">
                Create professional deliverables in hours, not weeks, with AI that follows your methodology and brand standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Executive presentations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Data visualization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Strategic recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-700/50 transition-all">
              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBook className="text-indigo-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Knowledge Management AI</h3>
              <p className="text-gray-300 mb-4">
                Instantly access and leverage your firm's collective expertise across all past engagements and methodologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Case study retrieval</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Best practice capture</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Expert matching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-indigo-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real <span className="text-indigo-500">Results</span> from Leading Consulting Firms
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-800/30">
              <p className="text-4xl font-bold text-indigo-500 mb-2">3x</p>
              <p className="font-medium">Faster Project Delivery</p>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-800/30">
              <p className="text-4xl font-bold text-indigo-500 mb-2">50%</p>
              <p className="font-medium">More Billable Hours</p>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-800/30">
              <p className="text-4xl font-bold text-indigo-500 mb-2">2.5x</p>
              <p className="font-medium">Higher Project Margins</p>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-800/30">
              <p className="text-4xl font-bold text-indigo-500 mb-2">40%</p>
              <p className="font-medium">Better Client Retention</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-indigo-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-indigo-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
                  <Image 
                    src="/images/testimonial.jpg" 
                    alt="Strategic Partners CEO" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-2">
                  <FaBrain className="text-white" />
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
                "SpotCircuit's AI has fundamentally changed how we deliver consulting services. We're completing engagements 3x faster while providing deeper insights. Our partners now handle twice as many clients with better outcomes."
              </blockquote>
              
              <div>
                <p className="font-bold">David Chen</p>
                <p className="text-indigo-400 text-sm">Managing Partner, Strategic Partners Consulting</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-indigo-500">3x</p>
                  <p className="text-xs text-gray-400">Faster Delivery</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-500">2x</p>
                  <p className="text-xs text-gray-400">Client Capacity</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-500">150%</p>
                  <p className="text-xs text-gray-400">Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-indigo-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/30">
                <h3 className="text-xl font-bold mb-3">How does AI enhance consulting research and analysis?</h3>
                <p className="text-gray-300">
                  Our AI instantly processes vast amounts of data from multiple sources, identifying patterns and insights that would take weeks to uncover manually. It generates comprehensive market analyses, competitive landscapes, and strategic recommendations based on your specific methodology and client needs.
                </p>
              </div>
              
              <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/30">
                <h3 className="text-xl font-bold mb-3">Will AI replace our consultants or augment them?</h3>
                <p className="text-gray-300">
                  SpotCircuit AI augments your consultants' capabilities, not replaces them. It handles time-consuming research and analysis tasks, allowing consultants to focus on strategic thinking, client relationships, and high-value problem-solving. Think of it as giving each consultant a team of AI assistants.
                </p>
              </div>
              
              <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/30">
                <h3 className="text-xl font-bold mb-3">How does SpotCircuit maintain confidentiality and data security?</h3>
                <p className="text-gray-300">
                  We understand consulting requires the highest levels of confidentiality. SpotCircuit uses enterprise-grade encryption, isolated client environments, and strict access controls. We're SOC 2 certified and comply with all major data protection regulations including GDPR and CCPA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Lead the AI Revolution in Consulting?
            </h2>
            
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join top-tier firms using AI to deliver exceptional client value at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Strategy Session
                </span>
              </Link>
              
              <Link href="/local-services">
                <span className="bg-transparent hover:bg-indigo-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Explore All Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPage;