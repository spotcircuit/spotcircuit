'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaWrench, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaUserCog,
  FaToolbox,
  FaTint,
  FaShieldAlt
} from 'react-icons/fa';

const PlumbingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-blue-500">Plumbing Companies</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Grow your plumbing business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaMapMarkerAlt className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Local Dominance</h3>
                    <p className="text-sm text-gray-400">Rank #1 in your service area</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaPhoneAlt className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Emergency Calls</h3>
                    <p className="text-sm text-gray-400">Capture urgent service needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaStar className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Reputation Builder</h3>
                    <p className="text-sm text-gray-400">Grow positive reviews</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Tracking</h3>
                    <p className="text-sm text-gray-400">Measure marketing results</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Plumbing Marketing Audit
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 hover:border-white transition duration-300 inline-block">
                    View Plumber Marketing Services
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-1">
                  <div className="bg-gray-900 rounded-lg p-4 relative z-10">
                    <Image 
                      src="/images/plumbing-dashboard.jpg" 
                      alt="Plumbing Business Marketing Dashboard" 
                      width={600} 
                      height={400}
                      className="rounded-lg shadow-xl"
                    />
                    
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full">
                      +147% More Calls
                    </div>
                    
                    <div className="absolute bottom-8 left-0 bg-gray-900/90 backdrop-blur p-4 rounded-r-lg border-l-4 border-blue-500 max-w-xs">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-1" />
                        <FaStar className="text-yellow-400 mr-2" />
                        <span className="text-sm font-semibold">New Review</span>
                      </div>
                      <p className="text-xs mt-1">
                        "They fixed our emergency leak at 10pm and were very professional. Highly recommend!"
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-48 h-48 blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Specialized Marketing for Plumbing Companies
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Custom solutions designed specifically for plumbing businesses to attract more clients and grow revenue
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Emergency Service Visibility
              </h3>
              <p className="text-gray-300 mb-6">
                Capture emergency plumbing calls with optimized local search presence that ensures you're found when homeowners need urgent help.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Google Business Profile optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>24/7 service highlighting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Emergency keyword targeting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaTint className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Specialty Service Promotion
              </h3>
              <p className="text-gray-300 mb-6">
                Highlight your specialized plumbing services from water heater installation to repiping, sewer repairs, and bathroom remodels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Service-specific landing pages</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Before/after project galleries</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Targeted service area pages</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUserCog className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Plumber Reputation Management
              </h3>
              <p className="text-gray-300 mb-6">
                Build and showcase your 5-star reputation to stand out from competitors and establish trust with potential customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Review generation campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Response management</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Review showcasing tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaToolbox className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Plumbing Lead Generation
              </h3>
              <p className="text-gray-300 mb-6">
                Attract and convert high-quality plumbing leads with targeted advertising and conversion-optimized websites.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Google Local Service Ads</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>24/7 quote request forms</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Call tracking & recording</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaWrench className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Plumbing Content Marketing
              </h3>
              <p className="text-gray-300 mb-6">
                Educate homeowners with helpful content that establishes your expertise and drives organic traffic to your website.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>DIY troubleshooting guides</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Seasonal maintenance tips</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Water conservation advice</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-300">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaShieldAlt className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Service Warranty Marketing
              </h3>
              <p className="text-gray-300 mb-6">
                Promote your service guarantees and warranties to build customer confidence and differentiate from competitors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Warranty program promotion</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Satisfaction guarantee badging</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Trust signal implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/50 to-blue-800/30 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
                      <Image 
                        src="/images/plumber-testimonial.jpg" 
                        alt="Apex Plumbing Owner" 
                        width={128} 
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                      <FaWrench className="text-white" />
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
                    "SpotCircuit transformed our plumbing business. We're now the #1 plumber in Chicago for emergency services and our schedule is consistently full with quality jobs."
                  </blockquote>
                  
                  <div>
                    <p className="font-bold">Mike Johnson</p>
                    <p className="text-blue-400 text-sm">Owner, Apex Plumbing</p>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-500">147%</p>
                      <p className="text-xs text-gray-400">More Leads</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-500">43%</p>
                      <p className="text-xs text-gray-400">Bigger Jobs</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-500">9.2x</p>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                  </div>
                </div>
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
              Ready to Grow Your Plumbing Business?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the hundreds of plumbing companies that are growing their business with SpotCircuit's AI-powered marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-services">
                <span className="bg-transparent hover:bg-blue-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Explore All Local Services
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

export default PlumbingPage;
