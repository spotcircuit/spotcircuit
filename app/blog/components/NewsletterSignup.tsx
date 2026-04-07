import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({
  title = "Subscribe to Our Newsletter",
  description = "Get the latest AI insights for service businesses delivered to your inbox.",
  className = "",
}: NewsletterSignupProps) {
  return (
    <div
      className={`bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 ${className}`}
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-blue-100 mb-4">{description}</p>
      <form className="space-y-3">
        <div>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-white/10 border border-blue-400/30 rounded-md px-4 py-2 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" />
          Subscribe
        </button>
      </form>
    </div>
  );
}
