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
import { CheckCircleIcon, ArrowRightIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'AI Automation Services - n8n, Make, Zapier Workflows | SpotCircuit',
  description: 'Transform your business with AI-powered automation workflows using n8n, Make, and Zapier. From lead generation to recruiting, we build custom automations that scale.',
  openGraph: {
    title: 'AI Automation Services - n8n, Make, Zapier | SpotCircuit',
    description: 'Transform your business with AI-powered automation workflows. Custom solutions for every industry.',
    images: ['/static/images/ai-automation-og.png'],
  },
}

const automationPlatforms = [
  {
    name: 'n8n',
    description: 'Self-hosted workflow automation with unlimited possibilities',
    features: [
      'Complete control & customization',
      'No workflow limits',
      'Custom code integration',
      'AI model integration'
    ],
    bestFor: 'Complex workflows requiring custom logic'
  },
  {
    name: 'Make (Integromat)',
    description: 'Visual automation builder with powerful data processing',
    features: [
      'Visual workflow builder',
      'Advanced data manipulation',
      'Error handling',
      'Scheduling flexibility'
    ],
    bestFor: 'Data-heavy automations with complex logic'
  },
  {
    name: 'Zapier',
    description: 'Quick and easy integrations with 5000+ apps',
    features: [
      'Largest app ecosystem',
      'No-code automation',
      'Pre-built templates',
      'Quick deployment'
    ],
    bestFor: 'Simple to medium complexity workflows'
  }
]

const workflowExamples = [
  {
    title: 'Lead Generation Automation',
    icon: '🎯',
    description: 'Capture, qualify, and nurture leads automatically',
    steps: [
      'Capture leads from multiple sources',
      'Score and qualify with AI',
      'Route to CRM automatically',
      'Trigger nurturing sequences',
      'Alert sales for hot leads'
    ],
    impact: '25+ hours'
  },
  {
    title: 'Recruiting & Talent Acquisition',
    icon: '👥',
    description: 'Streamline candidate sourcing and screening',
    steps: [
      'Source candidates from job boards',
      'AI resume screening',
      'Automated interview scheduling',
      'Reference check workflows',
      'Onboarding automation'
    ],
    impact: '30+ hours'
  },
  {
    title: 'Business Development',
    icon: '🚀',
    description: 'Automate outreach and relationship building',
    steps: [
      'Find prospects matching ICP',
      'Enrich contact data',
      'Personalized outreach sequences',
      'Meeting scheduling',
      'Follow-up automation'
    ],
    impact: '20+ hours'
  },
  {
    title: 'Market Research & Intelligence',
    icon: '🔍',
    description: 'Gather competitive insights automatically',
    steps: [
      'Monitor competitor websites',
      'Track pricing changes',
      'Social media monitoring',
      'Industry news aggregation',
      'AI-powered analysis'
    ],
    impact: '15+ hours'
  },
  {
    title: 'Content Creation Pipeline',
    icon: '✍️',
    description: 'Streamline content production and distribution',
    steps: [
      'Content ideation with AI',
      'Automated research',
      'Multi-platform publishing',
      'SEO optimization',
      'Performance tracking'
    ],
    impact: '20+ hours'
  },
  {
    title: 'Customer Support Automation',
    icon: '💬',
    description: 'Provide instant support 24/7',
    steps: [
      'Ticket categorization',
      'AI-powered responses',
      'Escalation workflows',
      'Knowledge base updates',
      'Customer satisfaction tracking'
    ],
    impact: '35+ hours'
  }
]

const automationProcess = [
  {
    title: 'Discovery & Mapping',
    description: 'We analyze your current processes and identify automation opportunities',
    icon: '🔍'
  },
  {
    title: 'Platform Selection',
    description: 'Choose the right tools based on complexity, budget, and requirements',
    icon: '🛠️'
  },
  {
    title: 'Build & Test',
    description: 'Develop workflows with extensive testing and error handling',
    icon: '🔧'
  },
  {
    title: 'Deploy & Optimize',
    description: 'Launch automations and continuously improve performance',
    icon: '🚀'
  }
]

