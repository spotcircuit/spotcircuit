import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/ServicesComponent'
import { Process } from '@/components/Process'
import { FAQ } from '@/components/FAQComponent'
import { CTA } from '@/components/CTA'
import { CheckCircleIcon, ArrowLeftIcon, ChartBarIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'B2B SaaS Conversion Optimization | SpotCircuit',
  description: 'Convert more free trials to paid customers with AI-driven optimization. Reduce churn, increase MRR, and maximize customer lifetime value for your SaaS business.',
  openGraph: {
    title: 'B2B SaaS Conversion Optimization | SpotCircuit',
    description: 'AI-powered conversion optimization specifically for B2B SaaS companies.',
  },
}

const saasOptimizationServices = [
  {
    title: 'Trial-to-Paid Optimization',
    description: 'Maximize free trial conversions with intelligent nurturing',
    icon: '🚀',
    features: [
      'Onboarding flow optimization',
      'Feature adoption tracking',
      'Usage-based messaging',
      'Trial extension strategies'
    ]
  },
  {
    title: 'Product-Led Growth Engine',
    description: 'Turn your product into a conversion machine',
    icon: '📈',
    features: [
      'PQL (Product Qualified Lead) scoring',
      'In-app engagement triggers',
      'Feature discovery prompts',
      'Upgrade path optimization'
    ]
  },
  {
    title: 'Churn Prevention System',
    description: 'Identify at-risk accounts and prevent cancellations',
    icon: '🛡️',
    features: [
      'Predictive churn analytics',
      'Health score monitoring',
      'Automated win-back campaigns',
      'Expansion opportunity alerts'
    ]
  },
  {
    title: 'Pricing & Packaging Tests',
    description: 'Find the perfect pricing model for your market',
    icon: '💰',
    features: [
      'Price sensitivity analysis',
      'Feature bundling tests',
      'Tier optimization',
      'Annual plan conversion'
    ]
  }
]

const saasConversionProcess = [
  {
    title: 'SaaS Metrics Audit',
    description: 'Deep analysis of your funnel, from signup to expansion',
    icon: '📊'
  },
  {
    title: 'User Journey Mapping',
    description: 'Identify key activation moments and conversion barriers',
    icon: '🗺️'
  },
  {
    title: 'Growth Experiments',
    description: 'Run data-driven tests across product and marketing',
    icon: '🧪'
  },
  {
    title: 'Scale Winners',
    description: 'Implement successful strategies across all segments',
    icon: '🚀'
  }
]

const saasMetrics = [
  {
    metric: '42%',
    label: 'Higher trial-to-paid conversion',
    description: 'Average across B2B SaaS clients'
  },
  {
    metric: '31%',
    label: 'Reduction in churn rate',
    description: 'Through predictive interventions'
  },
  {
    metric: '2.3X',
    label: 'Increase in customer LTV',
    description: 'With optimized pricing & upsells'
  },
  {
    metric: '67%',
    label: 'More product qualified leads',
    description: 'Through in-app optimization'
  }
]

const faqItems = [
  {
    question: 'How do you optimize SaaS free trials specifically?',
    answer: 'We analyze your onboarding flow, track feature adoption, and identify the "aha moments" that correlate with conversion. Then we optimize the trial experience to guide users to those moments faster through in-app messaging, email sequences, and UI improvements.'
  },
  {
    question: 'What SaaS metrics do you focus on?',
    answer: 'We optimize across the entire SaaS funnel: visitor-to-trial conversion, trial-to-paid conversion, MRR growth, churn rate, expansion revenue, and customer lifetime value. We also track product-specific metrics like feature adoption and time-to-value.'
  },
  {
    question: 'How do you prevent churn in B2B SaaS?',
    answer: 'Our AI analyzes usage patterns, support tickets, and engagement metrics to identify at-risk accounts before they churn. We then trigger automated campaigns, alerts for customer success teams, and in-app interventions to re-engage users.'
  },
  {
    question: 'Do you work with specific SaaS platforms?',
    answer: 'Yes, we integrate with major SaaS tools including Stripe, ChargeBee, Amplitude, Mixpanel, Segment, Intercom, and most CRMs. We also work with your custom analytics and can integrate with your product via APIs.'
  },
  {
    question: 'What size SaaS companies do you work with?',
    answer: 'We work with B2B SaaS companies from $1M to $100M+ ARR. Our strategies scale whether you have 100 or 10,000 customers, though the specific tactics vary based on your growth stage.'
  }
]

