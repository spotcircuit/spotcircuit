import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FAQ } from '@/components/FAQComponent'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  CpuChipIcon, 
  MapPinIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'AI-Powered Digital Marketing Services | SpotCircuit',
  description: 'Transform your business with our comprehensive suite of AI-powered services. From SEO to automation, lead generation to local marketing, we have the solutions you need.',
  openGraph: {
    title: 'AI-Powered Digital Marketing Services | SpotCircuit',
    description: 'Comprehensive AI marketing services to transform your business.',
  },
}

const services = [
  {
    title: 'AI Search Visibility',
    icon: MagnifyingGlassIcon,
    description: 'Dominate search results across AI platforms and traditional search engines.',
    link: '/ai-search-visibility',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Lead Generation',
    icon: ChartBarIcon,
    description: 'Transform visitors into customers with intelligent lead capture and nurturing systems.',
    link: '/lead-generation',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI Automation',
    icon: CpuChipIcon,
    description: 'Streamline operations with custom automation workflows.',
    link: '/ai-automation',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Local Marketing',
    icon: MapPinIcon,
    description: 'Dominate your local market with location-based optimization and targeted campaigns.',
    link: '/local-marketing',
    color: 'from-orange-500 to-red-500'
  }
]

const faqItems = [
  {
    question: 'Which service is right for my business?',
    answer: 'It depends on your goals. If you want to be found by AI and search engines, start with AI Search Visibility. For converting visitors to customers, choose Lead Generation. To save time on repetitive tasks, go with AI Automation. For location-based businesses, Local Marketing is essential.'
  },
  {
    question: 'Can I combine multiple services?',
    answer: 'Absolutely! Our services work best together. For example, AI Search Visibility drives traffic, Lead Generation converts that traffic, and AI Automation nurtures those leads automatically. We offer custom packages that combine services for maximum impact.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Results vary by service: AI Automation shows immediate time savings, Lead Generation improvements appear within 30 days, AI Search Visibility gains traction in 30-60 days, and Local Marketing typically shows results within 60-90 days.'
  },
  {
    question: 'Do you work with specific industries?',
    answer: 'Yes! While our services work for any business, we have specialized expertise in healthcare, legal, construction, B2B services, recruiting agencies, SaaS companies, and insurance brokerages. We tailor our approach to your industry\'s unique needs.'
  }
]

