"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserPlus, Mail, Search, ExternalLink, MoreHorizontal, UserCheck, Clock } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TeamManagementPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const [view, setView] = useState<"cards" | "table">("table")

  // Mock team members data
  const teamMembers = [
    {
      id: "u1",
      name: "Jordan Smith",
      email: "jordan.smith@example.com",
      role: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      lastActivity: "10 minutes ago",
      sessionsSent: 28,
      status: "active",
    },
    {
      id: "u2",
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Contributor",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
      lastActivity: "2 hours ago",
      sessionsSent: 15,
      status: "active",
    },
    {
      id: "u3",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "Contributor",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
      lastActivity: "Yesterday",
      sessionsSent: 22,
      status: "active",
    },
    {
      id: "u4",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      role: "Viewer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      lastActivity: "3 days ago",
      sessionsSent: 7,
      status: "active",
    },
    {
      id: "u5",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Contributor",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ED",
      lastActivity: "1 week ago",
      sessionsSent: 12,
      status: "inactive",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Manage your team members and their permissions</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-md px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input className="border-0 p-0 shadow-none focus-visible:ring-0 text-sm" placeholder="Search members..." />
          </div>
          <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                <UserPlus className="h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>Send an invitation to join your HANDOVER team.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="colleague@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="contributor">
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="contributor">Contributor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <textarea
                    id="message"
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="I'd like to invite you to collaborate on our project..."
                  ></textarea>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsInviteOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2" onClick={() => setIsInviteOpen(false)}>
                  <Mail className="h-4 w-4" />
                  Send Invitation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team and their access levels</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Tabs value={view} onValueChange={(value) => setView(value as "cards" | "table")} className="w-[180px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="table">Table</TabsTrigger>
                  <TabsTrigger value="cards">Cards</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {view === "table" ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Activity</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Sessions Sent</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="border-b">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Select defaultValue={member.role.toLowerCase()}>
                          <SelectTrigger className="w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="contributor">Contributor</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{member.lastActivity}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{member.sessionsSent}</td>
                      <td className="py-3 px-4">
                        <Badge variant={member.status === "active" ? "default" : "secondary"}>
                          {member.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Member History
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Remove Member</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <Badge variant={member.status === "active" ? "default" : "secondary"}>
                          {member.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Role</span>
                          <Select defaultValue={member.role.toLowerCase()}>
                            <SelectTrigger className="w-[130px] h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="contributor">Contributor</SelectItem>
                              <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Last Activity</span>
                          <span className="text-sm">{member.lastActivity}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Sessions Sent</span>
                          <span className="text-sm">{member.sessionsSent}</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t p-3 bg-gray-50 flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        View History
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <UserCheck className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium">Role Permissions</p>
              <div className="text-sm text-muted-foreground mt-1 space-y-1">
                <p>
                  <strong>Admin:</strong> Full access to all features, can manage team members and settings.
                </p>
                <p>
                  <strong>Contributor:</strong> Can create, send, and manage their own handovers.
                </p>
                <p>
                  <strong>Viewer:</strong> Can view handovers shared with them, but cannot create new ones.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

