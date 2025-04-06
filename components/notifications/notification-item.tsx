import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationItemProps {
  notification: {
    id: string
    type: string
    title: string
    message: string
    time: string
    read: boolean
    icon: React.ReactNode
    action: string
  }
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border transition-colors",
        notification.read ? "bg-white" : "bg-blue-50 border-blue-100",
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">{notification.icon}</div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
            <h4 className={cn("font-medium", !notification.read && "font-semibold")}>{notification.title}</h4>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
          <div className="mt-3 flex justify-between items-center">
            <Button variant="ghost" size="sm" className="h-8 px-3">
              {notification.action}
            </Button>
            {!notification.read && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

