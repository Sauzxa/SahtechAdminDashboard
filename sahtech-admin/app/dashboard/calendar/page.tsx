import { CalendarView } from "@/components/dashboard/calendar-view"

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Advertisement Calendar</h2>
      </div>

      <CalendarView />
    </div>
  )
}
