import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import FaqAccordion from '@/components/FaqAccordion';
import { FaBrain, FaDollarSign, FaBullseye, FaMagic, FaRobot, FaShieldAlt, FaHome, FaHardHat, FaCar, FaStore, FaCogs, FaTrophy, FaPercentage, FaQuoteLeft, FaRocket } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineChartBar, HiOutlineTrendingUp } from 'react-icons/hi';
import { HiOutlineMapPin, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <> {/* Top-level fragment */}
      <Header /> {/* Render Header */}
      {/* Header Image Section */}
      <Image
        src="/static/images/headerimage.png"
        alt="SpotCircuit header image"
        width={1920}
        height={150}
        className="w-full"
        unoptimized
      />
      <main className="pt-0"> {/* Revert to pt-0 */}
        {/* Section A: Hero - AI-Powered Automation & Intelligent SEO */}
        <section className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Enhanced Icon */}
            <div className="icon-container mb-6 glow-effect">
               <FaBrain className="text-2xl text-white" />
            </div>
            <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              AI-Powered Automation &amp; Intelligent SEO
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop guessing, start growing. We combine cutting-edge AI with expert SEO strategies to automate your marketing, attract qualified leads, and dominate your local market.
            </p>
            <Link href="/contact">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                Get Your Free Growth Plan
              </span>
            </Link>
          </div>
        </section>

        {/* Section B: Problem - The Service Business Struggle */}
        <section className="py-16 md:py-24 bg-black relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tired of Marketing That <span className="gradient-text">Doesn't Deliver?</span></h2>
            <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
              Service businesses face unique challenges: inconsistent leads, wasted ad spend, and the constant pressure to find new customers while managing daily operations.
            </p>
            <div className="staggered-grid">
              {/* Pain Point 1 */}
              <div className="modern-card transform transition-transform duration-300 hover:-translate-y-2">
                <div className="icon-container mb-4">
                  <HiOutlineClock className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Inconsistent Lead Flow</h3>
                <p className="text-gray-300">Feast or famine? Struggling to predict where your next job is coming from, making business planning nearly impossible.</p>
              </div>
              {/* Pain Point 2 */}
              <div className="modern-card transform transition-transform duration-300 hover:-translate-y-2">
                <div className="icon-container mb-4">
                  <FaDollarSign className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Wasted Marketing Spend</h3>
                <p className="text-gray-300">Pouring money into ads or SEO with little to no measurable return, watching your budget disappear with minimal results.</p>
              </div>
              {/* Pain Point 3 */}
              <div className="modern-card transform transition-transform duration-300 hover:-translate-y-2">
                <div className="icon-container mb-4">
                  <FaBullseye className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Difficulty Standing Out</h3>
                <p className="text-gray-300">Competing in a crowded local market against established players who seem to dominate search results and customer attention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Solution - Intelligent Automation & SEO */}
        <section className="py-20 md:py-32 gradient-bg-purple relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="icon-container mb-6 glow-effect mx-auto">
                <FaMagic className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The <span className="gradient-text">Smarter Way</span> to Grow Your Service Business</h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Our AI-driven platform analyzes your market, automates tedious tasks, and optimizes your online presence to attract high-intent customers actively searching for your services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Enhanced image with glass effect */}
                <div className="glass-effect p-4 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <Image
                    src="/static/images/ai-analyzing-data.png"
                    alt="AI analyzing data visualization"
                    className="w-full rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">Key Capabilities:</h3>
                <ul className="space-y-8">
                  <li className="modern-bullet">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Hyper-Local SEO Targeting</h4>
                      <p className="text-purple-100">Dominate search results in your specific service areas with precision targeting that puts you in front of customers ready to buy.</p>
                    </div>
                  </li>
                  <li className="modern-bullet">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">AI Content &amp; Ad Automation</h4>
                      <p className="text-purple-100">Create high-performing content and ads effortlessly with our AI that learns what works for your specific audience and service area.</p>
                    </div>
                  </li>
                  <li className="modern-bullet">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Predictive Lead Scoring</h4>
                      <p className="text-purple-100">Focus your efforts on the leads most likely to convert using our advanced algorithms that analyze behavior patterns and intent signals.</p>
                    </div>
                  </li>
                  <li className="modern-bullet">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Automated Reputation Management</h4>
                      <p className="text-purple-100">Build trust and attract more reviews easily with our streamlined system that helps you collect and showcase customer testimonials.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: Specialization - Built for Service Businesses */}
        <section className="py-20 md:py-32 gradient-bg-dark relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="icon-container mb-6 glow-effect mx-auto">
              <HiOutlineWrenchScrewdriver className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Designed <span className="gradient-text">Specifically</span> for Service Professionals</h2>
            <p className="text-xl text-blue-100 mb-16 max-w-3xl mx-auto leading-relaxed">
              We understand the unique needs of home service providers, contractors, and local service businesses. Our platform is tailored to your industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Focus Area 1 */}
              <div className="modern-card group transform transition-all duration-300 hover:-translate-y-2">
                <div className="icon-container mb-6 mx-auto">
                  <FaHome className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-white">Home Services</h4>
                <p className="text-gray-300 mb-4">(HVAC, Plumbing, Electrical, Roofing)</p>
                <Link href="/hvac" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Focus Area 2 */}
              <div className="modern-card group transform transition-all duration-300 hover:-translate-y-2">
                <div className="icon-container mb-6 mx-auto">
                  <FaHardHat className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-white">Contractors</h4>
                <p className="text-gray-300 mb-4">(Remodeling, Landscaping, Painting)</p>
                <Link href="/contractors" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Focus Area 3 */}
              <div className="modern-card group transform transition-all duration-300 hover:-translate-y-2">
                <div className="icon-container mb-6 mx-auto">
                  <FaCar className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-white">Automotive Services</h4>
                <p className="text-gray-300 mb-4">(Repair Shops, Detailers)</p>
                <Link href="/automotive" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Focus Area 4 */}
              <div className="modern-card group transform transition-all duration-300 hover:-translate-y-2">
                <div className="icon-container mb-6 mx-auto">
                  <FaStore className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-white">Other Local Services</h4>
                <p className="text-gray-300 mb-4">(Cleaners, Pet Care, etc.)</p>
                <Link href="/local-services" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Process - How It Works */}
        <section className="py-20 md:py-32 gradient-bg-blue relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="icon-container mb-6 glow-effect mx-auto">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Path to <span className="gradient-text">Automated Growth</span></h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Our streamlined process gets you from setup to seeing results quickly and efficiently.
              </p>
            </div>
            
            {/* Modern process steps with animated numbers */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Step 1 */}
                <div className="modern-card group relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Discovery &amp; Strategy</h3>
                  <p className="text-blue-100">We analyze your business, market, and goals to create a custom AI-powered SEO strategy tailored to your specific service area.</p>
                </div>
                
                {/* Step 2 */}
                <div className="modern-card group relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">AI Platform Setup</h3>
                  <p className="text-blue-100">We configure our intelligent platform, integrating automation for content, ads, and lead management specific to your business needs.</p>
                </div>
                
                {/* Step 3 */}
                <div className="modern-card group relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Launch &amp; Optimization</h3>
                  <p className="text-blue-100">Your campaigns go live. Our AI continuously learns and optimizes for maximum performance, adjusting to market changes in real-time.</p>
                </div>
                
                {/* Step 4 */}
                <div className="modern-card group relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Reporting &amp; Scaling</h3>
                  <p className="text-blue-100">Track your ROI with clear dashboards and scale your success with data-driven insights that show exactly where your growth is coming from.</p>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <Link href="/process">
                  <span className="glass-effect hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-xl inline-flex items-center transition duration-300 transform hover:-translate-y-1">
                    See Our Full Process
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section F: Credibility/Proof - Results &amp; Trust */}
        <section className="py-20 md:py-32 gradient-bg-dark relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="icon-container mb-6 glow-effect mx-auto">
                <FaTrophy className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Proven Results, <span className="gradient-text">Trusted Partner</span></h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Don't just take our word for it. See how we've helped businesses like yours achieve significant growth.
              </p>
            </div>
            <div className="staggered-grid">
              {/* Credibility Point 1: Case Study Snippet */}
              <div className="modern-card group">
                <div className="icon-container mb-6 mx-auto">
                  <HiOutlineTrendingUp className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">5X Lead Increase</h3>
                <p className="text-gray-300 mb-6 text-lg">"Our phones started ringing off the hook within weeks. The ROI was immediate and substantial." - Local HVAC Co.</p>
                <Link href="/case-studies/hvac-success" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center">
                    Read Case Study
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Credibility Point 2: Statistic */}
              <div className="modern-card group">
                <div className="icon-container mb-6 mx-auto">
                  <FaPercentage className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">30% Reduction in Ad Spend</h3>
                <p className="text-gray-300 mb-6 text-lg">AI optimization focused budget on high-converting keywords, saving thousands while increasing quality leads.</p>
                <Link href="/results" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center">
                    See More Results
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Credibility Point 3: Testimonial Snippet */}
              <div className="modern-card group">
                <div className="icon-container mb-6 mx-auto">
                  <FaQuoteLeft className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">"Finally, SEO That Works!"</h3>
                <p className="text-gray-300 mb-6 text-lg">"SpotCircuit delivered where others failed. Transparent, effective, and worth every penny." - Plumbing Experts Inc.</p>
                <Link href="/testimonials" className="inline-block">
                  <span className="text-blue-300 hover:text-blue-100 font-medium group-hover:underline transition-all duration-300 flex items-center">
                    More Testimonials
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section G: Final CTA */}
        <section className="py-24 md:py-36 gradient-bg-sunset relative overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="icon-container mb-8 glow-effect mx-auto">
              <FaRocket className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
              Ready to <span className="gradient-text">Automate Your Growth</span>?
            </h2>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a personalized demo and a free growth plan tailored to your service business. See how our AI-powered SEO can transform your lead generation.
            </p>
            <Link href="/contact">
              <span className="glass-effect hover:bg-white/20 text-white font-bold py-5 px-12 rounded-xl transition duration-300 text-xl inline-block transform hover:-translate-y-2 hover:shadow-glow">
                Request Your Free Plan &amp; Demo
              </span>
            </Link>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </section>

         {/* Section H: (Optional/Implied) Footer/Links - Handled below */}
        
        {/* FAQ Section */}
        <FaqAccordion 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about SpotCircuit and our AI-powered solutions."
          faqs={[
            {
              question: "What makes SpotCircuit different from other digital marketing agencies?",
              answer: "SpotCircuit is unique in our AI-first approach to digital marketing and business optimization. Unlike traditional agencies that apply generic strategies, we build custom AI systems tailored to your specific business needs, focusing on measurable outcomes and ROI rather than vanity metrics."
            },
            {
              question: "How long does it take to see results from your services?",
              answer: "While every business is different, most clients begin seeing measurable improvements within 30-60 days. Our AI systems continuously learn and optimize, so results typically accelerate over time. We provide transparent reporting so you can track progress from day one."
            },
            {
              question: "Do I need technical knowledge to work with SpotCircuit?",
              answer: "Not at all. We handle all the technical aspects of implementation and provide user-friendly dashboards and reports. Our team works closely with you to ensure you understand the strategies and results without needing to dive into technical details."
            },
            {
              question: "How do you price your services?",
              answer: "We offer flexible pricing models based on your business size and specific needs. After an initial consultation, we'll provide a customized quote that aligns with your budget and expected ROI. We believe in transparent pricing with no hidden fees."
            },
            {
              question: "Can you integrate with my existing software and tools?",
              answer: "Yes, our solutions are designed to integrate seamlessly with your existing tech stack. Whether you're using CRMs, marketing automation tools, or industry-specific software, we can connect with them to enhance functionality rather than replace what's working."
            },
            {
              question: "What industries do you specialize in?",
              answer: "While we have expertise across many sectors, we specialize in home service businesses including roofing, HVAC, plumbing, electrical, pest control, landscaping, and similar trades. Our solutions are particularly effective for businesses that rely on local lead generation and field service operations."
            },
            {
              question: "How do you measure success and ROI?",
              answer: "We establish clear KPIs at the beginning of our engagement based on your business goals. Typical metrics include lead quality and quantity, customer acquisition cost, conversion rates, and revenue growth. Our reporting dashboards provide full transparency into these metrics."
            },
            {
              question: "What support do you provide after implementation?",
              answer: "We offer ongoing support including regular check-ins, performance monitoring, troubleshooting, and system updates. Our team is available via email, phone, and chat to address any questions or concerns that arise."
            },
            {
              question: "How is AI used in your solutions?",
              answer: "We leverage AI across all aspects of our services, from predictive analytics for lead generation to automated workflow optimization. Our AI systems analyze vast amounts of data to identify patterns and opportunities that humans might miss, enabling more precise targeting and efficient operations."
            },
            {
              question: "What is the process for getting started with SpotCircuit?",
              answer: "Getting started is simple: <ol><li>Schedule a free consultation through our website</li><li>We'll conduct a comprehensive analysis of your current situation</li><li>Our team will develop a customized strategy and proposal</li><li>Once approved, we begin implementation with regular updates</li><li>We continuously monitor, optimize, and scale based on results</li></ol>"
            }
          ]}
        />
      </main>
      <Footer /> {/* Render Footer */}
    </>
  );
};

export default HomePage;
