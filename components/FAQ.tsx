import { Disclosure } from '@headlessui/react'
import { 
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const faqSections = [
  {
    title: "AI Technology & Features",
    icon: RocketLaunchIcon,
    questions: [
      {
        question: "What is AI-powered SEO automation and how does it work?",
        answer: "Our AI-powered SEO automation uses advanced machine learning algorithms to continuously analyze your Shopify store's performance, market trends, and competitor data. It automatically identifies optimization opportunities, generates SEO-friendly content, and adjusts your strategy in real-time. This includes automated keyword research, content optimization, meta tag generation, and performance tracking."
      },
      {
        question: "How is Advanced Engine Optimization (AEO) different from traditional SEO?",
        answer: "While traditional SEO focuses on optimizing for search engines like Google, AEO is designed specifically for AI-powered search engines and voice assistants. It incorporates natural language processing, semantic search optimization, and conversational AI patterns to ensure your content is optimized for next-generation search technologies."
      },
      {
        question: "What specific AI automation features are included in the package?",
        answer: "Our package includes automated keyword research and tracking, AI-driven content optimization, automated meta tag generation, smart internal linking, automated schema markup, performance monitoring and alerts, competitor analysis, and automated reporting. The AI continuously learns from your store's performance to make data-driven optimizations."
      }
    ]
  },
  {
    title: "Implementation & Integration",
    icon: CogIcon,
    questions: [
      {
        question: "Can the AI automation work with my existing Shopify apps and theme?",
        answer: "Yes, our AI automation system is designed to integrate seamlessly with all Shopify themes and most popular apps. It works alongside your existing setup without requiring major changes to your store's structure or design."
      },
      {
        question: "How does the AI handle product descriptions and category pages?",
        answer: "The AI automatically optimizes product descriptions and category pages by analyzing top-performing competitors, incorporating relevant keywords, and ensuring proper semantic structure. It can also generate SEO-friendly product variations and maintain consistency across your catalog."
      },
      {
        question: "How does the AI adapt to algorithm changes and market trends?",
        answer: "The AI continuously monitors search engine algorithm updates and market trends, automatically adjusting your optimization strategy. It learns from global data patterns and successful adaptations across our client base to ensure your store stays ahead of changes."
      }
    ]
  },
  {
    title: "Performance & Results",
    icon: ChartBarIcon,
    questions: [
      {
        question: "How long does it take to see results from the AI automation?",
        answer: "While initial optimizations begin immediately, typical results are visible within 30-90 days. The AI system continuously learns and improves, leading to progressively better results over time. Some clients see significant improvements in search rankings and traffic within the first month."
      },
      {
        question: "What kind of reporting and analytics does the AI provide?",
        answer: "Our AI generates comprehensive reports including ranking changes, traffic analysis, conversion tracking, competitor comparisons, and optimization recommendations. You get real-time dashboards and automated weekly/monthly reports with actionable insights."
      },
      {
        question: "Can I customize the AI's optimization strategy for my specific niche?",
        answer: "Yes, the AI can be customized to focus on your specific market niche, target audience, and business goals. It learns from your store's unique data and can be configured to prioritize certain types of optimizations or target specific markets."
      }
    ]
  },
  {
    title: "Security & Support",
    icon: ShieldCheckIcon,
    questions: [
      {
        question: "How secure is the AI automation system?",
        answer: "Our AI system operates with enterprise-grade security, including encrypted data transmission, secure API connections, and regular security audits. It complies with Shopify's security requirements and industry best practices for data protection."
      },
      {
        question: "What support is included with the AI automation package?",
        answer: "You get 24/7 access to our AI monitoring system, regular strategy calls with our SEO experts, priority technical support, and access to our knowledge base. We also provide training on using the AI dashboard and interpreting the automated reports."
      },
      {
        question: "What makes your AI automation different from other SEO tools?",
        answer: "Our system combines traditional SEO automation with advanced AI capabilities like predictive analytics, natural language processing, and machine learning. It's specifically designed for Shopify stores and includes AEO optimization for next-generation search engines."
      }
    ]
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500">
      <div id="faq-section" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-x-3 mb-16 text-center">
            <QuestionMarkCircleIcon className="h-10 w-10 text-green-200" />
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-16">
            {faqSections.map((section) => (
              <div key={section.title} className="bg-green-700/50 backdrop-blur-sm rounded-2xl ring-1 ring-white/20 p-8">
                <div className="flex items-center gap-x-3 mb-8">
                  <section.icon className="h-8 w-8 text-green-200" />
                  <h3 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                
                <dl className="space-y-6">
                  {section.questions.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="border-b border-green-400/20 last:border-0 pb-6 last:pb-0">
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white hover:text-green-200">
                              <span className="text-base font-semibold leading-7">{faq.question}</span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-6 w-6 transform transition-all duration-200 text-green-200'
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-3 pr-12">
                            <p className="text-base leading-7 text-green-100">{faq.answer}</p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
