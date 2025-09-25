import type { Metadata } from 'next';
import React from 'react';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'insurance'
});


import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaChartLine, 
  FaStar, 
  FaFileContract,
  FaCogs, 
  FaAngleRight,
  FaUserTie,
  FaClipboardCheck,
  FaCalculator,
  FaRobot,
  FaExchangeAlt
} from 'react-icons/fa';
import InsurancePageSchema from './components/InsurancePageSchema';

const InsurancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <InsurancePageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-cyan-500">Insurance Brokerages</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Transform your insurance agency with automated lead qualification, instant quoting, and AI-driven client management that increases policy sales by 45% while reducing operational costs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaCalculator className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instant Quotes</h3>
                    <p className="text-sm text-gray-400">AI-powered underwriting</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaUserTie className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Lead Qualification</h3>
                    <p className="text-sm text-gray-400">Score & prioritize prospects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaExchangeAlt className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Cross-Selling AI</h3>
                    <p className="text-sm text-gray-400">Identify upsell opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaShieldAlt className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Compliance</h3>
                    <p className="text-sm text-gray-400">Automated regulatory tracking</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Insurance Marketing Audit
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
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-cyan-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                      <FaRobot className="text-cyan-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">AI Quote Engine</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI-powered platform generates accurate quotes in seconds, qualifies leads based on risk profiles, and automatically follows up with personalized policy recommendations.
                  </p>
                  <div className="border-t border-cyan-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-500">3x</p>
                        <p className="text-xs text-gray-400">Faster Quotes</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-500">45%</p>
                        <p className="text-xs text-gray-400">More Policies</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-500">60%</p>
                        <p className="text-xs text-gray-400">Higher Renewal</p>
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
              Specialized Marketing for <span className="text-cyan-500">Insurance Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Our AI-powered marketing solutions address the unique challenges of insurance brokerages with specialized tools for lead generation, policy management, and client retention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/50 hover:border-cyan-700/50 transition-all">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaCalculator className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Quote Generation</h3>
              <p className="text-gray-300 mb-4">
                Generate accurate quotes in seconds with AI-powered underwriting that analyzes risk factors and coverage needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Multi-carrier comparison</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Risk-based pricing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bundle recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/50 hover:border-cyan-700/50 transition-all">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaClipboardCheck className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Lead Qualification</h3>
              <p className="text-gray-300 mb-4">
                AI analyzes prospect data to score leads, predict conversion likelihood, and prioritize high-value opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Predictive lead scoring</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Coverage need analysis</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated follow-ups</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/50 hover:border-cyan-700/50 transition-all">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaExchangeAlt className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Retention & Cross-Selling</h3>
              <p className="text-gray-300 mb-4">
                Identify at-risk policies before renewal and discover cross-selling opportunities with AI-driven insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Renewal predictions</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Life event triggers</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Policy gap analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-cyan-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable <span className="text-cyan-500">Results</span> for Insurance Brokerages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30">
              <p className="text-4xl font-bold text-cyan-500 mb-2">45%</p>
              <p className="font-medium">Increase in Policy Sales</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30">
              <p className="text-4xl font-bold text-cyan-500 mb-2">3x</p>
              <p className="font-medium">Faster Quote Generation</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30">
              <p className="text-4xl font-bold text-cyan-500 mb-2">60%</p>
              <p className="font-medium">Higher Renewal Rates</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-800/30">
              <p className="text-4xl font-bold text-cyan-500 mb-2">80%</p>
              <p className="font-medium">Less Manual Work</p>
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
                    src="/images/testimonial.jpg" 
                    alt="InsureMax CEO" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-cyan-600 rounded-full p-2">
                  <FaShieldAlt className="text-white" />
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
                "SpotCircuit revolutionized our insurance brokerage. We went from taking hours to generate quotes to doing it in minutes. Our conversion rates are up 45% and our agents can focus on building relationships instead of paperwork."
              </blockquote>
              
              <div>
                <p className="font-bold">Jennifer Brooks</p>
                <p className="text-cyan-400 text-sm">CEO, InsureMax Brokers</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-cyan-500">45%</p>
                  <p className="text-xs text-gray-400">More Policies</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-500">3x</p>
                  <p className="text-xs text-gray-400">Faster Quotes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-500">$2.3M</p>
                  <p className="text-xs text-gray-400">Added Revenue</p>
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
                <h3 className="text-xl font-bold mb-3">How does AI improve insurance quote accuracy?</h3>
                <p className="text-gray-300">
                  Our AI analyzes thousands of data points including claims history, risk factors, and market trends to generate highly accurate quotes instantly. It learns from your successful policies to continuously improve pricing recommendations while maintaining profitability.
                </p>
              </div>
              
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/30">
                <h3 className="text-xl font-bold mb-3">Can SpotCircuit integrate with my existing insurance systems?</h3>
                <p className="text-gray-300">
                  Yes! SpotCircuit integrates seamlessly with major insurance CRMs, agency management systems, and carrier platforms including Applied Epic, AMS360, Salesforce Financial Services Cloud, and direct carrier APIs. Our team handles the entire integration process.
                </p>
              </div>
              
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-800/30">
                <h3 className="text-xl font-bold mb-3">How does AI help with compliance and regulations?</h3>
                <p className="text-gray-300">
                  Our AI continuously monitors regulatory changes across all states where you operate, automatically updating forms, disclosures, and processes. It flags potential compliance issues before they become problems and maintains detailed audit trails for all client interactions.
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
              Ready to Transform Your Insurance Brokerage?
            </h2>
            
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join leading brokerages using AI to sell more policies, retain more clients, and reduce operational costs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-cyan-900 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-cyan-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
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

export default InsurancePage;