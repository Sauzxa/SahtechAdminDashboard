"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Calendar, Flag, Home, LogOut, Search, Settings, User, BarChart3, Users, Package, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuBadge,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [username, setUsername] = useState("Admin")

  useEffect(() => {
    // Get username from localStorage
    const userData = localStorage.getItem("sahtech_user")
    if (userData) {
      const { username } = JSON.parse(userData)
      setUsername(username || "Admin")
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("sahtech_user")
    // Redirect to login page
    router.push("/")
  }

  const mainNavItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/dashboard/calendar", label: "Calendar", icon: Calendar },
    { href: "/dashboard/reports", label: "Reports", icon: Flag },
  ]

  const analyticsNavItems = [
    { href: "/dashboard/users", label: "Users", icon: Users },
    { href: "/dashboard/products", label: "Products", icon: Package },
    { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  ]

  const accountNavItems = [
    { href: "/dashboard/profile", label: "Profile", icon: User },
    { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  return (
    <SidebarProvider>
      <Sidebar className="border-r border-gray-200 dark:border-gray-800">
        <SidebarHeader>
          <div className="flex items-center px-4 py-2">
            <img src="/logo.png" alt="Sahtech Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-green-600 dark:text-green-400">Sahtech</span>
          </div>
          <form onSubmit={handleSearch} className="px-4 py-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Analytics</SidebarGroupLabel>
            <SidebarMenu>
              {analyticsNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu>
              {accountNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
            Logged in as <span className="font-medium text-teal-600 dark:text-teal-400">{username}</span>
          </div>
          <SidebarMenu>
            <SidebarMenuItem className="relative">
              <SidebarMenuButton onClick={handleLogout} className="relative">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </SidebarMenuButton>
              <div className="absolute right-1 top-1.5" style={{ display: 'none' }}></div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
