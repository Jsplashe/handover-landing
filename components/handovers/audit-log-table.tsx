import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AuditLogTableProps {
  handoverId: string
}

export default function AuditLogTable({ handoverId }: AuditLogTableProps) {
  // Mock data - in a real app, this would be fetched based on the handover ID
  const auditLogs = [
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
    {
      id: "4",
      action: "Downloaded Attachment",
      actor: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      timestamp: "Sep 15, 2023 - 11:50 AM",
      notes: "Downloaded: design-specs.pdf",
    },
  ]

  return (
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
          {auditLogs.map((log) => (
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
  )
}

