import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCheckCircle } from 'react-icons/fa';
import HomePageSchema from '@/components/schemas/HomePageSchema';
import ServiceSchema from './components/ServiceSchema';
import SpeakableSchema from './components/SpeakableSchema';
import FaqSchema from './components/FaqSchema';
import ImageObjectSchema from './components/ImageObjectSchema';
import BreadcrumbSchema from './components/BreadcrumbSchema';
import EntitySchema from './components/EntitySchema';
import ReviewSchema from './components/ReviewSchema';

export const metadata: Metadata = {
  title: 'SpotCircuit - AI-Powered Growth Solutions | Local Services & B2B SaaS',
  description: 'Transform your business with AI. Local service automation for contractors. AI search optimization for SaaS companies.',
};

export default function HomePage() {
  // Define the FAQ data for schema markup
  const faqItems = [
    {
      question: "What is AI-First SEO?",
      answer: "AI-First SEO is the practice of optimizing content specifically for AI platforms like ChatGPT, Claude, and Google's AI Overview. It focuses on semantic understanding, structured data, and content organization that helps AI systems comprehend and reference your content."
    },
    {
      question: "How does SpotCircuit help local service businesses?",
      answer: "SpotCircuit helps local service businesses by implementing automated marketing systems, optimizing for local search visibility, managing customer reviews, and creating AI-driven lead nurturing processes that convert more inquiries into booked jobs."
    },
    {
      question: "What is AnswerCircuit?",
      answer: "AnswerCircuit is SpotCircuit's proprietary AI optimization system for SaaS companies. It ensures your brand and products are prominently featured when potential customers use AI assistants to research solutions in your category, increasing visibility and lead generation."
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Schema Markup */}
      <HomePageSchema />
      <ServiceSchema 
        name="AI-First SEO & LLM Optimization"
        description="SpotCircuit provides AI-First SEO and LLM optimization services to help businesses be found and cited by AI platforms like ChatGPT, Claude, and Google's AI Overview."
        url="https://spotcircuit.com"
        serviceType="SEOService"
      />
      <SpeakableSchema cssSelectors={[".page-summary", "#faq"]} />
      <FaqSchema faqs={faqItems} />
      <ImageObjectSchema 
        url="https://spotcircuit.com/static/images/seo20.webp"
        name="SEO 2.0: The AI-First Revolution"
        description="A visual representation of how AI is transforming search and content discovery, showing the evolution from traditional SEO to AI-First optimization."
        width={400}
        height={300}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://spotcircuit.com", position: 1 }
        ]} 
      />
      <EntitySchema 
        type="Thing"
        name="AI-First SEO"
        description="A modern approach to search engine optimization focused on making content discoverable and citable by AI platforms like ChatGPT, Claude, and Google's AI Overview."
        url="https://spotcircuit.com"
        sameAs={[
          { url: "https://en.wikipedia.org/wiki/Search_engine_optimization" },
          { url: "https://schema.org/Thing" }
        ]}
        relatedEntities={[
          {
            name: "Local Service Marketing",
            url: "https://spotcircuit.com/local-services",
            description: "AI-powered marketing solutions for local service businesses like HVAC, plumbing, and electrical contractors.",
            type: "Service"
          },
          {
            name: "AnswerCircuit",
            url: "https://spotcircuit.com/answercircuit",
            description: "A proprietary AI optimization system for SaaS companies to ensure visibility when potential customers research solutions.",
            type: "SoftwareApplication"
          }
        ]}
      />
      <ReviewSchema 
        itemReviewed={{
          type: "Service",
          name: "SpotCircuit AI-First SEO Services",
          description: "Professional SEO services focused on optimizing for AI platforms and large language models",
          url: "https://spotcircuit.com/services"
        }}
        reviewRating={{
          ratingValue: 4.9,
          bestRating: 5,
          worstRating: 1
        }}
        author={{
          name: "TechCorp Solutions",
          type: "Organization"
        }}
        reviewBody="SpotCircuit's AI-First SEO approach completely transformed our online presence. We've seen a 215% increase in AI snippet appearances and a significant boost in qualified leads. Their understanding of how AI systems interpret content is unmatched."
      />
      
      {/* Hero Section - Updated according to checklist */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI-Powered SEO & Automation
            <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              For Service Businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock smarter growth strategies with automation, analytics, and AI-tailored marketing.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/booking" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
              Get a Free Growth Audit
            </Link>
            <Link href="/process" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
              See How It Works
            </Link>
          </div>
          
          {/* AI Workflow Visualization */}
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl font-bold mb-3">AI + Workflow Automation</h3>
                <p className="text-gray-400 mb-4">
                  Our AI analyzes, optimizes, and automates your marketing workflows for maximum efficiency and results.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">AI Analysis</span>
                  <span className="px-3 py-1 bg-teal-900/50 text-teal-300 text-sm rounded-full">Workflow Automation</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">Real-time Insights</span>
                </div>
              </div>
              <div className="relative w-full md:w-64 h-48 bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-lg border border-gray-800 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center p-4">
                  <div className="text-4xl mb-2">🤖</div>
                  <span className="text-sm font-medium text-gray-300">AI Workflow Visualization</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Page Summary (Speakable) - Important for AI - Moved below for better flow */}
          <div className="page-summary bg-gray-900 p-6 rounded-lg max-w-3xl mx-auto mt-12">
            <h2 className="text-xl font-bold mb-2">TL;DR: What We Do</h2>
            <p className="text-gray-300">
              SpotCircuit specializes in AI-powered marketing automation for service businesses and AI search optimization to ensure your business is found when prospects are searching for your services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section - Clickable Cards */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Core Services
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Comprehensive solutions for your business growth
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/services#ai-search">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all h-full">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3">AI Search Optimization</h3>
                <p className="text-gray-400 text-sm">Get found and cited by AI platforms like ChatGPT and Google AI Overview.</p>
              </div>
            </Link>
            
            <Link href="/services#workflow">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all h-full">
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3">AI Workflow Automation</h3>
                <p className="text-gray-400 text-sm">Automate repetitive tasks and streamline your marketing and sales processes.</p>
              </div>
            </Link>
            
            <Link href="/services#crm">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all h-full">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-3">CRM + Lead Management</h3>
                <p className="text-gray-400 text-sm">Nurture leads with automated follow-ups and personalized messaging.</p>
              </div>
            </Link>
            
            <Link href="/services#analytics">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all h-full">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Reporting & Analytics</h3>
                <p className="text-gray-400 text-sm">Custom dashboards to track performance and make data-driven decisions.</p>
              </div>
            </Link>
            
            <Link href="/services#websites">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all h-full">
                <div className="text-3xl mb-4">🖥️</div>
                <h3 className="text-xl font-bold mb-3">Website Rebuilds & CRO</h3>
                <p className="text-gray-400 text-sm">High-converting websites optimized for both users and search engines.</p>
              </div>
            </Link>
            
            <Link href="/services#reputation">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all h-full">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-3">Directory & Reputation</h3>
                <p className="text-gray-400 text-sm">Manage your online reputation and listings across all major platforms.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-10 bottom-10 w-1 bg-blue-600 hidden md:block"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">1</div>
                  <div className="bg-black rounded-xl p-6 border border-gray-800 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Discovery & Audit</h3>
                    <p className="text-gray-300">We analyze your current online presence, identify gaps, and uncover opportunities for growth.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">2</div>
                  <div className="bg-black rounded-xl p-6 border border-gray-800 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Strategy Design</h3>
                    <p className="text-gray-300">We create a customized plan tailored to your specific goals and industry requirements.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">3</div>
                  <div className="bg-black rounded-xl p-6 border border-gray-800 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Workflow & SEO Build</h3>
                    <p className="text-gray-300">We implement AI workflows, optimization strategies, and build necessary technical components.</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">4</div>
                  <div className="bg-black rounded-xl p-6 border border-gray-800 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Automate & Optimize</h3>
                    <p className="text-gray-300">We fine-tune automations, content strategies, and conversion pathways for maximum performance.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">5</div>
                  <div className="bg-black rounded-xl p-6 border border-gray-800 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Report & Adjust</h3>
                    <p className="text-gray-300">We provide transparent reporting and continuously optimize based on performance data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow Showcase Section (Optional Add-on) */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            AI Workflow Showcase
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            See how our AI automation solutions transform your business processes
          </p>
          
          <div className="max-w-5xl mx-auto">
            {/* Workflow Diagram */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mb-12">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-6">Lead Generation to Customer Journey</h3>
                <div className="w-full max-w-3xl">
                  <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
                    <div className="w-20 h-20 bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🔍</span>
                      <span className="text-xs absolute mt-16">Lead</span>
                    </div>
                    
                    <div className="hidden md:block text-blue-400">→</div>
                    
                    <div className="w-20 h-20 bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🤖</span>
                      <span className="text-xs absolute mt-16">AI Filter</span>
                    </div>
                    
                    <div className="hidden md:block text-blue-400">→</div>
                    
                    <div className="w-20 h-20 bg-green-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📊</span>
                      <span className="text-xs absolute mt-16">CRM</span>
                    </div>
                    
                    <div className="hidden md:block text-blue-400">→</div>
                    
                    <div className="w-20 h-20 bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📱</span>
                      <span className="text-xs absolute mt-16">SMS</span>
                    </div>
                    
                    <div className="hidden md:block text-blue-400">→</div>
                    
                    <div className="w-20 h-20 bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📈</span>
                      <span className="text-xs absolute mt-16">Dashboard</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mt-8 text-sm text-center max-w-2xl">
                  Our AI-powered workflow automatically qualifies leads, routes them to your CRM, 
                  sends personalized follow-ups, and provides real-time reporting on your dashboard.
                </p>
              </div>
            </div>
            
            {/* Case Studies */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="text-sm text-blue-400 mb-2">HVAC COMPANY</div>
                <h3 className="text-lg font-bold mb-3">24% Booking Increase</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Automated SMS follow-ups for missed calls led to a 24% increase in service bookings.
                </p>
                <Link href="/case-studies/hvac">
                  <span className="text-blue-400 text-sm hover:underline">Read Case Study →</span>
                </Link>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="text-sm text-purple-400 mb-2">SAAS COMPANY</div>
                <h3 className="text-lg font-bold mb-3">18% AI Citation Growth</h3>
                <p className="text-gray-400 text-sm mb-4">
                  AI-optimized content strategy resulted in 18% more citations in ChatGPT responses.
                </p>
                <Link href="/case-studies/saas">
                  <span className="text-blue-400 text-sm hover:underline">Read Case Study →</span>
                </Link>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="text-sm text-green-400 mb-2">PLUMBING COMPANY</div>
                <h3 className="text-lg font-bold mb-3">35% Lead Conversion</h3>
                <p className="text-gray-400 text-sm mb-4">
                  AI-powered lead qualification and nurturing improved conversion rates by 35%.
                </p>
                <Link href="/case-studies/plumbing">
                  <span className="text-blue-400 text-sm hover:underline">Read Case Study →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lead Magnet Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black rounded-xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Free Personalized Growth Plan
                </h2>
                <p className="text-gray-300 mb-6">
                  Receive a custom strategy tailored to your business needs. No obligation, 
                  just actionable insights you can implement right away.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span className="text-sm">Detailed competitive analysis</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span className="text-sm">Custom growth recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span className="text-sm">Implementation timeline</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-400 mb-1">Industry</label>
                    <select 
                      id="industry" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option>Select your industry</option>
                      <option>HVAC</option>
                      <option>Plumbing</option>
                      <option>Electrical</option>
                      <option>Roofing</option>
                      <option>SaaS / Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
                  >
                    Build My Plan
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SpotCircuit Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1 rounded-full">
                  <Image
                    src="/static/images/businessowner.jpg"
                    alt="Brian Pyatt - SpotCircuit Founder"
                    width={300}
                    height={300}
                    className="rounded-full"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">About SpotCircuit</h2>
                <p className="text-gray-300 mb-4">
                  Founded by Brian Pyatt, SpotCircuit combines over two decades of marketing experience with 
                  cutting-edge AI technology. We've helped hundreds of businesses automate their growth 
                  and dominate their markets through intelligent systems.
                </p>
                <p className="text-gray-300 mb-6">
                  Our team specializes in creating custom AI-powered workflows that generate leads, 
                  nurture prospects, and turn more inquiries into paying customers—all while saving 
                  you time and eliminating manual tasks.
                </p>
                <Link href="/process">
                  <span className="text-blue-400 hover:underline">Learn more about our approach →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            <Link href="https://mrmaple.com" target="_blank" className="block w-64 h-32 bg-black/40 rounded-lg flex items-center justify-center px-4 hover:bg-black/60 transition-all">
              <Image 
                src="/static/images/mrmaple.jpg" 
                alt="MrMaple.com" 
                width={220} 
                height={100} 
                className="object-contain max-h-20"
              />
            </Link>
            <Link href="https://starcitygames.com" target="_blank" className="block w-64 h-32 bg-black/40 rounded-lg flex items-center justify-center px-4 hover:bg-black/60 transition-all">
              <Image 
                src="/static/images/starcitygames.jpg" 
                alt="StarCityGames.com" 
                width={220} 
                height={100} 
                className="object-contain max-h-20"
              />
            </Link>
            <Link href="https://thefixclinic.com" target="_blank" className="block w-64 h-32 bg-black/40 rounded-lg flex items-center justify-center px-4 hover:bg-black/60 transition-all">
              <Image 
                src="/static/images/fixclinic.jpg" 
                alt="TheFixClinic.com" 
                width={220} 
                height={100} 
                className="object-contain max-h-20"
              />
            </Link>
            <Link href="https://bnbtobacco.com" target="_blank" className="block w-64 h-32 bg-black/40 rounded-lg flex items-center justify-center px-4 hover:bg-black/60 transition-all">
              <Image 
                src="/static/images/bnbtobacco.jpg" 
                alt="BnBTobacco.com" 
                width={220} 
                height={100} 
                className="object-contain max-h-20"
              />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials / Social Proof */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col h-full">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-300 italic mb-6 flex-grow">
                    "SpotCircuit's AI automation has completely transformed our lead follow-up process. 
                    We're booking 30% more jobs with the same ad spend because no leads fall through the cracks anymore."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👨‍💼</span>
                    </div>
                    <div>
                      <div className="font-bold">Michael Johnson</div>
                      <div className="text-sm text-gray-400">Johnson HVAC Services</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col h-full">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-300 italic mb-6 flex-grow">
                    "We've tried multiple SEO agencies, but SpotCircuit was the first to understand how AI is changing 
                    search. Their AI-first approach has our brand appearing in ChatGPT responses consistently."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👩‍💼</span>
                    </div>
                    <div>
                      <div className="font-bold">Sarah Williams</div>
                      <div className="text-sm text-gray-400">TechFlow Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col h-full">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-300 italic mb-6 flex-grow">
                    "The dashboard SpotCircuit built gives me complete visibility into our marketing performance. 
                    I can finally see which channels are driving quality leads and make informed decisions."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👨‍🔧</span>
                    </div>
                    <div>
                      <div className="font-bold">Robert Garcia</div>
                      <div className="text-sm text-gray-400">Elite Plumbing Co.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col h-full">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-300 italic mb-6 flex-grow">
                    "Working with SpotCircuit has been a game-changer. Their expertise in AI-powered automation has 
                    streamlined our entire customer acquisition process and dramatically improved our ROI."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👩‍💻</span>
                    </div>
                    <div>
                      <div className="font-bold">Jennifer Chen</div>
                      <div className="text-sm text-gray-400">Maple Services LLC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">$4.6M</div>
              <div className="text-gray-400">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400">245%</div>
              <div className="text-gray-400">Avg Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">25+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-3">What makes AI-First SEO different from traditional SEO?</h3>
              <p className="text-gray-300">
                Traditional SEO focuses on keyword rankings in search engine results pages, while AI-First SEO optimizes content to be understood, trusted, and cited by AI platforms. This includes structured data markup, semantic content organization, FAQ formats, and creating comprehensive topic clusters that demonstrate authority.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-3">How do you measure success with AI optimization?</h3>
              <p className="text-gray-300">
                We track AI citations and mentions across platforms like ChatGPT, Claude, and Google's AI Overview. Our analytics show when your brand is recommended, how frequently your content is referenced, and when specific product features are highlighted in AI responses to relevant queries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Growth Engine
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to leverage AI and automation to transform your business growth?
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                Schedule a Call
              </span>
            </Link>
            <Link href="/contact">
              <span className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 inline-block border border-gray-700">
                Send Us a Message
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
