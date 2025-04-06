import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HandoverListProps {
  type: "sent" | "received"
}

export default function HandoverList({ type }: HandoverListProps) {
  // Mock data
  const handovers = [
    {
      id: "h1",
      title: "Website Redesign - Frontend Handover",
      status: "pending",
      date: "2023-09-15",
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
    },
    {
      id: "h2",
      title: "Mobile App Development - API Integration",
      status: "completed",
      date: "2023-09-10",
      sender: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
      recipient: {
        name: "Jordan Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JS",
      },
      project: "Mobile App Development",
    },
    {
      id: "h3",
      title: "Marketing Campaign - Content Delivery",
      status: "rejected",
      date: "2023-09-05",
      sender: {
        name: "Jordan Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JS",
      },
      recipient: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      project: "Marketing Campaign",
    },
    {
      id: "h4",
      title: "Data Migration - Database Schema",
      status: "in_progress",
      date: "2023-09-01",
      sender: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      recipient: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
      project: "Data Migration",
    },
  ]

  // Filter handovers based on type
  const filteredHandovers =
    type === "sent"
      ? handovers.filter((h) => h.sender.name === "Jordan Smith")
      : handovers.filter((h) => h.recipient.name === "Jordan Smith")

  return (
    <div className="space-y-4">
      {filteredHandovers.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No handovers found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Title</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  {type === "sent" ? "Recipient" : "Sender"}
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHandovers.map((handover) => (
                <tr key={handover.id} className="border-b">
                  <td className="py-3 px-4">
                    <div className="font-medium">{handover.title}</div>
                    <div className="text-sm text-muted-foreground">{handover.project}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={type === "sent" ? handover.recipient.avatar : handover.sender.avatar}
                          alt={type === "sent" ? handover.recipient.name : handover.sender.name}
                        />
                        <AvatarFallback>
                          {type === "sent" ? handover.recipient.initials : handover.sender.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span>{type === "sent" ? handover.recipient.name : handover.sender.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{handover.date}</td>
                  <td className="py-3 px-4">
                    {handover.status === "pending" && <Badge className="bg-amber-500">Pending</Badge>}
                    {handover.status === "completed" && <Badge className="bg-emerald-500">Completed</Badge>}
                    {handover.status === "rejected" && <Badge className="bg-red-500">Rejected</Badge>}
                    {handover.status === "in_progress" && <Badge className="bg-blue-500">In Progress</Badge>}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Link href={`/handovers/${handover.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

