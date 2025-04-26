import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import SidebarWrapper from "@/components/sidebar"
import { AIAssistant } from "@/components/ai-assistant"

export const metadata: Metadata = {
  title: "School Counseling Platform",
  description: "A comprehensive platform for school counselors to support students",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SidebarWrapper>{children}</SidebarWrapper>
          <AIAssistant />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
