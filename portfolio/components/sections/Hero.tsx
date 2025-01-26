'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { 
  SiShopify, SiReact, SiNextdotjs, SiTypescript, SiPython, SiNodedotjs, 
  SiGraphql, SiDjango, SiTailwindcss, SiSass, SiWebflow, SiDocker, 
  SiKubernetes, SiTerraform, SiJenkins, SiVercel, SiAmazonwebservices, 
  SiGooglecloud, SiMicrosoftazure, SiOpenai, SiTensorflow, SiPytorch, 
  SiPandas, SiNumpy, SiScikitlearn, SiGooglesearchconsole, SiGoogleanalytics, 
  SiGoogleads, SiMeta, SiHubspot, SiJira, SiGit, SiGitlab, SiSlack, SiConfluence,
  SiWordpress, SiHotjar, SiPostman, SiRedis, SiSnowflake, SiGoogleoptimize,
  SiGoogletagmanager, SiMarketo, SiAdobe, SiJupyter, SiBigcommerce, 
  SiVisualstudiocode, SiJavascript, SiJava, SiPhp, SiRuby, SiGo, SiRust,
  SiCplusplus, SiCsharp, SiSwift, SiKotlin, SiSupabase, SiNetlify,
  SiMicrosoftteams, SiMicrosoftsharepoint, SiSalesforce, SiMixpanel,
  SiOptimizely, SiMailchimp, SiIntercom } from 'react-icons/si';
import { FaSearchDollar, FaChartLine, FaRobot, FaMapMarkerAlt, FaCode, FaBrain, 
  FaChartBar, FaShoppingCart, FaStore, FaGoogle, FaShoppingBag, FaBolt, 
  FaCloud, FaWindows } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';
import { TbSeo, TbBrandOpenai, TbChartBar, TbBolt } from 'react-icons/tb';

const categories = [
  {
    title: "SEO & Analytics",
    icon: "📈",
    gradient: "from-orange-500 to-yellow-500",
    skills: [
      { name: "SEO/AEO", icon: "gsc" },
      { name: "Google Analytics", icon: "ga" },
      { name: "Adobe Analytics", icon: "adobe" },
      { name: "SEMrush", icon: "semrush" },
      { name: "Ahrefs", icon: "ahrefs" },
      { name: "Google Ads", icon: "googleads" },
      { name: "Meta Ads", icon: "meta" },
      { name: "BrightLocal", icon: "brightlocal" },
      { name: "Surfer SEO", icon: "surfer" },
      { name: "Schema.org", icon: "schema" },
      { name: "Local SEO", icon: "localseo" },
      { name: "Rank Math", icon: "rankmath" },
      { name: "Yoast SEO", icon: "yoast" },
      { name: "A/B Testing", icon: "abtesting" },
      { name: "GTM", icon: "gtm" },
      { name: "Google Optimize", icon: "optimize" },
      { name: "Hotjar", icon: "hotjar" }
    ]
  },
  {
    title: "Programming",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Java", icon: "java" },
      { name: "PHP", icon: "php" },
      { name: "Ruby", icon: "ruby" },
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "C++", icon: "cpp" },
      { name: "C#", icon: "csharp" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "VS Code", icon: "vscode" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Django", icon: "django" },
      { name: "TailwindCSS", icon: "tailwindcss" }
    ]
  },
  {
    title: "AI/ML & Data",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "OpenAI/ChatGPT", icon: "openai" },
      { name: "Anthropic", icon: "anthropic" },
      { name: "Perplexity", icon: "perplexity" },
      { name: "Notebook LM Plus", icon: "notebook" },
      { name: "LM Studio", icon: "lmstudio" },
      { name: "Napkin.ai", icon: "napkin" },
      { name: "Bolt.new", icon: "bolt" },
      { name: "Windsurf", icon: "windsurf" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Scikit-learn", icon: "sklearn" },
      { name: "BigQuery", icon: "gcp" },
      { name: "Snowflake", icon: "snowflake" }
    ]
  },
  {
    title: "Growth & CRO",
    icon: "📊",
    gradient: "from-red-500 to-rose-500",
    skills: [
      { name: "User Analytics", icon: "useranalytics" },
      { name: "Revenue Opt", icon: "revenue" },
      { name: "Market Analysis", icon: "market" },
      { name: "Growth Hacking", icon: "growth" },
      { name: "CRO", icon: "cro" },
      { name: "Mixpanel", icon: "mixpanel" },
      { name: "Optimizely", icon: "optimizely" },
      { name: "HubSpot", icon: "hubspot" },
      { name: "Mailchimp", icon: "mailchimp" },
      { name: "Intercom", icon: "intercom" },
      { name: "Lead Gen", icon: "leadgen" },
      { name: "Funnel Opt", icon: "funnel" },
      { name: "User Research", icon: "research" },
      { name: "Heat Mapping", icon: "heatmap" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    gradient: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Shopify", icon: "shopify" },
      { name: "BigCommerce", icon: "bigcommerce" },
      { name: "Webflow", icon: "webflow" },
      { name: "WordPress", icon: "wordpress" },
      { name: "Google Profile", icon: "gmb" },
      { name: "Merchant Center", icon: "merchant" },
      { name: "Shopping Feed", icon: "shopping" },
      { name: "Teams", icon: "teams" },
      { name: "SharePoint", icon: "sharepoint" },
      { name: "Salesforce", icon: "salesforce" },
      { name: "Jira", icon: "jira" },
      { name: "Slack", icon: "slack" },
      { name: "Confluence", icon: "confluence" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Azure", icon: "azure" },
      { name: "Supabase", icon: "supabase" },
      { name: "Netlify", icon: "netlify" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "Vercel", icon: "vercel" }
    ]
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('expert');

  const codeContent = {
    expert: `interface DigitalExpert {
  name: string;
  role: string;
  expertise: Expertise;
  experience: number;
  ventures: string[];
}

const expert: DigitalExpert = {
  name: 'Brian Pyatt',
  role: 'Digital Commerce Expert',
  expertise: {
    seo: ['Technical SEO', 'AEO Strategy', 'Local SEO'],
    ecommerce: ['Shopify', 'BigCommerce', 'Webflow'],
    ai: ['LLM Integration', 'Automation', 'ML Solutions'],
    analytics: ['GA4', 'GTM', 'Data Studio']
  },
  experience: 20,
  ventures: [
    'SpotCircuit - E-commerce Optimization',
    'SpotCircuitOffers - Deal Discovery',
    'SpotAI - AI Solutions',
    'SpotAIOffers - AI-Powered Deals'
  ]
}`,
    services: `interface Services {
  seo: {
    technical: string[];
    content: string[];
  };
  ecommerce: {
    platforms: string[];
    optimization: string[];
  };
  ai: string[];
}

const services: Services = {
  seo: {
    technical: ['Core Web Vitals', 'Schema Markup', 'Site Architecture'],
    content: ['AEO Strategy', 'Content Strategy', 'AI Integration']
  },
  ecommerce: {
    platforms: ['Shopify', 'BigCommerce', 'Webflow'],
    optimization: ['CRO & UX', 'Performance', 'Analytics']
  },
  ai: ['ChatGPT Integration', 'Custom LLMs', 'Workflow Automation']
}`,
    projects: `interface Project {
  name: string;
  type: 'ecommerce' | 'ai' | 'deals';
  tech: string[];
  features: string[];
}

const projects: Project[] = [
  {
    name: 'SpotCircuit',
    type: 'ecommerce',
    tech: ['Next.js', 'Shopify', 'GA4'],
    features: ['Store Optimization', 'SEO/AEO', 'Analytics']
  },
  {
    name: 'SpotAI',
    type: 'ai',
    tech: ['Python', 'LangChain', 'OpenAI'],
    features: ['Custom LLMs', 'Automation', 'Integration']
  }
]`
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 dark:from-gray-900/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <motion.div 
          className="px-6 lg:px-0 lg:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <motion.div 
                className="relative w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-green-600/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src="/images/bpyattheadshot.jpg"
                  alt="Brian Pyatt"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="mt-4 sm:mt-8">
                <Link
                  href="https://spotcircuit.com"
                  className="inline-flex space-x-6"
                >
                  <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-600/10">
                    Founder @ SpotCircuit
                  </span>
                </Link>
              </div>
              <div className="relative isolate">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                  <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SEO/AEO & E-commerce Expert
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    With over 20 years of experience in digital transformation, I've pioneered innovative solutions in e-commerce, 
                    SEO/AEO optimization, and AI automation. As the founder of SpotCircuit and multiple successful ventures, 
                    I've helped businesses achieve exponential growth through cutting-edge technology and data-driven strategies. 
                    My expertise spans from enterprise-level e-commerce solutions to advanced AI implementations, consistently 
                    delivering exceptional results for clients across diverse industries.
                  </p>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
                </div>
              </div>
              <div className="mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl mb-8">
                  Expertise & Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-12 -mr-[200%]">
                  {categories.map((category) => (
                    <motion.div
                      key={category.title}
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-4
                        backdrop-blur-sm ring-1 ring-white/5 justify-between w-full
                        transform transition-all duration-300 hover:-translate-y-1
                        ${category.title === 'SEO & Analytics' ? 'hover:ring-blue-500/50' : 
                          category.title === 'Growth & CRO' ? 'hover:ring-purple-500/50' :
                          category.title === 'Programming' ? 'hover:ring-green-500/50' :
                          category.title === 'Tools & Platforms' ? 'hover:ring-orange-500/50' :
                          category.title === 'AI/ML & Data' ? 'hover:ring-indigo-500/50' :
                          'hover:ring-teal-500/50'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-2">
                        <h3 className={`text-lg font-semibold bg-gradient-to-r 
                          ${category.title === 'SEO & Analytics' ? 'from-blue-600 to-blue-400' :
                            category.title === 'Growth & CRO' ? 'from-purple-600 to-purple-400' :
                            category.title === 'Programming' ? 'from-green-600 to-green-400' :
                            category.title === 'Tools & Platforms' ? 'from-orange-600 to-orange-400' :
                            category.title === 'AI/ML & Data' ? 'from-indigo-600 to-indigo-400' :
                            'from-teal-600 to-teal-400'} 
                          bg-clip-text text-transparent`}>
                          {category.title}
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill) => {
                          const Icon = {
                            'shopify': SiShopify,
                            'react': SiReact,
                            'nextjs': SiNextdotjs,
                            'typescript': SiTypescript,
                            'python': SiPython,
                            'nodejs': SiNodedotjs,
                            'graphql': SiGraphql,
                            'django': SiDjango,
                            'tailwindcss': SiTailwindcss,
                            'sass': SiSass,
                            'webflow': SiWebflow,
                            'docker': SiDocker,
                            'kubernetes': SiKubernetes,
                            'terraform': SiTerraform,
                            'jenkins': SiJenkins,
                            'vercel': SiVercel,
                            'aws': SiAmazonwebservices,
                            'gcp': SiGooglecloud,
                            'azure': TbBolt,
                            'openai': SiOpenai,
                            'tensorflow': SiTensorflow,
                            'pytorch': SiPytorch,
                            'pandas': SiPandas,
                            'numpy': SiNumpy,
                            'sklearn': SiScikitlearn,
                            'gsc': SiGooglesearchconsole,
                            'ga': SiGoogleanalytics,
                            'googleads': SiGoogleads,
                            'meta': SiMeta,
                            'hubspot': SiHubspot,
                            'jira': SiJira,
                            'git': SiGit,
                            'gitlab': SiGitlab,
                            'slack': SiSlack,
                            'confluence': SiConfluence,
                            'wordpress': SiWordpress,
                            'hotjar': SiHotjar,
                            'postman': SiPostman,
                            'redis': SiRedis,
                            'snowflake': SiSnowflake,
                            'semrush': FaSearchDollar,
                            'ahrefs': FaChartLine,
                            'brightlocal': FaMapMarkerAlt,
                            'surfer': TbSeo,
                            'schema': FaCode,
                            'localseo': FaMapMarkerAlt,
                            'abtesting': BiTestTube,
                            'useranalytics': SiGoogleanalytics,
                            'revenue': FaChartLine,
                            'market': FaSearchDollar,
                            'growth': FaChartLine,
                            'cro': TbChartBar,
                            'optimize': TbChartBar,
                            'gtm': SiGoogletagmanager,
                            'marketing': SiMarketo,
                            'adobe': SiAdobe,
                            'anthropic': FaBrain,
                            'perplexity': FaRobot,
                            'notebook': SiJupyter,
                            'lmstudio': TbBrandOpenai,
                            'napkin': FaChartBar,
                            'bigcommerce': SiBigcommerce,
                            'gmb': FaGoogle,
                            'merchant': FaShoppingBag,
                            'shopping': FaShoppingCart,
                            'vscode': SiVisualstudiocode,
                            'javascript': SiJavascript,
                            'java': SiJava,
                            'php': SiPhp,
                            'ruby': SiRuby,
                            'go': SiGo,
                            'rust': SiRust,
                            'cpp': SiCplusplus,
                            'csharp': SiCsharp,
                            'swift': SiSwift,
                            'kotlin': SiKotlin,
                            'supabase': SiSupabase,
                            'netlify': SiNetlify,
                            'teams': SiMicrosoftteams,
                            'sharepoint': SiMicrosoftsharepoint,
                            'bolt': TbBolt,
                            'windsurf': FaWindows,
                            'salesforce': SiSalesforce,
                            'mixpanel': SiMixpanel,
                            'optimizely': SiOptimizely,
                            'mailchimp': SiMailchimp,
                            'intercom': SiIntercom,
                            'rankmath': SiWordpress,
                            'yoast': SiWordpress,
                            'leadgen': FaChartLine,
                            'funnel': FaChartBar,
                            'research': FaSearchDollar,
                            'heatmap': SiHotjar,
                          }[skill.icon];
                          
                          return (
                            <motion.div
                              key={skill.name}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 
                                hover:bg-white dark:hover:bg-gray-800 ring-1 ring-white/10
                                transform transition-all duration-200"
                            >
                              {Icon && <Icon className="text-lg text-gray-600 dark:text-gray-300" />}
                              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {skill.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#contact"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get in touch
                </Link>
                <Link
                  href="#resume"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                >
                  View Resume <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="mt-16 sm:mt-24 md:mx-0 md:max-w-none lg:mx-0 lg:mt-0 lg:w-screen xl:w-[153%]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[170%] skew-x-[-30deg] bg-white dark:bg-gray-800 shadow-xl shadow-green-600/10 ring-1 ring-green-50 dark:ring-green-900 md:-mr-20 lg:-mr-36" aria-hidden="true" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="absolute inset-y-0 left-1/2 -z-10 ml-10 w-[170%] skew-x-[-30deg] bg-green-100 dark:bg-green-800 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
              <div className="relative px-6 pt-4 sm:pt-8 md:pl-16">
                <div className="mx-0 max-w-none">
                  <div className="relative mb-2">
                    <div className="flex items-center justify-end gap-6 opacity-60 pr-0">
                      <SiShopify className="w-10 h-10 text-[#95BF47] hover:opacity-100 transition-opacity" />
                      <SiNextdotjs className="w-10 h-10 text-white hover:opacity-100 transition-opacity" />
                      <SiPython className="w-10 h-10 text-[#3776AB] hover:opacity-100 transition-opacity" />
                      <SiOpenai className="w-10 h-10 text-white hover:opacity-100 transition-opacity" />
                      <SiBigcommerce className="w-10 h-10 text-white hover:opacity-100 transition-opacity" />
                      <SiTypescript className="w-10 h-10 text-[#3178C6] hover:opacity-100 transition-opacity" />
                      <SiReact className="w-10 h-10 text-[#61DAFB] hover:opacity-100 transition-opacity" />
                      <SiGoogleanalytics className="w-10 h-10 text-[#E37400] hover:opacity-100 transition-opacity" />
                      <SiVercel className="w-10 h-10 text-white hover:opacity-100 transition-opacity" />
                      <SiAmazonwebservices className="w-12 h-12 text-[#FF9900] hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="w-[153%] overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-20 py-4">
                      </div>
                      <div className="relative">
                        <div className="flex overflow-hidden bg-gray-900 dark:bg-gray-800">
                          <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400 justify-between w-full">
                            <div className="flex">
                              <button
                                onClick={() => setActiveTab('expert')}
                                className={`px-4 py-2 ${activeTab === 'expert' ? 'border-b border-r border-b-white/20 border-r-white/10 bg-white/5 text-white' : 'border-r border-gray-600/10'}`}
                              >
                                digital-expert.ts
                              </button>
                              <button
                                onClick={() => setActiveTab('services')}
                                className={`px-4 py-2 ${activeTab === 'services' ? 'border-b border-r border-b-white/20 border-r-white/10 bg-white/5 text-white' : 'border-r border-gray-600/10'}`}
                              >
                                services.ts
                              </button>
                              <button
                                onClick={() => setActiveTab('projects')}
                                className={`px-4 py-2 ${activeTab === 'projects' ? 'border-b border-r border-b-white/20 border-r-white/10 bg-white/5 text-white' : 'border-r border-gray-600/10'}`}
                              >
                                projects.ts
                              </button>
                            </div>
                            <div className="flex items-center px-4 py-2 gap-2">
                            </div>
                          </div>
                        </div>
                        <div className="px-6 pb-8 pt-6 pr-0">
                          <pre className="text-[15px] leading-6 text-gray-300 w-[153%]">
                            <code>
                              {codeContent[activeTab]}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
