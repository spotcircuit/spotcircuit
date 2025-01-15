import Image from 'next/image';
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  CursorArrowRaysIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  ChartPieIcon,
  ArrowPathIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';

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
  { month: 'Apr', value: 2.9 },
  { month: 'May', value: 3.4 },
  { month: 'Jun', value: 3.8 }
];

const revenueData = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 58000 },
  { month: 'Mar', value: 72000 },
  { month: 'Apr', value: 89000 },
  { month: 'May', value: 102000 },
  { month: 'Jun', value: 125000 }
];

const journeySteps = [
  {
    title: 'Comprehensive Store Audit',
    description: 'Deep analysis of your store\'s current SEO performance, technical health, and content strategy.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Market & Competitor Analysis',
    description: 'Research into your market position, competitor strategies, and opportunities for growth.',
    icon: ChartPieIcon
  },
  {
    title: 'Keyword Research & Optimization',
    description: 'Strategic keyword targeting based on search volume, competition, and buyer intent.',
    icon: DocumentTextIcon
  },
  {
    title: 'Strategic Implementation',
    description: 'Execution of optimizations across technical SEO, content, and site structure.',
    icon: BoltIcon
  },
  {
    title: 'AI-Powered Optimization',
    description: 'Continuous optimization using machine learning for maximum performance.',
    icon: RocketLaunchIcon
  },
  {
    title: 'Continuous Monitoring',
    description: 'Real-time tracking of rankings, traffic, and conversions with proactive adjustments.',
    icon: ArrowPathIcon
  }
];

const performanceMetrics = {
  overview: [
    { name: 'Organic Traffic', value: '4,200', change: '+320%', icon: GlobeAltIcon },
    { name: 'Conversion Rate', value: '3.8%', change: '+216%', icon: ArrowTrendingUpIcon },
    { name: 'Revenue', value: '$125K', change: '+177%', icon: BanknotesIcon },
    { name: 'Average Order Value', value: '$85', change: '+45%', icon: ShoppingCartIcon }
  ],
  trafficSources: [
    { name: 'Organic Search', value: 65 },
    { name: 'Direct', value: 15 },
    { name: 'Referral', value: 12 },
    { name: 'Social', value: 8 }
  ],
  keywordRankings: [
    { position: '1-3', count: 28, change: '+12' },
    { position: '4-10', count: 45, change: '+18' },
    { position: '11-20', count: 67, change: '+24' },
    { position: '21-50', count: 112, change: '+35' }
  ],
  monthlyTrends: [
    { month: 'Jan', traffic: 1000, conversions: 12, revenue: 45000 },
    { month: 'Feb', traffic: 1500, conversions: 18, revenue: 58000 },
    { month: 'Mar', traffic: 2200, conversions: 23, revenue: 72000 },
    { month: 'Apr', traffic: 2800, conversions: 29, revenue: 89000 },
    { month: 'May', traffic: 3500, conversions: 34, revenue: 102000 },
    { month: 'Jun', traffic: 4200, conversions: 38, revenue: 125000 }
  ],
  competitorComparison: [
    { metric: 'Traffic Growth', us: 320, competitor1: 180, competitor2: 150 },
    { metric: 'Conversion Rate', us: 3.8, competitor1: 2.1, competitor2: 1.8 },
    { metric: 'Revenue Growth', us: 177, competitor1: 95, competitor2: 82 }
  ]
};

