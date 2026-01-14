"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
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

      <div className="container mx-auto px-6 py-6 relative z-10 h-full">
        <div className="flex items-center h-full">
          <div className="max-w-6xl">
            <div className="inline-block px-4 py-2 border-2 border-[#008236] rounded-full">
              <span className="text-[10px] font-medium text-[#008236]">
                Send Tokens Without Ether! COMING SOON!!!
              </span>
            </div>

            <h1 className="text-[56px] md:text-[66px] lg:text-[96px] font-bold text-white leading-tight mb-6">
              The cheapest <br />transaction you will do <br />without using any ether
            </h1>
          </div>

          {/* Lottie Animation - Moved down */}
          <div className="absolute bottom-4 right-10 w-64 h-64">
            <div id="lottie-animation" className="w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-[#2CEDB1]/20 to-[#29BEE7]/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Snow Animation */}
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