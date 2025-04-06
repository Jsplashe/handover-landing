import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, MessageSquare, FileText, Shield, Filter, Calendar } from "lucide-react"

export default function ActivityLogPage() {
  // Mock activity data
  const activities = [
    {
      id: "a1",
      action: "submitted",
      actor: {
        name: "Jordan Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JS",
      },
      timestamp: "Today, 10:30 AM",
      project: "Website Redesign",
      sessionId: "h1",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
    },
    {
      id: "a2",
      action: "accepted",
      actor: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AJ",
      },
      timestamp: "Today, 11:45 AM",
      project: "Website Redesign",
      sessionId: "h1",
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
    },
    {
      id: "a3",
      action: "commented",
      actor: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
      timestamp: "Yesterday, 3:20 PM",
      project: "Mobile App Development",
      sessionId: "h2",
      icon: <MessageSquare className="h-5 w-5 text-purple-600" />,
    },
    {
      id: "a4",
      action: "rejected",
      actor: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      timestamp: "Yesterday, 5:15 PM",
      project: "Marketing Campaign",
      sessionId: "h3",
      icon: <XCircle className="h-5 w-5 text-red-600" />,
    },
    {
      id: "a5",
      action: "verified",
      actor: {
        name: "System",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SY",
      },
      timestamp: "2 days ago, 9:10 AM",
      project: "Data Migration",
      sessionId: "h4",
      icon: <Shield className="h-5 w-5 text-emerald-600" />,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Activity Log</h1>
          <p className="text-muted-foreground">Track all handover activities across your team</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="website">Website Redesign</SelectItem>
              <SelectItem value="mobile">Mobile App Development</SelectItem>
              <SelectItem value="marketing">Marketing Campaign</SelectItem>
              <SelectItem value="data">Data Migration</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-64 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Filter By</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Actor</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select actor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Actors</SelectItem>
                    <SelectItem value="js">Jordan Smith</SelectItem>
                    <SelectItem value="aj">Alex Johnson</SelectItem>
                    <SelectItem value="sw">Sarah Williams</SelectItem>
                    <SelectItem value="mc">Michael Chen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Action Type</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Actions</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="commented">Commented</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Time Range</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2">
                <Button className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Custom Range
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Activity Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Activities</span>
                <span className="font-medium">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">This Week</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Your Activities</span>
                <span className="font-medium">18</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="flex-1">
          <CardHeader className="pb-3">
            <CardTitle>Activity Timeline</CardTitle>
            <CardDescription>Recent handover activities across your team</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="mine">Mine</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {activities.map((activity) => (
                      <ActivityItem key={activity.id} activity={activity} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mine">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {activities
                      .filter((a) => a.actor.name === "Jordan Smith")
                      .map((activity) => (
                        <ActivityItem key={activity.id} activity={activity} />
                      ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accepted">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {activities
                      .filter((a) => a.action === "accepted")
                      .map((activity) => (
                        <ActivityItem key={activity.id} activity={activity} />
                      ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rejected">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {activities
                      .filter((a) => a.action === "rejected")
                      .map((activity) => (
                        <ActivityItem key={activity.id} activity={activity} />
                      ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface ActivityItemProps {
  activity: {
    id: string
    action: string
    actor: {
      name: string
      avatar: string
      initials: string
    }
    timestamp: string
    project: string
    sessionId: string
    icon: React.ReactNode
  }
}

function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="relative pl-12 transition-all hover:bg-gray-50 p-4 rounded-lg">
      <div className="absolute left-0 p-1 rounded-full bg-white">{activity.icon}</div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={activity.actor.avatar} alt={activity.actor.name} />
              <AvatarFallback>{activity.actor.initials}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{activity.actor.name}</span>
            <Badge
              className={`
              ${activity.action === "submitted" ? "bg-blue-500" : ""}
              ${activity.action === "accepted" ? "bg-emerald-500" : ""}
              ${activity.action === "rejected" ? "bg-red-500" : ""}
              ${activity.action === "commented" ? "bg-purple-500" : ""}
              ${activity.action === "verified" ? "bg-emerald-500" : ""}
            `}
            >
              {activity.action}
            </Badge>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-muted-foreground">
              Project: <span className="font-medium">{activity.project}</span>
            </p>
            <span className="text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="md:self-end">
          View Session
        </Button>
      </div>
    </div>
  )
}

