import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/ServicesComponent'
import { Benefits } from '@/components/Benefits'
import { FAQ } from '@/components/FAQComponent'
import { CTA } from '@/components/CTA'
import { CheckCircleIcon, ArrowLeftIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Insurance Lead Nurturing & Automation | SpotCircuit',
  description: 'Convert insurance leads with AI-powered nurturing. Automate quote follow-ups, policy renewals, and cross-sell opportunities for commercial and personal lines.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/lead-generation/lead-nurturing',
    languages: {
      'x-default': 'https://www.spotcircuit.com/lead-generation/lead-nurturing',
      'en': 'https://www.spotcircuit.com/lead-generation/lead-nurturing',
    },
  },
  openGraph: {
    title: 'Insurance Lead Nurturing & Automation | SpotCircuit',
    description: 'Convert insurance leads with AI-powered nurturing. Automate quote follow-ups, policy renewals, and cross-sell opportunities for commercial and personal lines.',
    url: 'https://www.spotcircuit.com/lead-generation/lead-nurturing',
    images: ['/static/images/lead-nurturing-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Lead Nurturing & Automation | SpotCircuit',
    description: 'Convert insurance leads with AI-powered nurturing. Automate quote follow-ups, policy renewals, and cross-sell opportunities for commercial and personal lines.',
    images: ['/static/images/lead-nurturing-og.webp'],
    creator: '@spotcircuit',
  },
}

const insuranceNurturingFeatures = [
  {
    title: 'Quote Follow-Up Automation',
    description: 'Never let a quote go cold with intelligent follow-up sequences',
    icon: '📋',
    features: [
      'Multi-touch quote reminders',
      'Competitive comparison emails',
      'Price objection handling',
      'Expiring quote alerts'
    ]
  },
  {
    title: 'Policy Renewal Campaigns',
    description: 'Maximize retention with proactive renewal management',
    icon: '🔄',
    features: [
      '90-60-30 day renewal sequences',
      'Rate increase notifications',
      'Coverage review reminders',
      'Loyalty program messaging'
    ]
  },
  {
    title: 'Cross-Sell Intelligence',
    description: 'Identify and capture additional coverage opportunities',
    icon: '🎯',
    features: [
      'Life event triggers',
      'Bundle recommendations',
      'Coverage gap analysis',
      'Referral incentive campaigns'
    ]
  },
  {
    title: 'Risk-Based Segmentation',
    description: 'Personalized nurturing based on coverage needs',
    icon: '🛡️',
    features: [
      'Industry-specific messaging',
      'Risk profile targeting',
      'Seasonal coverage reminders',
      'Compliance update alerts'
    ]
  }
]

const insuranceMetrics = [
  {
    stat: '2.1X',
    label: 'Higher quote-to-bind ratio',
    description: 'With automated follow-up'
  },
  {
    stat: '89%',
    label: 'Policy renewal rate',
    description: 'Through proactive campaigns'
  },
  {
    stat: '47%',
    label: 'More cross-sell revenue',
    description: 'From existing clients'
  },
  {
    stat: '73%',
    label: 'Reduction in manual tasks',
    description: 'For producers and CSRs'
  }
]

const faqItems = [
  {
    question: 'How does nurturing work for insurance brokerages?',
    answer: 'Our system automates the entire client journey from initial quote to renewal. It sends personalized messages based on coverage type, risk profile, and buying stage, ensuring consistent follow-up that converts more quotes to policies.'
  },
  {
    question: 'Can it handle both commercial and personal lines?',
    answer: 'Yes! We have specialized workflows for both commercial and personal lines. Commercial workflows focus on risk assessments, compliance, and complex coverage needs, while personal lines emphasize convenience, price, and bundling opportunities.'
  },
  {
    question: 'How does it integrate with agency management systems?',
    answer: 'We integrate with major systems including Applied Epic, AMS360, EZLynx, and others. Quote data, policy information, and client details sync automatically, triggering appropriate nurturing campaigns without manual data entry.'
  },
  {
    question: 'What about compliance and regulations?',
    answer: 'All communications are designed with insurance compliance in mind. We ensure proper disclosures, respect state-specific regulations, and maintain audit trails. You can review and approve all templates before deployment.'
  },
  {
    question: 'How long until we see results?',
    answer: 'Most agencies see immediate improvements in quote follow-up response rates. Full impact on bind rates and retention typically becomes clear after 60-90 days as the nurturing sequences complete their cycles.'
  }
]

