"use client"

<<<<<<< HEAD
import config from "@/rainbowKitConfig"
import { type ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit"
=======
import config from "@/rainbowkitConfig"
import { type ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit" 
>>>>>>> 99d4f54a827971fc7cfad9399cfef28905be4212
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { useTheme } from "next-themes"
import "@rainbow-me/rainbowkit/styles.css"

function RainbowKitWrapper({ children }: { children: ReactNode }) {
<<<<<<< HEAD
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
=======
  const { resolvedTheme } = useTheme()
  
  return (
    <RainbowKitProvider 
      coolMode 
      modalSize="compact" 
      theme={resolvedTheme === 'dark' ? darkTheme({
        accentColor: '#008236',
        accentColorForeground: 'white',
        borderRadius: 'large',
        fontStack: 'system',
        overlayBlur: 'small',
      }) : lightTheme({
        accentColor: '#008236',
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
>>>>>>> 99d4f54a827971fc7cfad9399cfef28905be4212
}