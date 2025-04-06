import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle, XCircle, MessageSquare, Shield, Info, Clock } from "lucide-react"
import NotificationItem from "@/components/notifications/notification-item"

export default function NotificationsPage() {
  // Mock notification data
  const notifications = [
    {
      id: "1",
      type: "handover_request",
      title: "New Handover Request",
      message: "Alex Johnson sent you a handover for Website Redesign project",
      time: "10 minutes ago",
      read: false,
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      action: "View",
    },
    {
      id: "2",
      type: "handover_accepted",
      title: "Handover Accepted",
      message: "Sarah Williams accepted your handover for Mobile App Development",
      time: "2 hours ago",
      read: false,
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
      action: "View",
    },
    {
      id: "3",
      type: "handover_rejected",
      title: "Handover Rejected",
      message: "Michael Chen rejected your handover for Data Migration project",
      time: "Yesterday",
      read: true,
      icon: <XCircle className="h-5 w-5 text-red-600" />,
      action: "View",
    },
    {
      id: "4",
      type: "comment",
      title: "New Comment",
      message: "Alex Johnson commented on your Website Redesign handover",
      time: "Yesterday",
      read: true,
      icon: <MessageSquare className="h-5 w-5 text-purple-600" />,
      action: "Reply",
    },
    {
      id: "5",
      type: "blockchain",
      title: "Blockchain Verification",
      message: "Your handover for Marketing Campaign has been verified on the blockchain",
      time: "2 days ago",
      read: true,
      icon: <Shield className="h-5 w-5 text-emerald-600" />,
      action: "View",
    },
    {
      id: "6",
      type: "system",
      title: "System Update",
      message: "HANDOVER has been updated with new features. Check out what's new!",
      time: "3 days ago",
      read: true,
      icon: <Info className="h-5 w-5 text-blue-600" />,
      action: "Learn More",
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          {unreadCount > 0 && <Badge className="bg-blue-500">{unreadCount} new</Badge>}
        </div>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          Mark All as Read
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Notification Center</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="handovers">Handovers</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="unread">
              <div className="space-y-4">
                {notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="handovers">
              <div className="space-y-4">
                {notifications
                  .filter((n) => ["handover_request", "handover_accepted", "handover_rejected"].includes(n.type))
                  .map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="comments">
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.type === "comment")
                  .map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="system">
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.type === "system")
                  .map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

