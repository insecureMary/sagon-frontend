"use client";

import React from 'react';
import Link from 'next/link';

const FOOTER: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-w-full bg-green-950/40 pt-60">
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

      <div className="container mx-auto px-6 py-6 relative z-11 h-fit">
        <div className="flex items-center justify-center h-full">
          <div className="w-full">

                <h1 className="text-[30px] md:text-[38px] lg:text-[58px] font-bold text-[#D6D6D6] leading-tight mb-6 text-center">
                Airdropping shouldn't cost that much! 
                </h1>
                <div className="flex justify-center">
                    <Link href="/send-token" className="px-6 py-2.5 rounded-lg font-semibold text-white bg-[#008236] hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                      Send Token
                    </Link>
                </div>


                <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-row justify-between items-center md:mt-50 mt-10 bg-black/60 backdrop-blur-m">
                    <div className="text-2xl font-bold text-white">
                        Sagon
                    </div>

                    <div className="flex flex-row items-center gap-8">
                    <Link 
                        href="https://github.com/bourdillion/sagon/tree/main" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        Github
                    </Link>
                    <Link 
                        href="https://docs.google.com/document/d/1WYZPRIs436OPDQzJhuvYD1RKu-QMsr3CPpMvzjShlIg/edit?usp=sharing" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
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