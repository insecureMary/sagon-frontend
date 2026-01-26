"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative lg:min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`snowflake absolute text-white opacity-30 lg:opacity-60 ${i >= 10 ? 'hidden sm:block' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${8 + Math.random() * 3}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10 lg:min-h-screen">
        <div className="flex items-center justify-center sm:justify-start py-16">
          <div className="max-w-6xl w-full">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#008236] rounded-full">
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#008236]">
                Send Tokens Without Ether! COMING SOON!!!
              </span>
            </div>

            <h1 className="text-[48px] sm:text-[48px] md:text-[66px] lg:text-[96px] font-bold text-white leading-tight">
              The cheapest <br />transaction you will do <br />without using any ether
            </h1>
          </div>

          <div className=" absolute bottom-8 right-10 w-48 h-48 lg:w-64 lg:h-64">
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