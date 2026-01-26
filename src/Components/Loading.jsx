import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Loading = () => {
  useGSAP(() => {
    // Animate the main loader circle
    gsap.to(".loader-circle", {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "none"
    });

    // Animate the percentage text
    gsap.fromTo(".loader-text", 
      { opacity: 0.5 },
      { opacity: 1, duration: 0.8, repeat: -1, yoyo: true }
    );

    // Animate loading dots
    gsap.to(".dot", {
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      repeat: -1
    });
  });

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#030712] to-[#0f1419] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Circle Loader */}
        <div className="relative w-24 h-24">
          <svg className="loader-circle w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="70 130"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="loader-text text-blue-400 font-bold text-sm">JT</span>
          </div>
        </div>

        {/* Loading Text with animated dots */}
        <div className="text-center">
          <p className="text-gray-300 text-lg font-semibold">Loading Portfolio</p>
          <div className="flex gap-1 justify-center mt-2">
            <span className="dot text-blue-400 text-2xl opacity-40">.</span>
            <span className="dot text-blue-400 text-2xl opacity-40">.</span>
            <span className="dot text-blue-400 text-2xl opacity-40">.</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{
            animation: 'progressBar 2s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
};
