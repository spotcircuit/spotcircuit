'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaUsers, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaUserPlus,
  FaShieldAlt,
  FaHeartbeat,
  FaCalendarCheck,
  FaRocket,
  FaDatabase,
  FaSearch,
  FaEnvelope,
  FaSms,
  FaBell
} from 'react-icons/fa';
import ClientCircuitPageSchema from './components/ClientCircuitPageSchema';

const ClientCircuitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <ClientCircuitPageSchema />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-blue-500">ClientCircuit</span> - AI-Powered Client Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Transform your business with intelligent client relationship management that automates lead nurturing, manages communications, and drives conversion through AI-powered insights. Part of our comprehensive <Link href="/services#local-marketing" className="text-blue-400 hover:text-blue-300 underline">local marketing solutions</Link>.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaUserPlus className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Lead Management</h3>
                    <p className="text-sm text-gray-400">Intelligent lead tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaDatabase className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">CRM Integration</h3>
                    <p className="text-sm text-gray-400">Seamless data sync</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Auto Communications</h3>
                    <p className="text-sm text-gray-400">Smart email & SMS</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Performance Analytics</h3>
                    <p className="text-sm text-gray-400">Real-time insights</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Start Free Trial
                  </span>
                </Link>
                <Link href="/demo">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition duration-300 inline-block">
                    Book Demo
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-blue-900/80 to-black rounded-2xl p-6 shadow-xl border border-blue-800/30">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <FaUsers className="text-blue-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Client Intelligence Dashboard</h3>
                  </div>
                  
                  {/* Client Management Dashboard SVG */}
                  <div className="mb-6">
                    <Image 
                      src="/static/images/client-management-dashboard.svg" 
                      alt="ClientCircuit CRM Dashboard Interface" 
                      width={400} 
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Get real-time insights into client behavior, communication preferences, and conversion patterns with our AI-powered analytics engine.
                  </p>
                  <div className="border-t border-blue-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-500">94%</p>
                        <p className="text-xs text-gray-400">Client Retention</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-500">68%</p>
                        <p className="text-xs text-gray-400">Faster Response</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-500">5.8x</p>
                        <p className="text-xs text-gray-400">ROI</p>
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
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="text-blue-500">Client Management</span> Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              ClientCircuit combines intelligent automation with human insight to create meaningful client relationships that drive business growth. Explore all our <Link href="/services" className="text-blue-400 hover:text-blue-300 underline">AI-powered services</Link> to maximize your business potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50 hover:border-blue-700/50 transition-all">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUserPlus className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Lead Scoring</h3>
              <p className="text-gray-300 mb-4">
                Automatically prioritize leads based on behavior, engagement, and conversion likelihood with machine learning algorithms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Behavioral tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Predictive scoring</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Hot lead alerts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50 hover:border-blue-700/50 transition-all">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaEnvelope className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Communication</h3>
              <p className="text-gray-300 mb-4">
                Engage clients with personalized, timely communications across email, SMS, and voice channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Drip campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Smart scheduling</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Multi-channel messaging</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50 hover:border-blue-700/50 transition-all">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-300 mb-4">
                Track client interactions, campaign performance, and revenue attribution with comprehensive analytics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Real-time dashboards</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">ROI tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Custom reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-blue-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="text-blue-500">Results</span> with ClientCircuit
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">6.2x</p>
              <p className="font-medium">Lead Conversion Rate</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">89%</p>
              <p className="font-medium">Client Retention</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">68%</p>
              <p className="font-medium">Response Time Improvement</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">4.7x</p>
              <p className="font-medium">Revenue Growth</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-blue-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-blue-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
                  <Image 
                    src="/images/testimonial-client.jpg" 
                    alt="Real Estate Agency Owner" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                  <FaUsers className="text-white" />
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
                "ClientCircuit transformed our lead management process. We went from manually tracking 200 leads to automatically nurturing 1,500+ prospects with personalized communications. Our conversion rate increased by 340%."
              </blockquote>
              
              <div>
                <p className="font-bold">Maria Rodriguez</p>
                <p className="text-blue-400 text-sm">Real Estate Agency Owner</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-500">340%</p>
                  <p className="text-xs text-gray-400">Conversion Increase</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-500">1,500+</p>
                  <p className="text-xs text-gray-400">Active Leads</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-500">6.8x</p>
                  <p className="text-xs text-gray-400">ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/30">
                <h3 className="text-xl font-bold mb-3">How does ClientCircuit integrate with existing CRM systems?</h3>
                <p className="text-gray-300">
                  ClientCircuit seamlessly integrates with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and many others through native APIs and webhooks. Our integration process typically takes less than 24 hours with full data synchronization.
                </p>
              </div>
              
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/30">
                <h3 className="text-xl font-bold mb-3">What makes ClientCircuit's AI different from other client management tools?</h3>
                <p className="text-gray-300">
                  Our AI learns from your specific business patterns, client behaviors, and successful conversions to create personalized strategies. Unlike generic solutions, ClientCircuit adapts to your industry, communication style, and client preferences to optimize engagement and conversion rates.
                </p>
              </div>
              
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/30">
                <h3 className="text-xl font-bold mb-3">How quickly can I see results from ClientCircuit?</h3>
                <p className="text-gray-300">
                  Most businesses see improved lead response times within the first week and increased conversion rates within 30 days. Our AI requires a 2-4 week learning period to fully optimize for your specific business, after which you'll see maximum performance improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Client Management?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using ClientCircuit to automate lead nurturing, improve client relationships, and drive revenue growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Start Free Trial
                </span>
              </Link>
              
              <Link href="/demo">
                <span className="bg-transparent hover:bg-blue-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Book Demo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientCircuitPage;