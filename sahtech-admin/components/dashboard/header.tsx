"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NotificationsPopover } from "@/components/dashboard/notifications-popover"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  const router = useRouter()
  const [userData, setUserData] = useState<{ name: string; username: string; email: string } | null>(null)

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = () => {
      const userDataStr = localStorage.getItem("sahtech_user")
      if (!userDataStr) {
        router.push("/")
      } else {
        setUserData(JSON.parse(userDataStr))
      }
    }

    checkAuth()
    const interval = setInterval(checkAuth, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("sahtech_user")
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Sahtech Logo" className="h-8 w-auto" />
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2 md:justify-end">
        <div className="w-full max-w-md lg:max-w-lg md:flex-1">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="h-9 w-full rounded-full bg-sahtech-blue/10 px-4 pl-9 text-sm placeholder:text-sahtech-blue/50 dark:bg-sahtech-blue/5"
            />
            <div className="absolute left-3 top-2.5 text-sahtech-blue/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <NotificationsPopover />
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative flex items-center gap-2 rounded-full px-2 py-1.5">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/assets/images/raouff.jpg" alt={userData?.name || "User"} />
                  <AvatarFallback className="bg-sahtech-green text-white">
                    {userData?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium md:inline-block">
                  {userData?.name || "User"} <ChevronDown className="ml-1 inline-block h-4 w-4" />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userData?.name || "User"}</p>
                  <p className="text-xs leading-none text-muted-foreground">{userData?.email || ""}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
