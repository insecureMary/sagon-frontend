"use client"

import config from "@/rainbowkitConfig"
import { type ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit" 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { useTheme } from "next-themes"
import "@rainbow-me/rainbowkit/styles.css"

function RainbowKitWrapper({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme()
  
  return (
    <RainbowKitProvider 
      coolMode 
      modalSize="compact" 
      theme={resolvedTheme === 'dark' ? darkTheme({
        accentColor: '#3B33B1',
        accentColorForeground: 'white',
        borderRadius: 'large',
        fontStack: 'system',
        overlayBlur: 'small',
      }) : lightTheme({
        accentColor: '#3B33B1',
        accentColorForeground: 'white',
        borderRadius: 'large',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
    >   
      {children}
    </RainbowKitProvider>
  )
}

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitWrapper>
          {props.children}
        </RainbowKitWrapper>
      </QueryClientProvider>
    </WagmiProvider>
  )
}