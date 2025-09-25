import type { Metadata } from 'next';
import React from 'react';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'legal'
});

'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaGavel, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaBalanceScale,
  FaUserShield,
  FaFileContract,
  FaSearchLocation,
  FaBriefcase
} from 'react-icons/fa';
import LegalPageSchema from './components/LegalPageSchema';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Schema Markup */}
      <LegalPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-amber-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-amber-500">Law Firms</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Attract high-quality clients with ethical, compliant digital marketing strategies designed specifically for law firms and legal practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaBalanceScale className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ethics Compliant</h3>
                    <p className="text-sm text-gray-400">Bar association approved</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaUserShield className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Case Qualification</h3>
                    <p className="text-sm text-gray-400">Pre-screen potential clients</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaSearchLocation className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Local SEO</h3>
                    <p className="text-sm text-gray-400">Dominate local searches</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Tracking</h3>
                    <p className="text-sm text-gray-400">Case value metrics</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Law Firm Marketing Audit
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
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-amber-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-500/20 p-3 rounded-full">
                      <FaGavel className="text-amber-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Client Acquisition System</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI-powered platform identifies and qualifies potential clients based on practice areas, automatically filtering for case merit and client fit before they reach your office.
                  </p>
                  <div className="border-t border-amber-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-500">78%</p>
                        <p className="text-xs text-gray-400">Better Cases</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-500">52%</p>
                        <p className="text-xs text-gray-400">Lower CPL</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-500">5.2x</p>
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
      <section className="py-20 bg-gradient-to-b from-amber-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Marketing for <span className="text-amber-500">Legal Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Our AI-powered marketing solutions address the unique challenges of law firms with compliant strategies that attract and qualify the right clients for your practice areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-800/50 hover:border-amber-700/50 transition-all">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaFileContract className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practice Area Targeting</h3>
              <p className="text-gray-300 mb-4">
                Focus your marketing on specific practice areas with tailored campaigns that speak directly to your ideal clients' needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Personal injury optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Family law specialization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Corporate law targeting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-800/50 hover:border-amber-700/50 transition-all">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBalanceScale className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethics-Compliant Marketing</h3>
              <p className="text-gray-300 mb-4">
                Navigate bar association rules with confidence while effectively promoting your legal services and expertise.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bar-approved messaging</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Disclaimer compliance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Testimonial guidelines</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-800/50 hover:border-amber-700/50 transition-all">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBriefcase className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Case Intake Automation</h3>
              <p className="text-gray-300 mb-4">
                Streamline your intake process with AI-powered qualification that ensures you focus on the most valuable cases.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated pre-screening</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">24/7 intake system</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Merit-based filtering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-amber-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="text-amber-500">Results</span> for Law Firms
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-amber-900/30 p-6 rounded-lg border border-amber-800/30">
              <p className="text-4xl font-bold text-amber-500 mb-2">4.2x</p>
              <p className="font-medium">More Qualified Leads</p>
            </div>
            <div className="bg-amber-900/30 p-6 rounded-lg border border-amber-800/30">
              <p className="text-4xl font-bold text-amber-500 mb-2">67%</p>
              <p className="font-medium">Lower Cost Per Case</p>
            </div>
            <div className="bg-amber-900/30 p-6 rounded-lg border border-amber-800/30">
              <p className="text-4xl font-bold text-amber-500 mb-2">89%</p>
              <p className="font-medium">Client Satisfaction</p>
            </div>
            <div className="bg-amber-900/30 p-6 rounded-lg border border-amber-800/30">
              <p className="text-4xl font-bold text-amber-500 mb-2">6.3x</p>
              <p className="font-medium">Marketing ROI</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-amber-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-amber-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500">
                  <Image 
                    src="/images/testimonial-lawyer.jpg" 
                    alt="Johnson Law Firm Partner" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-600 rounded-full p-2">
                  <FaGavel className="text-white" />
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
                "SpotCircuit's compliance-focused approach gave us confidence to expand our digital marketing. We've seen a 320% increase in quality cases while reducing our marketing spend by 40%."
              </blockquote>
              
              <div>
                <p className="font-bold">Michael Johnson, Esq.</p>
                <p className="text-amber-400 text-sm">Managing Partner, Johnson & Associates</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-amber-500">320%</p>
                  <p className="text-xs text-gray-400">More Cases</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-500">40%</p>
                  <p className="text-xs text-gray-400">Cost Reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-500">8.2x</p>
                  <p className="text-xs text-gray-400">ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-amber-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-800/30">
                <h3 className="text-xl font-bold mb-3">How can digital marketing help my law firm while staying compliant?</h3>
                <p className="text-gray-300">
                  Digital marketing helps law firms attract qualified clients through bar-compliant strategies including educational content marketing, ethical PPC campaigns, local SEO optimization, and automated intake systems that pre-qualify cases while adhering to all professional rules.
                </p>
              </div>
              
              <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-800/30">
                <h3 className="text-xl font-bold mb-3">What makes SpotCircuit different for law firm marketing?</h3>
                <p className="text-gray-300">
                  SpotCircuit specializes in legal marketing with deep understanding of bar association rules, practice area-specific targeting strategies, advanced case qualification technology, and proven ROI tracking specifically designed for law firms and legal practices.
                </p>
              </div>
              
              <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-800/30">
                <h3 className="text-xl font-bold mb-3">How do you ensure marketing compliance with bar association rules?</h3>
                <p className="text-gray-300">
                  We ensure compliance by following state bar advertising guidelines, including proper disclaimers and disclosures, avoiding prohibited claims and guarantees, and maintaining client confidentiality standards. Our team stays updated on all relevant ethics rules to protect your practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Legal Practice?
            </h2>
            
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Join the leading law firms growing their practice with SpotCircuit's compliant, results-driven marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-amber-900 hover:bg-amber-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-amber-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
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

export default LegalPage;