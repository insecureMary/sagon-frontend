"use client"

import {getDefaultConfig} from "@rainbow-me/rainbowkit"
import {anvil, arbitrum, optimism, zksync, base} from "viem/chains"

export default getDefaultConfig({
    appName: "Sagon",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
    chains: [anvil, zksync, optimism, arbitrum, base],
    ssr: false
})