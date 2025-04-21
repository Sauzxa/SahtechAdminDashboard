"use client"

import type * as React from "react"
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line as RechartsLine,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  Tooltip as RechartsTooltip,
  BarChart as RechartsBarChart,
  Bar as RechartsBar,
  CartesianGrid,
} from "recharts"
import { cn } from "@/lib/utils"

interface ChartTooltipContentProps {
  className?: string
  items: {
    label: string
    value: (value: number, name?: string, item?: any) => string
    color: string
  }[]
  payload?: any[]
}

export function ChartTooltipContent({ className, items, payload }: ChartTooltipContentProps) {
  if (!payload || payload.length === 0) {
    return null
  }

  return (
    <div
      className={cn(
        "space-y-1 rounded-lg border bg-white p-2 shadow-md dark:border-gray-800 dark:bg-gray-950",
        className,
      )}
    >
      {items.map((item, index) => {
        const data = payload[0]?.payload
        const value = data?.[item.label]

        if (value === undefined) {
          return null
        }

        return (
          <div key={index} className="flex items-center justify-between">
            <span className="mr-2 text-sm text-gray-500 dark:text-gray-400">{item.label}:</span>
            <span className="text-sm font-medium">{item.value(value, item.label, data)}</span>
          </div>
        )
      })}
    </div>
  )
}

interface ChartContainerProps {
  children: React.ReactNode
  className?: string
  data: any[]
}

export function ChartContainer({ children, className, data }: ChartContainerProps) {
  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500">No data available</div>
  }

  return <ResponsiveContainer className={className}>{children}</ResponsiveContainer>
}

export function Chart({ children }: { children: React.ReactNode }) {
  return children as React.ReactNode
}

// Export all the Recharts components
export const LineChart = RechartsLineChart
export const Line = RechartsLine
export const XAxis = RechartsXAxis
export const YAxis = RechartsYAxis
export const ChartTooltip = RechartsTooltip
export const BarChart = RechartsBarChart
export const Bar = RechartsBar
export const Grid = CartesianGrid
