"use client";

import React from 'react';

const SaveGas: React.FC = () => {
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
          <div className="max-w-9xl">
            <div className="inline-block px-4 py-2 border-2 border-[#008236] rounded-full">
              <span className="text-[10px] font-medium text-[#008236]">
                Send Tokens Without Ether! COMING SOON!!!
              </span>
            </div>

            <h1 className="text-[36px] md:text-[46px] lg:text-[66px] font-bold text-[#D6D6D6] leading-tight mb-6">
              Sagon's backend is written in pure Huff, an assembly language that gives us direct access to the EVM. This low-level control allows us to optimize every opcode, resulting in a transfer system that's both lightning-fast and battle-tested for security.
            </h1>
            <h1 className="text-[30px] md:text-[36px] lg:text-[47px] font-bold text-[#29BEE7] leading-tight mt-30">
                That is how we save you from ridiculous gas fees, Don’t Mention!
            </h1>
          </div>

          <div className="absolute bottom-4 right-10 w-64 h-64">
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