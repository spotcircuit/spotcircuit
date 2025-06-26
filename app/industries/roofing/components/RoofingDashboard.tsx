import React from 'react';
import Image from 'next/image';
import { FaChartLine } from 'react-icons/fa';

const RoofingDashboard: React.FC = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-red-500/20 relative transform hover:scale-102 transition-all duration-500">
      <div className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-red-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10">
        <FaChartLine className="text-white" />
      </div>
      
      {/* Live indicator */}
      <div className="absolute top-4 right-4 z-10 flex items-center space-x-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-200 font-medium">LIVE</span>
      </div>

      {/* Dashboard SVG with styling */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900/20"></div>
        <div className="dashboard-container pb-[62.5%] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/static/images/roofing-dashboard.svg" 
              alt="Roofing Marketing Dashboard" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Dashboard caption */}
      <div className="bg-black/80 p-3 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-300 font-medium">Real-time marketing analytics</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofingDashboard;