const faqItems = [
  {
    question: 'Which automation platform should I choose?',
    answer: 'It depends on your needs: n8n for complex, self-hosted solutions with unlimited workflows; Make for visual building with advanced logic; Zapier for quick, simple integrations. We help you choose during our consultation.'
  },
  {
    question: 'How much can automation save my business?',
    answer: 'Most businesses save 20-40 hours per week through automation, translating to $50,000-$200,000 annually in labor costs. ROI typically occurs within 2-3 months, with some workflows paying for themselves immediately.'
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Yes! We integrate with virtually any system that has an API, webhook, or data export capability. This includes CRMs, ERPs, custom databases, legacy systems, and proprietary software.'
  },
  {
    question: 'How long does it take to implement automation?',
    answer: 'Simple workflows can be live within days. Medium complexity projects typically take 2-4 weeks, while enterprise-level automations may require 4-8 weeks including testing and optimization.'
  },
  {
    question: 'Do we need technical staff to maintain automations?',
    answer: 'No! We provide full documentation, training, and ongoing support. Most automations run autonomously, and we offer maintenance packages for peace of mind.'
  }
]

export default function AIAutomationPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Hero
          title="AI-Powered Workflow Automation"
          subtitle="Build Intelligent Automations with n8n, Make, and Zapier"
          description="Stop wasting time on repetitive tasks. Our experts create custom AI workflows that connect your tools, automate your processes, and scale your business operations."
          primaryCTA={{ text: 'Start Automating', href: '/booking' }}
          secondaryCTA={{ text: 'View Use Cases', href: '#use-cases' }}
          backgroundImage="/static/images/automation-workflow.svg"
        />

        {/* Quick Links to Industries */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4">Popular automation use cases by industry:</p>
            <div className="grid md:grid-cols-5 gap-4">
              <Link href="/lead-generation/ai-lead-capture" className="text-center px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all group">
                <span className="text-white group-hover:text-blue-400">👥 Recruiting</span>
              </Link>
              <Link href="/lead-generation/conversion-optimization" className="text-center px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all group">
                <span className="text-white group-hover:text-blue-400">🚀 SaaS</span>
              </Link>
              <Link href="/lead-generation/lead-nurturing" className="text-center px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all group">
                <span className="text-white group-hover:text-blue-400">🛡️ Insurance</span>
              </Link>
              <Link href="/industries/medical" className="text-center px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all group">
                <span className="text-white group-hover:text-blue-400">🏥 Healthcare</span>
              </Link>
              <Link href="/industries/legal" className="text-center px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all group">
                <span className="text-white group-hover:text-blue-400">⚖️ Legal</span>
              </Link>
            </div>
          </div>
        </section>

        <Problem
          title="Manual Processes Are Killing Your Growth"
          problems={[
            {
              title: 'Time Waste',
              description: 'Teams spend 60% of time on repetitive tasks instead of strategic work'
            },
            {
              title: 'Human Error',
              description: 'Manual data entry leads to costly mistakes and inconsistencies'
            },
            {
              title: 'Scaling Issues',
              description: 'Growth is limited by manual capacity and process bottlenecks'
            },
            {
              title: 'Missed Opportunities',
              description: 'Slow response times cause lost leads and poor customer experience'
            }
          ]}
        />

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose the Right Automation Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're experts in all major automation platforms and help you choose the best fit
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {automationPlatforms.map((platform, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-6">{platform.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">Best for:</span> {platform.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-World Automation Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-specific workflows that deliver immediate ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {workflowExamples.map((workflow, index) => {
                const industryLink = workflow.title.includes('Lead Generation') ? '/lead-generation' :
                                    workflow.title.includes('Recruiting') ? '/lead-generation/ai-lead-capture' :
                                    workflow.title.includes('Business Development') ? '/lead-generation/conversion-optimization' :
                                    workflow.title.includes('Research') ? '/lead-generation/analytics' :
                                    workflow.title.includes('Content') ? '/solutions/contentcircuit' :
                                    workflow.title.includes('Support') ? '/solutions/chatcircuit' :
                                    '/services';
                
                return (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{workflow.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{workflow.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{workflow.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Automated Steps:</h4>
                      <ul className="space-y-2">
                        {workflow.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-purple-400">{workflow.impact}</span>
                      <span className="text-sm text-gray-500">Time saved per week</span>
                    </div>
                    
                    <Link href={industryLink} className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold">
                      Explore {workflow.title.toLowerCase()} solutions →
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <Process
          title="Our Automation Implementation Process"
          steps={automationProcess}
        />

        {/* Integration Partners */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect Everything in Your Tech Stack</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">CRM & Sales</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Salesforce, HubSpot, Pipedrive</p>
                  <p className="text-gray-400 text-sm">Monday.com, Airtable, Notion</p>
                  <Link href="/integrations/crm" className="text-purple-400 hover:text-purple-300 text-sm">View all →</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Marketing Tools</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Mailchimp, ActiveCampaign</p>
                  <p className="text-gray-400 text-sm">Google Ads, Facebook Ads</p>
                  <Link href="/integrations/marketing" className="text-purple-400 hover:text-purple-300 text-sm">View all →</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">AI & Data</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">OpenAI, Claude, Gemini</p>
                  <p className="text-gray-400 text-sm">Google Sheets, BigQuery</p>
                  <Link href="/integrations/ai" className="text-purple-400 hover:text-purple-300 text-sm">View all →</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Industry Specific</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Bullhorn, Applied Epic</p>
                  <p className="text-gray-400 text-sm">Stripe, ChargeBee, AMS360</p>
                  <Link href="/integrations/industry" className="text-purple-400 hover:text-purple-300 text-sm">View all →</Link>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">Don't see your tool? We can integrate with any API or webhook-enabled platform.</p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors">
                Request Custom Integration
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <Results
          title="The Impact of Automation"
          subtitle="Real results from businesses that embraced intelligent workflows"
          results={[
            {
              metric: '85%',
              label: 'Reduction in Manual Tasks',
              description: 'Average across all clients'
            },
            {
              metric: '$125K',
              label: 'Annual Cost Savings',
              description: 'Per automated department'
            },
            {
              metric: '12X',
              label: 'ROI on Automation',
              description: 'Within first year'
            },
            {
              metric: '99.9%',
              label: 'Process Accuracy',
              description: 'Elimination of human error'
            }
          ]}
        />

        <FAQ
          title="Automation FAQs"
          items={faqItems}
        />

        <CTA
          title="Ready to Automate Your Business?"
          description="Join thousands of businesses saving hours every week with intelligent automation"
          primaryCTA={{ text: 'Start Your Automation Journey', href: '/booking' }}
          secondaryCTA={{ text: 'Download Automation Guide', href: '/resources/automation-guide' }}
        />

        {/* Related Services & Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
                <div className="space-y-2">
                  <Link href="/lead-generation" className="block text-gray-400 hover:text-purple-400">AI Lead Generation</Link>
                  <Link href="/ai-search-visibility" className="block text-gray-400 hover:text-purple-400">AI Search Optimization</Link>
                  <Link href="/solutions/chatcircuit" className="block text-gray-400 hover:text-purple-400">Intelligent Chatbots</Link>
                  <Link href="/solutions/analyticscircuit" className="block text-gray-400 hover:text-purple-400">Analytics & Reporting</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Industries We Serve</h3>
                <div className="space-y-2">
                  <Link href="/industries/medical" className="block text-gray-400 hover:text-purple-400">Healthcare & Medical</Link>
                  <Link href="/industries/legal" className="block text-gray-400 hover:text-purple-400">Legal Services</Link>
                  <Link href="/industries/roofing" className="block text-gray-400 hover:text-purple-400">Roofing & Construction</Link>
                  <Link href="/local-services" className="block text-gray-400 hover:text-purple-400">Local Services</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
                <div className="space-y-2">
                  <Link href="/blog/category/automation" className="block text-gray-400 hover:text-purple-400">Automation Blog</Link>
                  <Link href="/resources/workflow-templates" className="block text-gray-400 hover:text-purple-400">Workflow Templates</Link>
                  <Link href="/case-studies/automation" className="block text-gray-400 hover:text-purple-400">Success Stories</Link>
                  <Link href="/webinars" className="block text-gray-400 hover:text-purple-400">Training Webinars</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}