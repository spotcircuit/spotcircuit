import type { Metadata } from 'next';
import React from 'react';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'medical-spas'
});

'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaSpa, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaUserMd,
  FaCalendarCheck,
  FaShieldAlt,
  FaInstagram,
  FaBullhorn
} from 'react-icons/fa';
import MedicalSpasPageSchema from './components/MedicalSpasPageSchema';

const MedicalSpasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <MedicalSpasPageSchema />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-purple-500">Medical Spas</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Attract high-value clients with sophisticated digital marketing strategies designed specifically for medical spas, aesthetics practices, and wellness centers.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaUserMd className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Compliant Marketing</h3>
                    <p className="text-sm text-gray-400">Medical regulations adherence</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaCalendarCheck className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Booking Automation</h3>
                    <p className="text-sm text-gray-400">Streamlined appointment system</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaInstagram className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visual Marketing</h3>
                    <p className="text-sm text-gray-400">Before/after showcases</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Tracking</h3>
                    <p className="text-sm text-gray-400">Client lifetime value metrics</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Medical Spa Marketing Audit
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
                      <FaSpa className="text-purple-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Client Acquisition System</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI-powered platform targets high-value clients interested in premium aesthetic treatments, automatically qualifying leads based on treatment preferences and spending capacity.
                  </p>
                  <div className="border-t border-purple-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">72%</p>
                        <p className="text-xs text-gray-400">More Bookings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">$3.2K</p>
                        <p className="text-xs text-gray-400">Avg Client Value</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">4.2x</p>
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
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Marketing for <span className="text-purple-500">Medical Spa Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Our AI-powered marketing solutions address the unique challenges of medical spas with compliant strategies that attract and retain high-value aesthetic clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Medical Compliance Marketing</h3>
              <p className="text-gray-300 mb-4">
                Navigate medical advertising regulations with confidence while effectively promoting your aesthetic services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">FDA-compliant messaging</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Before/after guidelines</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Medical board adherence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaInstagram className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visual Content Strategy</h3>
              <p className="text-gray-300 mb-4">
                Showcase your treatments and results with stunning visual content that converts followers into clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Treatment showcase videos</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Client testimonials</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Educational content</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaCalendarCheck className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Client Journey Automation</h3>
              <p className="text-gray-300 mb-4">
                From first contact to loyal client, automate every touchpoint to ensure exceptional experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Online booking integration</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Treatment reminders</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Loyalty program management</span>
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
              Proven <span className="text-purple-500">Results</span> for Medical Spas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">3.8x</p>
              <p className="font-medium">More Qualified Leads</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">62%</p>
              <p className="font-medium">Increase in Bookings</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">$1.2K</p>
              <p className="font-medium">Higher Average Ticket</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30">
              <p className="text-4xl font-bold text-purple-500 mb-2">4.5x</p>
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
                    src="/images/testimonial-spa.jpg" 
                    alt="Radiant Aesthetics Owner" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                  <FaSpa className="text-white" />
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
                "SpotCircuit transformed our medical spa's online presence. We've seen a 250% increase in new client bookings and our average treatment value has gone up significantly. The compliance-focused approach gives us peace of mind."
              </blockquote>
              
              <div>
                <p className="font-bold">Dr. Amanda Chen</p>
                <p className="text-purple-400 text-sm">Owner, Radiant Aesthetics Medical Spa</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-500">250%</p>
                  <p className="text-xs text-gray-400">More Bookings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">45%</p>
                  <p className="text-xs text-gray-400">Client Retention</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">6.2x</p>
                  <p className="text-xs text-gray-400">ROI</p>
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
                <h3 className="text-xl font-bold mb-3">How can digital marketing help my medical spa grow?</h3>
                <p className="text-gray-300">
                  Digital marketing helps medical spas attract ideal clients through targeted campaigns, establish authority with educational content, showcase treatment results compliantly, and build long-term client relationships through automated nurturing and retention programs.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">What makes SpotCircuit different for medical spa marketing?</h3>
                <p className="text-gray-300">
                  SpotCircuit specializes in medical spa marketing with deep understanding of compliance requirements, visual-first strategies for aesthetics businesses, advanced targeting for high-value treatment seekers, and proven ROI tracking specifically for medical spas and wellness centers.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">How do you ensure marketing compliance for medical treatments?</h3>
                <p className="text-gray-300">
                  We ensure compliance by following FDA advertising guidelines, adhering to medical board regulations, properly disclosing risks and benefits, and maintaining ethical standards in all promotional materials. Our team stays updated on all relevant regulations to protect your practice.
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
              Ready to Elevate Your Medical Spa?
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join the leading medical spas and aesthetic practices growing their business with SpotCircuit's compliant, results-driven marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-purple-900 hover:bg-purple-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
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

export default MedicalSpasPage;