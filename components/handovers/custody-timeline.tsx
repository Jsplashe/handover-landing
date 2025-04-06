import { CheckCircle, Clock, Shield } from "lucide-react"

interface CustodyTimelineProps {
  handoverId: string
}

export default function CustodyTimeline({ handoverId }: CustodyTimelineProps) {
  // Mock data - in a real app, this would be fetched based on the handover ID
  const timelineEvents = [
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
    {
      id: "4",
      status: "future",
      title: "Handover Acceptance",
      description: "Pending recipient action",
      timestamp: "Pending",
      icon: <CheckCircle className="h-5 w-5 text-gray-300" />,
    },
    {
      id: "5",
      status: "future",
      title: "Handover Completion",
      description: "Pending completion",
      timestamp: "Pending",
      icon: <CheckCircle className="h-5 w-5 text-gray-300" />,
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="relative pl-10">
            <div
              className={`absolute left-0 p-1 rounded-full ${event.status === "future" ? "bg-gray-100" : "bg-white"}`}
            >
              {event.icon}
            </div>
            <div>
              <h4 className="text-base font-medium">{event.title}</h4>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <p
                className={`text-xs mt-1 ${
                  event.status === "pending"
                    ? "text-amber-500 font-medium"
                    : event.status === "future"
                      ? "text-gray-400"
                      : "text-gray-500"
                }`}
              >
                {event.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

