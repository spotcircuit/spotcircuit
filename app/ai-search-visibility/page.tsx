import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Services } from '@/components/ServicesComponent'
import { Process } from '@/components/Process'
import { Results } from '@/components/ResultsComponent'
import { FAQ } from '@/components/FAQComponent'
import { CTA } from '@/components/CTA'
import { CheckCircleIcon, ArrowRightIcon, MagnifyingGlassIcon, ChartBarIcon } from '@heroicons/react/24/solid'
import { SparklesIcon, GlobeAltIcon, CpuChipIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'AI Search Visibility Services - Optimize for ChatGPT, Google & More | SpotCircuit',
  description: 'Dominate search results across AI platforms and traditional search engines. Expert optimization for ChatGPT, Perplexity, Claude, and Google.',
  openGraph: {
    title: 'AI Search Visibility Services | SpotCircuit',
    description: 'Next-generation search optimization for AI platforms and traditional search engines.',
    images: ['/static/images/ai-search-visibility-og.png'],
  },
}

const aiPlatforms = [
  {
    name: 'ChatGPT',
    description: 'Optimize for OpenAI\'s dominant conversational AI',
    strategies: [
      'Structured data optimization',
      'Authoritative content creation',
      'Citation-worthy formatting',
      'Topical authority building'
    ]
  },
  {
    name: 'Perplexity AI',
    description: 'Capture traffic from the AI-powered answer engine',
    strategies: [
      'Real-time information optimization',
      'Source credibility enhancement',
      'Fact-based content structure',
      'Multi-source validation'
    ]
  },
  {
    name: 'Claude',
    description: 'Visibility in Anthropic\'s advanced AI assistant',
    strategies: [
      'Comprehensive topic coverage',
      'Nuanced content creation',
      'Context-rich information',
      'Ethical alignment signals'
    ]
  },
  {
    name: 'Google SGE',
    description: 'Traditional SEO meets AI-powered search',
    strategies: [
      'E-E-A-T optimization',
      'Featured snippet targeting',
      'Knowledge graph inclusion',
      'Mobile-first indexing'
    ]
  }
]

const optimizationServices = [
  {
    title: 'AI Content Strategy',
    description: 'Create content that AI systems prefer to cite',
    icon: <DocumentTextIcon className="w-8 h-8" />,
    features: [
      'Authority-building content',
      'Structured data markup',
      'FAQ optimization',
      'Source attribution'
    ]
  },
  {
    title: 'Technical AI SEO',
    description: 'Backend optimization for AI crawlers',
    icon: <CpuChipIcon className="w-8 h-8" />,
    features: [
      'Schema markup implementation',
      'API accessibility',
      'Site speed optimization',
      'Mobile responsiveness'
    ]
  },
  {
    title: 'Brand Authority Building',
    description: 'Become the trusted source AI systems cite',
    icon: <SparklesIcon className="w-8 h-8" />,
    features: [
      'Digital PR campaigns',
      'Expert positioning',
      'Thought leadership',
      'Industry recognition'
    ]
  },
  {
    title: 'Multi-Platform Optimization',
    description: 'Visibility across all search platforms',
    icon: <GlobeAltIcon className="w-8 h-8" />,
    features: [
      'Cross-platform strategy',
      'Platform-specific content',
      'Unified brand presence',
      'Performance tracking'
    ]
  }
]

const optimizationProcess = [
  {
    title: 'AI Visibility Audit',
    description: 'Analyze current visibility across AI platforms and search engines',
    icon: '🔍'
  },
  {
    title: 'Strategy Development',
    description: 'Create platform-specific optimization strategies',
    icon: '📋'
  },
  {
    title: 'Content Optimization',
    description: 'Restructure and enhance content for AI consumption',
    icon: '✨'
  },
  {
    title: 'Monitoring & Iteration',
    description: 'Track performance and continuously optimize',
    icon: '📊'
  }
]

