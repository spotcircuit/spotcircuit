'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RoofingPageSchema from './components/RoofingPageSchema';
import RoofingDashboard from './components/RoofingDashboard';
import { 
  FaHome, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaCloudRain,
  FaUserCog,
  FaTools,
  FaShieldAlt,
  FaUmbrella
} from 'react-icons/fa';

const RoofingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <RoofingPageSchema />      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-red-500">Roofing Companies</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Grow your roofing business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI. Powered by our <Link href="/solutions/clientcircuit" className="text-red-400 hover:text-red-300 underline">ClientCircuit</Link> lead generation system.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaMapMarkerAlt className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Local Dominance</h3>
                    <p className="text-sm text-gray-400">Rank #1 in your service area</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaPhoneAlt className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Storm Response</h3>
                    <p className="text-sm text-gray-400">Capture emergency roof repairs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaStar className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Reputation Builder</h3>
                    <p className="text-sm text-gray-400">Grow positive reviews</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Tracking</h3>
                    <p className="text-sm text-gray-400">Measure marketing results</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Roofing Marketing Audit
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 hover:border-white transition duration-300 inline-block">
                    View Roofing Marketing Services
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative max-w-xl mx-auto lg:ml-auto lg:mr-0">
                <div className="bg-gradient-to-r from-red-600 to-red-400 rounded-lg p-0.5 shadow-2xl shadow-red-500/20">
                  <div className="bg-gray-900 rounded-lg p-3 relative z-10">
                    <Image 
                      src="/static/images/roofing-dashboard.svg" 
                      alt="Roofing Business Marketing Dashboard" 
                      width={640} 
                      height={400}
                      className="rounded-lg shadow-xl hover:scale-102 transition-transform duration-500"
                      priority
                      style={{ maxHeight: '65vh', width: 'auto', objectFit: 'contain' }}
                    />
                    
                    <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                      LIVE
                    </div>
                    
                    <div className="absolute bottom-8 left-0 bg-gray-900/90 backdrop-blur p-4 rounded-r-lg border-l-4 border-red-500 max-w-xs">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-2" />
                        <span className="text-sm font-semibold">New Review</span>
                      </div>
                      <p className="text-xs mt-1">
                        "Outstanding roof replacement! Professional team, quality materials, and finished ahead of schedule."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-gradient-to-br from-red-600 to-red-800 rounded-full w-48 h-48 blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 services-overview">
            Specialized Marketing for Roofing Companies
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Custom solutions designed specifically for roofing businesses to attract more clients and grow revenue
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-300">
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaCloudRain className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Storm Damage Response
              </h3>
              <p className="text-gray-300 mb-6">
                Capture emergency roof repair leads with optimized local search presence and rapid-response marketing after severe weather events.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Weather-triggered ad campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>24/7 emergency lead routing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Storm damage landing pages</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-300">
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaHome className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Residential Roof Replacement
              </h3>
              <p className="text-gray-300 mb-6">
                Generate high-value roof replacement leads through targeted marketing that highlights your quality materials and craftsmanship.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Before/after project galleries</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Material showcase pages</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Financing option promotion</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-300">
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUserCog className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Roofer Reputation Management
              </h3>
              <p className="text-gray-300 mb-6">
                Build and showcase your 5-star reputation to stand out from competitors and establish trust with potential customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Review generation campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Response management</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Review showcasing tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-300">
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaTools className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Roofing Lead Generation
              </h3>
              <p className="text-gray-300 mb-6">
                Attract and convert high-quality roofing leads with targeted advertising and conversion-optimized websites.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Google Local Service Ads</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Free estimate forms</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Roof inspection campaigns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-300">
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUmbrella className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Insurance Claim Support
              </h3>
              <p className="text-gray-300 mb-6">
                Position your company as experts in helping homeowners navigate insurance claims for roof damage and repairs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Claims process education</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Insurance adjuster relationship</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Documentation assistance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-300">
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaShieldAlt className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Warranty & Guarantee Marketing
              </h3>
              <p className="text-gray-300 mb-6">
                Promote your warranties and guarantees to build customer confidence and differentiate from competitors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Warranty program promotion</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Satisfaction guarantee badging</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Manufacturer certification display</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/50 to-red-800/30 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500">
                      <Image 
                        src="/static/images/roofing-testimonial.jpg" 
                        alt="Summit Roofing Owner" 
                        width={128} 
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-red-600 rounded-full p-2">
                      <FaHome className="text-white" />
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
                  
                  <blockquote className="text-xl italic text-gray-300 mb-6 testimonial">
                    "SpotCircuit's marketing system has been a game-changer. We've doubled our roof replacement jobs and significantly increased our average project value."
                  </blockquote>
                  
                  <div>
                    <p className="font-bold">Robert Taylor</p>
                    <p className="text-red-400 text-sm">Owner, Summit Roofing</p>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-red-500">203%</p>
                      <p className="text-xs text-gray-400">More Leads</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-500">37%</p>
                      <p className="text-xs text-gray-400">Higher Average Sale</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-500">8.7x</p>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 services-overview">
                Roofing Marketing Solutions That <span className="text-red-500">Drive Growth</span>
              </h2>
              <p className="text-xl text-gray-300">
                Our AI-powered marketing services are specifically designed for roofing companies looking to grow their business.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Roofing Business?
            </h2>
            
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join the hundreds of roofing companies that are growing their business with SpotCircuit's AI-powered marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-red-900 hover:bg-red-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-red-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Explore All Local Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>    </div>
  );
};

export default RoofingPage;
