"use client";

import React from 'react';
import Link from 'next/link';

const FOOTER: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-w-full bg-green-950/40 pt-60">
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

      <div className="container mx-auto px-6 py-6 relative z-11 h-fit">
        <div className="flex items-center justify-center h-full">
          <div className="w-full">

                <h1 className="text-[30px] md:text-[38px] lg:text-[58px] font-bold text-[#D6D6D6] leading-tight mb-6 text-center">
                Airdropping shouldn't cost that much! 
                </h1>
                <div className="flex justify-center">
                    <button className="px-6 py-2.5 rounded-lg font-semibold text-white bg-[#008236] hover:opacity-90 transition-opacity duration-200">
                        Send Token
                    </button>
                </div>


                <div className="px-6 py-4 flex justify-between min-w-full mt-50 bg-black/60 backdrop-blur-m">
                    <div className="text-2xl font-bold text-white">
                        Sagon
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                    <Link 
                        href="/about" 
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link 
                        href="/docs" 
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                        Docs
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>



      <style jsx global>{`
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

export default FOOTER;