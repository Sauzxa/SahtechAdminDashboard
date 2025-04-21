"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CheckCircle, ChevronDown, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for user reports
const reports = [
  {
    id: 1,
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    product: "Organic Protein Powder",
    aiResponse: "This product is suitable for your diet plan.",
    feedback: "The product contains allergens not detected by the AI.",
    timestamp: new Date(2025, 3, 20, 14, 30),
    status: "pending",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    product: "Vitamin D Supplement",
    aiResponse: "This product is recommended for your deficiency.",
    feedback: "The dosage recommendation was incorrect for my age group.",
    timestamp: new Date(2025, 3, 19, 10, 15),
    status: "reviewed",
  },
  {
    id: 3,
    user: {
      name: "Michael Johnson",
      email: "michael.j@example.com",
    },
    product: "Gluten-Free Cereal",
    aiResponse: "This product is gluten-free and suitable for celiac disease.",
    feedback: "The product contains traces of gluten not detected by the AI.",
    timestamp: new Date(2025, 3, 18, 9, 45),
    status: "pending",
  },
  {
    id: 4,
    user: {
      name: "Sarah Williams",
      email: "sarah.w@example.com",
    },
    product: "Omega-3 Fish Oil",
    aiResponse: "This supplement is beneficial for heart health.",
    feedback: "The AI didn't mention potential interactions with my medication.",
    timestamp: new Date(2025, 3, 17, 16, 20),
    status: "reviewed",
  },
  {
    id: 5,
    user: {
      name: "David Brown",
      email: "david.b@example.com",
    },
    product: "Plant-Based Protein Bar",
    aiResponse: "This product is suitable for vegans and provides 15g of protein.",
    feedback: "The AI missed that this contains honey, which isn't vegan.",
    timestamp: new Date(2025, 3, 16, 11, 10),
    status: "pending",
  },
]

export function ReportsTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [data, setData] = useState(reports)

  // Filter reports based on search query and status filter
  const filteredReports = data.filter((report) => {
    const matchesSearch =
      searchQuery === "" ||
      report.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.feedback.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter.length === 0 || statusFilter.includes(report.status)

    return matchesSearch && matchesStatus
  })

  // Mark report as reviewed
  const markAsReviewed = (id: number) => {
    setData(data.map((report) => (report.id === id ? { ...report, status: "reviewed" } : report)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Reports</CardTitle>
        <CardDescription>Review and manage user feedback on AI recommendations</CardDescription>
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              placeholder="Search reports..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={statusFilter.includes("pending")}
                onCheckedChange={(checked) => {
                  setStatusFilter(checked ? [...statusFilter, "pending"] : statusFilter.filter((s) => s !== "pending"))
                }}
              >
                Pending
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={statusFilter.includes("reviewed")}
                onCheckedChange={(checked) => {
                  setStatusFilter(
                    checked ? [...statusFilter, "reviewed"] : statusFilter.filter((s) => s !== "reviewed"),
                  )
                }}
              >
                Reviewed
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="hidden md:table-cell">Feedback</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div className="font-medium">{report.user.name}</div>
                      <div className="text-xs text-gray-500">{report.user.email}</div>
                    </TableCell>
                    <TableCell>{report.product}</TableCell>
                    <TableCell className="hidden max-w-[300px] truncate md:table-cell">{report.feedback}</TableCell>
                    <TableCell>{format(report.timestamp, "MMM d, yyyy")}</TableCell>
                    <TableCell>
                      <Badge
                        variant={report.status === "pending" ? "outline" : "default"}
                        className={
                          report.status === "pending"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-500"
                            : "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-500"
                        }
                      >
                        {report.status === "pending" ? "Pending" : "Reviewed"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {report.status === "pending" ? (
                        <Button variant="ghost" size="sm" onClick={() => markAsReviewed(report.id)}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark as Reviewed
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" disabled>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Reviewed
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No reports found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
