"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const stocks = [
  {
    name: "Apple Inc",
    symbol: "AAPL",
    shares: "10 Shares",
    change: "+1.2%",
    positive: true,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Google",
    symbol: "GOOGL",
    shares: "100 Shares",
    change: "+0.8%",
    positive: true,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Tesla",
    symbol: "TSLA",
    shares: "20 Shares",
    change: "-2.3%",
    positive: false,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Twitter X",
    symbol: "X",
    shares: "67 Shares",
    change: "+3.1%",
    positive: true,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Microsoft",
    symbol: "MSFT",
    shares: "31 Shares",
    change: "+0.5%",
    positive: true,
    logo: "/placeholder.svg?height=32&width=32",
  },
]

export function MyStocks() {
  return (
    <div className="space-y-4">
      {stocks.map((stock, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 rounded-md">
              <AvatarImage src={stock.logo || "/placeholder.svg"} alt={stock.name} />
              <AvatarFallback className="rounded-md">{stock.symbol.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{stock.name}</p>
              <p className="text-xs text-muted-foreground">{stock.shares}</p>
            </div>
          </div>
          <Badge
            variant="outline"
            className={
              stock.positive
                ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400"
                : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400"
            }
          >
            {stock.change}
          </Badge>
        </div>
      ))}
    </div>
  )
}
