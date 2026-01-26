"use client";

import React from 'react';

const SaveGas: React.FC = () => {
  return (
    <section className="relative md:min-h-screen py-30 md:py-0 bg-black overflow-hidden ">
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

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 min-h-screen">
        <div className="flex items-center justify-center sm:justify-start min-h-screen py-16 sm:py-0">
          <div className=" w-full">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#008236] rounded-full mb-6 sm:mb-8">
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#008236]">
                Send Tokens Without Ether! COMING SOON!!!
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] xl:text-[66px] font-bold text-[#D6D6D6] leading-tight mb-6 sm:mb-8">
              Sagon's backend is written in pure Huff, an assembly language that gives us direct access to the EVM. This low-level control allows us to optimize every opcode, resulting in a transfer system that's both lightning-fast and battle-tested for security.
            </h1>
            
            <h2 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[47px] font-bold text-[#29BEE7] leading-tight mt-8 sm:mt-12 lg:mt-16">
              That is how we save you from ridiculous gas fees, Don't Mention!
            </h2>
          </div>

          <div className="absolute bottom-8 right-10 w-48 h-48 xl:w-64 xl:h-64">
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

export default SaveGas;