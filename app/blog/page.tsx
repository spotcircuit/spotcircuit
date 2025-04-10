import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export const revalidate = 60;

export default function BlogPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="pt-24">
                {/* Featured Post Header */}
                <div className="relative w-full h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
                    <div 
                        className="absolute inset-0 bg-cover bg-center z-0" 
                        style={{ backgroundImage: "url('/static/images/ai-analyzing-data.png')" }}
                    ></div>
                    <div className="container mx-auto px-4 h-full flex items-center relative z-20">
                        <div className="max-w-3xl">
                            <div className="flex items-center space-x-2 text-blue-300 mb-4">
                                <FaTag className="h-4 w-4" />
                                <span className="text-sm font-medium">AI Strategy</span>
                                <span className="text-sm font-medium">•</span>
                                <span className="text-sm font-medium">Service Business</span>
                                <span className="text-sm font-medium">•</span>
                                <span className="text-sm font-medium">Automation</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                How AI is Transforming Service Businesses: A Strategic Guide for 2025
                            </h1>
                            <div className="flex items-center text-blue-200 text-sm">
                                <div className="flex items-center mr-6">
                                    <FaCalendarAlt className="mr-2" />
                                    <span>{currentDate}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="mr-2" />
                                    <span>8 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <article className="prose prose-invert prose-lg max-w-none">
                                <p className="text-xl text-blue-300 font-medium mb-8">
                                    In today's rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it's a present-day competitive advantage that's reshaping how service businesses operate, market, and deliver value to their customers.
                                </p>

                                <h2>The AI Revolution in Service Industries</h2>
                                <p>
                                    Service businesses—from plumbing and HVAC to legal and financial services—are discovering that AI isn't just for tech giants. Small and medium-sized service providers are leveraging AI to streamline operations, enhance customer experiences, and drive growth in ways that were previously unimaginable.
                                </p>

                                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl my-8 border-l-4 border-blue-500">
                                    <p className="text-xl italic text-blue-100 m-0">
                                        "AI has completely transformed how we schedule and dispatch our technicians. What used to take hours of manual work is now automated, saving us over 20 hours per week and improving our response times by 35%." — Sarah Johnson, Operations Manager at Premier Plumbing Services
                                    </p>
                                </div>

                                <h2>Key AI Applications for Service Businesses</h2>

                                <h3>1. Intelligent Lead Generation and Qualification</h3>
                                <p>
                                    AI-powered tools can now analyze vast amounts of data to identify potential customers who are most likely to need your services. These systems go beyond basic demographic targeting to consider behavioral patterns, service history, and even predictive maintenance schedules.
                                </p>
                                <p>
                                    For example, HVAC companies can use AI to predict when homeowners might need system replacements based on the age of their homes, previous service records, and seasonal patterns. This allows for precisely timed marketing campaigns that arrive exactly when customers are most receptive.
                                </p>

                                <h3>2. Automated Customer Interactions</h3>
                                <p>
                                    Modern AI chatbots and virtual assistants have evolved far beyond simple scripted responses. Today's conversational AI can handle complex scheduling, provide detailed service information, and even help troubleshoot common issues before a technician is dispatched.
                                </p>
                                <p>
                                    These systems work 24/7, ensuring that customer inquiries never go unanswered, even outside business hours—a critical advantage in emergency service industries where immediate response can be the difference between winning and losing a customer.
                                </p>

                                <h3>3. Optimized Pricing and Estimating</h3>
                                <p>
                                    One of the most challenging aspects of service businesses is providing accurate estimates. AI systems can analyze thousands of previous jobs, current material costs, labor requirements, and even competitor pricing to generate estimates that maximize both competitiveness and profitability.
                                </p>
                                <p>
                                    These systems learn over time, becoming increasingly accurate as they process more data from your specific business operations.
                                </p>

                                <h3>4. Predictive Maintenance and Service Scheduling</h3>
                                <p>
                                    Rather than waiting for customers to call with problems, AI enables service businesses to proactively reach out when systems are likely to need maintenance. By analyzing patterns from IoT sensors, weather data, usage statistics, and historical service records, AI can predict when equipment is likely to fail.
                                </p>
                                <p>
                                    This approach not only creates additional service opportunities but also significantly enhances customer satisfaction by preventing unexpected breakdowns.
                                </p>

                                <h2>Implementing AI in Your Service Business: A Strategic Approach</h2>

                                <p>
                                    While the benefits of AI are clear, implementation requires careful planning. Here's a strategic framework for service businesses looking to leverage AI effectively:
                                </p>

                                <ol>
                                    <li>
                                        <strong>Start with a specific business problem</strong> - Rather than implementing AI for its own sake, identify a specific operational challenge that AI could help solve, such as reducing scheduling inefficiencies or improving lead qualification rates.
                                    </li>
                                    <li>
                                        <strong>Audit your data resources</strong> - AI systems require data to learn and improve. Assess what customer, operational, and service data you currently collect and identify gaps that need to be filled.
                                    </li>
                                    <li>
                                        <strong>Choose the right partners</strong> - Most service businesses don't need to build AI systems from scratch. Identify technology partners who understand your industry and can provide solutions tailored to your specific needs.
                                    </li>
                                    <li>
                                        <strong>Start small and scale</strong> - Begin with a pilot project in one area of your business, measure results carefully, and then expand based on demonstrated ROI.
                                    </li>
                                    <li>
                                        <strong>Invest in team training</strong> - Ensure your team understands how to work alongside AI systems and can interpret and act on the insights these systems provide.
                                    </li>
                                </ol>

                                <h2>The Future of AI in Service Businesses</h2>

                                <p>
                                    Looking ahead to the rest of 2025 and beyond, we can expect AI to become even more deeply integrated into service business operations. Some emerging trends to watch include:
                                </p>

                                <ul>
                                    <li><strong>Augmented reality diagnostics</strong> that allow technicians to visualize problems and solutions before arriving on-site</li>
                                    <li><strong>Voice-activated service interfaces</strong> that make scheduling and service requests as simple as speaking to a virtual assistant</li>
                                    <li><strong>Predictive customer lifetime value modeling</strong> that helps businesses identify and nurture their most valuable long-term relationships</li>
                                    <li><strong>Automated quality control systems</strong> that ensure consistent service delivery across all technicians and locations</li>
                                </ul>

                                <h2>Conclusion: The Competitive Imperative</h2>

                                <p>
                                    For service businesses, AI adoption is rapidly shifting from a competitive advantage to a competitive necessity. Those who embrace these technologies thoughtfully and strategically will find themselves well-positioned to thrive in an increasingly digital marketplace.
                                </p>
                                <p>
                                    The good news is that the barrier to entry for AI implementation has never been lower. With the right partners and approach, service businesses of all sizes can begin leveraging AI to enhance their operations, improve customer experiences, and drive sustainable growth.
                                </p>
                                <p>
                                    The future of service businesses is intelligent, automated, and proactive. Is your business ready?
                                </p>
                            </article>

                            {/* Author Section */}
                            <div className="mt-12 flex items-center p-6 bg-gray-900 rounded-xl border border-gray-800">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                                    SP
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">SpotCircuit Team</h3>
                                    <p className="text-gray-400">AI Strategy Specialists for Service Businesses</p>
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                                    <FaShare className="mr-2" /> Share this article
                                </h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24">
                                {/* Newsletter Signup */}
                                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                                    <p className="text-blue-200 mb-4">Get the latest AI insights for service businesses delivered to your inbox.</p>
                                    <form className="space-y-3">
                                        <input 
                                            type="email" 
                                            placeholder="Your email address" 
                                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <button 
                                            type="submit" 
                                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>

                                {/* Related Content */}
                                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                                    <h3 className="text-xl font-bold text-white mb-4">Related Resources</h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/services" className="flex items-start group">
                                                <div className="w-16 h-16 rounded-lg bg-blue-900/50 flex-shrink-0 mr-3 overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                                        <span className="text-blue-300 text-2xl">📊</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-white group-hover:text-blue-400 transition-colors font-medium">AI-Powered SEO Services</h4>
                                                    <p className="text-sm text-gray-400">Boost your visibility with our intelligent approach</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/process" className="flex items-start group">
                                                <div className="w-16 h-16 rounded-lg bg-blue-900/50 flex-shrink-0 mr-3 overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                                        <span className="text-blue-300 text-2xl">🔄</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-white group-hover:text-blue-400 transition-colors font-medium">Our AI Implementation Process</h4>
                                                    <p className="text-sm text-gray-400">How we integrate AI into your service business</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="flex items-start group">
                                                <div className="w-16 h-16 rounded-lg bg-blue-900/50 flex-shrink-0 mr-3 overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                                        <span className="text-blue-300 text-2xl">📞</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-white group-hover:text-blue-400 transition-colors font-medium">Get a Free AI Strategy Session</h4>
                                                    <p className="text-sm text-gray-400">Book a consultation with our experts</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Articles Section */}
                <div className="bg-gradient-to-r from-gray-900 to-black py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-8">More Articles Coming Soon</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-colors group cursor-pointer">
                                    <div className="h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <span className="text-blue-300 text-2xl">✨</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Coming Soon</h3>
                                        <p className="text-gray-400 mb-4">We're working on more insightful articles about AI and service businesses.</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span>Stay tuned!</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
