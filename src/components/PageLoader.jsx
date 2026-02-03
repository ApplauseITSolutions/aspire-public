import React from 'react';
import aspireLogo from '../assets/images/logo-aspire.png';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-white to-orange-50/30 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      {/* Logo with Shining Effect */}
      <div className="relative mb-2">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={aspireLogo}
            alt="Aspire Logo"
            className="w-48 h-32 object-contain animate-pulse"
          />
          {/* Shining overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>
        </div>
      </div>
      
      {/* Branding and loading text */}
      <div className="text-center max-w-md">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#3D1717] mb-2 tracking-tight">
            Aspire Knowledge & Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#EF7F2C] to-orange-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Loading status */}
        <p className="text-gray-500 text-sm font-medium animate-pulse">
          Loading amazing experience...
        </p>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-gradient-to-r from-[#EF7F2C] via-orange-500 to-orange-400 rounded-full animate-progress"></div>
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
