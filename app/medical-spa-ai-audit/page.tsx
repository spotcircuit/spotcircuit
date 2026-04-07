'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, AlertCircle, ChartBar, Users, Sparkles, Clock } from 'lucide-react';

export default function MedicalSpaAIAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    medSpaName: '',
    website: '',
    location: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/medical-spa-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          medSpaName: '',
          website: '',
          location: '',
          phone: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Warning Banner */}
          <div className="mb-8 inline-flex items-center bg-red-50 border border-red-200 rounded-full px-6 py-2">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800 font-medium">40% of patients now search via AI before booking</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Is Your Medical Spa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Invisible to AI?
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            While you focus on perfecting treatments, your competitors are stealing patients through ChatGPT, Claude, and Google's AI Overview.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">Get Your Free AI Visibility Audit</h2>
            <p className="text-gray-600 mb-2">Discover exactly what AI says about your med spa vs competitors</p>
            <p className="text-sm text-gray-500">(Value: $497 - Free for a limited time)</p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Hidden Crisis Facing Medical Spas</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">What's Happening Now:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Patients ask AI for treatment recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">AI recommends your competitors, not you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">You lose high-value patients before they even search Google</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real AI Search Examples:</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-600 mb-1">"What's the best med spa for first-time Botox?"</p>
                  <p className="text-gray-500 italic">AI recommends: Your competitor</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-600 mb-1">"Safe places for lip fillers near me"</p>
                  <p className="text-gray-500 italic">AI recommends: Not you</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-600 mb-1">"Best medspa for natural results"</p>
                  <p className="text-gray-500 italic">AI recommends: 3 competitors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              Result: <span className="text-red-600">You're losing 40% of potential patients to AI-savvy competitors</span>
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Your Free AI Audit Reveals</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ChartBar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">AI Visibility Score</h3>
              <p className="text-gray-600">See exactly how visible your med spa is across ChatGPT, Claude, and Google AI</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Competitor Analysis</h3>
              <p className="text-gray-600">Discover why AI recommends competitors and exactly what they're doing differently</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Action Roadmap</h3>
              <p className="text-gray-600">Get 3 specific fixes you can implement immediately to boost AI visibility</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-center">Your Personalized AI Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Screenshots of what AI says about your med spa</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Side-by-side competitor comparisons</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Missing schema markup identification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">FAQ optimization opportunities</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Local voice search analysis</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Treatment-specific recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gray-50" id="audit-form">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free AI Visibility Audit</h2>
              <p className="text-gray-600 mb-2">See exactly how AI-ready your medical spa is</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>Limited time offer - Usually $497</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@medspa.com"
                />
              </div>

              <div>
                <label htmlFor="medSpaName" className="block text-sm font-medium text-gray-700 mb-1">
                  Medical Spa Name *
                </label>
                <input
                  type="text"
                  id="medSpaName"
                  name="medSpaName"
                  required
                  value={formData.medSpaName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Glow Aesthetics"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://www.yourmedspa.com"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location (City, State) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Austin, TX"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Get My Free AI Audit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Success! 🎉</p>
                  <p className="text-sm mt-1">Your AI visibility audit request has been received. Check your email for confirmation and expect your personalized audit within 48 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm mt-1">Please try again or contact support if the issue persists.</p>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why This Matters Now</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
              <p className="text-gray-700">Of patients search via AI before booking treatments</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
              <p className="text-gray-700">More likely to book with AI-recommended med spas</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">67%</div>
              <p className="text-gray-700">Growth in AI search volume in the last 6 months</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Every Day You Wait, You Lose Patients</h3>
            <p className="text-lg mb-6">
              Your competitors are getting AI-optimized RIGHT NOW. In 6 months, the leaders will be established.
            </p>
            <a
              href="#audit-form"
              className="inline-flex items-center bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Claim Your Free Audit Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What exactly is AI search visibility?</h3>
              <p className="text-gray-600">
                AI search visibility refers to how well your medical spa appears when people use AI assistants like ChatGPT, Claude, or Google's AI Overview to find aesthetic treatments. These platforms now influence 40% of patient decisions.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How is this different from regular SEO?</h3>
              <p className="text-gray-600">
                Traditional SEO focuses on ranking in Google search results. AI optimization ensures you're recommended by AI platforms through structured data, semantic content, and FAQ optimization that AI can understand and cite.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How long does the audit take?</h3>
              <p className="text-gray-600">
                You'll receive your personalized AI visibility audit within 48 hours. It includes screenshots, competitor analysis, and specific recommendations you can implement immediately.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Is this really free?</h3>
              <p className="text-gray-600">
                Yes, for a limited time. We normally charge $497 for this comprehensive audit, but we're offering it free to help medical spas understand the AI visibility gap before it's too late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let AI Send Your Patients to Competitors
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get your free AI visibility audit and discover exactly how to become the #1 AI-recommended med spa in your area.
          </p>
          <a
            href="#audit-form"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group"
          >
            Get Your Free Audit Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Limited time offer • No credit card required • Results in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
}