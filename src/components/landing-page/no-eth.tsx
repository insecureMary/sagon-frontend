"use client";

import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';

const NoETH: React.FC = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
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
            <p className="text-[18px] md:text-[24px] lg:text-[28px] font-medium text-[#D6D6D6] leading-tight mb-6 text-center">
              Account abstraction replaces private-key wallets with smart contracts, enabling programmable account logic like custom signatures and token-based gas payments. Sagon implements it's own paymaster to ease token to token transfer.
            </p>
            <div className="flex justify-center">
              <Link className="px-6 py-2.5 rounded-lg font-semibold text-[#008236] border-2 border-[#008236] hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
              href="https://sagon-app.hashnode.dev/building-sagons-erc-4337-paymaster-architecture" 
              target="_blank"
              rel="noopener noreferrer"
              >
                <div className='button-text'>Read More About it here</div>
                <HiChevronRight className="animate-arrow-slide text-xl" />
              </Link>
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