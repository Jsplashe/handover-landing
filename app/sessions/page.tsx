import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, FileSignature, CheckCircle, XCircle, Clock, Eye } from "lucide-react"

export default function SessionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Sessions</h1>
          <p className="text-muted-foreground">View and manage all your handover sessions</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
          <FileSignature className="h-4 w-4" />
          New Handover
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search sessions..." className="pl-8 pr-4" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
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
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Handover Sessions</CardTitle>
              <CardDescription>View all your sent and received handovers</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <CheckCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Table</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="h-1.5 w-1.5 rounded-sm bg-current"></div>
                  <div className="h-1.5 w-1.5 rounded-sm bg-current"></div>
                  <div className="h-1.5 w-1.5 rounded-sm bg-current"></div>
                  <div className="h-1.5 w-1.5 rounded-sm bg-current"></div>
                </div>
                <span className="hidden sm:inline">Cards</span>
              </Button>
            </div>
          </div>
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
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project</th>
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
                        project: "Website Redesign",
                        date: "2023-09-15",
                        status: "pending",
                      },
                      {
                        id: "h3",
                        title: "Marketing Campaign - Content Delivery",
                        recipient: { name: "Michael Chen", initials: "MC" },
                        project: "Marketing Campaign",
                        date: "2023-09-05",
                        status: "rejected",
                      },
                      {
                        id: "h5",
                        title: "UI Component Library",
                        recipient: { name: "Sarah Williams", initials: "SW" },
                        project: "Website Redesign",
                        date: "2023-08-28",
                        status: "completed",
                      },
                      {
                        id: "h7",
                        title: "User Authentication Flow",
                        recipient: { name: "Alex Johnson", initials: "AJ" },
                        project: "Mobile App Development",
                        date: "2023-08-15",
                        status: "completed",
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
                        <td className="py-3 px-4">{handover.project}</td>
                        <td className="py-3 px-4">{handover.date}</td>
                        <td className="py-3 px-4">
                          {handover.status === "pending" && (
                            <Badge className="bg-amber-500 flex items-center gap-1 w-fit">
                              <Clock className="h-3 w-3" />
                              Pending
                            </Badge>
                          )}
                          {handover.status === "completed" && (
                            <Badge className="bg-emerald-500 flex items-center gap-1 w-fit">
                              <CheckCircle className="h-3 w-3" />
                              Completed
                            </Badge>
                          )}
                          {handover.status === "rejected" && (
                            <Badge className="bg-red-500 flex items-center gap-1 w-fit">
                              <XCircle className="h-3 w-3" />
                              Rejected
                            </Badge>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Eye className="h-4 w-4" />
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
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project</th>
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
                        project: "Mobile App Development",
                        date: "2023-09-10",
                        status: "completed",
                      },
                      {
                        id: "h4",
                        title: "Data Migration - Database Schema",
                        sender: { name: "Michael Chen", initials: "MC" },
                        project: "Data Migration",
                        date: "2023-09-01",
                        status: "pending",
                      },
                      {
                        id: "h6",
                        title: "Analytics Dashboard Design",
                        sender: { name: "Sarah Williams", initials: "SW" },
                        project: "Website Redesign",
                        date: "2023-08-20",
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
                        <td className="py-3 px-4">{handover.project}</td>
                        <td className="py-3 px-4">{handover.date}</td>
                        <td className="py-3 px-4">
                          {handover.status === "pending" && (
                            <Badge className="bg-amber-500 flex items-center gap-1 w-fit">
                              <Clock className="h-3 w-3" />
                              Pending
                            </Badge>
                          )}
                          {handover.status === "completed" && (
                            <Badge className="bg-emerald-500 flex items-center gap-1 w-fit">
                              <CheckCircle className="h-3 w-3" />
                              Completed
                            </Badge>
                          )}
                          {handover.status === "rejected" && (
                            <Badge className="bg-red-500 flex items-center gap-1 w-fit">
                              <XCircle className="h-3 w-3" />
                              Rejected
                            </Badge>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Eye className="h-4 w-4" />
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
      </Card>
    </div>
  )
}

