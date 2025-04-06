"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, Clock } from "lucide-react"

export default function ForecastPanel() {
  const [view, setView] = useState("weekly")

  // Mock data for the forecast
  const weeklyData = [
    { day: "Mon", completed: 3, forecast: 4 },
    { day: "Tue", completed: 5, forecast: 5 },
    { day: "Wed", completed: 2, forecast: 3 },
    { day: "Thu", completed: 4, forecast: 4 },
    { day: "Fri", completed: 6, forecast: 5 },
    { day: "Sat", completed: 1, forecast: 2 },
    { day: "Sun", completed: 0, forecast: 1 },
  ]

  const monthlyData = [
    { week: "Week 1", completed: 12, forecast: 15 },
    { week: "Week 2", completed: 18, forecast: 20 },
    { week: "Week 3", completed: 15, forecast: 18 },
    { week: "Week 4", completed: 10, forecast: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-emerald-600" />
          <span className="font-medium">AI-Powered Delivery Estimates</span>
        </div>
      </div>

      <div className="h-64 relative">
        <Tabs value={view} onValueChange={setView} className="h-full">
          <TabsList className="absolute right-0 top-0 h-8 z-10">
            <TabsTrigger value="weekly" className="text-xs h-7">
              Weekly
            </TabsTrigger>
            <TabsTrigger value="monthly" className="text-xs h-7">
              Monthly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="m-0 absolute inset-0">
            <div className="flex h-full items-end gap-2 pt-10">
              {weeklyData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col items-center gap-1">
                    <div className="text-xs text-muted-foreground">{item.forecast}</div>
                    <div
                      className="w-full bg-gray-100 rounded-t-sm"
                      style={{ height: `${item.forecast * 10}px` }}
                    ></div>
                    <div
                      className="w-full bg-emerald-500 rounded-t-sm"
                      style={{ height: `${item.completed * 10}px` }}
                    ></div>
                  </div>
                  <div className="text-xs font-medium">{item.day}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-emerald-500 rounded-sm"></div>
                <span className="text-xs">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-100 rounded-sm"></div>
                <span className="text-xs">Forecast</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="m-0 absolute inset-0">
            <div className="flex h-full items-end gap-4 pt-10">
              {monthlyData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col items-center gap-1">
                    <div className="text-xs text-muted-foreground">{item.forecast}</div>
                    <div className="w-full bg-gray-100 rounded-t-sm" style={{ height: `${item.forecast * 3}px` }}></div>
                    <div
                      className="w-full bg-emerald-500 rounded-t-sm"
                      style={{ height: `${item.completed * 3}px` }}
                    ></div>
                  </div>
                  <div className="text-xs font-medium">{item.week}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-emerald-500 rounded-sm"></div>
                <span className="text-xs">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-100 rounded-sm"></div>
                <span className="text-xs">Forecast</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium">Avg. Completion</p>
            <p className="text-lg font-bold">2.4 days</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Calendar className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-medium">On-time Rate</p>
            <p className="text-lg font-bold">92%</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium">Efficiency Score</p>
            <p className="text-lg font-bold">8.7/10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

