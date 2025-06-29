import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Services } from '@/components/ServicesComponent'
import { Results } from '@/components/ResultsComponent'
import { FAQ } from '@/components/FAQComponent'
import { CTA } from '@/components/CTA'
import { Process } from '@/components/Process'
import { Benefits } from '@/components/Benefits'
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'B2B AI Lead Generation Services - Recruiting, SaaS, Insurance | SpotCircuit',
  description: 'Specialized AI-powered lead generation for B2B companies. Transform your recruiting agency, SaaS company, or insurance brokerage with intelligent lead capture and nurturing.',
  openGraph: {
    title: 'B2B AI Lead Generation Services | SpotCircuit',
    description: 'Specialized AI lead generation for recruiting agencies, B2B SaaS companies, and insurance brokerages.',
    images: ['/static/images/b2b-lead-generation-og.png'],
  },
}

const leadGenServices = [
  {
    title: 'Recruiting Agency Solutions',
    description: 'AI-powered candidate sourcing and client acquisition for staffing firms',
    href: '/lead-generation/ai-lead-capture',
    icon: '👥',
    features: [
      'Automated candidate matching',
      'Client company lead scoring',
      'Job posting optimization',
      'Talent pipeline automation'
    ]
  },
  {
    title: 'B2B SaaS Lead Generation',
    description: 'Convert free trials to paid customers with intelligent nurturing',
    href: '/lead-generation/conversion-optimization',
    icon: '🚀',
    features: [
      'Trial-to-paid conversion flows',
      'Product qualified lead (PQL) scoring',
      'Usage-based nurturing',
      'Enterprise account targeting'
    ]
  },
  {
    title: 'Insurance Brokerage Growth',
    description: 'Generate and qualify insurance leads across commercial and personal lines',
    href: '/lead-generation/lead-nurturing',
    icon: '🛡️',
    features: [
      'Multi-line quote automation',
      'Risk assessment pre-qualification',
      'Renewal opportunity alerts',
      'Referral program automation'
    ]
  },
  {
    title: 'Industry-Specific Analytics',
    description: 'KPIs and metrics tailored to your B2B vertical',
    href: '/lead-generation/analytics',
    icon: '📊',
    features: [
      'Placement rate tracking (Recruiting)',
      'MRR/ARR analytics (SaaS)',
      'Policy conversion metrics (Insurance)',
      'Cross-industry benchmarking'
    ]
  }
]

const b2bIndustries = [
  {
    title: 'Recruiting Agencies',
    icon: '👥',
    metrics: [
      '3X more client acquisitions',
      '65% faster candidate placement',
      '45% reduction in sourcing costs',
      'Automated job matching'
    ]
  },
  {
    title: 'B2B SaaS Companies',
    icon: '🚀',
    metrics: [
      '40% higher trial conversions',
      '25% lower customer acquisition cost',
      'Predictive churn prevention',
      'Usage-based lead scoring'
    ]
  },
  {
    title: 'Insurance Brokerages',
    icon: '🛡️',
    metrics: [
      '2X quote-to-bind ratio',
      '50% more cross-sell opportunities',
      'Automated renewal campaigns',
      'Risk-based lead qualification'
    ]
  }
]

const faqItems = [
  {
    question: 'How does AI help recruiting agencies find clients and candidates?',
    answer: 'AI analyzes job market data, company growth signals, and hiring patterns to identify companies likely to need staffing services. For candidate sourcing, it matches skills, experience, and cultural fit at scale, dramatically reducing time-to-fill.'
  },
  {
    question: 'What specific benefits do B2B SaaS companies see?',
    answer: 'SaaS companies typically see 40-60% improvement in trial-to-paid conversion rates, reduced churn through predictive analytics, and better identification of expansion opportunities within existing accounts through usage pattern analysis.'
  },
  {
    question: 'How does lead generation work for insurance brokerages?',
    answer: 'We help insurance brokers identify businesses and individuals with changing risk profiles, automate quote requests, pre-qualify based on coverage needs, and nurture leads through complex decision cycles with educational content.'
  },
  {
    question: 'Do you work with our industry-specific tools?',
    answer: 'Yes, we integrate with ATS systems like Bullhorn and PCRecruiter for recruiting, SaaS platforms like Stripe and ChargeBee, and insurance CRMs like Applied Epic and AMS360.'
  },
  {
    question: 'What ROI can we expect in our industry?',
    answer: 'Recruiting agencies see 3-5X more placements, SaaS companies achieve 25-40% lower CAC, and insurance brokerages typically double their quote-to-bind ratios within 6 months.'
  }
]

