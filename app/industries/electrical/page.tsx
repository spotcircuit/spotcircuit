import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'electrical'
});

'use client';
import Image from 'next/image';
import { 
  FaBolt, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaLightbulb,
  FaUserCog,
  FaTools,
  FaShieldAlt,
  FaHome
} from 'react-icons/fa';
import ElectricalPageSchema from '@/app/industries/electrical/components/ElectricalPageSchema';

const ElectricalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">      
      {/* Schema Markup */}
      <ElectricalPageSchema />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-yellow-500">Electrical Contractors</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Grow your electrical business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaMapMarkerAlt className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Local Dominance</h3>
                    <p className="text-sm text-gray-400">Rank #1 in your service area</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaPhoneAlt className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Emergency Calls</h3>
                    <p className="text-sm text-gray-400">Capture urgent service needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Reputation Builder</h3>
                    <p className="text-sm text-gray-400">Grow positive reviews</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Tracking</h3>
                    <p className="text-sm text-gray-400">Measure marketing results</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Electrical Marketing Audit
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 hover:border-white transition duration-300 inline-block">
                    View Electrical Marketing Services
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-1">
                  <div className="bg-black rounded-lg overflow-hidden">
                    <Image 
                      src="/images/electrical-dashboard.jpg" 
                      alt="Electrical Marketing Dashboard" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-yellow-600 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 rounded-full h-3 w-3"></div>
                    <span className="text-sm font-bold">168% More Leads</span>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-yellow-900 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-bold">4.3x ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-yellow-900/30 services-overview">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Electrical Marketing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We handle every aspect of your online presence so you can focus on running your electrical business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-xl p-8 border border-yellow-800/30 hover:border-yellow-500/50 transition duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Local SEO Domination</h3>
              <p className="text-gray-400 mb-4">
                Rank at the top of Google Maps and local search results when homeowners search for electrical services in your area.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Google Business Profile Optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Local Citation Building</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Neighborhood Targeting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/50 rounded-xl p-8 border border-yellow-800/30 hover:border-yellow-500/50 transition duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUserCog className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Electrician PPC Campaigns</h3>
              <p className="text-gray-400 mb-4">
                Targeted pay-per-click advertising that puts your electrical services in front of homeowners actively searching for help.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Emergency Service Campaigns</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Service-Specific Ad Groups</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Call Tracking & Recording</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/50 rounded-xl p-8 border border-yellow-800/30 hover:border-yellow-500/50 transition duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reputation Management</h3>
              <p className="text-gray-400 mb-4">
                Build a stellar online reputation with automated review generation and response management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Review Generation System</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Negative Feedback Interception</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  <span className="text-sm">Review Response Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center testimonial">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500">
                    <Image 
                      src="/images/electrician-testimonial.jpg" 
                      alt="Volt Electric Owner" 
                      width={128} 
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-600 rounded-full p-2">
                    <FaBolt className="text-white" />
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
                  "SpotCircuit completely changed our marketing game. Their AI system is generating more qualified leads than our previous marketing company at half the cost."
                </blockquote>
                
                <div>
                  <p className="font-bold">Sarah Rodriguez</p>
                  <p className="text-yellow-400 text-sm">Owner, Volt Electric</p>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-yellow-500">168%</p>
                    <p className="text-xs text-gray-400">More Leads</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-500">52%</p>
                    <p className="text-xs text-gray-400">Lower CPA</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-500">4.3x</p>
                    <p className="text-xs text-gray-400">ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-900 to-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Electrical Business?
            </h2>
            
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Join the hundreds of electrical contractors that are growing their business with SpotCircuit's AI-powered marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-yellow-900 hover:bg-yellow-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-yellow-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Explore All Local Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>    </div>
  );
};

export default ElectricalPage;
