"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductScanChart } from "@/components/dashboard/product-scan-chart"
import { ProfitChart } from "@/components/dashboard/profit-chart"
import { Eye, Users, Package, Download, UserCheck } from "lucide-react"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="flex items-center justify-center min-h-[60vh]">Loading dashboard...</div>
  }

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Main Dashboard Page</h2>
          <p className="text-muted-foreground">Sahtech health app admin panel</p>
        </div>
        <Tabs defaultValue="month" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Top Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-between p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="mt-4 space-y-1 text-center">
              <h3 className="text-3xl font-bold">3,465</h3>
              <p className="text-sm text-muted-foreground">Total Registered Users</p>
            </div>
            <div className="text-xs text-green-500 mt-2">+2.59%</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-between p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
              <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mt-4 space-y-1 text-center">
              <h3 className="text-3xl font-bold">2,450</h3>
              <p className="text-sm text-muted-foreground">Total Products in Database</p>
            </div>
            <div className="text-xs text-green-500 mt-2">+0.43%</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-between p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <Download className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="mt-4 space-y-1 text-center">
              <h3 className="text-3xl font-bold">45,070</h3>
              <p className="text-sm text-muted-foreground">Total App Downloads</p>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <span className="text-xs text-green-500">Android: 32,400</span>
              <span className="text-xs text-blue-500">iOS: 12,670</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-between p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
              <UserCheck className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="mt-4 space-y-1 text-center">
              <h3 className="text-3xl font-bold">42</h3>
              <p className="text-sm text-muted-foreground">Total Collaborators</p>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <span className="text-xs text-purple-500">Nutritionists: 28</span>
              <span className="text-xs text-orange-500">Companies: 14</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-0.5">
              <CardTitle>Product Scan Activity</CardTitle>
              <CardDescription>Monthly trend of product scans by users</CardDescription>
            </div>
            <Tabs defaultValue="monthly" className="w-[200px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <ProductScanChart />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Scans</p>
                <p className="text-2xl font-bold">45,070</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">AI Recommendations</p>
                <p className="text-2xl font-bold">32,400</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-0.5">
              <CardTitle>Profit This Week</CardTitle>
              <CardDescription>Weekly income from contracts (ads and partnerships)</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ProfitChart />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">$42.2K</p>
                <p className="text-xs text-green-500">+4.35% from last week</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Contracts</p>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-green-500">+2 new this week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
