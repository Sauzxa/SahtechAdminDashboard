"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock notifications data
const notifications = [
  {
    id: 1,
    type: "report",
    title: "New user report",
    message: "User reported an incorrect AI recommendation",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "contract",
    title: "Contract expiring soon",
    message: "NutriBoost advertisement contract expires in 7 days",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "report",
    title: "New user report",
    message: "User reported an incorrect AI recommendation",
    time: "Yesterday",
    read: true,
  },
]

export function NotificationsPopover() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [notificationsList, setNotificationsList] = useState(notifications)

  const unreadCount = notificationsList.filter((n) => !n.read).length

  const markAllAsRead = () => {
    setNotificationsList(notificationsList.map((n) => ({ ...n, read: true })))
  }

  const filteredNotifications =
    activeTab === "all" ? notificationsList : notificationsList.filter((n) => n.type === activeTab)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white">
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="flex items-center justify-between border-b pb-2">
          <h4 className="font-medium">Notifications</h4>
          <Button variant="ghost" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
            Mark all as read
          </Button>
        </div>
        <Tabs defaultValue="all" className="mt-2" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="report">Reports</TabsTrigger>
            <TabsTrigger value="contract">Contracts</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="max-h-[300px] overflow-y-auto">
            {filteredNotifications.length > 0 ? (
              <div className="space-y-2">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "rounded-lg border p-3",
                      notification.read ? "bg-transparent" : "bg-teal-50 dark:bg-teal-900/20",
                    )}
                  >
                    <div className="flex justify-between">
                      <h5 className="font-medium">{notification.title}</h5>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{notification.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-sm text-gray-500">No notifications</div>
            )}
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}