const faqItems = [
  {
    question: 'How is AI search optimization different from traditional SEO?',
    answer: 'AI search optimization focuses on structured data, authoritative content, and clear factual information that AI systems can easily parse and cite. It requires understanding how AI models evaluate and select information, not just keyword optimization.'
  },
  {
    question: 'Which AI platforms should I optimize for?',
    answer: 'We recommend optimizing for ChatGPT, Perplexity, Claude, and Google SGE as primary targets. Your specific industry and audience may benefit from additional platforms. We help identify the right mix during our strategy session.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Initial visibility improvements often appear within 30-60 days. Full optimization benefits, including consistent AI citations and featured placements, typically develop over 3-6 months as authority builds.'
  },
  {
    question: 'Can you guarantee AI will cite my content?',
    answer: 'While we can\'t guarantee specific citations, our strategies significantly increase the likelihood of AI systems referencing your content. We focus on making your content the most authoritative and accessible source in your niche.'
  },
  {
    question: 'Do I need different content for each AI platform?',
    answer: 'Not necessarily. We create a core content strategy that works across platforms, then make platform-specific optimizations. This approach maximizes efficiency while ensuring broad visibility.'
  }
]

export default function AISearchVisibilityPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Hero
          title="AI Search Visibility"
          subtitle="Be the Answer When AI Searches"
          description="The search landscape has changed. Optimize your content for ChatGPT, Perplexity, Claude, and next-generation search engines to capture tomorrow's traffic today."
          primaryCTA={{ text: 'Get AI Visibility Audit', href: '/booking' }}
          secondaryCTA={{ text: 'Learn More', href: '#platforms' }}
          backgroundImage="/static/images/ai-search-hero.svg"
        />

        {/* Quick Links Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/30 rounded-xl p-6">
              <p className="text-center text-gray-400 mb-4">Combine AI search visibility with:</p>
              <div className="grid md:grid-cols-4 gap-4">
                <Link href="/lead-generation" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all group">
                  <span className="text-white group-hover:text-blue-400">🎯 Lead Generation</span>
                </Link>
                <Link href="/solutions/contentcircuit" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all group">
                  <span className="text-white group-hover:text-blue-400">✍️ Content Creation</span>
                </Link>
                <Link href="/local-services" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all group">
                  <span className="text-white group-hover:text-blue-400">📍 Local SEO</span>
                </Link>
                <Link href="/ai-automation" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all group">
                  <span className="text-white group-hover:text-blue-400">🤖 Automation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Problem
          title="Is Your Business Invisible to AI?"
          problems={[
            {
              title: 'Missing AI Traffic',
              description: 'Competitors appear in ChatGPT responses while you\'re nowhere to be found'
            },
            {
              title: 'Outdated SEO',
              description: 'Traditional SEO tactics don\'t work for AI-powered search platforms'
            },
            {
              title: 'Lost Authority',
              description: 'AI systems don\'t recognize you as an authoritative source'
            },
            {
              title: 'Platform Confusion',
              description: 'No clear strategy for optimizing across multiple AI platforms'
            }
          ]}
        />

        <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Optimize for Every AI Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Different platforms require different strategies. We optimize for them all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiPlatforms.map((platform, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-6">{platform.description}</p>
                  
                  <ul className="space-y-2">
                    {platform.strategies.map((strategy, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive AI Optimization Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {optimizationServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-cyan-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Search Optimization by Industry</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/lead-generation/ai-lead-capture" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">Recruiting Agencies</h3>
                  <p className="text-gray-400 text-sm mb-3">Appear in AI searches for "best recruiting firms" and industry-specific talent queries.</p>
                  <p className="text-cyan-400 text-sm font-semibold">Optimize for recruiting →</p>
                </div>
              </Link>
              <Link href="/lead-generation/conversion-optimization" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">B2B SaaS</h3>
                  <p className="text-gray-400 text-sm mb-3">Get recommended by AI when users ask for software solutions in your category.</p>
                  <p className="text-cyan-400 text-sm font-semibold">Optimize for SaaS →</p>
                </div>
              </Link>
              <Link href="/lead-generation/lead-nurturing" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">Insurance</h3>
                  <p className="text-gray-400 text-sm mb-3">Be the trusted source AI cites for insurance advice and coverage questions.</p>
                  <p className="text-cyan-400 text-sm font-semibold">Optimize for insurance →</p>
                </div>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Link href="/industries/medical" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">Healthcare</h3>
                  <p className="text-gray-400 text-sm mb-3">Ensure AI provides accurate, authoritative healthcare information from your practice.</p>
                  <p className="text-cyan-400 text-sm font-semibold">Optimize for healthcare →</p>
                </div>
              </Link>
              <Link href="/industries/legal" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl mb-3">⚖️</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">Legal Services</h3>
                  <p className="text-gray-400 text-sm mb-3">Become the legal authority AI references for jurisdiction-specific queries.</p>
                  <p className="text-cyan-400 text-sm font-semibold">Optimize for legal →</p>
                </div>
              </Link>
              <Link href="/local-services" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">Local Services</h3>
                  <p className="text-gray-400 text-sm mb-3">Dominate local AI searches for services in your area.</p>
                  <p className="text-cyan-400 text-sm font-semibold">Optimize for local →</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Process
          title="Our AI Optimization Process"
          steps={optimizationProcess}
        />

        <Results
          title="AI Visibility Results"
          subtitle="What happens when you optimize for AI search"
          results={[
            {
              metric: '400%',
              label: 'Increase in AI Citations',
              description: 'Average across client base'
            },
            {
              metric: '78%',
              label: 'More Qualified Traffic',
              description: 'From AI platform referrals'
            },
            {
              metric: '5X',
              label: 'Authority Score Boost',
              description: 'In target topics'
            },
            {
              metric: '92%',
              label: 'Featured Response Rate',
              description: 'For optimized queries'
            }
          ]}
        />

        <FAQ
          title="AI Search Visibility FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready to Dominate AI Search?"
          description="Get found by ChatGPT, Perplexity, and next-generation search platforms"
          primaryCTA={{ text: 'Get Your AI Audit', href: '/booking' }}
          secondaryCTA={{ text: 'Download AI SEO Guide', href: '/resources/ai-seo-guide' }}
        />

        {/* Resource Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">AI SEO Resources</h3>
                <div className="space-y-2">
                  <Link href="/blog/category/ai-seo" className="block text-gray-400 hover:text-cyan-400 text-sm">AI SEO Blog</Link>
                  <Link href="/resources/ai-optimization-checklist" className="block text-gray-400 hover:text-cyan-400 text-sm">Optimization Checklist</Link>
                  <Link href="/webinars/ai-search" className="block text-gray-400 hover:text-cyan-400 text-sm">Free Webinars</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
                <div className="space-y-2">
                  <Link href="/solutions/contentcircuit" className="block text-gray-400 hover:text-cyan-400 text-sm">AI Content Creation</Link>
                  <Link href="/lead-generation" className="block text-gray-400 hover:text-cyan-400 text-sm">Lead Generation</Link>
                  <Link href="/ai-automation" className="block text-gray-400 hover:text-cyan-400 text-sm">Workflow Automation</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Industries</h3>
                <div className="space-y-2">
                  <Link href="/industries/medical" className="block text-gray-400 hover:text-cyan-400 text-sm">Healthcare</Link>
                  <Link href="/industries/legal" className="block text-gray-400 hover:text-cyan-400 text-sm">Legal</Link>
                  <Link href="/industries/roofing" className="block text-gray-400 hover:text-cyan-400 text-sm">Construction</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Get Started</h3>
                <div className="space-y-2">
                  <Link href="/pricing" className="block text-gray-400 hover:text-cyan-400 text-sm">View Pricing</Link>
                  <Link href="/case-studies" className="block text-gray-400 hover:text-cyan-400 text-sm">Success Stories</Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-cyan-400 text-sm">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}