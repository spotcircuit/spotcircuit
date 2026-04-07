import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/ServicesComponent'
import { Benefits } from '@/components/Benefits'
import { FAQ } from '@/components/FAQComponent'
import { CTA } from '@/components/CTA'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'AI Lead Capture for Recruiting Agencies | SpotCircuit',
  description: 'Automated candidate sourcing and client acquisition for staffing firms. Capture high-quality leads with AI-powered forms, chatbots, and multi-channel strategies.',
  openGraph: {
    title: 'AI Lead Capture for Recruiting Agencies | SpotCircuit',
    description: 'Transform your recruiting agency with AI-powered lead capture for both candidates and clients.',
  },
}

const captureFeatures = [
  {
    title: 'Candidate Sourcing Automation',
    description: 'AI-powered systems that identify and engage top talent across multiple channels',
    features: [
      'Resume parsing and matching',
      'Skill-based candidate scoring',
      'Passive candidate identification',
      'Automated outreach sequences'
    ]
  },
  {
    title: 'Client Company Lead Generation',
    description: 'Identify businesses actively hiring and capture their staffing needs',
    features: [
      'Job posting monitoring',
      'Company growth signals',
      'Hiring manager identification',
      'Contract opportunity alerts'
    ]
  },
  {
    title: 'Intelligent Intake Forms',
    description: 'Smart forms that qualify both candidates and clients efficiently',
    features: [
      'Role-specific questionnaires',
      'Salary expectation capture',
      'Availability scheduling',
      'Requirements matching'
    ]
  },
  {
    title: 'ATS Integration & Routing',
    description: 'Seamlessly connect with your applicant tracking system',
    features: [
      'Bullhorn integration',
      'PCRecruiter sync',
      'Automated lead routing',
      'Duplicate detection'
    ]
  }
]

const recruitingMetrics = [
  {
    metric: '3X',
    label: 'More placements per recruiter',
    description: 'Through automated sourcing'
  },
  {
    metric: '65%',
    label: 'Faster time-to-fill',
    description: 'With AI candidate matching'
  },
  {
    metric: '250+',
    label: 'New candidates per month',
    description: 'Automated multi-channel capture'
  },
  {
    metric: '87%',
    label: 'Client satisfaction rate',
    description: 'Better candidate-job fit'
  }
]

const faqItems = [
  {
    question: 'How does AI help recruiting agencies find better candidates?',
    answer: 'Our AI analyzes job requirements and candidate profiles to identify perfect matches based on skills, experience, culture fit, and availability. It also monitors job boards, social media, and professional networks to find passive candidates who match your open positions.'
  },
  {
    question: 'Can the system identify companies that are hiring?',
    answer: 'Yes! Our AI monitors job postings, company growth signals, funding announcements, and expansion news to identify businesses likely to need staffing services. You\'ll get alerts about potential clients before your competitors.'
  },
  {
    question: 'How does it integrate with our existing ATS?',
    answer: 'We have native integrations with major ATS platforms including Bullhorn, PCRecruiter, Greenhouse, and others. Candidates and client leads flow directly into your system with proper tagging and routing.'
  },
  {
    question: 'What types of roles work best with AI sourcing?',
    answer: 'AI sourcing works exceptionally well for high-volume roles (customer service, sales, admin), technical positions (IT, engineering), and specialized roles where specific skill matching is crucial. It\'s particularly effective for hard-to-fill positions.'
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Most recruiting agencies see immediate improvements in candidate flow within the first week. Client lead generation typically shows results within 2-3 weeks as the AI learns your ideal client profile.'
  }
]

export default function AILeadCapturePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/lead-generation" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Lead Generation
            </Link>
          </div>
        </div>

        <Hero
          title="AI Lead Capture for Recruiting Agencies"
          subtitle="Automate Candidate Sourcing & Client Acquisition"
          description="Transform your staffing firm with AI that captures high-quality candidates and identifies companies ready to hire. Work smarter, not harder, with automated sourcing that never sleeps."
          primaryCTA={{ text: 'See It In Action', href: '/booking' }}
          secondaryCTA={{ text: 'Download Case Study', href: '/resources/recruiting-ai-guide' }}
        />

        {/* Cross-Industry Links */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4">Also serving these B2B industries:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/lead-generation/conversion-optimization" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🚀 B2B SaaS Solutions</span>
              </Link>
              <Link href="/lead-generation/lead-nurturing" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🛡️ Insurance Brokerages</span>
              </Link>
              <Link href="/industries/medical" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🏥 Healthcare Staffing</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete Recruiting Lead Capture Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Capture both sides of the recruiting equation - qualified candidates and companies that need them
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {captureFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real Results from Recruiting Agencies
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {recruitingMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <p className="text-lg font-semibold text-white mb-2">{item.label}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1">
              <div className="bg-gray-900 rounded-3xl p-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  How It Works for Recruiting Agencies
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Define Your Targets</h3>
                    <p className="text-gray-300">Set criteria for ideal candidates and client companies based on your specialization</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-bold text-white mb-2">2. AI Goes to Work</h3>
                    <p className="text-gray-300">Our system continuously scans multiple sources to find matches 24/7</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-xl font-bold text-white mb-2">3. Fill More Positions</h3>
                    <p className="text-gray-300">Qualified leads flow into your ATS, ready for your team to convert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complementary Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Enhance Your Recruiting Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/ai-automation" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Automate Workflows</h3>
                  <p className="text-gray-400 text-sm mb-3">Connect your ATS with email, calendars, and job boards using n8n, Make, or Zapier.</p>
                  <p className="text-blue-400 text-sm font-semibold">Learn about automation →</p>
                </div>
              </Link>
              <Link href="/lead-generation/lead-nurturing" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Nurture Candidates</h3>
                  <p className="text-gray-400 text-sm mb-3">Keep talent engaged with automated campaigns until the perfect role appears.</p>
                  <p className="text-blue-400 text-sm font-semibold">Explore nurturing →</p>
                </div>
              </Link>
              <Link href="/lead-generation/analytics" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Track Performance</h3>
                  <p className="text-gray-400 text-sm mb-3">Monitor time-to-fill, placement rates, and recruiter productivity with AI insights.</p>
                  <p className="text-blue-400 text-sm font-semibold">View analytics →</p>
                </div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="text-gray-400 hover:text-blue-400">
                View all services →
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          title="Recruiting Agency FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready to Transform Your Recruiting Agency?"
          description="Join leading staffing firms using AI to dominate their markets"
          primaryCTA={{ text: 'Schedule Demo', href: '/booking' }}
          secondaryCTA={{ text: 'Calculate Your ROI', href: '/roi-calculator' }}
        />

        {/* Resource Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-white">Helpful Resources</h3>
            </div>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/blog/category/recruiting" className="text-gray-400 hover:text-blue-400">Recruiting Blog</Link>
              <Link href="/case-studies/recruiting" className="text-gray-400 hover:text-blue-400">Success Stories</Link>
              <Link href="/resources/recruiting-glossary" className="text-gray-400 hover:text-blue-400">Industry Glossary</Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400">Get Support</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}