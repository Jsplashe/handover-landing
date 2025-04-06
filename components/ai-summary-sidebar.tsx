"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, RefreshCw, Clock, CheckCircle } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface AISummarySidebarProps {
  handoverId?: string
  className?: string
}

export default function AISummarySidebar({ handoverId, className }: AISummarySidebarProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState<string[] | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string | null>("March 15, 2023 - 10:30 AM")

  // Mock function to generate summary
  const generateSummary = () => {
    setIsLoading(true)
    setSummary(null)

    // Simulate API call delay
    setTimeout(() => {
      const mockSummary = [
        "Frontend components completed with responsive design",
        "API integration for user authentication implemented",
        "Documentation updated with new endpoints",
        "Performance optimizations reduced load time by 30%",
        "Cross-browser testing completed on Chrome, Firefox, and Safari",
      ]

      setSummary(mockSummary)
      setLastUpdated(new Date().toLocaleString())
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <CardTitle>AI Summary</CardTitle>
          </div>
          {summary && (
            <Button variant="ghost" size="icon" onClick={generateSummary} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!summary && !isLoading ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <Sparkles className="h-10 w-10 text-emerald-600 mb-3" />
            <h3 className="font-medium text-lg mb-1">Generate AI Summary</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Let AI analyze this handover and create a concise summary
            </p>
            <Button onClick={generateSummary} className="bg-emerald-600 hover:bg-emerald-700 gap-2">
              <Sparkles className="h-4 w-4" />
              Generate Summary
            </Button>
          </div>
        ) : isLoading ? (
          <div className="space-y-3 py-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
        ) : (
          <ul className="space-y-2">
            {summary?.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      {lastUpdated && summary && (
        <CardFooter className="pt-0 text-xs text-muted-foreground border-t mt-2 pt-3">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

