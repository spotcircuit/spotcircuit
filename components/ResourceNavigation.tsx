'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FaSearch, 
  FaFileAlt, 
  FaMapMarkerAlt, 
  FaTools, 
  FaChartBar, 
  FaCog 
} from 'react-icons/fa';

interface ResourceNavigationProps {
  currentPage?: string;
  className?: string;
}

const ResourceNavigation: React.FC<ResourceNavigationProps> = ({ 
  currentPage,
  className = ""
}) => {
  const resources = [
    {
      title: "AI Search Optimization",
      href: "/resources/ai-search-optimization",
      icon: <FaSearch className="text-2xl" />,
      color: "blue",
      id: "ai-search-optimization"
    },
    {
      title: "Content Strategy",
      href: "/resources/content-strategy-blueprint",
      icon: <FaFileAlt className="text-2xl" />,
      color: "green",
      id: "content-strategy-blueprint"
    },
    {
      title: "Local SEO Guide",
      href: "/resources/local-seo-guide",
      icon: <FaMapMarkerAlt className="text-2xl" />,
      color: "cyan",
      id: "local-seo-guide"
    },
    {
      title: "Technical SEO",
      href: "/resources/technical-seo-checklist",
      icon: <FaTools className="text-2xl" />,
      color: "purple",
      id: "technical-seo-checklist"
    },
    {
      title: "Analytics Guide",
      href: "/resources/analytics-conversion-guide",
      icon: <FaChartBar className="text-2xl" />,
      color: "yellow",
      id: "analytics-conversion-guide"
    },
    {
      title: "AI Marketing Tools",
      href: "/resources/ai-marketing-tools",
      icon: <FaCog className="text-2xl" />,
      color: "red",
      id: "ai-marketing-tools"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    if (isActive) {
      switch (color) {
        case 'blue': return 'bg-blue-900 hover:bg-blue-800';
        case 'green': return 'bg-green-900 hover:bg-green-800';
        case 'cyan': return 'bg-cyan-900 hover:bg-cyan-800';
        case 'purple': return 'bg-purple-900 hover:bg-purple-800';
        case 'yellow': return 'bg-yellow-900 hover:bg-yellow-800';
        case 'red': return 'bg-red-900 hover:bg-red-800';
        default: return 'bg-blue-900 hover:bg-blue-800';
      }
    } else {
      return 'bg-gray-900 hover:bg-gray-800';
    }
  };

  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-400';
      case 'green': return 'text-green-400';
      case 'cyan': return 'text-cyan-400';
      case 'purple': return 'text-purple-400';
      case 'yellow': return 'text-yellow-400';
      case 'red': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <section className={`bg-gray-950 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Resource Guides</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {resources.map((resource) => {
            const isActive = currentPage === resource.id;
            return (
              <Link 
                key={resource.id}
                href={resource.href} 
                className={`${getColorClasses(resource.color, isActive)} rounded-lg p-4 text-center transition-colors`}
              >
                <div className={`mb-2 flex justify-center ${isActive ? 'text-white' : getIconColorClass(resource.color)}`}>
                  {resource.icon}
                </div>
                <h3 className="text-sm font-bold">{resource.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceNavigation;