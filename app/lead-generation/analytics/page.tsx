import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/ServicesComponent'
import { Features } from '@/components/Features'
import { FAQ } from '@/components/FAQComponent'
import { CTA } from '@/components/CTA'
import { CheckCircleIcon, ArrowLeftIcon, ChartBarIcon, ChartPieIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'B2B Lead Generation Analytics - Industry-Specific KPIs | SpotCircuit',
  description: 'Track the metrics that matter for your industry. Real-time dashboards and reporting for recruiting agencies, B2B SaaS companies, and insurance brokerages.',
  openGraph: {
    title: 'B2B Lead Generation Analytics | SpotCircuit',
    description: 'Industry-specific analytics and KPIs for B2B lead generation.',
  },
}

const industryAnalytics = [
  {
    title: 'Recruiting Analytics',
    description: 'KPIs for staffing and recruiting agencies',
    icon: '👥',
    metrics: [
      'Time-to-fill by position type',
      'Candidate-to-placement ratio',
      'Client acquisition cost',
      'Contractor margin analysis',
      'Job order fill rate',
      'Recruiter productivity metrics'
    ]
  },
  {
    title: 'SaaS Analytics',
    description: 'Metrics for B2B software companies',
    icon: '🚀',
    metrics: [
      'Trial-to-paid conversion rate',
      'Monthly recurring revenue (MRR)',
      'Customer acquisition cost (CAC)',
      'Lifetime value (LTV) to CAC ratio',
      'Product qualified lead (PQL) velocity',
      'Churn and retention analytics'
    ]
  },
  {
    title: 'Insurance Analytics',
    description: 'Performance tracking for brokerages',
    icon: '🛡️',
    metrics: [
      'Quote-to-bind ratio by line',
      'Average premium per policy',
      'Renewal rate tracking',
      'Cross-sell success rate',
      'Producer performance metrics',
      'Loss ratio by segment'
    ]
  },
  {
    title: 'Universal B2B Metrics',
    description: 'Core metrics across all industries',
    icon: '📊',
    metrics: [
      'Lead source attribution',
      'Sales cycle length',
      'Pipeline velocity',
      'Win/loss analysis',
      'Marketing ROI by channel',
      'Lead quality scoring'
    ]
  }
]

const dashboardFeatures = [
  {
    title: 'Industry Dashboards',
    description: 'Pre-built templates for your vertical',
    features: [
      'Role-based access control',
      'Mobile-responsive design',
      'White-label options',
      'Custom branding'
    ]
  },
  {
    title: 'Automated Reporting',
    description: 'Get insights delivered on schedule',
    features: [
      'Daily/weekly/monthly reports',
      'Executive summaries',
      'Anomaly alerts',
      'Trend analysis'
    ]
  },
  {
    title: 'Predictive Analytics',
    description: 'AI-powered forecasting and insights',
    features: [
      'Revenue forecasting',
      'Lead scoring models',
      'Churn prediction',
      'Opportunity analysis'
    ]
  },
  {
    title: 'Integration Hub',
    description: 'Connect all your data sources',
    features: [
      'CRM integration',
      'Marketing platform sync',
      'Custom API connections',
      'Data warehouse export'
    ]
  }
]

const faqItems = [
  {
    question: 'How do you handle industry-specific metrics?',
    answer: 'We\'ve built specialized tracking for each industry. Recruiting agencies get placement metrics, SaaS companies see MRR and churn analytics, and insurance brokerages track quote-to-bind ratios and renewals. All in one unified platform.'
  },
  {
    question: 'Can I create custom KPIs for my business?',
    answer: 'Absolutely! While we provide industry-standard KPIs out of the box, you can create custom metrics, calculated fields, and unique visualizations specific to your business needs.'
  },
  {
    question: 'What systems do you integrate with?',
    answer: 'We integrate with industry-specific platforms: Bullhorn and PCRecruiter for recruiting, Stripe and ChargeBee for SaaS, Applied Epic and AMS360 for insurance, plus universal tools like Salesforce, HubSpot, and Google Analytics.'
  },
  {
    question: 'How real-time is the data?',
    answer: 'Most metrics update in real-time or near real-time (within 5 minutes). Some calculated metrics like LTV or cohort analyses update hourly or daily depending on the complexity.'
  },
  {
    question: 'Can different teams see different data?',
    answer: 'Yes! Our role-based access control lets you create custom views. Sales sees their pipeline, marketing sees campaign performance, and executives see high-level KPIs - all from the same data source.'
  }
]

