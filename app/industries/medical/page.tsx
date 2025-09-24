'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaStethoscope, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaUserMd,
  FaShieldAlt,
  FaHeartbeat,
  FaCalendarCheck,
  FaHospital,
  FaTooth,
  FaSpa
} from 'react-icons/fa';
import MedicalPageSchema from './components/MedicalPageSchema';

const MedicalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <MedicalPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-teal-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-teal-500">Healthcare Providers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Grow your medical practice, dental office, or medical spa with HIPAA-compliant digital marketing strategies that attract new patients while maintaining the highest standards of privacy and professionalism.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaShieldAlt className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">HIPAA Compliant</h3>
                    <p className="text-sm text-gray-400">Privacy-first marketing</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaCalendarCheck className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Patient Scheduling</h3>
                    <p className="text-sm text-gray-400">Integrated booking systems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaHeartbeat className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Patient Education</h3>
                    <p className="text-sm text-gray-400">Health content marketing</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Practice Growth</h3>
                    <p className="text-sm text-gray-400">Measurable patient acquisition</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Healthcare Marketing Audit
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
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-teal-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-teal-500/20 p-3 rounded-full">
                      <FaStethoscope className="text-teal-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Patient Acquisition System</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our HIPAA-compliant platform identifies and engages potential patients based on specialty, location, and insurance acceptance, while maintaining complete privacy compliance.
                  </p>
                  <div className="border-t border-teal-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-teal-500">84%</p>
                        <p className="text-xs text-gray-400">More New Patients</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-teal-500">91%</p>
                        <p className="text-xs text-gray-400">Show Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-teal-500">5.4x</p>
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
      <section className="py-20 bg-gradient-to-b from-teal-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Marketing for <span className="text-teal-500">All Healthcare Providers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Our AI-powered marketing solutions address the unique challenges of medical practices, dental offices, and medical spas with HIPAA-compliant strategies that build trust and attract quality patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/50 transition-all">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">HIPAA-Compliant Marketing</h3>
              <p className="text-gray-300 mb-4">
                Protect patient privacy while effectively promoting your practice with fully compliant digital marketing strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Secure patient communications</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Privacy-compliant testimonials</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Protected health information</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/50 transition-all">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeartbeat className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Patient Education Hub</h3>
              <p className="text-gray-300 mb-4">
                Build trust and authority with educational content that helps patients make informed healthcare decisions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Condition-specific content</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Treatment explanations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Preventive care resources</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/50 transition-all">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHospital className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Referral Network Building</h3>
              <p className="text-gray-300 mb-4">
                Strengthen relationships with referring physicians and build a robust professional network.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Physician outreach programs</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Referral tracking systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Professional networking</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Additional features for dental and medical spa */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/50 transition-all">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaTooth className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dental Practice Marketing</h3>
              <p className="text-gray-300 mb-4">
                Specialized strategies for general dentistry, orthodontics, and cosmetic dental practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Smile makeover campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Insurance verification tools</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Emergency dental SEO</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/50 transition-all">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaSpa className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Medical Spa Marketing</h3>
              <p className="text-gray-300 mb-4">
                Targeted marketing for aesthetic treatments, wellness services, and beauty enhancement procedures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Before/after galleries</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Treatment package promotions</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">VIP membership programs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/50 transition-all">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUserMd className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Specialty Integration</h3>
              <p className="text-gray-300 mb-4">
                Unified marketing for practices offering medical, dental, and aesthetic services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Cross-service promotions</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Integrated patient journeys</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Comprehensive wellness marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-teal-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="text-teal-500">Results</span> for Healthcare Providers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-teal-900/30 p-6 rounded-lg border border-teal-800/30">
              <p className="text-4xl font-bold text-teal-500 mb-2">4.8x</p>
              <p className="font-medium">More New Patients</p>
            </div>
            <div className="bg-teal-900/30 p-6 rounded-lg border border-teal-800/30">
              <p className="text-4xl font-bold text-teal-500 mb-2">72%</p>
              <p className="font-medium">Appointment Show Rate</p>
            </div>
            <div className="bg-teal-900/30 p-6 rounded-lg border border-teal-800/30">
              <p className="text-4xl font-bold text-teal-500 mb-2">93%</p>
              <p className="font-medium">Patient Satisfaction</p>
            </div>
            <div className="bg-teal-900/30 p-6 rounded-lg border border-teal-800/30">
              <p className="text-4xl font-bold text-teal-500 mb-2">7.2x</p>
              <p className="font-medium">Marketing ROI</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-teal-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-teal-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-500">
                  <Image 
                    src="/images/testimonial-doctor.jpg" 
                    alt="Family Medicine Practice Owner" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-teal-600 rounded-full p-2">
                  <FaStethoscope className="text-white" />
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
                "SpotCircuit's HIPAA-compliant marketing has transformed our multi-specialty practice. We've grown from 20 to 75 new patients per month across our medical, dental, and aesthetic services while maintaining complete privacy compliance. The ROI has been exceptional."
              </blockquote>
              
              <div>
                <p className="font-bold">Dr. Robert Martinez</p>
                <p className="text-teal-400 text-sm">Multi-Specialty Healthcare Center Owner</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-teal-500">275%</p>
                  <p className="text-xs text-gray-400">Patient Growth</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-teal-500">100%</p>
                  <p className="text-xs text-gray-400">HIPAA Compliant</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-teal-500">8.5x</p>
                  <p className="text-xs text-gray-400">ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-teal-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-teal-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/30">
                <h3 className="text-xl font-bold mb-3">How can digital marketing help my healthcare practice while maintaining HIPAA compliance?</h3>
                <p className="text-gray-300">
                  Digital marketing helps medical practices, dental offices, and medical spas attract new patients through HIPAA-compliant strategies including secure patient communications, privacy-protected testimonials, educational content marketing, and targeted advertising that respects patient privacy while effectively growing your practice.
                </p>
              </div>
              
              <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/30">
                <h3 className="text-xl font-bold mb-3">What makes SpotCircuit different for healthcare marketing?</h3>
                <p className="text-gray-300">
                  SpotCircuit specializes in healthcare marketing with deep understanding of HIPAA requirements, medical ethics compliance, patient privacy protection, and proven strategies specifically designed for medical practices, dental offices, and medical spas. Our team ensures all marketing efforts maintain the highest standards of patient confidentiality.
                </p>
              </div>
              
              <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/30">
                <h3 className="text-xl font-bold mb-3">Do you work with dental practices and medical spas?</h3>
                <p className="text-gray-300">
                  Yes! We specialize in marketing for all healthcare providers including medical practices, dental offices, and medical spas. Each sector has unique needs - from cosmetic dentistry promotion to aesthetic treatment marketing - and we tailor our strategies accordingly while maintaining full HIPAA compliance.
                </p>
              </div>
              
              <div className="bg-teal-900/20 rounded-xl p-6 border border-teal-800/30">
                <h3 className="text-xl font-bold mb-3">How long does it take to see results from healthcare marketing?</h3>
                <p className="text-gray-300">
                  Most healthcare providers see initial increases in patient inquiries within 30-45 days. Significant growth in new patient appointments typically occurs within 60-90 days. Our strategies focus on both immediate patient acquisition and long-term practice growth through reputation building and referral networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Healthcare Practice?
            </h2>
            
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Join thousands of healthcare providers growing their practice with SpotCircuit's HIPAA-compliant, results-driven marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-teal-900 hover:bg-teal-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-teal-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
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

export default MedicalPage;