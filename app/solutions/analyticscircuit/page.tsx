'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaChartLine, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaEye, 
  FaAngleRight,
  FaChartBar,
  FaTachometerAlt,
  FaFilter,
  FaBullseye,
  FaSearchDollar,
  FaChartPie,
  FaTable,
  FaDownload,
  FaBell,
  FaRocket
} from 'react-icons/fa';
import AnalyticsCircuitPageSchema from './components/AnalyticsCircuitPageSchema';

const AnalyticsCircuitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Schema Markup */}
      <AnalyticsCircuitPageSchema />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-green-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-green-500">AnalyticsCircuit</span> - AI-Powered Business Intelligence
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Transform raw data into actionable insights with AI that analyzes customer behavior, predicts trends, and optimizes marketing ROI across all channels and touchpoints. Part of our comprehensive <Link href="/services#analytics-reporting" className="text-green-400 hover:text-green-300 underline">analytics & reporting services</Link>.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaTachometerAlt className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Real-time Dashboards</h3>
                    <p className="text-sm text-gray-400">Live performance metrics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaBullseye className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Predictive Analytics</h3>
                    <p className="text-sm text-gray-400">AI trend forecasting</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaSearchDollar className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Attribution</h3>
                    <p className="text-sm text-gray-400">Multi-touch tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaBell className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Smart Alerts</h3>
                    <p className="text-sm text-gray-400">Automated notifications</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Start Free Trial
                  </span>
                </Link>
                <Link href="/demo">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition duration-300 inline-block">
                    View Demo
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-green-900/80 to-black rounded-2xl p-6 shadow-xl border border-green-800/30">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <FaChartLine className="text-green-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Advanced Analytics Engine</h3>
                  </div>
                  
                  {/* Analytics Dashboard SVG */}
                  <div className="mb-6">
                    <Image 
                      src="/static/images/analytics-dashboard.svg" 
                      alt="AnalyticsCircuit Dashboard Interface" 
                      width={400} 
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Get comprehensive insights across all marketing channels with predictive analytics, customer journey mapping, and automated ROI reporting.
                  </p>
                  <div className="border-t border-green-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-green-500">247%</p>
                        <p className="text-xs text-gray-400">ROI Improvement</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-green-500">89%</p>
                        <p className="text-xs text-gray-400">Accuracy Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-green-500">12x</p>
                        <p className="text-xs text-gray-400">Faster Insights</p>
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
      <section className="py-20 bg-gradient-to-b from-green-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="text-green-500">Analytics & Intelligence</span> Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              AnalyticsCircuit combines advanced data science with intuitive visualization to deliver insights that drive strategic decision-making and business growth. Explore all our <Link href="/services" className="text-green-400 hover:text-green-300 underline">AI-powered services</Link> to unlock your full business potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/50 hover:border-green-700/50 transition-all">
              <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaTachometerAlt className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Dashboards</h3>
              <p className="text-gray-300 mb-4">
                Monitor your business performance with customizable dashboards that update in real-time and provide instant visibility into key metrics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Custom widgets</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Live data feeds</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Mobile responsive</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/50 hover:border-green-700/50 transition-all">
              <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBullseye className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4">
                Leverage machine learning to predict customer behavior, forecast sales trends, and identify optimization opportunities before they happen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Sales forecasting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Churn prediction</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Trend analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/50 hover:border-green-700/50 transition-all">
              <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaSearchDollar className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Touch Attribution</h3>
              <p className="text-gray-300 mb-4">
                Track the complete customer journey across all touchpoints to understand which marketing efforts drive the highest ROI and conversions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Cross-channel tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Revenue attribution</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Customer lifetime value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Analytics Features Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-green-800/10 skew-y-1 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="text-green-500">Data Analysis</span> Tools
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/30 text-center">
              <FaChartBar className="text-green-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Performance Reports</h3>
              <p className="text-sm text-gray-400">Automated reporting</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/30 text-center">
              <FaChartPie className="text-green-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Customer Segmentation</h3>
              <p className="text-sm text-gray-400">Behavioral analysis</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/30 text-center">
              <FaFilter className="text-green-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Advanced Filtering</h3>
              <p className="text-sm text-gray-400">Granular data views</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/30 text-center">
              <FaDownload className="text-green-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Data Export</h3>
              <p className="text-sm text-gray-400">Multiple formats</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-green-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-green-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
                  <Image 
                    src="/images/testimonial-analytics.jpg" 
                    alt="Data Director" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-600 rounded-full p-2">
                  <FaChartLine className="text-white" />
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
                "AnalyticsCircuit gave us the insights we never had before. We discovered that 60% of our revenue was coming from channels we thought were underperforming. The ROI optimization recommendations increased our profit margins by 180%."
              </blockquote>
              
              <div>
                <p className="font-bold">David Thompson</p>
                <p className="text-green-400 text-sm">Data Director, Growth Industries</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-500">180%</p>
                  <p className="text-xs text-gray-400">Profit Increase</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-500">95%</p>
                  <p className="text-xs text-gray-400">Data Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-500">24/7</p>
                  <p className="text-xs text-gray-400">Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/30">
                <h3 className="text-xl font-bold mb-3">How does AnalyticsCircuit integrate with my existing data sources?</h3>
                <p className="text-gray-300">
                  AnalyticsCircuit connects with over 200 data sources including Google Analytics, Facebook Ads, CRM systems, e-commerce platforms, and databases through APIs, webhooks, and direct integrations. Setup typically takes minutes, not days.
                </p>
              </div>
              
              <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/30">
                <h3 className="text-xl font-bold mb-3">What makes AnalyticsCircuit's AI predictions more accurate?</h3>
                <p className="text-gray-300">
                  Our machine learning models are trained on millions of data points across various industries and continuously learn from your specific business patterns. The AI considers seasonal trends, market conditions, and customer behavior patterns to deliver 89% prediction accuracy.
                </p>
              </div>
              
              <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/30">
                <h3 className="text-xl font-bold mb-3">Can I customize dashboards and reports for different team members?</h3>
                <p className="text-gray-300">
                  Yes, AnalyticsCircuit offers unlimited custom dashboards with role-based access controls. Create tailored views for executives, marketing teams, sales staff, and other stakeholders with relevant metrics and automated reporting schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of data-driven businesses using AnalyticsCircuit to optimize performance, predict trends, and maximize ROI across all channels.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-green-900 hover:bg-green-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Start Free Trial
                </span>
              </Link>
              
              <Link href="/demo">
                <span className="bg-transparent hover:bg-green-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  View Demo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AnalyticsCircuitPage;