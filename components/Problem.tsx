import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MagnifyingGlassIcon, 
  ClockIcon, 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { 
  AreaChart, 
  Area, 
  LineChart, 
  Line, 
  ResponsiveContainer 
} from 'recharts';

const solutions = [
  {
    name: 'AI-Powered SEO',
    description: 'Our AI automatically optimizes your store\'s content, meta tags, and structure for maximum search visibility.',
    icon: ArrowTrendingUpIcon
  },
  {
    name: 'Smart Analytics',
    description: 'Real-time insights into your store\'s performance, traffic patterns, and conversion rates.',
    icon: ChartBarIcon
  },
  {
    name: 'Automated Optimization',
    description: 'Continuous improvements to your store\'s performance, content, and user experience.',
    icon: ShoppingCartIcon
  }
];

const painPoints = [
  {
    title: 'Poor Search Rankings',
    description: 'Your products are buried deep in search results, making it impossible for customers to find you.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Manual SEO Struggles',
    description: 'Hours spent on keyword research, content optimization, and technical SEO with minimal results.',
    icon: ClockIcon
  },
  {
    title: 'Lost Sales',
    description: 'Potential customers can\'t find your store, leading to missed opportunities and revenue loss.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Technical Complexity',
    description: 'Complex SEO tools and strategies that require expertise you don\'t have time to master.',
    icon: BuildingStorefrontIcon
  }
];

const impactStats = [
  {
    title: 'Lost Revenue',
    value: '73%',
    description: 'Lower revenue compared to optimized stores',
    icon: ChartBarIcon
  },
  {
    title: 'Market Share',
    value: '-80%',
    description: 'Less market share than competitors',
    icon: UserGroupIcon
  },
  {
    title: 'Customer Loss',
    value: '65%',
    description: 'Of potential customers never find you',
    icon: ShoppingCartIcon
  }
];

const journeySteps = [
  {
    title: 'Comprehensive Store Audit',
    description: 'We begin by thoroughly analyzing your store\'s current performance. This includes identifying technical issues, content gaps, and optimization opportunities to establish a solid foundation for improvement.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Market & Competitor Analysis',
    description: 'Understanding your market landscape is crucial. We assess your competitors\' strategies, identify industry trends, and uncover unique opportunities to position your store ahead of the competition.',
    icon: UserGroupIcon
  },
  {
    title: 'Keyword Research & Optimization',
    description: 'Our team conducts in-depth keyword research to pinpoint the most effective keywords for your products and categories. We optimize your store\'s content, including titles, descriptions, and meta tags, to enhance visibility and attract targeted traffic.',
    icon: ShoppingCartIcon
  },
  {
    title: 'Strategic Implementation',
    description: 'Leveraging the insights from our audits and research, we implement tailored optimization strategies. This includes on-page SEO enhancements, improving user experience, and ensuring your store aligns with best practices for both search engines and customers.',
    icon: BuildingStorefrontIcon
  },
  {
    title: 'AI-Powered Optimization',
    description: 'Utilizing cutting-edge AI technology, we fine-tune your store for optimal performance on traditional search engines and AI-driven platforms. This advanced optimization ensures your store remains competitive in an ever-evolving digital landscape.',
    icon: ArrowTrendingUpIcon
  },
  {
    title: 'Continuous Monitoring & Improvement',
    description: 'Success is an ongoing journey. We continuously monitor your store\'s performance using detailed analytics, making data-driven adjustments to maintain and enhance your store\'s growth. Regular performance reviews ensure that your store adapts to changing market conditions and continues to thrive.',
    icon: ChartBarIcon
  }
];

const revenueData = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 58000 },
  { month: 'Mar', value: 72000 },
  { month: 'Apr', value: 89000 },
  { month: 'May', value: 102000 },
  { month: 'Jun', value: 125000 }
];

const trafficData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1500 },
  { month: 'Mar', value: 2200 },
  { month: 'Apr', value: 2800 },
  { month: 'May', value: 3500 },
  { month: 'Jun', value: 4200 }
];

const conversionData = [
  { month: 'Jan', value: 1.2 },
  { month: 'Feb', value: 1.8 },
  { month: 'Mar', value: 2.3 },
  { month: 'Apr', value: 2.8 },
  { month: 'May', value: 3.2 },
  { month: 'Jun', value: 3.8 }
];

