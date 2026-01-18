"use client";

import InputForm from "@/components/ui/input-field";
import { useMemo, useState } from "react";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useChainId, useConfig, useAccount, useWriteContract } from 'wagmi'
import {readContract, waitForTransactionReceipt} from "@wagmi/core";
import  {calculateTotal}  from "@/util/calculateTotal";

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amount, setAmount] = useState("")
    const chainid = useChainId()
    const config = useConfig()
    const account = useAccount()
    const total: number = useMemo(() =>calculateTotal(amount), [amount]);
    const {data: hash, isPending, writeContractAsync} = useWriteContract()


    async function getApprovedAmount(tsenderAddress: string | null): Promise<number> {
        if (!tsenderAddress){
            alert("Unsupported chain");
            return 0
        }
        const approvedAmount = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tsenderAddress as `0x${string}`],
        });
        return approvedAmount as number;
    }

    async function handleSubmit() {
        const tSenderAddress = chainsToTSender[chainid]["tsender"]
        const approvedAmount = await getApprovedAmount(tSenderAddress);
        if (approvedAmount < total) {
            const approvalHash = await writeContractAsync({
                abi: erc20Abi,
                address: tokenAddress as `0x${string}`,
                functionName: "approve",
                args: [tSenderAddress as `0x${string}`, BigInt(total)],
            });
            const approvalReceipt = await waitForTransactionReceipt(config, {
                hash: approvalHash,
            });
            console.log("Approval transaction mined:", approvalReceipt);

            await writeContractAsync({
                abi: tsenderAbi,
                address: tSenderAddress as `0x${string}`,
                functionName: "airdropERC20",
                args: [
                    tokenAddress as `0x${string}`,
                    recipients.split(/[,\n]+/).map(addr => addr.trim()) as `0x${string}`[],
                    amount.split(/[,\n]+/).map(amt => BigInt(parseFloat(amt.trim()))) as bigint[],
                    BigInt(total)
                ],
            });
        }else{
            await writeContractAsync({
                abi: tsenderAbi,
                address: tSenderAddress as `0x${string}`,
                functionName: "airdropERC20",
                args: [
                    tokenAddress as `0x${string}`,
                    recipients.split(/[,\n]+/).map(addr => addr.trim()) as `0x${string}`[],
                    amount.split(/[,\n]+/).map(amt => BigInt(parseFloat(amt.trim()))) as bigint[],
                    BigInt(total)
                ],
            });
        }
    }

    return <div className="gap-y-6 flex flex-col items-center mt-5">
        <InputForm label="Token Address" placeholder="0x" value = {tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
        <InputForm label="recipients" placeholder="0x59696, 088765" value = {recipients} onChange={(e) => setRecipients(e.target.value)} large={true} />
        <InputForm label="amount" placeholder="200, 300" value = {amount} onChange={(e) => setAmount(e.target.value)} large={true} />
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/6">Submit</button>
    </div>
}