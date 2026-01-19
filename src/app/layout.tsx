import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react"
import {Providers} from "./providers"
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: "Sagon",

};


export default function RootLayout(
  props: {children: ReactNode,
}){
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              
              {props.children}
            </Providers>
        </ThemeProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}