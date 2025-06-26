'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaFileAlt, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaAngleRight,
  FaPencilAlt,
  FaRobot,
  FaSearch,
  FaCalendarAlt,
  FaEye,
  FaShare,
  FaLightbulb,
  FaVideo,
  FaImage,
  FaBlog
} from 'react-icons/fa';
import ContentCircuitPageSchema from './components/ContentCircuitPageSchema';

const ContentCircuitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Schema Markup */}
      <ContentCircuitPageSchema />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-purple-500">ContentCircuit</span> - AI Content Creation Engine
              </h1>
              <p className="text-xl text-gray-300 mb-8 hero-description">
                Generate high-converting content at scale with AI that understands your brand voice, target audience, and industry expertise to create compelling blogs, social posts, and marketing materials. Part of our comprehensive <Link href="/services#content-strategy" className="text-purple-400 hover:text-purple-300 underline">content strategy services</Link>.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaPencilAlt className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI Writing Assistant</h3>
                    <p className="text-sm text-gray-400">Brand-aligned content</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaCalendarAlt className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Content Calendar</h3>
                    <p className="text-sm text-gray-400">Strategic scheduling</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaSearch className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">SEO Optimization</h3>
                    <p className="text-sm text-gray-400">Search-optimized content</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 mt-1">
                    <FaChartLine className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Performance Tracking</h3>
                    <p className="text-sm text-gray-400">Content analytics</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    Start Free Trial
                  </span>
                </Link>
                <Link href="/demo">
                  <span className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition duration-300 inline-block">
                    See Demo
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-full w-64 h-64 md:w-80 md:h-80 absolute blur-3xl opacity-20 -top-10 -left-10 z-0"></div>
                <div className="relative z-10 bg-gradient-to-br from-purple-900/80 to-black rounded-2xl p-6 shadow-xl border border-purple-800/30">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <FaFileAlt className="text-purple-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">Content Performance Hub</h3>
                  </div>
                  
                  {/* Content Generation Flow SVG */}
                  <div className="mb-6">
                    <Image 
                      src="/static/images/content-generation-flow.svg" 
                      alt="ContentCircuit Generation Workflow" 
                      width={400} 
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Track content performance across all channels with detailed analytics on engagement, conversions, and ROI to optimize your content strategy.
                  </p>
                  <div className="border-t border-purple-900/50 pt-6 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">347%</p>
                        <p className="text-xs text-gray-400">Content Output</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">92%</p>
                        <p className="text-xs text-gray-400">Time Saved</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-purple-500">6.4x</p>
                        <p className="text-xs text-gray-400">Engagement</p>
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
              Complete <span className="text-purple-500">Content Creation</span> Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto feature-benefit-section">
              ContentCircuit combines AI creativity with strategic insight to produce content that engages your audience and drives business results. Explore all our <Link href="/services" className="text-purple-400 hover:text-purple-300 underline">AI-powered services</Link> to maximize your content impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaRobot className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Content Generation</h3>
              <p className="text-gray-300 mb-4">
                Create high-quality blog posts, social media content, email campaigns, and marketing copy with AI that learns your brand voice and style.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Brand voice training</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Multi-format content</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Tone customization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaSearch className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-gray-300 mb-4">
                Automatically optimize content for search engines with keyword research, meta descriptions, and structured data implementation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Keyword integration</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Meta optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Schema markup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/50 hover:border-purple-700/50 transition-all">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaCalendarAlt className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Content Strategy & Planning</h3>
              <p className="text-gray-300 mb-4">
                Plan, schedule, and manage your content calendar with AI-powered recommendations for optimal posting times and content mix.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Editorial calendar</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Auto-scheduling</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Performance insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Types Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-purple-800/10 skew-y-1 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Any Type of <span className="text-purple-500">Content</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30 text-center">
              <FaBlog className="text-purple-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Blog Posts</h3>
              <p className="text-sm text-gray-400">SEO-optimized articles</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30 text-center">
              <FaShare className="text-purple-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Social Media</h3>
              <p className="text-sm text-gray-400">Platform-specific posts</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30 text-center">
              <FaVideo className="text-purple-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Video Scripts</h3>
              <p className="text-sm text-gray-400">Engaging video content</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30 text-center">
              <FaFileAlt className="text-purple-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Campaigns</h3>
              <p className="text-sm text-gray-400">Converting email copy</p>
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
                    src="/images/testimonial-marketing.jpg" 
                    alt="Marketing Director" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                  <FaFileAlt className="text-white" />
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
                "ContentCircuit has revolutionized our content marketing. We went from publishing 4 blog posts per month to 20, with 3x better engagement rates. The AI understands our brand voice perfectly and creates content that converts."
              </blockquote>
              
              <div>
                <p className="font-bold">Sarah Chen</p>
                <p className="text-purple-400 text-sm">Marketing Director, TechStart Solutions</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-500">500%</p>
                  <p className="text-xs text-gray-400">Content Volume</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">3x</p>
                  <p className="text-xs text-gray-400">Engagement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">85%</p>
                  <p className="text-xs text-gray-400">Time Saved</p>
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
                <h3 className="text-xl font-bold mb-3">How does ContentCircuit maintain my brand voice across all content?</h3>
                <p className="text-gray-300">
                  ContentCircuit analyzes your existing content, brand guidelines, and writing samples to learn your unique voice, tone, and style. Our AI then applies this understanding to all generated content, ensuring consistency across all platforms and content types.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">Can ContentCircuit help with SEO and content optimization?</h3>
                <p className="text-gray-300">
                  Yes, ContentCircuit includes advanced SEO features including keyword research, content optimization suggestions, meta tag generation, and schema markup implementation. All content is automatically optimized for search engines while maintaining readability and engagement.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                <h3 className="text-xl font-bold mb-3">What types of content can ContentCircuit create?</h3>
                <p className="text-gray-300">
                  ContentCircuit can generate blog posts, social media content, email campaigns, video scripts, product descriptions, ad copy, press releases, and more. The AI adapts to any content format while maintaining your brand voice and marketing objectives.
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
              Ready to Scale Your Content Creation?
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using ContentCircuit to create engaging, SEO-optimized content that drives traffic and conversions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="bg-white text-purple-900 hover:bg-purple-50 font-bold py-4 px-8 rounded-lg transition duration-300 inline-block">
                  Start Free Trial
                </span>
              </Link>
              
              <Link href="/demo">
                <span className="bg-transparent hover:bg-purple-800/50 text-white font-bold py-4 px-8 rounded-lg border border-white transition duration-300 inline-block">
                  See Demo
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

export default ContentCircuitPage;