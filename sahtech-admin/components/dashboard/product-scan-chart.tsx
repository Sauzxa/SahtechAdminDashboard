"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent, Line, LineChart, XAxis, YAxis } from "@/components/ui/chart"

// Mock data for product scan activity
const productScanData = [
  { date: "Jan", "This Year": 400, "Last Year": 240 },
  { date: "Feb", "This Year": 300, "Last Year": 139 },
  { date: "Mar", "This Year": 200, "Last Year": 980 },
  { date: "Apr", "This Year": 278, "Last Year": 390 },
  { date: "May", "This Year": 189, "Last Year": 480 },
  { date: "Jun", "This Year": 239, "Last Year": 380 },
  { date: "Jul", "This Year": 349, "Last Year": 430 },
  { date: "Aug", "This Year": 520, "Last Year": 290 },
  { date: "Sep", "This Year": 470, "Last Year": 330 },
  { date: "Oct", "This Year": 600, "Last Year": 500 },
  { date: "Nov", "This Year": 700, "Last Year": 600 },
  { date: "Dec", "This Year": 900, "Last Year": 700 },
]

export function ProductScanChart() {
  return (
    <ChartContainer className="aspect-[16/9] w-full" data={productScanData}>
      <LineChart data={productScanData}>
        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
        <Line
          type="monotone"
          dataKey="This Year"
          stroke="#4ade80"
          strokeWidth={3}
          dot={{ r: 0 }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="Last Year"
          stroke="#60a5fa"
          strokeWidth={3}
          dot={{ r: 0 }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
        <ChartTooltip
          cursor={{ stroke: "#f3f4f6", strokeWidth: 1 }}
          content={
            <ChartTooltipContent
              className="rounded-lg border-none bg-white p-2 shadow-lg dark:bg-gray-800"
              items={[
                {
                  label: "This Year",
                  value: (value) => `${value} scans`,
                  color: "#4ade80",
                },
                {
                  label: "Last Year",
                  value: (value) => `${value} scans`,
                  color: "#60a5fa",
                },
              ]}
            />
          }
        />
      </LineChart>
    </ChartContainer>
  )
}
