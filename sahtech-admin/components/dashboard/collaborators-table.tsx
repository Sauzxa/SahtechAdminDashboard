"use client"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for collaborators
const collaborators = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    type: "Nutritionist",
    revenue: 12500,
    engagement: 89,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "NutriBoost",
    type: "Brand",
    revenue: 9800,
    engagement: 76,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    type: "Nutritionist",
    revenue: 8700,
    engagement: 82,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Healthy Harvest",
    type: "Brand",
    revenue: 7500,
    engagement: 68,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Dr. Emily Rodriguez",
    type: "Nutritionist",
    revenue: 6900,
    engagement: 75,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function CollaboratorsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Collaborator</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Engagement</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collaborators.map((collaborator) => (
          <TableRow key={collaborator.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={collaborator.avatar || "/placeholder.svg"} alt={collaborator.name} />
                  <AvatarFallback>
                    {collaborator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{collaborator.name}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={
                  collaborator.type === "Nutritionist"
                    ? "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                    : "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400"
                }
              >
                {collaborator.type}
              </Badge>
            </TableCell>
            <TableCell>${collaborator.revenue.toLocaleString()}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className={`h-full rounded-full ${
                      collaborator.engagement > 80
                        ? "bg-green-500"
                        : collaborator.engagement > 60
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${collaborator.engagement}%` }}
                  />
                </div>
                <span className="text-sm">{collaborator.engagement}%</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                className={
                  collaborator.status === "active"
                    ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400"
                }
              >
                {collaborator.status === "active" ? "Active" : "Inactive"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
