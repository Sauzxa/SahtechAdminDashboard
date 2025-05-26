"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent, Bar, BarChart, XAxis, YAxis } from "@/components/ui/chart"

// Mock data for weekly profit
const profitData = [
  { day: "M", nutritionists: 800, brands: 400 },
  { day: "T", nutritionists: 500, brands: 400 },
  { day: "W", nutritionists: 900, brands: 600 },
  { day: "T", nutritionists: 1100, brands: 700 },
  { day: "F", nutritionists: 1500, brands: 900 },
  { day: "S", nutritionists: 1000, brands: 700 },
  { day: "S", nutritionists: 600, brands: 500 },
]

export function ProfitChart() {
  return (
    <ChartContainer className="aspect-[16/9] w-full" data={profitData}>
      <BarChart data={profitData} stackOffset="sign">
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
        <YAxis
          tickFormatter={(value) => `$${value}`}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#888", fontSize: 12 }}
        />
        <Bar dataKey="nutritionists" stackId="a" fill="#9FE870" radius={[4, 4, 0, 0]} />
        <Bar dataKey="brands" stackId="a" fill="#93E0FB" radius={[4, 4, 0, 0]} />
        <ChartTooltip
          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          content={
            <ChartTooltipContent
              className="rounded-lg border-none bg-white p-2 shadow-lg dark:bg-gray-800"
              items={[
                {
                  label: "Nutritionists",
                  value: (value) => `$${value}`,
                  color: "#9FE870",
                },
                {
                  label: "Brands",
                  value: (value) => `$${value}`,
                  color: "#93E0FB",
                },
                {
                  label: "Total",
                  value: (_, __, item) => `$${item.nutritionists + item.brands}`,
                  color: "#93E0FB",
                },
              ]}
            />
          }
        />
      </BarChart>
    </ChartContainer>
  )
}
