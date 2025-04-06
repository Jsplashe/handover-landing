"use client"

import { Leaf, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function EcoImpactPanel() {
  // Mock data for eco impact
  const ecoData = {
    carbonSaved: 28.5,
    ecoSessions: 42,
    totalSessions: 50,
    ecoPercentage: 84,
    rank: "Top 10%",
    badges: ["Carbon Saver", "Eco Champion"],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Leaf className="h-5 w-5 text-emerald-600" />
        <span className="font-medium">Your Environmental Impact</span>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative h-32 w-32">
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-100"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            <circle
              className="text-emerald-500"
              strokeWidth="10"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * ecoData.ecoPercentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{ecoData.ecoPercentage}%</span>
            <span className="text-xs text-muted-foreground">Eco Sessions</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">Carbon Saved</p>
          <p className="text-2xl font-bold">{ecoData.carbonSaved} kg CO₂e</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Eco Mode Sessions</span>
            <span className="font-medium">
              {ecoData.ecoSessions}/{ecoData.totalSessions}
            </span>
          </div>
          <Progress value={ecoData.ecoPercentage} className="h-2" />
        </div>

        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="font-medium">Eco Rank</p>
              <p className="text-sm text-emerald-700">{ecoData.rank} of users</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {ecoData.badges.map((badge, index) => (
            <div key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

