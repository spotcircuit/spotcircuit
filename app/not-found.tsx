import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Page Not Found | SpotCircuit',
  description: 'The page you are looking for could not be found. Explore our services or contact us for assistance.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <Link href="/services" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <h4 className="font-medium text-blue-600">Our Services</h4>
                <p className="text-sm text-gray-500">Explore our AI-first SEO services</p>
              </Link>
              <Link href="/blog" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <h4 className="font-medium text-blue-600">Blog</h4>
                <p className="text-sm text-gray-500">Read our latest articles and insights</p>
              </Link>
              <Link href="/case-studies" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <h4 className="font-medium text-blue-600">Case Studies</h4>
                <p className="text-sm text-gray-500">See how we've helped other businesses</p>
              </Link>
              <Link href="/contact" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <h4 className="font-medium text-blue-600">Contact Us</h4>
                <p className="text-sm text-gray-500">Get in touch with our team</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
