"use client";

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          Sagon
        </div>

        <div className="hidden md:flex items-center gap-8">
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

        <Link href="/send-token" className="px-6 py-2.5 rounded-lg font-semibold text-white bg-[#008236] hover:opacity-90 transition-opacity duration-200">
          Send Token
        </Link>
      </nav>
    </header>
  );
};

export default Header;