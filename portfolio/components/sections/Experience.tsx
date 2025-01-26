'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    company: 'SpotCircuit',
    title: 'Co-Founder & Technical Lead',
    period: 'Dec 2018 - Present',
    location: 'Ashburn, VA · Hybrid',
    description: 'Leading an innovative AI-powered digital agency that transforms e-commerce businesses through intelligent automation and data-driven optimization.',
    achievements: [
      'Engineered AI-powered product recommendation systems, significantly improving customer engagement',
      'Achieved 40% ROI increase for e-commerce clients through AI-optimized advertising',
      'Generated $30,000+ cost savings for MrMaple.com through shipping optimization',
      'Delivered 50% organic traffic growth across multiple Shopify stores using advanced SEO'
    ]
  },
  {
    company: 'StarCity Games',
    title: 'Digital Marketing & SEO Strategist',
    period: '2019 - 2020',
    location: 'Remote',
    description: 'Led comprehensive digital marketing and SEO strategies for a major e-commerce platform.',
    achievements: [
      'Spearheaded SEO strategy driving 25% improvement in search rankings',
      'Revolutionized PPC performance with 15% ROI increase and 20% conversion growth',
      'Pioneered AI-powered marketing analytics system for real-time campaign optimization',
      'Implemented automated reporting systems for continuous performance improvement'
    ]
  },
  {
    company: 'BnB Enterprise',
    title: 'Co-Founder & Technical Operations Lead',
    period: '2015 - 2018',
    location: 'Ashburn, VA',
    description: 'Led technical strategy and cross-functional operations, scaling revenue to $15M annually through innovative digital solutions.',
    achievements: [
      'Scaled operations from startup to $15M annual revenue through technical innovation',
      'Achieved 35% growth in organic traffic and conversions in a regulated market',
      'Delivered 20% improvement in PPC conversion rates while optimizing costs',
      'Established market leadership through technical SEO and content frameworks'
    ]
  },
  {
    company: 'Dynology Corporation',
    title: 'Senior Web Application Manager & Developer',
    period: '2006 - 2009',
    location: "Tyson's Corner, VA",
    description: 'Led enterprise application development for government and commercial clients, managing a team of developers.',
    achievements: [
      'Architected SharePoint intranet platform for 2008 presidential campaign',
      'Developed custom solutions for U.S. Special Operations Command',
      'Led implementation of secure healthcare applications for military provider',
      'Established development standards for enterprise-level applications'
    ]
  },
  {
    company: 'Verizon',
    title: 'Web Application Developer',
    period: '2004 - 2006',
    location: 'Arlington, VA',
    description: 'Led development of enterprise-level telecommunications data applications and analytics solutions.',
    achievements: [
      'Architected ASP.NET applications for telecommunications data logging',
      'Designed SQL Server solutions integrating multiple data sources',
      'Created advanced data visualization tools for stakeholder communication',
      'Reduced report generation time by 60% through automation'
    ]
  }
];

export default function Experience() {
  // Split experience array into two columns
  const midpoint = Math.ceil(experience.length / 2);
  const column1 = experience.slice(0, midpoint);
  const column2 = experience.slice(midpoint);

  return (
    <section id="experience" className="relative isolate overflow-hidden bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto">
        <motion.div
          className="mx-auto lg:mx-0 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            Over 20 years of experience in technical leadership and digital innovation. Started as a web developer at Verizon, 
            progressed through enterprise development at Dynology Corporation, and evolved into a successful entrepreneur. 
            Founded multiple ventures including SpotCircuit and SpotAI, specializing in e-commerce automation and AI-driven solutions. 
            Proven track record of building and scaling technology companies, with expertise spanning government, enterprise, and e-commerce sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
          {/* Column 1 */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {column1.map((role, roleIndex) => (
              <motion.div
                key={role.company}
                className="relative rounded-2xl bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 ring-1 ring-gray-900/10 dark:ring-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: roleIndex * 0.1 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {role.company}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {role.period}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                    <div className="text-base sm:text-lg font-medium text-green-600 dark:text-green-400">
                      {role.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {role.location}
                    </div>
                  </div>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {role.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className="flex items-start"
                      >
                        <span className="flex-shrink-0 h-6 flex items-center">
                          <span className="relative flex h-2 w-2 mr-3 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                        </span>
                        <span className="text-base text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {column2.map((role, roleIndex) => (
              <motion.div
                key={role.company}
                className="relative rounded-2xl bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 ring-1 ring-gray-900/10 dark:ring-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: roleIndex * 0.1 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {role.company}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {role.period}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                    <div className="text-base sm:text-lg font-medium text-green-600 dark:text-green-400">
                      {role.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {role.location}
                    </div>
                  </div>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {role.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className="flex items-start"
                      >
                        <span className="flex-shrink-0 h-6 flex items-center">
                          <span className="relative flex h-2 w-2 mr-3 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                        </span>
                        <span className="text-base text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
