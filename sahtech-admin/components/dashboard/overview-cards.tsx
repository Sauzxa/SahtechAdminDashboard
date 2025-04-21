import { cn } from "@/lib/utils"
import { Users, Package, Download, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for stats
const stats = [
  {
    title: "Total Users",
    value: "3,465",
    description: "Registered Users",
    icon: Users,
    change: "+12.5%",
    changeType: "positive",
    iconColor: "bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400",
  },
  {
    title: "Total Products",
    value: "2,450",
    description: "Products Available",
    icon: Package,
    change: "+7.2%",
    changeType: "positive",
    iconColor: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  },
  {
    title: "App Downloads",
    value: "12,800",
    description: "Downloads (Android + iOS)",
    icon: Download,
    change: "+18.7%",
    changeType: "positive",
    iconColor: "bg-teal-100 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
  },
  {
    title: "Collaborators",
    value: "124",
    description: "Active Partners",
    icon: Handshake,
    change: "+5.3%",
    changeType: "positive",
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    tooltip: "70 Nutritionists, 54 Brands",
  },
]

export function OverviewCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className={cn("rounded-full p-2", stat.iconColor)}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div
                className={cn(
                  "text-xs font-medium",
                  stat.changeType === "positive"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400",
                )}
              >
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              {stat.tooltip && <div className="mt-1 text-xs text-muted-foreground">{stat.tooltip}</div>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
