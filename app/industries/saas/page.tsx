import type { Metadata } from 'next';
import React from 'react';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'saas'
});

'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaRocket, 
  FaCheckCircle, 
  FaChartLine, 
  FaStar, 
  FaCloud,
  FaCode, 
  FaAngleRight,
  FaLaptopCode,
  FaCogs,
  FaUsersCog,
  FaMobileAlt,
  FaShieldAlt
} from 'react-icons/fa';
import SaasPageSchema from './components/SaasPageSchema';

const SaasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <SaasPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-purple-500">SaaS & Software</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Scale your software business with data-driven marketing strategies that increase user acquisition, improve retention, and maximize customer lifetime value.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaRocket className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Growth Acceleration</h3>
                    <p className="text-sm text-gray-400">Scale faster with AI</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaUsersCog className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">User Acquisition</h3>
                    <p className="text-sm text-gray-400">Target ideal customers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Revenue Growth</h3>
                    <p className="text-sm text-gray-400">Increase MRR/ARR</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaShieldAlt className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Churn Reduction</h3>
                    <p className="text-sm text-gray-400">Improve retention rates</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free SaaS Marketing Audit
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
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-purple-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <FaCloud className="text-purple-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">AI-Driven Growth Engine</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our platform uses machine learning to identify high-value prospects, optimize conversion funnels, and predict churn before it happens, enabling proactive retention strategies.
                  </p>
                  <div className="border-t border-purple-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">3.8x</p>
                        <p className="text-xs text-gray-400">CAC Payback</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">52%</p>
                        <p className="text-xs text-gray-400">Lower Churn</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">127%</p>
                        <p className="text-xs text-gray-400">MRR Growth</p>
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
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Marketing for <span className="text-purple-500">Software Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Our AI-powered marketing solutions address the unique challenges of SaaS and software companies with specialized tools for growth, retention, and expansion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaLaptopCode className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Product-Led Growth Optimization</h3>
              <p className="text-gray-300 mb-4">
                Design and optimize free trial funnels, onboarding sequences, and feature adoption campaigns to maximize conversion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Trial-to-paid optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Feature adoption tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">User journey mapping</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaCogs className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Developer Marketing & API Growth</h3>
              <p className="text-gray-300 mb-4">
                Reach technical audiences with content that resonates, documentation that converts, and community building strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Technical content creation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Developer community growth</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">API adoption campaigns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaMobileAlt className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Channel ABM Campaigns</h3>
              <p className="text-gray-300 mb-4">
                Target enterprise accounts with personalized, multi-touch campaigns across channels to accelerate sales cycles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Account-based targeting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Intent data activation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Sales enablement content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-purple-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable <span className="text-purple-500">Results</span> for SaaS Companies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">287%</p>
              <p className="font-medium">Increase in Trial Signups</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">42%</p>
              <p className="font-medium">Higher Conversion Rate</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">31%</p>
              <p className="font-medium">Lower CAC</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">5.2x</p>
              <p className="font-medium">Marketing ROI</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-purple-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-purple-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500">
                  <Image 
                    src="/images/testimonial.jpg" 
                    alt="CloudSync CEO" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                  <FaCloud className="text-white" />
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
                "SpotCircuit transformed our go-to-market strategy. Their AI-driven approach helped us triple our MRR in 8 months while reducing our customer acquisition costs by 40%."
              </blockquote>
              
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-purple-400 text-sm">CEO, CloudSync Solutions</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-500">3x</p>
                  <p className="text-xs text-gray-400">MRR Growth</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">40%</p>
                  <p className="text-xs text-gray-400">Lower CAC</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">89%</p>
                  <p className="text-xs text-gray-400">Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-purple-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">How can digital marketing help my SaaS company grow?</h3>
                <p className="text-gray-300">
                  Digital marketing helps SaaS companies by optimizing product-led growth funnels, reducing customer acquisition costs through targeted campaigns, improving retention with data-driven engagement strategies, and scaling revenue through account-based marketing and expansion campaigns.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">What makes SpotCircuit different for SaaS marketing?</h3>
                <p className="text-gray-300">
                  SpotCircuit specializes in SaaS growth with AI-powered solutions that understand software business models. We focus on metrics that matter like MRR, CAC, LTV, and churn rate. Our platform integrates with your tech stack and provides predictive analytics for proactive growth strategies.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">How long does it take to see results from SaaS marketing?</h3>
                <p className="text-gray-300">
                  Most SaaS clients see initial improvements in trial signups and engagement within 30 days. Significant improvements in conversion rates and MRR typically occur within 60-90 days. Our AI systems continuously optimize, with compound growth effects typically visible within 3-6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Software Business?
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of SaaS companies growing faster with SpotCircuit's AI-powered marketing platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-purple-900 hover:bg-purple-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Growth Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-purple-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
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

export default SaasPage;