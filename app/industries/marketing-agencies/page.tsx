'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaRocket, 
  FaCheckCircle, 
  FaChartLine, 
  FaStar, 
  FaPaintBrush,
  FaCogs, 
  FaAngleRight,
  FaBullhorn,
  FaLightbulb,
  FaMagic,
  FaChartBar,
  FaRobot
} from 'react-icons/fa';
import MarketingAgenciesPageSchema from './components/MarketingAgenciesPageSchema';

const MarketingAgenciesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <MarketingAgenciesPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pink-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Solutions for <span className="text-pink-500">Marketing Agencies</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Scale your agency with AI-driven campaign creation, automated content generation, and intelligent performance optimization that delivers 10x results for your clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaRocket className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI Campaigns</h3>
                    <p className="text-sm text-gray-400">Launch in minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaMagic className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Content Engine</h3>
                    <p className="text-sm text-gray-400">Unlimited creation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartBar className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Performance AI</h3>
                    <p className="text-sm text-gray-400">Auto-optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaBullhorn className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Multi-Channel</h3>
                    <p className="text-sm text-gray-400">All platforms</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Scale Your Agency Now
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
                <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-pink-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-pink-500/20 p-3 rounded-full">
                      <FaRobot className="text-pink-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Agency AI Suite</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI platform creates complete campaigns, generates unlimited content, and optimizes performance 24/7, allowing your team to focus on strategy and creativity.
                  </p>
                  <div className="border-t border-pink-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-pink-500">10x</p>
                        <p className="text-xs text-gray-400">More Output</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-pink-500">75%</p>
                        <p className="text-xs text-gray-400">Lower CPR</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-pink-500">5x</p>
                        <p className="text-xs text-gray-400">Faster</p>
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
      <section className="py-20 bg-gradient-to-b from-pink-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Tools Built for <span className="text-pink-500">Modern Marketing Agencies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Everything you need to outperform bigger agencies with fewer resources using AI-powered automation and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-900/20 rounded-xl p-6 border border-pink-800/50 hover:border-pink-700/50 transition-all">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-pink-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Campaign Creator</h3>
              <p className="text-gray-300 mb-4">
                Generate complete multi-channel campaigns in minutes with AI that understands your client's goals and audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Strategy development</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Creative concepts</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Media planning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-900/20 rounded-xl p-6 border border-pink-800/50 hover:border-pink-700/50 transition-all">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaMagic className="text-pink-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Content Generation Engine</h3>
              <p className="text-gray-300 mb-4">
                Create unlimited on-brand content across all formats and channels with AI that learns each client's voice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Ad copy & creative</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Social media content</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Blog & email writing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-900/20 rounded-xl p-6 border border-pink-800/50 hover:border-pink-700/50 transition-all">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartBar className="text-pink-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Optimization AI</h3>
              <p className="text-gray-300 mb-4">
                Automatically optimize campaigns for maximum ROI with AI that tests and learns 24/7 across all channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Real-time bid optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Creative A/B testing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Audience targeting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-pink-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real <span className="text-pink-500">Results</span> from AI-Powered Agencies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-800/30">
              <p className="text-4xl font-bold text-pink-500 mb-2">10x</p>
              <p className="font-medium">More Campaign Output</p>
            </div>
            <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-800/30">
              <p className="text-4xl font-bold text-pink-500 mb-2">75%</p>
              <p className="font-medium">Lower Cost Per Result</p>
            </div>
            <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-800/30">
              <p className="text-4xl font-bold text-pink-500 mb-2">5x</p>
              <p className="font-medium">Faster Content Creation</p>
            </div>
            <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-800/30">
              <p className="text-4xl font-bold text-pink-500 mb-2">90%</p>
              <p className="font-medium">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-pink-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-pink-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image 
                    src="/images/testimonial.jpg" 
                    alt="Digital Dynamo CEO" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-pink-600 rounded-full p-2">
                  <FaRocket className="text-white" />
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
                "SpotCircuit completely transformed our agency. We're now handling 10x more campaigns with the same team size, and our results have never been better. Clients are blown away by how quickly we deliver and the performance we achieve."
              </blockquote>
              
              <div>
                <p className="font-bold">Alexandra Rivera</p>
                <p className="text-pink-400 text-sm">CEO, Digital Dynamo Agency</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-pink-500">10x</p>
                  <p className="text-xs text-gray-400">More Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-500">$5M</p>
                  <p className="text-xs text-gray-400">Annual Revenue</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-500">15</p>
                  <p className="text-xs text-gray-400">Team Size</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-pink-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-pink-900/20 rounded-xl p-6 border border-pink-800/30">
                <h3 className="text-xl font-bold mb-3">How does AI maintain brand consistency across campaigns?</h3>
                <p className="text-gray-300">
                  SpotCircuit's AI learns each client's brand voice, visual style, and messaging guidelines. It ensures every piece of content - from social posts to ad copy - perfectly matches their brand identity. You can even train it on past successful campaigns to replicate winning formulas.
                </p>
              </div>
              
              <div className="bg-pink-900/20 rounded-xl p-6 border border-pink-800/30">
                <h3 className="text-xl font-bold mb-3">Can SpotCircuit integrate with our existing marketing tools?</h3>
                <p className="text-gray-300">
                  Yes! SpotCircuit seamlessly integrates with all major marketing platforms including Google Ads, Meta Business Suite, HubSpot, Salesforce, Adobe Creative Cloud, and more. Our API also allows custom integrations with your proprietary tools and workflows.
                </p>
              </div>
              
              <div className="bg-pink-900/20 rounded-xl p-6 border border-pink-800/30">
                <h3 className="text-xl font-bold mb-3">Will AI-generated content feel generic or templated?</h3>
                <p className="text-gray-300">
                  Absolutely not! Our AI creates unique, creative content that's indistinguishable from human-created work. It learns from millions of successful campaigns but generates fresh, original ideas tailored to each client's specific audience and goals. Many agencies find AI content outperforms their human-created content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-900 to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become the Agency of the Future?
            </h2>
            
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Join leading agencies using AI to deliver extraordinary results at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-pink-900 hover:bg-pink-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Transform Your Agency
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-pink-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
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

export default MarketingAgenciesPage;