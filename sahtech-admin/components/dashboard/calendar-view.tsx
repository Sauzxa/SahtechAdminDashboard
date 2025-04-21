"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock data for advertisement contracts
const contracts = [
  {
    id: 1,
    collaborator: "NutriBoost",
    type: "Product Brand",
    campaignType: "Product-based ad",
    startDate: new Date(2025, 3, 15),
    endDate: new Date(2025, 4, 15),
    color: "bg-blue-500",
  },
  {
    id: 2,
    collaborator: "Dr. Sarah Johnson",
    type: "Nutritionist",
    campaignType: "Nutritionist campaign",
    startDate: new Date(2025, 3, 10),
    endDate: new Date(2025, 4, 10),
    color: "bg-green-500",
  },
  {
    id: 3,
    collaborator: "Healthy Harvest",
    type: "Product Brand",
    campaignType: "Product-based ad",
    startDate: new Date(2025, 3, 20),
    endDate: new Date(2025, 5, 1),
    color: "bg-purple-500",
  },
  {
    id: 4,
    collaborator: "Dr. Michael Chen",
    type: "Nutritionist",
    campaignType: "Nutritionist campaign",
    startDate: new Date(2025, 3, 5),
    endDate: new Date(2025, 3, 25),
    color: "bg-yellow-500",
  },
  {
    id: 5,
    collaborator: "VitaWell",
    type: "Product Brand",
    campaignType: "Product-based ad",
    startDate: new Date(2025, 3, 25),
    endDate: new Date(2025, 4, 25),
    color: "bg-pink-500",
  },
]

export function CalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Filter contracts for the selected date
  const contractsForSelectedDate = selectedDate
    ? contracts.filter((contract) => {
        return selectedDate >= contract.startDate && selectedDate <= contract.endDate
      })
    : []

  // Function to highlight dates with contracts
  const isDayWithContract = (date: Date) => {
    return contracts.some((contract) => date >= contract.startDate && date <= contract.endDate)
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_300px]">
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>View and manage advertisement contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={{
              hasContract: (date) => isDayWithContract(date),
            }}
            modifiersClassNames={{
              hasContract: "bg-teal-100 dark:bg-teal-900/30 font-bold text-teal-700 dark:text-teal-400",
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Select a date"}</CardTitle>
          <CardDescription>{contractsForSelectedDate.length} active contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            {contractsForSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {contractsForSelectedDate.map((contract) => (
                  <div key={contract.id} className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <Badge className={contract.color}>{contract.type}</Badge>
                      <h3 className="font-semibold">{contract.collaborator}</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{contract.campaignType}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      {format(contract.startDate, "MMM d, yyyy")} - {format(contract.endDate, "MMM d, yyyy")}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-sm text-gray-500">No contracts for this date</div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
