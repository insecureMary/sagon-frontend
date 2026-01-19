"use client";

import { useEffect, useState } from "react";

interface GasComparisonProps {
    optimizedGas: number | null;
    standardGas: number | null;
}

export default function GasComparison({ optimizedGas, standardGas }: GasComparisonProps) {
    const [animatedOptimized, setAnimatedOptimized] = useState(0);
    const [animatedStandard, setAnimatedStandard] = useState(0);

    // Animate counters
    useEffect(() => {
        if (optimizedGas !== null) {
            const duration = 1500;
            const steps = 60;
            const increment = optimizedGas / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= optimizedGas) {
                    setAnimatedOptimized(optimizedGas);
                    clearInterval(timer);
                } else {
                    setAnimatedOptimized(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [optimizedGas]);

    useEffect(() => {
        if (standardGas !== null) {
            const duration = 1500;
            const steps = 60;
            const increment = standardGas / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= standardGas) {
                    setAnimatedStandard(standardGas);
                    clearInterval(timer);
                } else {
                    setAnimatedStandard(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [standardGas]);

    // Calculate savings
    const savings = standardGas && optimizedGas 
        ? ((standardGas - optimizedGas) / standardGas * 100).toFixed(2)
        : null;

    const gasSaved = standardGas && optimizedGas
        ? standardGas - optimizedGas
        : null;

    if (!optimizedGas && !standardGas) return null;

    return (
        <div className="mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    ⚡ Gas Metrics
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Optimized Gas */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                        <div className="absolute top-0 right-0 text-8xl opacity-5">⚡</div>
                        <div className="relative z-10">
                            <div className="text-cyan-400 text-sm font-semibold mb-2">OPTIMIZED (HUFF)</div>
                            <div className="text-4xl font-bold text-white mb-2 font-mono">
                                {optimizedGas ? animatedOptimized.toLocaleString() : "—"}
                            </div>
                            <div className="text-slate-400 text-xs">gas units</div>
                            
                            {/* Progress Bar */}
                            {optimizedGas && (
                                <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
                                        style={{ width: `${optimizedGas && standardGas ? (optimizedGas / standardGas * 100) : 100}%` }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Standard Gas */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
                        <div className="absolute top-0 right-0 text-8xl opacity-5">🔥</div>
                        <div className="relative z-10">
                            <div className="text-orange-400 text-sm font-semibold mb-2">STANDARD (SOLIDITY)</div>
                            <div className="text-4xl font-bold text-white mb-2 font-mono">
                                {standardGas ? animatedStandard.toLocaleString() : "—"}
                            </div>
                            <div className="text-slate-400 text-xs">gas units</div>
                            
                            {/* Progress Bar */}
                            {standardGas && (
                                <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Savings Display */}
                {savings && gasSaved && (
                    <div className="relative overflow-hidden bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border-2 border-green-500/50 rounded-xl p-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5 animate-pulse" />
                        
                        <div className="relative z-10 text-center">
                            <div className="text-green-400 text-sm font-semibold mb-3">💰 GAS SAVED</div>
                            
                            <div className="flex items-center justify-center gap-8 mb-4">
                                <div>
                                    <div className="text-5xl font-bold text-green-300 font-mono">
                                        {savings}%
                                    </div>
                                    <div className="text-slate-400 text-xs mt-1">efficiency gain</div>
                                </div>
                                
                                <div className="h-16 w-px bg-slate-600" />
                                
                                <div>
                                    <div className="text-3xl font-bold text-green-300 font-mono">
                                        {gasSaved.toLocaleString()}
                                    </div>
                                    <div className="text-slate-400 text-xs mt-1">gas units saved</div>
                                </div>
                            </div>

                            <div className="text-slate-300 text-sm">
                                By using Huff assembly optimization, you saved{" "}
                                <span className="text-green-400 font-bold">{savings}%</span> on gas costs
                            </div>
                        </div>

                        {/* Animated particles */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/50 rounded-full animate-float-1" />
                            <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-green-400/50 rounded-full animate-float-2" />
                            <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-green-400/50 rounded-full animate-float-3" />
                        </div>
                    </div>
                )}

                {/* Visual Comparison Chart */}
                {optimizedGas && standardGas && (
                    <div className="mt-8 pt-8 border-t border-slate-700">
                        <h3 className="text-lg font-semibold text-slate-300 mb-4 text-center">Visual Comparison</h3>
                        
                        <div className="space-y-4">
                            {/* Optimized Bar */}
                            <div className="flex items-center gap-4">
                                <div className="w-32 text-sm text-cyan-400 font-semibold">Optimized</div>
                                <div className="flex-1 h-12 bg-slate-800 rounded-lg overflow-hidden relative">
                                    <div 
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                                        style={{ width: `${(optimizedGas / Math.max(optimizedGas, standardGas) * 100)}%` }}
                                    >
                                        <span className="text-white text-xs font-bold">{optimizedGas.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Standard Bar */}
                            <div className="flex items-center gap-4">
                                <div className="w-32 text-sm text-orange-400 font-semibold">Standard</div>
                                <div className="flex-1 h-12 bg-slate-800 rounded-lg overflow-hidden relative">
                                    <div 
                                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                                        style={{ width: `${(standardGas / Math.max(optimizedGas, standardGas) * 100)}%` }}
                                    >
                                        <span className="text-white text-xs font-bold">{standardGas.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
                    50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
                    50% { transform: translateY(-15px) translateX(-15px); opacity: 1; }
                }
                @keyframes float-3 {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
                    50% { transform: translateY(-25px) translateX(5px); opacity: 1; }
                }
                .animate-float-1 {
                    animation: float-1 3s ease-in-out infinite;
                }
                .animate-float-2 {
                    animation: float-2 4s ease-in-out infinite;
                }
                .animate-float-3 {
                    animation: float-3 3.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}