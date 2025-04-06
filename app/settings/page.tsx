import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Wallet, Leaf, Download, Trash2, Shield, Bell, Home } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Profile Photo</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" defaultValue="Jordan Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jordan.smith@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="freelancer">
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="pm">Project Manager</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-8">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select your timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="utc+0">Greenwich Mean Time (UTC+0)</SelectItem>
                        <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                        <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Update Password</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Application Preferences</CardTitle>
              <CardDescription>Customize your experience with HANDOVER</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                    <div className="space-y-0.5">
                      <Label htmlFor="eco-mode" className="text-base">
                        Eco Mode
                      </Label>
                      <p className="text-sm text-muted-foreground">Reduce digital carbon footprint</p>
                    </div>
                  </div>
                  <Switch id="eco-mode" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-emerald-600" />
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications" className="text-base">
                        Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive handover notifications</p>
                    </div>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-emerald-600" />
                    <div className="space-y-0.5">
                      <Label htmlFor="default-page" className="text-base">
                        Default Landing Page
                      </Label>
                      <p className="text-sm text-muted-foreground">Choose your default page after login</p>
                    </div>
                  </div>
                  <Select defaultValue="dashboard">
                    <SelectTrigger id="default-page" className="w-[180px]">
                      <SelectValue placeholder="Select page" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dashboard">Dashboard</SelectItem>
                      <SelectItem value="sessions">My Sessions</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">Display Settings</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="wallet">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Wallet</CardTitle>
              <CardDescription>Manage your blockchain verification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <p className="font-medium">Blockchain Verification</p>
                </div>
                <p className="text-sm text-emerald-700 mb-4">
                  Connect your wallet to verify handovers on the blockchain. This provides an immutable record of all
                  your handovers.
                </p>
                <Button className="gap-2">
                  <Wallet className="h-4 w-4" />
                  Connect Wallet
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-verify" className="text-base">
                      Auto-Verify Handovers
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically verify all handovers on the blockchain
                    </p>
                  </div>
                  <Switch id="auto-verify" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="public-verification" className="text-base">
                      Public Verification
                    </Label>
                    <p className="text-sm text-muted-foreground">Allow others to verify your handovers</p>
                  </div>
                  <Switch id="public-verification" defaultChecked />
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">Advanced Settings</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="blockchain-network">Blockchain Network</Label>
                    <Select defaultValue="ethereum">
                      <SelectTrigger id="blockchain-network">
                        <SelectValue placeholder="Select network" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="optimism">Optimism</SelectItem>
                        <SelectItem value="arbitrum">Arbitrum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gas-preference">Gas Preference</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger id="gas-preference">
                        <SelectValue placeholder="Select gas preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eco">Eco (Slow)</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="fast">Fast</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Export or delete your account data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Export Data</p>
                    <p className="text-sm text-muted-foreground">Download all your handover data</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Export Blockchain Records</p>
                    <p className="text-sm text-muted-foreground">Download verification records</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Trash2 className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-medium">Delete Account</p>
                        <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-100">
                      Delete
                    </Button>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account and remove all your data
                      from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete Account</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