export default function LeadGenerationPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Hero
          title="B2B AI Lead Generation for High-Growth Industries"
          subtitle="Specialized Solutions for Recruiting, SaaS, and Insurance"
          description="Transform your recruiting agency, B2B SaaS company, or insurance brokerage with AI-powered lead generation. Get pre-qualified prospects, automated nurturing, and industry-specific conversion strategies."
          primaryCTA={{ text: 'Get Industry Demo', href: '/booking' }}
          secondaryCTA={{ text: 'View Solutions', href: '#services' }}
          backgroundImage="/static/images/lead-generation-hero.svg"
        />

        {/* Quick Links Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/industries/medical" className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/70 transition-all group">
                <p className="text-sm text-gray-400 group-hover:text-gray-300">Also serving</p>
                <p className="text-white font-semibold group-hover:text-blue-400">Healthcare & Medical →</p>
              </Link>
              <Link href="/ai-automation" className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/70 transition-all group">
                <p className="text-sm text-gray-400 group-hover:text-gray-300">Automate with</p>
                <p className="text-white font-semibold group-hover:text-blue-400">AI Workflow Tools →</p>
              </Link>
              <Link href="/ai-search-visibility" className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/70 transition-all group">
                <p className="text-sm text-gray-400 group-hover:text-gray-300">Get found on</p>
                <p className="text-white font-semibold group-hover:text-blue-400">ChatGPT & Google →</p>
              </Link>
              <Link href="/local-services" className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/70 transition-all group">
                <p className="text-sm text-gray-400 group-hover:text-gray-300">Local businesses</p>
                <p className="text-white font-semibold group-hover:text-blue-400">Location Marketing →</p>
              </Link>
            </div>
          </div>
        </section>

        <Problem
          title="B2B Lead Generation Challenges Are Unique"
          problems={[
            {
              title: 'Long Sales Cycles',
              description: 'B2B decisions involve multiple stakeholders and extended evaluation periods'
            },
            {
              title: 'Industry-Specific Needs',
              description: 'Generic solutions miss the nuances of recruiting, SaaS, or insurance sales'
            },
            {
              title: 'High Acquisition Costs',
              description: 'Enterprise leads are expensive and require sophisticated nurturing'
            },
            {
              title: 'Complex Qualification',
              description: 'Identifying decision-makers and budget authority takes expertise'
            }
          ]}
        />

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry-Specific B2B Lead Generation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored AI solutions for recruiting agencies, B2B SaaS companies, and insurance brokerages
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadGenServices.map((service, index) => (
                <Link 
                  key={index}
                  href={service.href}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50"
                >
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Results by Industry
              </h2>
              <p className="text-xl text-gray-300">
                See how we've transformed lead generation for businesses like yours
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {b2bIndustries.map((industry, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{industry.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {industry.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Process
          title="Our B2B Implementation Process"
          steps={[
            {
              title: 'Industry Analysis',
              description: 'Deep dive into your specific B2B vertical and competitive landscape',
              icon: '🔍'
            },
            {
              title: 'Custom AI Setup',
              description: 'Deploy industry-specific lead scoring, qualification, and routing systems',
              icon: '🤖'
            },
            {
              title: 'Tech Stack Integration',
              description: 'Connect with your ATS, CRM, or industry-specific platforms',
              icon: '🔗'
            },
            {
              title: 'Performance Scaling',
              description: 'Optimize campaigns based on your unique KPIs and growth goals',
              icon: '📈'
            }
          ]}
        />

        {/* Related Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Complete Your Growth Stack</h2>
              <p className="text-xl text-gray-300">Combine lead generation with these powerful services</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/solutions/contentcircuit" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">Content That Converts</h3>
                  <p className="text-gray-400 mb-4">AI-powered content creation for blogs, social media, and email campaigns that attract your ideal B2B buyers.</p>
                  <p className="text-blue-400 font-semibold">Explore ContentCircuit →</p>
                </div>
              </Link>
              <Link href="/solutions/chatcircuit" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">24/7 Lead Qualification</h3>
                  <p className="text-gray-400 mb-4">Intelligent chatbots that qualify leads, book meetings, and answer questions round the clock.</p>
                  <p className="text-blue-400 font-semibold">Explore ChatCircuit →</p>
                </div>
              </Link>
              <Link href="/solutions/analyticscircuit" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">Track Every Dollar</h3>
                  <p className="text-gray-400 mb-4">Advanced analytics that show exactly which campaigns drive revenue for your B2B business.</p>
                  <p className="text-blue-400 font-semibold">Explore AnalyticsCircuit →</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Results
          title="B2B Success Metrics"
          subtitle="Average results across our recruiting, SaaS, and insurance clients"
          results={[
            {
              metric: '287%',
              label: 'More Qualified B2B Leads',
              description: 'With industry-specific targeting'
            },
            {
              metric: '42%',
              label: 'Shorter Sales Cycles',
              description: 'Through intelligent lead nurturing'
            },
            {
              metric: '$2.4M',
              label: 'Average Revenue Impact',
              description: 'In the first year of implementation'
            },
            {
              metric: '91%',
              label: 'Client Retention Rate',
              description: 'Businesses that scale with us'
            }
          ]}
        />

        <FAQ
          title="Lead Generation FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready to Scale Your B2B Lead Generation?"
          description="Join leading recruiting agencies, SaaS companies, and insurance brokerages using AI to dominate their markets"
          primaryCTA={{ text: 'Get Industry-Specific Demo', href: '/booking' }}
          secondaryCTA={{ text: 'Download B2B Guide', href: '/resources/b2b-lead-gen-guide' }}
        />

        {/* Bottom Navigation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Explore by Industry</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/industries/medical" className="text-gray-400 hover:text-blue-400">Healthcare & Medical</Link>
                  <Link href="/industries/legal" className="text-gray-400 hover:text-blue-400">Legal Services</Link>
                  <Link href="/industries/roofing" className="text-gray-400 hover:text-blue-400">Roofing & Construction</Link>
                  <Link href="/industries/hvac" className="text-gray-400 hover:text-blue-400">HVAC Services</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Popular Resources</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/blog" className="text-gray-400 hover:text-blue-400">AI Marketing Blog</Link>
                  <Link href="/case-studies" className="text-gray-400 hover:text-blue-400">Success Stories</Link>
                  <Link href="/pricing" className="text-gray-400 hover:text-blue-400">Pricing & Plans</Link>
                  <Link href="/about" className="text-gray-400 hover:text-blue-400">About SpotCircuit</Link>
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