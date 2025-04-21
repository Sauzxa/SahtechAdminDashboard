import { cn } from "@/lib/utils"
import { Users, Package, Download, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for stats
const stats = [
  {
    title: "Total Views",
    value: "3.456K",
    description: "Total Views",
    icon: Users,
    change: "+0.43%",
    changeType: "positive",
    iconColor: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    iconBg: "#4ade80",
  },
  {
    title: "Total Profit",
    value: "$42.2K",
    description: "Total Profit",
    icon: Package,
    change: "+4.35%",
    changeType: "positive",
    iconColor: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    iconBg: "#fb923c",
  },
  {
    title: "Total Product",
    value: "2,450",
    description: "Total Product",
    icon: Download,
    change: "+2.59%",
    changeType: "positive",
    iconColor: "bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400",
    iconBg: "#a78bfa",
  },
  {
    title: "Total Users",
    value: "3,465",
    description: "Total Users",
    icon: Handshake,
    change: "+0.95%",
    changeType: "positive",
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    iconBg: "#38bdf8",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex">
              <div className="flex h-full w-16 items-center justify-center" style={{ backgroundColor: stat.iconBg }}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-4">
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
                <div
                  className={cn(
                    "mt-1 text-xs font-medium",
                    stat.changeType === "positive"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400",
                  )}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
