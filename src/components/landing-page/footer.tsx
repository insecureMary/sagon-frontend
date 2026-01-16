"use client";

import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const NoETH: React.FC = () => {
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
        <div className="flex items-center justify-center h-full">
          <div className="max-w-9xl">
            <div className="flex px-4 py-2 border-2 border-[#008236] rounded-full flex justify-center place-self-center">
              <span className="text-[10px] font-medium text-[#008236] ">
                  COMING SOON!
              </span>
            </div>

            <h1 className="text-[36px] md:text-[46px] lg:text-[66px] font-bold text-[#D6D6D6] leading-tight mb-6 text-center">
              How about the "token to send tokens bs?"
            </h1>
            <div className="flex justify-center">
              <button className="px-6 py-2.5 rounded-lg font-semibold text-[#008236] border-2 border-[#008236] hover:opacity-90 transition-opacity duration-200 flex items-center gap-2">
                <div className='button-text'>Read More About it here</div>
                <HiChevronRight className="animate-arrow-slide text-xl" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 right-10 w-64 h-64">
            <div id="lottie-animation" className="w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-[#2CEDB1]/20 to-[#29BEE7]/20 rounded-full animate-pulse" />
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

        @keyframes arrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        @keyframes textMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .snowflake {
          animation: fall linear infinite;
        }

        .animate-arrow-slide{
          animation: arrowMove 1.5s ease-in-out infinite;
        }

        .button-text {
          animation: textMove 1.5s ease-in-out infinite;
        }
      `}</style>


    </section>
  );
};

export default NoETH;