export default function ConversionOptimizationPage() {
  return (
    <>
      <Header />
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
          title="B2B SaaS Conversion Optimization"
          subtitle="Turn Free Trials into Paying Customers"
          description="Stop losing trials to competitors. Our AI-powered optimization increases trial-to-paid conversion, reduces churn, and maximizes revenue per customer for B2B SaaS companies."
          primaryCTA={{ text: 'Get SaaS Growth Audit', href: '/booking' }}
          secondaryCTA={{ text: 'View SaaS Case Studies', href: '/case-studies/saas' }}
        />

        {/* Industry Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4">Explore solutions for other industries:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/lead-generation/ai-lead-capture" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">👥 Recruiting Agencies</span>
              </Link>
              <Link href="/lead-generation/lead-nurturing" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🛡️ Insurance Brokerages</span>
              </Link>
              <Link href="/industries/medical" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                <span className="text-white">🏥 Healthcare SaaS</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                SaaS-Specific Optimization Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Purpose-built strategies for B2B SaaS growth, from trial to expansion
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {saasOptimizationServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
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

        <Process
          title="Our SaaS Growth Process"
          steps={saasConversionProcess}
        />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real Results from B2B SaaS Clients
              </h2>
              <p className="text-xl text-gray-300">
                Average improvements across our SaaS optimization projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {saasMetrics.map((item, index) => (
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
                  SaaS Growth Calculator
                </h2>
                
                <div className="text-center text-gray-300 mb-8">
                  <p className="text-xl mb-4">See your potential revenue impact</p>
                  <p>If you have 500 trials/month at 15% conversion rate, improving to 21% (our average) would generate:</p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">+$432,000</div>
                  <p className="text-xl text-gray-300">Additional ARR</p>
                  <Link href="/saas-roi-calculator" className="inline-flex items-center mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                    Calculate Your ROI
                    <ArrowLeftIcon className="w-5 h-5 ml-2 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS Growth Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Complete Your SaaS Growth Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/solutions/contentcircuit" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">Content Marketing</h3>
                  <p className="text-gray-400 text-sm mb-3">SEO-optimized blog posts and resources that attract your ideal customers.</p>
                  <p className="text-purple-400 text-sm font-semibold">Boost organic traffic →</p>
                </div>
              </Link>
              <Link href="/ai-search-visibility" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">AI Search Presence</h3>
                  <p className="text-gray-400 text-sm mb-3">Get your SaaS mentioned in ChatGPT, Perplexity, and other AI platforms.</p>
                  <p className="text-purple-400 text-sm font-semibold">Dominate AI search →</p>
                </div>
              </Link>
              <Link href="/lead-generation/analytics" className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">SaaS Analytics</h3>
                  <p className="text-gray-400 text-sm mb-3">Track MRR, churn, LTV, and other critical SaaS metrics in real-time.</p>
                  <p className="text-purple-400 text-sm font-semibold">Monitor growth →</p>
                </div>
              </Link>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Popular with SaaS Companies</h3>
              <div className="flex justify-center gap-6 flex-wrap">
                <Link href="/ai-automation" className="text-gray-400 hover:text-purple-400">Workflow Automation</Link>
                <Link href="/solutions/chatcircuit" className="text-gray-400 hover:text-purple-400">Support Chatbots</Link>
                <Link href="/solutions/clientcircuit" className="text-gray-400 hover:text-purple-400">Customer Success Tools</Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          title="B2B SaaS Optimization FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready to Accelerate Your SaaS Growth?"
          description="Join successful B2B SaaS companies using AI to optimize every stage of the customer journey"
          primaryCTA={{ text: 'Get Free SaaS Audit', href: '/booking' }}
          secondaryCTA={{ text: 'Download SaaS Playbook', href: '/resources/saas-conversion-playbook' }}
        />

        {/* Resources Footer */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-white font-bold mb-3">SaaS Resources</h4>
                <div className="space-y-2">
                  <Link href="/blog/category/saas" className="block text-gray-400 hover:text-purple-400">SaaS Growth Blog</Link>
                  <Link href="/resources/saas-metrics-guide" className="block text-gray-400 hover:text-purple-400">Metrics Guide</Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Case Studies</h4>
                <div className="space-y-2">
                  <Link href="/case-studies/saas-trial-conversion" className="block text-gray-400 hover:text-purple-400">Trial Conversion</Link>
                  <Link href="/case-studies/saas-churn-reduction" className="block text-gray-400 hover:text-purple-400">Churn Reduction</Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Get Started</h4>
                <div className="space-y-2">
                  <Link href="/pricing" className="block text-gray-400 hover:text-purple-400">View Pricing</Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-purple-400">Contact Sales</Link>
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