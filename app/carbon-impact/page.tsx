"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Leaf, Award, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function CarbonImpactPage() {
  const [timeframe, setTimeframe] = useState("month")

  // Mock carbon impact data
  const carbonData = {
    totalSaved: 42.8,
    sessionsOffset: 28,
    totalSessions: 35,
    offsetPercentage: 80,
    ecoModePercentage: 75,
    monthlyEmissions: [
      { month: "Jan", emissions: 5.2, ecoEnabled: 3.9 },
      { month: "Feb", emissions: 6.8, ecoEnabled: 4.5 },
      { month: "Mar", emissions: 4.5, ecoEnabled: 3.8 },
      { month: "Apr", emissions: 7.2, ecoEnabled: 5.1 },
      { month: "May", emissions: 5.9, ecoEnabled: 4.7 },
      { month: "Jun", emissions: 6.3, ecoEnabled: 5.5 },
    ],
    weeklyEmissions: [
      { day: "Mon", emissions: 1.2, ecoEnabled: 0.9 },
      { day: "Tue", emissions: 1.5, ecoEnabled: 1.2 },
      { day: "Wed", emissions: 0.8, ecoEnabled: 0.7 },
      { day: "Thu", emissions: 1.7, ecoEnabled: 1.3 },
      { day: "Fri", emissions: 1.4, ecoEnabled: 1.1 },
      { day: "Sat", emissions: 0.5, ecoEnabled: 0.5 },
      { day: "Sun", emissions: 0.3, ecoEnabled: 0.3 },
    ],
    badges: ["Carbon Saver", "Eco Champion", "Climate Conscious"],
  }

  const chartData = timeframe === "month" ? carbonData.monthlyEmissions : carbonData.weeklyEmissions
  const labelKey = timeframe === "month" ? "month" : "day"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Carbon Impact</h1>
          <p className="text-muted-foreground">Track and reduce your digital carbon footprint</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
          <Leaf className="h-4 w-4" />
          Offset Carbon
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-emerald-50 border-emerald-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-emerald-800">Total Carbon Saved</CardTitle>
            <CardDescription className="text-emerald-700">Through eco-mode and offsets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-emerald-700">{carbonData.totalSaved}</span>
              <span className="text-xl font-medium text-emerald-600 mb-1">kg CO₂e</span>
            </div>
            <p className="text-sm text-emerald-600 mt-2">
              Equivalent to planting {Math.round(carbonData.totalSaved / 2)} trees
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Sessions Offset</CardTitle>
            <CardDescription>Handovers with carbon offset</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">{carbonData.sessionsOffset}</span>
              <span className="text-xl font-medium text-muted-foreground mb-1">/ {carbonData.totalSessions}</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Offset Percentage</span>
                <span className="font-medium">{carbonData.offsetPercentage}%</span>
              </div>
              <Progress value={carbonData.offsetPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Eco Mode Usage</CardTitle>
            <CardDescription>Handovers with eco mode enabled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">{carbonData.ecoModePercentage}%</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Target</span>
                <span className="font-medium">80%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${carbonData.ecoModePercentage >= 80 ? "bg-emerald-500" : "bg-amber-500"}`}
                  style={{ width: `${carbonData.ecoModePercentage}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle>Emissions Over Time</CardTitle>
              <CardDescription>Track your carbon footprint trends</CardDescription>
            </div>
            <Tabs value={timeframe} onValueChange={setTimeframe} className="w-[200px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="week">Weekly</TabsTrigger>
                <TabsTrigger value="month">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <div className="h-64 relative">
              <div className="flex h-full items-end gap-2">
                {chartData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col items-center gap-1">
                      <div className="text-xs text-muted-foreground">{item.emissions.toFixed(1)}</div>
                      <div
                        className="w-full bg-gray-100 rounded-t-sm"
                        style={{ height: `${item.emissions * 20}px` }}
                      ></div>
                      <div
                        className="w-full bg-emerald-500 rounded-t-sm"
                        style={{ height: `${item.ecoEnabled * 20}px` }}
                      ></div>
                    </div>
                    <div className="text-xs font-medium">{item[labelKey]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-100 rounded-sm"></div>
                <span className="text-sm">Total Emissions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-emerald-500 rounded-sm"></div>
                <span className="text-sm">Eco Mode Enabled</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Badges</CardTitle>
            <CardDescription>Achievements for your environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {carbonData.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full"
                >
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Offset Partners</CardTitle>
            <CardDescription>Organizations we work with to offset carbon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">KlimaDAO</p>
                    <p className="text-sm text-muted-foreground">Blockchain-based carbon offsets</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Visit</span>
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Carbon Collective</p>
                    <p className="text-sm text-muted-foreground">Reforestation projects</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Visit</span>
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Digital Cleanup Foundation</p>
                    <p className="text-sm text-muted-foreground">Digital waste reduction</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Visit</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