export default function LeadNurturingPage() {
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
          title="Insurance Lead Nurturing & Automation"
          subtitle="Convert More Quotes, Retain More Policies"
          description="Stop losing insurance leads to competitors. Our AI-powered nurturing keeps your agency top-of-mind through intelligent follow-ups, renewal campaigns, and cross-sell opportunities."
          primaryCTA={{ text: 'See Insurance Demo', href: '/booking' }}
          secondaryCTA={{ text: 'Download Insurance Guide', href: '/resources/insurance-nurturing-guide' }}
        />

        {/* Industry Links */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4">Also serving these industries:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/lead-generation/ai-lead-capture" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">👥 Recruiting Agencies</span>
              </Link>
              <Link href="/lead-generation/conversion-optimization" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🚀 B2B SaaS Companies</span>
              </Link>
              <Link href="/industries/legal" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">⚖️ Legal Insurance</span>
              </Link>
              <Link href="/industries/medical" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🏥 Healthcare Coverage</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete Insurance Nurturing Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automated campaigns that work while your producers focus on selling
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {insuranceNurturingFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
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
                Insurance Agency Results
              </h2>
              <p className="text-xl text-gray-300">
                Average improvements across our insurance clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insuranceMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
              <EnvelopeIcon className="w-16 h-16 mx-auto text-white mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Sample Insurance Nurturing Sequence
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                See our proven 7-touch commercial insurance nurturing campaign that converts 42% more quotes
              </p>
              <div className="space-y-4 max-w-2xl mx-auto text-left mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">Day 1: Quote delivery + value highlights</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">Day 3: Coverage explanation + FAQ answers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">Day 7: Competitive comparison + testimonial</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">Day 14: Risk assessment review + urgency</p>
                </div>
              </div>
              <Link href="/resources/insurance-nurturing-template" className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Get Full Template
                <ArrowLeftIcon className="w-5 h-5 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>

        {/* Insurance Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Complete Insurance Agency Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/lead-generation/ai-lead-capture" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Lead Capture</h3>
                  <p className="text-gray-400 text-sm mb-3">Capture quotes from your website, social media, and referral partners automatically.</p>
                  <p className="text-blue-400 text-sm font-semibold">Capture more leads →</p>
                </div>
              </Link>
              <Link href="/ai-automation" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Agency Automation</h3>
                  <p className="text-gray-400 text-sm mb-3">Connect your AMS with carriers, email, and marketing tools using no-code automation.</p>
                  <p className="text-blue-400 text-sm font-semibold">Automate workflows →</p>
                </div>
              </Link>
              <Link href="/lead-generation/analytics" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Performance Analytics</h3>
                  <p className="text-gray-400 text-sm mb-3">Track quote-to-bind ratios, producer performance, and revenue by line of business.</p>
                  <p className="text-blue-400 text-sm font-semibold">View analytics →</p>
                </div>
              </Link>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">For Commercial Lines</h3>
                <div className="space-y-2">
                  <Link href="/industries/contracting" className="block text-gray-400 hover:text-blue-400">Contractor Insurance Marketing</Link>
                  <Link href="/industries/medical" className="block text-gray-400 hover:text-blue-400">Healthcare Provider Coverage</Link>
                  <Link href="/industries/legal" className="block text-gray-400 hover:text-blue-400">Professional Liability Solutions</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Marketing Solutions</h3>
                <div className="space-y-2">
                  <Link href="/solutions/contentcircuit" className="block text-gray-400 hover:text-blue-400">Insurance Content Marketing</Link>
                  <Link href="/ai-search-visibility" className="block text-gray-400 hover:text-blue-400">Local Insurance SEO</Link>
                  <Link href="/local-marketing" className="block text-gray-400 hover:text-blue-400">Google My Business Optimization</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          title="Insurance Nurturing FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready to Automate Your Insurance Agency?"
          description="Join leading brokerages using AI to convert more quotes and retain more policies"
          primaryCTA={{ text: 'Schedule Insurance Demo', href: '/booking' }}
          secondaryCTA={{ text: 'Calculate Your ROI', href: '/insurance-roi-calculator' }}
        />

        {/* Footer Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center gap-6 flex-wrap mb-6">
              <Link href="/blog/category/insurance" className="text-gray-400 hover:text-blue-400">Insurance Blog</Link>
              <Link href="/resources/insurance-glossary" className="text-gray-400 hover:text-blue-400">Industry Terms</Link>
              <Link href="/case-studies/insurance" className="text-gray-400 hover:text-blue-400">Success Stories</Link>
              <Link href="/about" className="text-gray-400 hover:text-blue-400">About SpotCircuit</Link>
            </div>
            <p className="text-gray-500 text-sm">Serving insurance agencies nationwide with AI-powered marketing solutions</p>
          </div>
        </section>
      </div>
    </>
  )
}