const caseStudies = [
  {
    name: 'Star City Games',
    description: 'Leading trading card game retailer achieved 312% increase in organic traffic and 189% boost in e-commerce conversions through our AI-driven SEO strategy.',
    image: '/static/images/starcitygames.jpg',
    challenge: 'Faced intense competition in the trading card market with declining organic visibility and stagnating conversion rates.',
    solution: 'Implemented AI-driven keyword optimization, enhanced product categorization, and automated content generation for card listings.',
    stats: [
      { name: 'Organic Traffic Growth', value: '312%' },
      { name: 'Conversion Rate', value: '189%' },
      { name: 'Revenue Increase', value: '245%' },
    ],
  },
  {
    name: 'Mr. Maple',
    description: 'Specialty plant retailer saw 256% growth in qualified leads and 178% increase in organic search visibility after implementing our AI automation.',
    image: '/static/images/mrmaple.jpg',
    challenge: 'Struggled with seasonal traffic fluctuations and needed to improve product visibility for rare plant varieties.',
    solution: 'Developed dynamic seasonal SEO strategies and implemented structured data for enhanced plant catalog visibility.',
    stats: [
      { name: 'Lead Generation', value: '256%' },
      { name: 'Search Visibility', value: '178%' },
      { name: 'Customer Engagement', value: '203%' },
    ],
  },
  {
    name: 'BNB Tobacco',
    description: 'Premium tobacco retailer experienced 290% increase in organic rankings and 225% improvement in conversion rates through our optimization strategy.',
    image: '/static/images/bnbtobacco.jpg',
    challenge: 'Required compliance-aware SEO strategy while improving visibility in a highly regulated market.',
    solution: 'Created compliant content automation and implemented geo-targeting for regional market optimization.',
    stats: [
      { name: 'Organic Rankings', value: '290%' },
      { name: 'Conversion Rate', value: '225%' },
      { name: 'Average Order Value', value: '167%' },
    ],
  },
  {
    name: 'The Fix Clinic',
    description: 'Healthcare provider achieved 245% increase in appointment bookings and 190% improvement in local search visibility.',
    image: '/static/images/fixclinic.jpg',
    challenge: 'Needed to improve local visibility and convert more searches into appointment bookings.',
    solution: 'Implemented local SEO automation and appointment funnel optimization with AI-driven content.',
    stats: [
      { name: 'Local Rankings', value: '245%' },
      { name: 'Appointment Bookings', value: '190%' },
      { name: 'Patient Retention', value: '178%' },
    ],
  }
];

export default function Results() {
  return (
    <>
      {/* Performance Dashboard */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Live Performance Dashboard
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real-time insights into your store's performance metrics
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {performanceMetrics.overview.map((metric) => (
              <div key={metric.name} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                    <div className="flex items-baseline gap-x-2">
                      <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                      <span className="text-sm font-medium text-green-600">{metric.change}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Traffic Sources */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold mb-6">Traffic Sources</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceMetrics.trafficSources}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
                    <XAxis dataKey="name" stroke="#475569" />
                    <YAxis stroke="#475569" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#22C55E" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly Trends */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold mb-6">Monthly Performance Trends</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceMetrics.monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
                    <XAxis dataKey="month" stroke="#475569" />
                    <YAxis stroke="#475569" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="traffic" name="Traffic" stroke="#22C55E" />
                    <Line type="monotone" dataKey="conversions" name="Conversions" stroke="#3B82F6" />
                    <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#6366F1" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Keyword Rankings */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-12">
            <h3 className="text-lg font-semibold mb-6">Keyword Position Distribution</h3>
            <div className="grid grid-cols-4 gap-4">
              {performanceMetrics.keywordRankings.map((rank) => (
                <div key={rank.position} className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600">Position {rank.position}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">{rank.count}</p>
                    <p className="text-sm font-medium text-green-600">{rank.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitor Comparison */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold mb-6">Competitive Analysis</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceMetrics.competitorComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
                  <XAxis dataKey="metric" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="us" name="Our Store" fill="#22C55E" />
                  <Bar dataKey="competitor1" name="Competitor 1" fill="#3B82F6" />
                  <Bar dataKey="competitor2" name="Competitor 2" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Steps Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Journey to SEO Success
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We follow a proven methodology to transform your store's performance through our AI-powered SEO solutions.
            </p>
          </div>

          {/* Journey Steps in Light Blue Boxes */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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

      {/* Case Studies */}
      <div className="bg-white py-24">
        <div id="case-studies" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how we've helped businesses achieve remarkable growth through our AI-powered SEO solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
                  <Image
                    src={study.image}
                    alt={study.name}
                    width={800}
                    height={400}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    {study.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {study.description}
                  </p>

                  {/* Challenge and Solution */}
                  <div className="mt-6 space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-blue-800">Challenge</h4>
                      <p className="mt-2 text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-green-800">Solution</h4>
                      <p className="mt-2 text-sm text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <dl className="mt-8 grid grid-cols-3 gap-4">
                    {study.stats.map((item) => (
                      <div key={item.name} className="border-l-2 border-green-500 pl-4">
                        <dt className="text-sm font-medium leading-6 text-gray-600">{item.name}</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-green-600">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
