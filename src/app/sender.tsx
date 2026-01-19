"use client";

import React from 'react';
import Link from 'next/link';

const Sender: React.FC = () => {
    return (
        <main className="bg-black w-full min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-8">Send Tokens</h1>
            <p className="text-lg mb-4">This is the sender page where users can send tokens.</p>
            <Link href="/" className="mt-6 px-6 py-2.5 rounded-lg font-semibold text-white bg-[#008236] hover:opacity-90 transition-opacity duration-200">
                Go Back Home
            </Link>
        </main>
    );
}