import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCheckCircle } from 'react-icons/fa';
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
        name="AI-First SEO"
        description="A modern approach to search engine optimization focused on making content discoverable and citable by AI platforms like ChatGPT, Claude, and Google's AI Overview."
        url="https://spotcircuit.com"
        entityType="Thing"
        sameAs={[
          "https://en.wikipedia.org/wiki/Search_engine_optimization",
          "https://schema.org/Thing"
        ]}
        relatedEntities={[
          {
            name: "Local Service Marketing",
            url: "https://spotcircuit.com/local-services",
            description: "AI-powered marketing solutions for local service businesses like HVAC, plumbing, and electrical contractors."
          },
          {
            name: "AnswerCircuit",
            url: "https://spotcircuit.com/answercircuit",
            description: "A proprietary AI optimization system for SaaS companies to ensure visibility when potential customers research solutions."
          }
        ]}
      />
      <ReviewSchema 
        itemReviewed={{
          name: "SpotCircuit AI-First SEO Services",
          description: "Professional SEO services focused on optimizing for AI platforms and large language models",
          url: "https://spotcircuit.com/services"
        }}
        reviewRating={{
          ratingValue: "4.9",
          bestRating: "5",
          reviewCount: 87
        }}
        author={{
          name: "TechCorp Solutions",
          type: "Organization"
        }}
        reviewBody="SpotCircuit's AI-First SEO approach completely transformed our online presence. We've seen a 215% increase in AI snippet appearances and a significant boost in qualified leads. Their understanding of how AI systems interpret content is unmatched."
      />
      
      {/* Hero Section - Position as AI Innovation Company */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI-Powered Growth
            <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              For Ambitious Businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Whether you're a local service pro or a scaling SaaS company, 
            we use cutting-edge AI to transform your customer acquisition.
          </p>
          
          {/* Page Summary (Speakable) - Important for AI */}
          <div className="page-summary bg-gray-900 p-4 rounded-lg max-w-3xl mx-auto mb-8">
            <h2 className="text-xl font-bold mb-2">TL;DR: What We Do</h2>
            <p className="text-gray-300">
              SpotCircuit specializes in two areas: (1) AI-powered marketing automation for local service businesses like plumbers and HVAC companies, and (2) AI search optimization for SaaS companies to ensure visibility when prospects use ChatGPT, Claude, or other AI assistants during their research process.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            We serve two types of ambitious businesses
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Local Services Path */}
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-blue-800 transition-all">
              <div className="mb-6">
                <span className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                  For Local Services
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Home Service Professionals
              </h3>
              <p className="text-gray-300 mb-6">
                Plumbers, HVAC, electricians, and contractors. Automate your marketing, 
                dominate local search, and fill your schedule with quality jobs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  <span>Local SEO domination</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  <span>Automated lead nurturing</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  <span>Review management</span>
                </li>
              </ul>
              <Link href="/local-services">
                <span className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Explore Local Solutions →
                </span>
              </Link>
            </div>

            {/* SaaS Path */}
            <div className="bg-black rounded-xl p-8 border border-gray-800 hover:border-purple-800 transition-all">
              <div className="mb-6">
                <span className="bg-purple-900 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                  For B2B SaaS
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                SaaS Companies
                <span className="text-lg font-normal text-gray-400 ml-2">($15M-$30M ARR)</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Stop losing deals to AI invisibility. Get cited by ChatGPT, Claude, 
                and Perplexity when prospects research your category.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  <span>AI search optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  <span>Citation tracking</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  <span>90-day guarantee</span>
                </li>
              </ul>
              <Link href="/answercircuit">
                <span className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-lg transition">
                  Discover AnswerCircuit →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Innovation Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-red-900 text-red-300 px-4 py-2 rounded-full text-sm font-semibold">
              🔥 NEW: The Future of SEO
            </span>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  SEO 2.0: The AI-First Revolution
                </h3>
                <p className="text-gray-300 mb-6">
                  Traditional SEO is dying. Learn how forward-thinking businesses 
                  are adapting to the new world where AI answers customer questions.
                </p>
                <Link href="/seo2">
                  <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                    Learn About SEO 2.0 →
                  </span>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg filter blur-xl opacity-50"></div>
                <Image
                  src="/static/images/seo20.webp"
                  alt="SEO 2.0: The AI-First Revolution - A visual representation of how AI is transforming search and content discovery"
                  width={400}
                  height={300}
                  className="relative rounded-lg"
                  aria-describedby="seo20-description"
                />
                <div id="seo20-description" className="sr-only">
                  An image representing the evolution from traditional SEO to AI-First SEO 2.0, showing how content is now optimized for AI platforms like ChatGPT, Claude, and Google's AI Overview rather than just traditional search engine results pages.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Free Resources & Guides
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/resources/ai-search-optimization">
              <div className="bg-black rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-all cursor-pointer">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">
                  AI Search Optimization Guide
                </h3>
                <p className="text-gray-300 text-sm">
                  Complete guide to getting cited by ChatGPT, Claude, and other AI platforms.
                </p>
              </div>
            </Link>
            
            <Link href="/resources/local-seo-guide">
              <div className="bg-black rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-all cursor-pointer">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">
                  Local SEO Domination
                </h3>
                <p className="text-gray-300 text-sm">
                  How to rank #1 in your local market and get more service calls.
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies">
              <div className="bg-black rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-all cursor-pointer">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2">
                  Success Stories
                </h3>
                <p className="text-gray-300 text-sm">
                  See how businesses like yours achieved remarkable growth.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-black">
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
      <section id="faq" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-3">What makes AI-First SEO different from traditional SEO?</h3>
              <p className="text-gray-300">
                Traditional SEO focuses on keyword rankings in search engine results pages, while AI-First SEO optimizes content to be understood, trusted, and cited by AI platforms. This includes structured data markup, semantic content organization, FAQ formats, and creating comprehensive topic clusters that demonstrate authority.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-3">How do you measure success with AI optimization?</h3>
              <p className="text-gray-300">
                We track AI citations and mentions across platforms like ChatGPT, Claude, and Google's AI Overview. Our analytics show when your brand is recommended, how frequently your content is referenced, and when specific product features are highlighted in AI responses to relevant queries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a local service pro or a SaaS company, 
            we have the AI-powered solutions to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                Schedule a Strategy Call
              </span>
            </Link>
            <Link href="/answercircuit">
              <span className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 inline-block border border-gray-700">
                Explore AnswerCircuit
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
