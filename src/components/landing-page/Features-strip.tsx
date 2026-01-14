"use client";

import React from 'react';

const FeaturesStrip: React.FC = () => {
  const features = [
    "save 40% more gas",
    "use tokens to send tokens",
    "save 40% more gas",
    "use tokens to send tokens",
  ];

  return (
    <section className="relative bg-black py-40 border-t border-gray-900 overflow-hidden h-screen">
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

      <div className="flex animate-scroll whitespace-nowrap">
        {[...features, ...features, ...features].map((feature, index) => (
          <div key={index} className="flex items-center mx-12">
            <span className="text-white text-[56px] md:text-[70px] font-bold">
              {feature}
            </span>
            <div className="w-10 h-10 rounded-full bg-white ml-20" />
          </div>
        ))}
      </div>


      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-130%);
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .snowflake {
          animation: fall linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesStrip;