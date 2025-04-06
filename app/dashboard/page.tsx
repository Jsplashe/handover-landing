import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  FileSignature,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Leaf,
  BarChart3,
  ArrowRight,
  Info,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Jordan. Here's an overview of your handovers.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
          <FileSignature className="h-4 w-4" />
          New Handover
        </Button>
      </div>

      {/* Optional Banner */}
      <Card className="bg-blue-50 border-blue-100">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800">Getting Started</p>
              <p className="text-sm text-blue-700 mt-1">
                Complete your profile and connect your wallet to enable blockchain verification for your handovers.
              </p>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto text-blue-700 hover:text-blue-800 hover:bg-blue-100">
              Dismiss
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">In Progress</p>
                <h3 className="text-2xl font-bold">5</h3>
                <p className="text-xs text-muted-foreground mt-1">Active handovers</p>
              </div>
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Completed</p>
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-xs text-muted-foreground mt-1">Successful handovers</p>
              </div>
              <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Pending</p>
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-xs text-muted-foreground mt-1">Awaiting action</p>
              </div>
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Rejected</p>
                <h3 className="text-2xl font-bold">1</h3>
                <p className="text-xs text-muted-foreground mt-1">Declined handovers</p>
              </div>
              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              AI Forecast Overview
            </CardTitle>
            <CardDescription>AI-powered delivery estimates and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md border border-dashed">
              <div className="text-center">
                <Sparkles className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium">AI Forecast Panel</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mt-1">
                  Visualize your handover trends and get AI-powered predictions for completion times.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-emerald-600" />
              Eco Impact
            </CardTitle>
            <CardDescription>Your environmental contribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative h-32 w-32">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-100"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-emerald-500"
                    strokeWidth="10"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * 84) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">84%</span>
                  <span className="text-xs text-muted-foreground">Eco Sessions</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Carbon Saved</p>
                <p className="text-2xl font-bold">28.5 kg CO₂e</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full gap-2">
              <Leaf className="h-4 w-4" />
              View Full Impact
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
          <CardDescription>View and manage your handover sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sent" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="received">Received</TabsTrigger>
            </TabsList>
            <TabsContent value="sent">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Title</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Recipient</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "h1",
                        title: "Website Redesign - Frontend Handover",
                        recipient: { name: "Alex Johnson", initials: "AJ" },
                        date: "2023-09-15",
                        status: "pending",
                      },
                      {
                        id: "h3",
                        title: "Marketing Campaign - Content Delivery",
                        recipient: { name: "Michael Chen", initials: "MC" },
                        date: "2023-09-05",
                        status: "rejected",
                      },
                    ].map((handover) => (
                      <tr key={handover.id} className="border-b">
                        <td className="py-3 px-4">
                          <div className="font-medium">{handover.title}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={handover.recipient.name} />
                              <AvatarFallback>{handover.recipient.initials}</AvatarFallback>
                            </Avatar>
                            <span>{handover.recipient.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{handover.date}</td>
                        <td className="py-3 px-4">
                          {handover.status === "pending" && <Badge className="bg-amber-500">Pending</Badge>}
                          {handover.status === "completed" && <Badge className="bg-emerald-500">Completed</Badge>}
                          {handover.status === "rejected" && <Badge className="bg-red-500">Rejected</Badge>}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="received">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Title</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Sender</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "h2",
                        title: "Mobile App Development - API Integration",
                        sender: { name: "Sarah Williams", initials: "SW" },
                        date: "2023-09-10",
                        status: "completed",
                      },
                      {
                        id: "h4",
                        title: "Data Migration - Database Schema",
                        sender: { name: "Michael Chen", initials: "MC" },
                        date: "2023-09-01",
                        status: "pending",
                      },
                    ].map((handover) => (
                      <tr key={handover.id} className="border-b">
                        <td className="py-3 px-4">
                          <div className="font-medium">{handover.title}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={handover.sender.name} />
                              <AvatarFallback>{handover.sender.initials}</AvatarFallback>
                            </Avatar>
                            <span>{handover.sender.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{handover.date}</td>
                        <td className="py-3 px-4">
                          {handover.status === "pending" && <Badge className="bg-amber-500">Pending</Badge>}
                          {handover.status === "completed" && <Badge className="bg-emerald-500">Completed</Badge>}
                          {handover.status === "rejected" && <Badge className="bg-red-500">Rejected</Badge>}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button variant="outline" className="w-full gap-2">
            View All Sessions
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 gap-2">
              <FileSignature className="h-4 w-4" />
              Start New Handover
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <BarChart3 className="h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Leaf className="h-4 w-4" />
              Offset Carbon
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

