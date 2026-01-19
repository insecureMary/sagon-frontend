"use client";

import { useState } from "react";
import OptimizedAirdrop from "@/components/send-token/optimized-send";
import StandardAirdrop from "@/components/send-token/standard-send";
import GasComparison from "@/components/send-token/gas-comparison";

type TabType = "optimized" | "standard";

export default function SendToken() {
    const [activeTab, setActiveTab] = useState<TabType>("optimized");
    const [gasUsed, setGasUsed] = useState<{ optimized: number | null; standard: number | null }>({
        optimized: null,
        standard: null
    });

    return (
        <div className="min-h-screen">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent animate-pulse-slow" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-pulse-slow-delayed" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 flex justify-center">
                        How it all works in 3 simple steps
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-black backdrop-blur-xl border border-[#008236]/60 rounded-xl hover:border-green-500/50 transition-all duration-300 group">
                            <h3 className="font-bold text-lg mb-2 text-[#008236]">1. Enter Details</h3>
                            <p className="text-black dark:text-white text-sm">
                               Connect wallet and provide the token address, recipient addresses (comma or newline separated), and amounts for each recipient.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-black backdrop-blur-xl border border-[#008236]/60 rounded-xl hover:border-green-500/50 transition-all duration-300 group">
                            <h3 className="font-bold text-lg mb-2 text-[#008236]">2. Approve Tokens</h3>
                            <p className="text-black dark:text-white text-sm">
                                The system automatically checks allowance and requests approval if needed before executing the airdrop.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-black backdrop-blur-xl border border-[#008236]/60 rounded-xl hover:border-green-500/50 transition-all duration-300 group">
                            <h3 className="font-bold text-lg mb-2 text-[#008236]">3. Execute Airdrop</h3>
                            <p className="text-black dark:text-white text-sm">
                                Tokens are distributed efficiently in a single transaction, saving you time and gas fees.
                            </p>
                        </div>

                    </div>
                </div>

                {(gasUsed.optimized || gasUsed.standard) && (
                    <GasComparison optimizedGas={gasUsed.optimized} standardGas={gasUsed.standard} />
                )}


                <div className="mb-8">
                    <div className="flex items-center justify-center gap-4 p-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl max-w-2xl mx-auto">
                        <button
                            onClick={() => setActiveTab("optimized")}
                            className={`flex-1 relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                                activeTab === "optimized"
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <div className="text-left">
                                    <div className="text-sm font-bold">OPTIMIZED</div>
                                    <div className="text-xs opacity-75">Huff Assembly</div>
                                </div>
                            </div>
                            {activeTab === "optimized" && (
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 animate-pulse" />
                            )}
                        </button>

                        <button
                            onClick={() => setActiveTab("standard")}
                            className={`flex-1 relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                                activeTab === "standard"
                                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <div className="text-left">
                                    <div className="text-sm font-bold">STANDARD</div>
                                    <div className="text-xs opacity-75">Solidity</div>
                                </div>
                            </div>
                            {activeTab === "standard" && (
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 opacity-20 animate-pulse" />
                            )}
                        </button>
                    </div>

                    <div className="mt-6 max-w-2xl mx-auto">
                        {activeTab === "optimized" ? (
                            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl backdrop-blur-sm">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h3 className="font-bold text-cyan-300 mb-2">Optimized Version (Recommended)</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            Leverages Huff assembly language for bytecode-level optimization. 
                                            Reduces gas costs by eliminating redundant operations and maximizing EVM efficiency.
                                            <span className="text-cyan-400 font-semibold"> Perfect for high-volume airdrops.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl backdrop-blur-sm">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h3 className="font-bold text-orange-300 mb-2">Standard Version</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            Traditional Solidity implementation for comparison. 
                                            Uses standard ERC20 patterns with higher gas consumption.
                                            <span className="text-orange-400 font-semibold"> Try both versions to see the difference!</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    {activeTab === "optimized" ? (
                        <OptimizedAirdrop onGasUsed={(gas) => setGasUsed(prev => ({ ...prev, optimized: gas }))} />
                    ) : (
                        <StandardAirdrop onGasUsed={(gas) => setGasUsed(prev => ({ ...prev, standard: gas }))} />
                    )}
                </div>


            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                }
                @keyframes pulse-slow-delayed {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                .animate-pulse-slow-delayed {
                    animation: pulse-slow-delayed 8s ease-in-out infinite 2s;
                }
            `}</style>
        </div>
    );
}