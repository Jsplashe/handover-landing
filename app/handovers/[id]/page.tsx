import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Shield,
  Clock,
  FileText,
  CheckCircle,
  XCircle,
  MessageSquare,
  Copy,
  ExternalLink,
  ChevronRight,
  Home,
} from "lucide-react"
import AISummarySidebar from "@/components/ai-summary-sidebar"
import BlockchainTransactionViewer from "@/components/blockchain-transaction-viewer"

export default function HandoverDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in a real app, this would be fetched based on the ID
  const handover = {
    id: params.id,
    title: "Website Redesign - Frontend Handover",
    status: "pending",
    sender: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
    },
    recipient: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
    },
    project: "Website Redesign",
    timeLogged: 12.5,
    createdAt: "2023-09-15T10:30:00Z",
    blockchainHash: "0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5f4e3d2b1a",
    summary:
      "Completed the frontend redesign for the homepage and about sections. All components are responsive and follow the new design system. Included documentation for the component library.",
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/dashboard" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          <span>Dashboard</span>
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/sessions" className="hover:text-foreground">
          My Sessions
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>Handover #{handover.id}</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{handover.title}</h1>
            {handover.status === "pending" && <Badge className="bg-amber-500">Pending</Badge>}
            {handover.status === "accepted" && <Badge className="bg-emerald-500">Accepted</Badge>}
            {handover.status === "rejected" && <Badge className="bg-red-500">Rejected</Badge>}
          </div>
          <p className="text-muted-foreground">Handover ID: {handover.id}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Export
          </Button>
          <BlockchainTransactionViewer />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Handover Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Sender</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={handover.sender.avatar} alt={handover.sender.name} />
                        <AvatarFallback>{handover.sender.initials}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{handover.sender.name}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Recipient</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={handover.recipient.avatar} alt={handover.recipient.name} />
                        <AvatarFallback>{handover.recipient.initials}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{handover.recipient.name}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Project</p>
                    <p className="font-medium">{handover.project}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Time Logged</p>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="font-medium">{handover.timeLogged} hours</p>
                    </div>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm text-muted-foreground">Blockchain Hash</p>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      <div className="flex items-center gap-2 bg-gray-50 p-1 rounded overflow-hidden flex-1">
                        <p className="font-mono text-sm truncate">{handover.blockchainHash}</p>
                        <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Summary</p>
                  <p>{handover.summary}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chain of Custody</CardTitle>
              <CardDescription>Track the complete history of this handover</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {[
                    {
                      id: "1",
                      status: "created",
                      title: "Handover Created",
                      description: "Jordan Smith created the handover",
                      timestamp: "Sep 15, 2023 - 10:30 AM",
                      icon: <Shield className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      id: "2",
                      status: "verified",
                      title: "Blockchain Verification",
                      description: "Handover verified on the blockchain",
                      timestamp: "Sep 15, 2023 - 10:31 AM",
                      icon: <Shield className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      id: "3",
                      status: "pending",
                      title: "Awaiting Acceptance",
                      description: "Waiting for Alex Johnson to accept",
                      timestamp: "Current Status",
                      icon: <Clock className="h-5 w-5 text-amber-500" />,
                    },
                  ].map((event) => (
                    <div key={event.id} className="relative pl-10">
                      <div className="absolute left-0 p-1 rounded-full bg-white">{event.icon}</div>
                      <div>
                        <h4 className="text-base font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <p
                          className={`text-xs mt-1 ${
                            event.status === "pending" ? "text-amber-500 font-medium" : "text-gray-500"
                          }`}
                        >
                          {event.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit Log</CardTitle>
              <CardDescription>Detailed record of all actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Action</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actor</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Timestamp</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "1",
                        action: "Created Handover",
                        actor: {
                          name: "Jordan Smith",
                          avatar: "/placeholder.svg?height=32&width=32",
                          initials: "JS",
                        },
                        timestamp: "Sep 15, 2023 - 10:30 AM",
                        notes: "Initial handover creation",
                      },
                      {
                        id: "2",
                        action: "Blockchain Verification",
                        actor: {
                          name: "System",
                          avatar: "/placeholder.svg?height=32&width=32",
                          initials: "SY",
                        },
                        timestamp: "Sep 15, 2023 - 10:31 AM",
                        notes: "Hash: 0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5f4e3d2b1a",
                      },
                      {
                        id: "3",
                        action: "Viewed Handover",
                        actor: {
                          name: "Alex Johnson",
                          avatar: "/placeholder.svg?height=32&width=32",
                          initials: "AJ",
                        },
                        timestamp: "Sep 15, 2023 - 11:45 AM",
                        notes: "Recipient viewed the handover details",
                      },
                    ].map((log) => (
                      <tr key={log.id} className="border-b">
                        <td className="py-3 px-4 font-medium">{log.action}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={log.actor.avatar} alt={log.actor.name} />
                              <AvatarFallback>{log.actor.initials}</AvatarFallback>
                            </Avatar>
                            <span>{log.actor.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{log.timestamp}</td>
                        <td className="py-3 px-4 text-sm">{log.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <AISummarySidebar handoverId={handover.id} />

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {handover.status === "pending" && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Accept Handover
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Accept Handover</AlertDialogTitle>
                        <AlertDialogDescription>
                          You're about to accept this handover. This action will be recorded on the blockchain and
                          cannot be undone. Are you sure you want to proceed?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-emerald-600 hover:bg-emerald-700">Accept</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full gap-2">
                        <XCircle className="h-4 w-4" />
                        Reject Handover
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Reject Handover</AlertDialogTitle>
                        <AlertDialogDescription>
                          You're about to reject this handover. Please provide a reason for rejection.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <Textarea placeholder="Reason for rejection..." className="my-4" />
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600 hover:bg-red-700">Reject</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              )}

              <div className="pt-4 space-y-4">
                <p className="text-sm font-medium">Add Comment</p>
                <Textarea placeholder="Add your comment here..." className="min-h-[100px]" />
                <Button className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Add Comment
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attachments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">design-specs.pdf</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium">component-library.zip</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">handover-notes.md</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

