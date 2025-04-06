import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Shield, Leaf } from "lucide-react"

export default function NewHandoverPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Handover Session</h1>
        <p className="text-muted-foreground">Create a new handover to transfer work ownership</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Handover Details</CardTitle>
          <CardDescription>Fill in the details for your handover session</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="project">Project Name</Label>
              <Select defaultValue="default">
                <SelectTrigger id="project">
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Select a project</SelectItem>
                  <SelectItem value="website-redesign">Website Redesign</SelectItem>
                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                  <SelectItem value="marketing-campaign">Marketing Campaign</SelectItem>
                  <SelectItem value="data-migration">Data Migration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Select defaultValue="default">
                <SelectTrigger id="recipient">
                  <SelectValue placeholder="Select a recipient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Select a recipient</SelectItem>
                  <SelectItem value="alex">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                        A
                      </div>
                      <span>Alex Johnson</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="sarah">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">
                        S
                      </div>
                      <span>Sarah Williams</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="michael">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-medium text-emerald-600">
                        M
                      </div>
                      <span>Michael Chen</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">Handover Summary</Label>
            <Textarea
              id="summary"
              placeholder="Provide a detailed summary of what you're handing over..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Files & Attachments</Label>
            <FileUploader />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="hours">Time Logged (hours)</Label>
              <Input id="hours" type="number" min="0" step="0.5" placeholder="0.0" />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
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
              <Switch id="blockchain-verification" defaultChecked />
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
              <Switch id="eco-mode" defaultChecked />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Create Handover</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Handover Creation</AlertDialogTitle>
                <AlertDialogDescription>
                  You're about to create a new handover session. This action will be recorded on the blockchain and
                  cannot be undone. Are you sure you want to proceed?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-emerald-600 hover:bg-emerald-700">Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  )
}

