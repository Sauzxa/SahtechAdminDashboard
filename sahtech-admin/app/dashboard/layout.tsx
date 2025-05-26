import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { ThemeProvider } from "@/components/theme-provider"

// This is a server component, so we can't use localStorage directly
// We'll handle auth check in client components
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex h-screen flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <div className="hidden md:block">
            <DashboardSidebar />
          </div>
          <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-950 p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