export default function ServicesPage() {
  return (
    <>      <div className="min-h-screen bg-black text-white">
        {/* New Hero Section */}
        <section className="relative bg-gray-900 overflow-hidden mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">AI-Powered Services</span>
                  That Drive Growth
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-md mx-auto md:mx-0">
                  We blend cutting-edge AI with proven marketing strategies to deliver measurable results. Explore our services to find the right fit for your business.
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                  <Link href="/booking">
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">Get Started</span>
                  </Link>
                  <Link href="#services">
                    <span className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">View Services</span>
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-96 md:h-auto flex items-center justify-center">
                <svg className="absolute w-full h-full text-gray-700 opacity-20" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                  <defs>
                    <pattern id="e229c5a2-2b33-4cfa-846c-2d695913fc29" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-600" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="784" height="404" fill="url(#e229c5a2-2b33-4cfa-846c-2d695913fc29)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                </div>
                <svg viewBox="0 0 200 200" className="relative w-full h-full max-w-lg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 1}} />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Central AI Brain */}
                  <circle cx="100" cy="100" r="30" fill="url(#grad1)" filter="url(#glow)" />
                  <CpuChipIcon className="w-12 h-12 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{transform: 'translate(74px, 74px)'}}/>

                  {/* Inputs */}
                  <g>
                    <path d="M 20 40 Q 50 80 90 95" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="4" />
                    <circle cx="20" cy="40" r="5" fill="#3b82f6" />
                    <MagnifyingGlassIcon className="w-4 h-4 text-white" style={{transform: 'translate(16px, 36px)'}} />
                  </g>
                  <g>
                    <path d="M 40 180 Q 70 130 95 110" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="4" />
                    <circle cx="40" cy="180" r="5" fill="#8b5cf6" />
                    <ChartBarIcon className="w-4 h-4 text-white" style={{transform: 'translate(36px, 176px)'}} />
                  </g>
                  <g>
                    <path d="M 160 20 Q 120 70 105 90" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="4" />
                    <circle cx="160" cy="20" r="5" fill="#14b8a6" />
                    <MapPinIcon className="w-4 h-4 text-white" style={{transform: 'translate(156px, 16px)'}} />
                  </g>

                  {/* Output */}
                  <g>
                    <path d="M 110 105 Q 150 130 180 160" stroke="url(#grad1)" strokeWidth="3" fill="none" />
                    <circle cx="180" cy="160" r="8" fill="#14b8a6" filter="url(#glow)" />
                    <ArrowRightIcon className="w-6 h-6 text-white" style={{transform: 'translate(174px, 154px)'}} />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-300">Choose one or combine multiple for exponential growth</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {services.map((service) => (
                <Link href={service.link} key={service.title} className="h-full">
                  <div className={`group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 p-8 flex flex-col h-full justify-between`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative flex-grow">
                      <div className={`text-white p-3 rounded-lg bg-gradient-to-br ${service.color} inline-block`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-6 mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                    </div>
                    <div className="relative mt-auto">
                      <span className="inline-flex items-center text-white font-semibold hover:gap-3 transition-all group">
                        Learn More
                        <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SVG Separator */}
        <div className="relative h-24 bg-black">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L1440 0L1440 120C1200 40 800 40 720 40C640 40 240 40 0 120L0 0Z" fill="#111827"/>
          </svg>
        </div>

        {/* Reimagined Solution Circuits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Turnkey Solutions</span> for Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our pre-built “Circuit” solutions are designed to tackle your most pressing challenges with precision and power.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/solutions/contentcircuit" className="group">
                <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="text-5xl mb-6">✍️</div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400">ContentCircuit</h3>
                        <p className="text-gray-400">AI-powered content creation and optimization.</p>
                    </div>
                </div>
              </Link>
              <Link href="/solutions/chatcircuit" className="group">
                <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="text-5xl mb-6">💬</div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400">ChatCircuit</h3>
                        <p className="text-gray-400">Intelligent chatbots for 24/7 engagement.</p>
                    </div>
                </div>
              </Link>
              <Link href="/solutions/analyticscircuit" className="group">
                <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="text-5xl mb-6">📊</div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400">AnalyticsCircuit</h3>
                        <p className="text-gray-400">Advanced analytics and reporting dashboards.</p>
                    </div>
                </div>
              </Link>
              <Link href="/solutions/clientcircuit" className="group">
                <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="text-5xl mb-6">🤝</div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400">ClientCircuit</h3>
                        <p className="text-gray-400">Complete client management system.</p>
                    </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Focus - Enhanced Design */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="industry-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#industry-grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Solutions Tailored by Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We understand that every industry has unique challenges. Our AI-powered strategies are customized to deliver maximum impact for your specific market.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* B2B Services Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-10 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative">
                    {/* Custom B2B Icon */}
                    <div className="w-20 h-20 mb-8 relative">
                      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <rect x="10" y="20" width="25" height="40" rx="3" fill="#FCD34D" opacity="0.2" stroke="#FCD34D" strokeWidth="2"/>
                        <rect x="45" y="20" width="25" height="40" rx="3" fill="#FCD34D" opacity="0.2" stroke="#FCD34D" strokeWidth="2"/>
                        <path d="M35 40L45 40" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="22.5" cy="30" r="5" fill="#FCD34D"/>
                        <circle cx="57.5" cy="30" r="5" fill="#FCD34D"/>
                        <path d="M20 45h5M55 45h5" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-amber-400 transition-colors">B2B Services</h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { name: 'Recruiting Agencies', icon: '👥', href: '/industries/recruiting' },
                        { name: 'SaaS & Software', icon: '💻', href: '/industries/saas' },
                        { name: 'Insurance Brokerages', icon: '🛡️', href: '/industries/insurance' },
                        { name: 'Consulting Firms', icon: '📊', href: '/industries/consulting' },
                        { name: 'Marketing Agencies', icon: '📱', href: '/industries/marketing-agencies' },
                        { name: 'Financial Advisors', icon: '💰', href: '/industries/financial-advisors' }
                      ].map((item, index) => (
                        <Link 
                          key={item.name}
                          href={item.href} 
                          className="group/link flex items-center justify-between p-3 rounded-xl bg-gray-800/50 hover:bg-amber-500/10 border border-gray-700 hover:border-amber-500/30 transition-all duration-300"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-gray-300 group-hover/link:text-amber-400 font-medium transition-colors">{item.name}</span>
                          </div>
                          <ArrowRightIcon className="w-5 h-5 text-gray-600 group-hover/link:text-amber-400 transform group-hover/link:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Local Services Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-10 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative">
                    {/* Custom Local Services Icon */}
                    <div className="w-20 h-20 mb-8 relative">
                      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M40 15C32 15 25 22 25 30C25 42 40 55 40 55C40 55 55 42 55 30C55 22 48 15 40 15Z" fill="#60A5FA" opacity="0.2" stroke="#60A5FA" strokeWidth="2"/>
                        <circle cx="40" cy="30" r="6" fill="#60A5FA"/>
                        <path d="M20 60h40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M30 60v-5M50 60v-5" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-blue-400 transition-colors">Local Services</h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { name: 'Healthcare & Medical', icon: '🏥', href: '/industries/medical' },
                        { name: 'Medical Spas', icon: '💆', href: '/industries/medical-spas' },
                        { name: 'Legal Services', icon: '⚖️', href: '/industries/legal' },
                        { name: 'Roofing & Construction', icon: '🏗️', href: '/industries/roofing' },
                        { name: 'General Contracting', icon: '🔨', href: '/industries/contracting' },
                        { name: 'HVAC Services', icon: '❄️', href: '/industries/hvac' },
                        { name: 'Plumbing Services', icon: '🔧', href: '/industries/plumbing' },
                        { name: 'Electrical Services', icon: '⚡', href: '/industries/electrical' }
                      ].map((item, index) => (
                        <Link 
                          key={item.name}
                          href={item.href} 
                          className="group/link flex items-center justify-between p-3 rounded-xl bg-gray-800/50 hover:bg-blue-500/10 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-gray-300 group-hover/link:text-blue-400 font-medium transition-colors">{item.name}</span>
                          </div>
                          <ArrowRightIcon className="w-5 h-5 text-gray-600 group-hover/link:text-blue-400 transform group-hover/link:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-gray-400 mb-6">Don't see your industry? We customize solutions for any business.</p>
              <Link href="/booking" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
                Get Your Custom Strategy
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          title="Service FAQs"
          items={faqItems}
        />

        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Transform Your Business?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    Let's discuss which services will drive the most growth for your company
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <Link
                        href="/booking"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Schedule Consultation
                    </Link>
                    <Link href="/pricing" className="text-sm font-semibold leading-6 text-white">
                        View Pricing <span aria-hidden="true">→</span>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

      </div>    </>
  )
}