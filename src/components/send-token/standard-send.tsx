"use client";

import InputForm from "@/components/ui/input-field";
import { useMemo, useState } from "react";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useChainId, useConfig, useAccount, useWriteContract } from 'wagmi'
import { readContract, waitForTransactionReceipt } from "@wagmi/core";
import { calculateTotal } from "@/util/calculateTotal";

interface StandardAirdropProps {
    onGasUsed?: (gas: number) => void;
}

type TransactionStep = "idle" | "checking" | "approving" | "airdropping" | "success" | "error";

export default function StandardAirdrop({ onGasUsed }: StandardAirdropProps) {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amount, setAmount] = useState("")
    const [step, setStep] = useState<TransactionStep>("idle")
    const [error, setError] = useState<string | null>(null)
    const [txHash, setTxHash] = useState<string | null>(null)

    const chainid = useChainId()
    const config = useConfig()
    const account = useAccount()
    const total: number = useMemo(() => calculateTotal(amount), [amount]);
    const { writeContractAsync } = useWriteContract()

    // Validation
    const recipientArray = useMemo(() => 
        recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(Boolean),
        [recipients]
    );
    
    const amountArray = useMemo(() => 
        amount.split(/[,\n]+/).map(amt => amt.trim()).filter(Boolean),
        [amount]
    );

    const isValid = useMemo(() => {
        if (!tokenAddress || !recipients || !amount) return false;
        if (recipientArray.length !== amountArray.length) return false;
        if (recipientArray.length === 0) return false;
        return true;
    }, [tokenAddress, recipients, amount, recipientArray.length, amountArray.length]);

    const validationError = useMemo(() => {
        if (!tokenAddress && !recipients && !amount) return null;
        if (tokenAddress && !tokenAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
            return "Invalid token address format";
        }
        if (recipientArray.length !== amountArray.length && recipientArray.length > 0) {
            return `Mismatch: ${recipientArray.length} recipients but ${amountArray.length} amounts`;
        }
        return null;
    }, [tokenAddress, recipientArray.length, amountArray.length]);

    async function getApprovedAmount(tsenderAddress: string | null): Promise<bigint> {
        if (!tsenderAddress) {
            throw new Error("Unsupported chain");
        }
        const approvedAmount = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tsenderAddress as `0x${string}`],
        });
        return approvedAmount as bigint;
    }

    async function handleSubmit() {
        if (!isValid) return;
        
        setError(null);
        setStep("checking");

        try {
            // For standard version, we'll use the standard contract address
            // You would replace this with your actual standard Solidity contract address
            const standardAddress = chainsToTSender[chainid]?.["tsender"];
            
            if (!standardAddress) {
                throw new Error("Standard contract is not deployed on this chain yet");
            }

            // Check approval
            const approvedAmount = await getApprovedAmount(standardAddress);
            const totalBigInt = BigInt(total);

            if (approvedAmount < totalBigInt) {
                setStep("approving");
                const approvalHash = await writeContractAsync({
                    abi: erc20Abi,
                    address: tokenAddress as `0x${string}`,
                    functionName: "approve",
                    args: [standardAddress as `0x${string}`, totalBigInt],
                });
                
                await waitForTransactionReceipt(config, {
                    hash: approvalHash,
                });
            }

            // Execute airdrop
            setStep("airdropping");
            const airdropHash = await writeContractAsync({
                abi: tsenderAbi, // Would be standardAbi in production
                address: standardAddress as `0x${string}`,
                functionName: "airdropERC20",
                args: [
                    tokenAddress as `0x${string}`,
                    recipientArray as `0x${string}`[],
                    amountArray.map(amt => BigInt(parseFloat(amt))) as bigint[],
                    totalBigInt
                ],
            });

            const receipt = await waitForTransactionReceipt(config, {
                hash: airdropHash,
            });

            // Extract gas used
            if (receipt.gasUsed && onGasUsed) {
                onGasUsed(Number(receipt.gasUsed));
            }

            setTxHash(airdropHash);
            setStep("success");
            
            // Reset form after success
            setTimeout(() => {
                setTokenAddress("");
                setRecipients("");
                setAmount("");
                setStep("idle");
                setTxHash(null);
            }, 5000);

        } catch (err: any) {
            setError(err.message || "Transaction failed");
            setStep("error");
            console.error("Airdrop error:", err);
        }
    }

    const getStepMessage = () => {
        switch (step) {
            case "checking": return "Checking token approval...";
            case "approving": return "Awaiting approval confirmation...";
            case "airdropping": return "Executing airdrop...";
            case "success": return "Airdrop successful!";
            case "error": return error || "Transaction failed";
            default: return "Execute Airdrop";
        }
    };

    const getButtonClass = () => {
        const base = "relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden group";
        
        if (!isValid || step === "checking" || step === "approving" || step === "airdropping") {
            return `${base} bg-slate-700 text-slate-400 cursor-not-allowed`;
        }
        
        if (step === "success") {
            return `${base} bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50`;
        }
        
        if (step === "error") {
            return `${base} bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/50`;
        }

        return `${base} bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400 shadow-lg shadow-orange-500/50 hover:shadow-orange-400/60`;
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className=" backdrop-blur-xl  rounded-2xl p-8 shadow-2xl">

                <div className="space-y-6">
                    <InputForm 
                        label="Token Address" 
                        placeholder="0x..." 
                        value={tokenAddress} 
                        onChange={(e) => setTokenAddress(e.target.value)} 
                    />
                    
                    <InputForm 
                        label="Recipients" 
                        placeholder="0x123..., 0x456... (comma or newline separated)" 
                        value={recipients} 
                        onChange={(e) => setRecipients(e.target.value)} 
                        large={true} 
                    />
                    
                    <InputForm 
                        label="Amounts" 
                        placeholder="100, 200, 300 (comma or newline separated)" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        large={true} 
                    />

                    {validationError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                            <p className="text-red-400 text-sm">{validationError}</p>
                        </div>
                    )}

                    {isValid && (
                        <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-slate-400">Recipients:</span>
                                    <span className="text-orange-300 font-bold ml-2">{recipientArray.length}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400">Total Amount:</span>
                                    <span className="text-orange-300 font-bold ml-2">{total}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button 
                        onClick={handleSubmit} 
                        disabled={!isValid || step === "checking" || step === "approving" || step === "airdropping"}
                        className={getButtonClass()}
                    >
                        {/* Animated background */}
                        {(step === "idle" || step === "error") && isValid && (
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        )}
                        
                        {/* Loading spinner */}
                        {(step === "checking" || step === "approving" || step === "airdropping") && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 border-3 border-slate-400 border-t-orange-400 rounded-full animate-spin" />
                            </div>
                        )}
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {step === "success" && "✅"}
                            {step === "error" && "❌"}
                            {getStepMessage()}
                        </span>
                    </button>

                    {/* Transaction Hash */}
                    {txHash && step === "success" && (
                        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <p className="text-green-400 text-sm">
                                Transaction: 
                                <a 
                                    href={`https://etherscan.io/tx/${txHash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 underline hover:text-green-300"
                                >
                                    {txHash.slice(0, 10)}...{txHash.slice(-8)}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}