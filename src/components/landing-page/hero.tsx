"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="snowflake absolute text-white opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${10 + Math.random() * 10}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 min-h-screen">
        <div className="flex items-center justify-center sm:justify-start min-h-screen py-16 sm:py-0">
          <div className="max-w-6xl w-full">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#008236] rounded-full mb-6 sm:mb-8">
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#008236]">
                Send Tokens Without Ether! COMING SOON!!!
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[48px] md:text-[66px] lg:text-[96px] font-bold text-white leading-tight mb-6">
              The cheapest <br />transaction you will do <br />without using any ether
            </h1>
          </div>

          {/* Lottie Animation - Hidden on mobile, visible on md+ screens */}
          <div className="hidden md:block absolute bottom-8 right-10 w-48 h-48 lg:w-64 lg:h-64">
            <div id="lottie-animation" className="w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-[#2CEDB1]/20 to-[#29BEE7]/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        .snowflake {
          animation: fall linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;