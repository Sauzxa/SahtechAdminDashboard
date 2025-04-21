import { ReportsTable } from "@/components/dashboard/reports-table"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">User Reports</h2>
      </div>

      <ReportsTable />
    </div>
  )
}
