"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ModeToggle } from "@/components/mode-toggle"


export default function Header() {
    return (
        <nav className="px-8 py-4.5 flex flex-row justify-between items-center border-border xl:min-h-[77px]">
            <div className="flex items-center gap-2.5 md:gap-6">
                <a href="/" className="flex items-center gap-1">

                    <h1 className="font-bold text-2xl hidden md:block text-foreground">SAGON</h1>
                </a>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <ConnectButton showBalance={false}/>
                </div>
                
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}