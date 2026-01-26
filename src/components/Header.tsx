"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
    return (
        <nav className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-row justify-between items-center border-border xl:min-h-[77px] w-full">
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-6">
                <a href="/" className="flex items-center gap-1">
                    <h1 className="font-bold text-[16px] lg:text-xl text-foreground">
                        SAGON
                    </h1>
                </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <div className="flex items-center">
                    <ConnectButton showBalance={false}   accountStatus={{smallScreen: 'avatar',largeScreen: 'full' }}/>
                </div>
                
                <div className="flex items-center">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}