'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaChartLine, 
  FaCheckCircle, 
  FaDollarSign, 
  FaStar, 
  FaGem,
  FaShieldAlt, 
  FaAngleRight,
  FaBalanceScale,
  FaComments,
  FaFileContract,
  FaCalculator,
  FaRobot
} from 'react-icons/fa';
import FinancialAdvisorsPageSchema from './components/FinancialAdvisorsPageSchema';

const FinancialAdvisorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <FinancialAdvisorsPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Solutions for <span className="text-emerald-500">Financial Advisors</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Scale your practice with AI-driven client acquisition, automated portfolio management, and intelligent financial planning that helps you manage 3x more assets efficiently.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaGem className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Client Acquisition</h3>
                    <p className="text-sm text-gray-400">Target HNW prospects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Portfolio AI</h3>
                    <p className="text-sm text-gray-400">Optimize returns</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaFileContract className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Planning Tools</h3>
                    <p className="text-sm text-gray-400">Instant plans</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaShieldAlt className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Compliance</h3>
                    <p className="text-sm text-gray-400">SEC/FINRA ready</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Grow Your Practice Now
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
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-emerald-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-emerald-500/20 p-3 rounded-full">
                      <FaRobot className="text-emerald-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Advisor AI Suite</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI platform identifies ideal prospects, optimizes portfolios 24/7, and generates comprehensive financial plans while ensuring full regulatory compliance.
                  </p>
                  <div className="border-t border-emerald-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-emerald-500">3x</p>
                        <p className="text-xs text-gray-400">More AUM</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-emerald-500">65%</p>
                        <p className="text-xs text-gray-400">More Clients</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-emerald-500">40%</p>
                        <p className="text-xs text-gray-400">Better Returns</p>
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
      <section className="py-20 bg-gradient-to-b from-emerald-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Tools Designed for <span className="text-emerald-500">Elite Financial Advisors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Deliver institutional-quality advice with the personal touch clients value using AI-powered tools built for wealth management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-700/50 transition-all">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaGem className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Client Acquisition</h3>
              <p className="text-gray-300 mb-4">
                Identify and convert high-net-worth prospects with AI that analyzes wealth signals and engagement patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Wealth identification</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated nurturing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Referral optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-700/50 transition-all">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Portfolio Optimization Engine</h3>
              <p className="text-gray-300 mb-4">
                Rebalance portfolios and maximize returns with AI that monitors markets 24/7 and acts on opportunities instantly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Real-time rebalancing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Tax loss harvesting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Risk management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-700/50 transition-all">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaFileContract className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Financial Planning</h3>
              <p className="text-gray-300 mb-4">
                Generate comprehensive financial plans in minutes with AI that considers thousands of scenarios and strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Monte Carlo analysis</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Estate planning</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Goal optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-emerald-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real <span className="text-emerald-500">Results</span> from AI-Powered Advisors
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-800/30">
              <p className="text-4xl font-bold text-emerald-500 mb-2">3x</p>
              <p className="font-medium">More AUM per Advisor</p>
            </div>
            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-800/30">
              <p className="text-4xl font-bold text-emerald-500 mb-2">65%</p>
              <p className="font-medium">Higher Client Acquisition</p>
            </div>
            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-800/30">
              <p className="text-4xl font-bold text-emerald-500 mb-2">40%</p>
              <p className="font-medium">Better Portfolio Performance</p>
            </div>
            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-800/30">
              <p className="text-4xl font-bold text-emerald-500 mb-2">90%</p>
              <p className="font-medium">Time Savings on Admin</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-emerald-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-emerald-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500">
                  <Image 
                    src="/images/testimonial.jpg" 
                    alt="Wealth Advisors CEO" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-600 rounded-full p-2">
                  <FaDollarSign className="text-white" />
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
                "SpotCircuit has transformed my practice. I'm managing 3x more assets with the same team, and my clients are getting better returns than ever. The AI handles all the complex analysis while I focus on what I do best - building relationships."
              </blockquote>
              
              <div>
                <p className="font-bold">Robert Thompson</p>
                <p className="text-emerald-400 text-sm">Managing Partner, Thompson Wealth Advisors</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-emerald-500">$450M</p>
                  <p className="text-xs text-gray-400">AUM</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-500">312</p>
                  <p className="text-xs text-gray-400">Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-500">18.5%</p>
                  <p className="text-xs text-gray-400">Avg Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-emerald-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/30">
                <h3 className="text-xl font-bold mb-3">How does AI improve investment performance?</h3>
                <p className="text-gray-300">
                  SpotCircuit's AI analyzes millions of market signals, economic indicators, and portfolio correlations in real-time. It identifies opportunities and risks faster than any human could, automatically rebalancing portfolios to optimize returns while maintaining each client's risk tolerance. Our AI consistently outperforms traditional methods by 20-40%.
                </p>
              </div>
              
              <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/30">
                <h3 className="text-xl font-bold mb-3">Will AI replace the personal advisor relationship?</h3>
                <p className="text-gray-300">
                  Not at all! SpotCircuit enhances your ability to provide personalized advice by handling time-consuming analytical and administrative tasks. This frees you to focus on what matters most - building relationships, understanding client goals, and providing the human touch that technology can't replace. Think of it as having a team of analysts working 24/7.
                </p>
              </div>
              
              <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/30">
                <h3 className="text-xl font-bold mb-3">How does SpotCircuit ensure security and compliance?</h3>
                <p className="text-gray-300">
                  We exceed all SEC and FINRA requirements with bank-level encryption, SOC 2 certification, and continuous compliance monitoring. Our AI automatically tracks and documents all client interactions, trades, and recommendations for perfect audit trails. We also monitor regulatory changes and update your workflows automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Future-Proof Your Advisory Practice?
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Join leading advisors using AI to grow AUM and deliver exceptional client outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Consultation
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-emerald-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
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

export default FinancialAdvisorsPage;