"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileUploader } from "@/components/handovers/file-uploader"
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
import { Shield, Leaf, ArrowLeft, ArrowRight, CheckCircle, FileText, Clock } from "lucide-react"

export default function HandoverWizardPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    project: "",
    recipient: "",
    summary: "",
    hours: 0,
    files: [],
    blockchainVerification: true,
    ecoMode: true,
  })

  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    // In a real app, this would submit the form data
    console.log("Form submitted:", formData)
    router.push("/dashboard")
  }

  const updateFormData = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <a href="/dashboard" className="hover:text-foreground">
          Dashboard
        </a>
        <span>/</span>
        <span>New Handover</span>
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Handover</h1>
        <p className="text-muted-foreground">Complete the steps below to create a new handover</p>
      </div>

      <div className="relative mb-6">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-emerald-600 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep > index + 1
                    ? "bg-emerald-600 text-white"
                    : currentStep === index + 1
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {currentStep > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
              </div>
              <span className="text-xs mt-1 text-muted-foreground hidden sm:block">
                {index === 0 && "Project & Recipient"}
                {index === 1 && "Summary & Time"}
                {index === 2 && "Files"}
                {index === 3 && "Settings"}
                {index === 4 && "Review"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === 1 && "Step 1: Project & Recipient"}
            {currentStep === 2 && "Step 2: Add Summary & Time"}
            {currentStep === 3 && "Step 3: Upload Files"}
            {currentStep === 4 && "Step 4: Settings"}
            {currentStep === 5 && "Step 5: Review & Submit"}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Select the project and recipient for your handover"}
            {currentStep === 2 && "Provide a detailed summary and log your time"}
            {currentStep === 3 && "Upload any relevant files or documentation"}
            {currentStep === 4 && "Configure blockchain verification and eco settings"}
            {currentStep === 5 && "Review your handover details before submitting"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Step 1: Project & Recipient */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="project">Project Name</Label>
                <Select value={formData.project} onValueChange={(value) => updateFormData("project", value)}>
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-redesign">Website Redesign</SelectItem>
                    <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                    <SelectItem value="marketing-campaign">Marketing Campaign</SelectItem>
                    <SelectItem value="data-migration">Data Migration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient</Label>
                <Select value={formData.recipient} onValueChange={(value) => updateFormData("recipient", value)}>
                  <SelectTrigger id="recipient">
                    <SelectValue placeholder="Select a recipient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alex">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Alex Johnson" />
                          <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <span>Alex Johnson</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="sarah">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Sarah Williams" />
                          <AvatarFallback>SW</AvatarFallback>
                        </Avatar>
                        <span>Sarah Williams</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="michael">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Michael Chen" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <span>Michael Chen</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 2: Summary & Time */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="summary">Handover Summary</Label>
                <Textarea
                  id="summary"
                  placeholder="Provide a detailed summary of what you're handing over..."
                  className="min-h-[150px]"
                  value={formData.summary}
                  onChange={(e) => updateFormData("summary", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours">Time Logged (hours)</Label>
                <Input
                  id="hours"
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="0.0"
                  value={formData.hours || ""}
                  onChange={(e) => updateFormData("hours", Number.parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>
          )}

          {/* Step 3: Upload Files */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Files & Attachments</Label>
                <FileUploader />
              </div>
            </div>
          )}

          {/* Step 4: Settings */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <div>
                    <Label htmlFor="blockchain-verification" className="text-base">
                      Enable Blockchain Verification
                    </Label>
                    <p className="text-sm text-muted-foreground">Create an immutable record of this handover</p>
                  </div>
                </div>
                <Switch
                  id="blockchain-verification"
                  checked={formData.blockchainVerification}
                  onCheckedChange={(checked) => updateFormData("blockchainVerification", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                  <div>
                    <Label htmlFor="eco-mode" className="text-base">
                      Enable Eco Mode
                    </Label>
                    <p className="text-sm text-muted-foreground">Reduce digital carbon footprint</p>
                  </div>
                </div>
                <Switch
                  id="eco-mode"
                  checked={formData.ecoMode}
                  onCheckedChange={(checked) => updateFormData("ecoMode", checked)}
                />
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="rounded-lg border p-4 space-y-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Project</h3>
                  <p className="mt-1">
                    {formData.project === "website-redesign" && "Website Redesign"}
                    {formData.project === "mobile-app" && "Mobile App Development"}
                    {formData.project === "marketing-campaign" && "Marketing Campaign"}
                    {formData.project === "data-migration" && "Data Migration"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Recipient</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Recipient" />
                      <AvatarFallback>
                        {formData.recipient === "alex" && "AJ"}
                        {formData.recipient === "sarah" && "SW"}
                        {formData.recipient === "michael" && "MC"}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      {formData.recipient === "alex" && "Alex Johnson"}
                      {formData.recipient === "sarah" && "Sarah Williams"}
                      {formData.recipient === "michael" && "Michael Chen"}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Summary</h3>
                  <p className="mt-1">{formData.summary || "No summary provided"}</p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Time Logged</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{formData.hours} hours</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Files</h3>
                  <div className="mt-1">
                    {formData.files.length > 0 ? (
                      <div className="space-y-2">
                        {formData.files.map((file: any, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">{file.name}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No files attached</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <Shield
                      className={`h-4 w-4 ${formData.blockchainVerification ? "text-emerald-600" : "text-muted-foreground"}`}
                    />
                    <span className={formData.blockchainVerification ? "font-medium" : "text-muted-foreground"}>
                      Blockchain Verification: {formData.blockchainVerification ? "Enabled" : "Disabled"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Leaf className={`h-4 w-4 ${formData.ecoMode ? "text-emerald-600" : "text-muted-foreground"}`} />
                    <span className={formData.ecoMode ? "font-medium" : "text-muted-foreground"}>
                      Eco Mode: {formData.ecoMode ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={handleNext} className="bg-emerald-600 hover:bg-emerald-700 gap-2">
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Submit Handover
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Handover Submission</AlertDialogTitle>
                  <AlertDialogDescription>
                    You're about to create a new handover session. This action will be recorded on the blockchain and
                    cannot be undone. Are you sure you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

