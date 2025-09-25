import type { Metadata } from 'next';
import React from 'react';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'recruiting'
});

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaUsers, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaUserTie,
  FaBriefcase,
  FaBuilding,
  FaSearch,
  FaHandshake
} from 'react-icons/fa';
import RecruitingPageSchema from './components/RecruitingPageSchema';

const RecruitingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">      
      {/* Schema Markup */}
      <RecruitingPageSchema />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Marketing for <span className="text-blue-500">Recruiting Agencies</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Transform your recruiting business with targeted digital marketing that attracts quality candidates, builds client relationships, and maximizes your placement rates.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaUserTie className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Candidate Quality</h3>
                    <p className="text-sm text-gray-400">Attract top talent</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaBuilding className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Client Acquisition</h3>
                    <p className="text-sm text-gray-400">Grow your client base</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaSearch className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI Matching</h3>
                    <p className="text-sm text-gray-400">Smart candidate filtering</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Tracking</h3>
                    <p className="text-sm text-gray-400">Measure placement metrics</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Get Your Free Recruiting Marketing Audit
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
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-blue-900/80 to-black rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <FaUsers className="text-blue-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Candidate Match Technology</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI-powered platform automatically identifies and engages with the most qualified candidates for your open positions, reducing time-to-fill and improving placement quality.
                  </p>
                  <div className="border-t border-blue-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-500">68%</p>
                        <p className="text-xs text-gray-400">Faster Placements</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-500">47%</p>
                        <p className="text-xs text-gray-400">Higher Quality</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-500">3.8x</p>
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
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Marketing for <span className="text-blue-500">Recruiting Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              Our AI-powered marketing solutions address the unique challenges of recruiting agencies with specialized tools for both client acquisition and candidate attraction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50 hover:border-blue-700/50 transition-all">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUserTie className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry-Specific Talent Pools</h3>
              <p className="text-gray-300 mb-4">
                Build targeted talent pools for specific industries and positions with AI-driven candidate acquisition campaigns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Vertical-specific targeting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Passive candidate activation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Skill-based filtering</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50 hover:border-blue-700/50 transition-all">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBuilding className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Client Acquisition System</h3>
              <p className="text-gray-300 mb-4">
                Generate a steady flow of new business opportunities with targeted marketing for companies that need staffing services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Hiring intent detection</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Multi-channel outreach</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated follow-ups</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50 hover:border-blue-700/50 transition-all">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Employer Brand Development</h3>
              <p className="text-gray-300 mb-4">
                Help your clients build compelling employer brands that attract the best talent to their organizations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Culture communication</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Benefit amplification</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Candidate experience mapping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-blue-800/10 skew-y-3 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable <span className="text-blue-500">Results</span> for Recruiting Agencies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">3.2x</p>
              <p className="font-medium">More Qualified Candidates</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">41%</p>
              <p className="font-medium">Faster Time-to-Fill</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">62%</p>
              <p className="font-medium">Increase in Client Retention</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/30">
              <p className="text-4xl font-bold text-blue-500 mb-2">4.7x</p>
              <p className="font-medium">Marketing ROI</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-br from-blue-900/30 to-black/40 rounded-2xl p-8 md:p-12 border border-blue-800/30">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
                  <Image 
                    src="/images/testimonial.jpg" 
                    alt="TalentSource CEO" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                  <FaUsers className="text-white" />
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
                "SpotCircuit's AI recruiting tools have completely transformed our agency. We're now able to find better candidates faster and have doubled our placement rates in just six months."
              </blockquote>
              
              <div>
                <p className="font-bold">Sarah Wilson</p>
                <p className="text-blue-400 text-sm">CEO, TalentSource Recruiting</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-500">215%</p>
                  <p className="text-xs text-gray-400">More Placements</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-500">37%</p>
                  <p className="text-xs text-gray-400">Higher Fees</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-500">5.8x</p>
                  <p className="text-xs text-gray-400">ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/30">
                <h3 className="text-xl font-bold mb-3">How can digital marketing help my recruiting agency?</h3>
                <p className="text-gray-300">
                  Digital marketing helps recruiting agencies establish targeted talent pipelines, position your firm as an industry leader, build client relationships through content marketing, and leverage AI for automated candidate matching and qualification.
                </p>
              </div>
              
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/30">
                <h3 className="text-xl font-bold mb-3">What makes SpotCircuit different from other marketing agencies for recruiters?</h3>
                <p className="text-gray-300">
                  SpotCircuit specializes in the recruiting industry with AI-powered solutions specifically designed for talent acquisition. Our platform optimizes for both candidate attraction and client acquisition simultaneously, provides industry-specific talent pools, and offers advanced candidate match technology with measurable ROI tracking.
                </p>
              </div>
              
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/30">
                <h3 className="text-xl font-bold mb-3">How long does it take to see results from recruiting marketing?</h3>
                <p className="text-gray-300">
                  Most recruiting clients see initial improvements in candidate quality and volume within 30 days. Significant improvements in placement rates and client acquisition typically occur within 60-90 days. Our AI systems continuously improve over time, with peak performance usually achieved within 4-6 months.
                </p>
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
              Ready to Transform Your Recruiting Agency?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the hundreds of recruiting and staffing firms growing their business with SpotCircuit's AI-powered marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Schedule Your Free Strategy Session
                </span>
              </Link>
              
              <Link href="/local-marketing">
                <span className="bg-transparent hover:bg-blue-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  Explore All Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>    </div>
  );
};

export default RecruitingPage;