export default function Problem() {
  return (
    <div className="relative isolate bg-black">
      {/* Pain Points Section - Dark Background */}
      <div id="problem-section" className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            {/* SVG on the left */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start lg:order-first">
              <div className="h-[800px] w-[700px] relative">
                <Image
                  src="/static/images/seochallenges.svg"
                  alt="SEO Challenges Flow"
                  fill
                  className="object-contain"
                  style={{
                    borderRadius: '1rem',
                    clipPath: 'inset(0 round 1rem)'
                  }}
                  priority
                />
              </div>
            </div>

            {/* Content on the right */}
            <div className="lg:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-500">The Problem</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Common Shopify SEO Challenges
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Most Shopify store owners struggle with these critical issues that prevent growth and success.
                </p>
              </div>

              <dl className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {painPoints.map((point) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col bg-gray-800/50 rounded-2xl p-4 backdrop-blur-lg ring-1 ring-white/10"
                  >
                    <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                      <point.icon className="h-6 w-6 text-green-500" aria-hidden="true" />
                      {point.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{point.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Cost of Inaction Section - Black Background */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            {/* Content on the left */}
            <div className="lg:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-500">Business Impact</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  The Cost of Inaction
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Every day without optimization means lost revenue and market share. Here's what you're missing:
                </p>
              </div>

              {/* Impact Statistics */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {impactStats.map((stat) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-lg bg-gray-900 px-4 py-4"
                  >
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-green-500/5" />
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-sm font-semibold text-gray-300">
                        <stat.icon className="h-5 w-5 text-green-500" aria-hidden="true" />
                        {stat.title}
                      </dt>
                      <dd className="mt-2 text-2xl font-bold text-white">{stat.value}</dd>
                      <dd className="mt-1 text-sm text-gray-400">{stat.description}</dd>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SVG on the right */}
            <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/static/images/costofinaction.svg"
                alt="Cost of Inaction Visualization"
                width={500}
                height={400}
                className="w-full max-w-lg rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI-Powered Optimization Section */}
      <div className="bg-green-600 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/static/images/aipoweredoptimization.svg"
                alt="AI-Powered Optimization"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-200">The Solution</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  AI-Powered Optimization
                </p>
                <p className="mt-2 text-lg leading-8 text-green-100">
                  Our platform automatically solves these challenges, helping you focus on growing your business.
                </p>
              </div>
              <div className="mx-auto mt-8 max-w-2xl lg:mx-0">
                <div className="grid grid-cols-1 gap-4">
                  {solutions.map((solution) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20"
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-100">
                          <solution.icon className="h-6 w-6 text-sky-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold leading-7 text-white">{solution.name}</h3>
                          <p className="mt-1 text-sm text-green-100">{solution.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section - White Background */}
      <div id="six-steps" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-base font-semibold leading-7 text-green-600">Your Journey</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Transform Your Store
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Our proven process takes your store from struggling to thriving in just 6 steps.
            </p>
          </div>

          {/* SVG centered */}
          <div className="mb-6">
            <div className="mx-auto h-[600px] w-[800px] relative">
              <Image
                src="/static/images/6steptransform.svg"
                alt="6 Step Transformation Process"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Journey Steps */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <div key={step.title} className="flex gap-x-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-green-600">
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section - Green Background */}
      <div id="real-results" className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            {/* Image on the left */}
            <div className="w-full md:w-1/2">
              <Image
                src="/static/images/realresultsimage.svg"
                alt="Real Results Visualization"
                width={400}
                height={300}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
            {/* Text content on the right */}
            <div className="w-full md:w-1/2">
              <div className="mx-auto max-w-2xl text-center md:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-200">Proven Results</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Real Results from Real E-commerce Businesses
                </p>
                <p className="mt-4 text-lg leading-8 text-green-100">
                  See how our AI-powered SEO automation has transformed these leading e-commerce businesses with measurable, sustainable growth. Our clients have experienced:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-green-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 mr-3">
                      <span className="text-lg font-semibold text-white">1</span>
                    </span>
                    <span>Average increase of 280% in organic search traffic within 6 months</span>
                  </li>
                  <li className="flex items-center text-green-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 mr-3">
                      <span className="text-lg font-semibold text-white">2</span>
                    </span>
                    <span>Conversion rates improved by up to 165% through AI-optimized content</span>
                  </li>
                  <li className="flex items-center text-green-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 mr-3">
                      <span className="text-lg font-semibold text-white">3</span>
                    </span>
                    <span>Revenue growth of 200%+ for stores implementing our full solution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