export default function AnalyticsPage() {
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
          title="Industry-Specific B2B Analytics"
          subtitle="Track the KPIs That Drive Your Business"
          description="Stop drowning in irrelevant data. Get purpose-built analytics for recruiting agencies, B2B SaaS companies, and insurance brokerages with the metrics that actually matter for your growth."
          primaryCTA={{ text: 'See Your Industry Dashboard', href: '/booking' }}
          secondaryCTA={{ text: 'View Sample Reports', href: '#reports' }}
        />

        {/* Quick Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/30 rounded-xl p-6">
              <p className="text-center text-gray-400 mb-4">Jump to your industry's analytics:</p>
              <div className="grid md:grid-cols-4 gap-4">
                <Link href="#recruiting-analytics" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all">
                  <span className="text-white font-semibold">👥 Recruiting KPIs</span>
                </Link>
                <Link href="#saas-analytics" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all">
                  <span className="text-white font-semibold">🚀 SaaS Metrics</span>
                </Link>
                <Link href="#insurance-analytics" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all">
                  <span className="text-white font-semibold">🛡️ Insurance KPIs</span>
                </Link>
                <Link href="#universal-metrics" className="text-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all">
                  <span className="text-white font-semibold">📊 Universal B2B</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Analytics Built for Your Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track the metrics that matter with industry-specific KPIs and benchmarks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industryAnalytics.map((industry, index) => {
                const industryId = industry.title.toLowerCase().includes('recruiting') ? 'recruiting-analytics' : 
                                  industry.title.toLowerCase().includes('saas') ? 'saas-analytics' : 
                                  industry.title.toLowerCase().includes('insurance') ? 'insurance-analytics' : 
                                  'universal-metrics';
                const relatedLink = industryId === 'recruiting-analytics' ? '/lead-generation/ai-lead-capture' :
                                   industryId === 'saas-analytics' ? '/lead-generation/conversion-optimization' :
                                   industryId === 'insurance-analytics' ? '/lead-generation/lead-nurturing' :
                                   '/lead-generation';
                
                return (
                  <div key={index} id={industryId} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{industry.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                        <p className="text-gray-400">{industry.description}</p>
                      </div>
                    </div>
                    
                    <ul className="grid gap-2 mb-6">
                      {industry.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{metric}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={relatedLink} className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm">
                      Explore {industry.title.split(' ')[0]} solutions →
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <ChartBarIcon className="w-12 h-12 mx-auto text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="text-left space-y-1">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-500 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  See Your Industry's Success Metrics
                </h2>
                <p className="text-xl text-white/90">
                  Real results from businesses using our analytics platform
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <Link href="/lead-generation/ai-lead-capture" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-2">👥</div>
                  <div className="text-3xl font-bold text-white mb-2">52%</div>
                  <p className="text-white/80">Faster placements</p>
                  <p className="text-sm text-white/60 mt-1">Recruiting Agencies</p>
                  <p className="text-xs text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View recruiting solutions →</p>
                </Link>
                <Link href="/lead-generation/conversion-optimization" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-3xl font-bold text-white mb-2">2.8X</div>
                  <p className="text-white/80">Better LTV:CAC ratio</p>
                  <p className="text-sm text-white/60 mt-1">B2B SaaS</p>
                  <p className="text-xs text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View SaaS solutions →</p>
                </Link>
                <Link href="/lead-generation/lead-nurturing" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-2">🛡️</div>
                  <div className="text-3xl font-bold text-white mb-2">94%</div>
                  <p className="text-white/80">Renewal rate</p>
                  <p className="text-sm text-white/60 mt-1">Insurance Brokerages</p>
                  <p className="text-xs text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View insurance solutions →</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect Your Entire Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">👥 Recruiting Platforms</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Bullhorn, PCRecruiter, Greenhouse</p>
                  <p className="text-gray-400">JobAdder, Vincere, Mercury</p>
                  <Link href="/integrations/recruiting" className="text-green-400 hover:text-green-300 text-sm">View all integrations →</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">🚀 SaaS Tools</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Stripe, ChargeBee, Paddle</p>
                  <p className="text-gray-400">Mixpanel, Amplitude, Segment</p>
                  <Link href="/integrations/saas" className="text-green-400 hover:text-green-300 text-sm">View all integrations →</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">🛡️ Insurance Systems</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Applied Epic, AMS360, EZLynx</p>
                  <p className="text-gray-400">Vertafore, Duck Creek, Guidewire</p>
                  <Link href="/integrations/insurance" className="text-green-400 hover:text-green-300 text-sm">View all integrations →</Link>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Universal Analytics Tools</h3>
              <div className="flex justify-center gap-6 flex-wrap">
                <Link href="/solutions/analyticscircuit" className="text-gray-400 hover:text-green-400">AnalyticsCircuit Platform</Link>
                <Link href="/ai-automation" className="text-gray-400 hover:text-green-400">Workflow Automation</Link>
                <Link href="/solutions/clientcircuit" className="text-gray-400 hover:text-green-400">Client Management</Link>
                <Link href="/api-docs" className="text-gray-400 hover:text-green-400">API Documentation</Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          title="B2B Analytics FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready for Industry-Specific Insights?"
          description="Get the analytics dashboard built for your B2B vertical"
          primaryCTA={{ text: 'Schedule Analytics Demo', href: '/booking' }}
          secondaryCTA={{ text: 'Download KPI Guide', href: '/resources/b2b-kpi-guide' }}
        />

        {/* Resource Footer */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-white font-bold mb-3">Analytics Resources</h4>
                <div className="space-y-2">
                  <Link href="/blog/category/analytics" className="block text-gray-400 hover:text-green-400 text-sm">Analytics Blog</Link>
                  <Link href="/resources/kpi-templates" className="block text-gray-400 hover:text-green-400 text-sm">KPI Templates</Link>
                  <Link href="/webinars/analytics" className="block text-gray-400 hover:text-green-400 text-sm">Training Webinars</Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">By Industry</h4>
                <div className="space-y-2">
                  <Link href="/industries/medical" className="block text-gray-400 hover:text-green-400 text-sm">Healthcare</Link>
                  <Link href="/industries/legal" className="block text-gray-400 hover:text-green-400 text-sm">Legal Services</Link>
                  <Link href="/industries/contracting" className="block text-gray-400 hover:text-green-400 text-sm">Construction</Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Lead Generation</h4>
                <div className="space-y-2">
                  <Link href="/lead-generation" className="block text-gray-400 hover:text-green-400 text-sm">Overview</Link>
                  <Link href="/lead-generation/ai-lead-capture" className="block text-gray-400 hover:text-green-400 text-sm">Lead Capture</Link>
                  <Link href="/lead-generation/lead-nurturing" className="block text-gray-400 hover:text-green-400 text-sm">Nurturing</Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Get Started</h4>
                <div className="space-y-2">
                  <Link href="/pricing" className="block text-gray-400 hover:text-green-400 text-sm">Pricing</Link>
                  <Link href="/demo" className="block text-gray-400 hover:text-green-400 text-sm">Request Demo</Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-green-400 text-sm">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}