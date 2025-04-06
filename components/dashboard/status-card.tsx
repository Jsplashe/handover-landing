import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUp, ArrowDown } from "lucide-react"

interface StatusCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend: {
    value: string
    direction: "up" | "down" | "neutral"
  }
  className?: string
  iconClassName?: string
}

export default function StatusCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  iconClassName,
}: StatusCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", iconClassName)}>{icon}</div>
        </div>

        <div className="mt-4 flex items-center">
          {trend.direction === "up" && (
            <div className="flex items-center text-emerald-600 text-xs font-medium">
              <ArrowUp className="h-3 w-3 mr-1" />
              {trend.value}
            </div>
          )}
          {trend.direction === "down" && (
            <div className="flex items-center text-red-600 text-xs font-medium">
              <ArrowDown className="h-3 w-3 mr-1" />
              {trend.value}
            </div>
          )}
          {trend.direction === "neutral" && (
            <div className="flex items-center text-gray-600 text-xs font-medium">{trend.value}</div>
          )}
          <span className="text-xs text-muted-foreground ml-2">vs. last week</span>
        </div>
      </CardContent>
    </Card>
  )
}

