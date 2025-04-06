"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  LayoutDashboard,
  FileSignature,
  Inbox,
  Users,
  Clock,
  Leaf,
  Settings,
  Search,
  Bell,
  User,
  LogOut,
  Menu,
  Shield,
} from "lucide-react"

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const primaryNavItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "New Handover",
      href: "/handovers/wizard",
      icon: <FileSignature className="h-5 w-5" />,
    },
    {
      name: "My Sessions",
      href: "/sessions",
      icon: <Inbox className="h-5 w-5" />,
      badge: "3",
    },
    {
      name: "Team",
      href: "/team",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const secondaryNavItems = [
    {
      name: "Activity Log",
      href: "/activity",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      name: "Carbon Impact",
      href: "/carbon-impact",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") {
      return true
    }
    return pathname.startsWith(href) && href !== "/dashboard"
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2 mb-6">
          <Shield className="h-6 w-6 text-emerald-600" />
          <span className="font-bold text-xl">HANDOVER</span>
        </Link>

        <div className="relative mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 text-sm" />
        </div>
      </div>

      <div className="flex-1 px-3 py-2">
        <div className="mb-6">
          <div className="text-xs font-semibold text-muted-foreground mb-2 px-4">MAIN</div>
          <nav className="space-y-1">
            {primaryNavItems.map((item) => (
              <TooltipProvider key={item.name} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                        isActive(item.href)
                          ? "bg-emerald-50 text-emerald-600"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge className="ml-auto bg-emerald-500 hover:bg-emerald-600">{item.badge}</Badge>
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="hidden lg:block">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </nav>
        </div>

        <div>
          <div className="text-xs font-semibold text-muted-foreground mb-2 px-4">TOOLS</div>
          <nav className="space-y-1">
            {secondaryNavItems.map((item) => (
              <TooltipProvider key={item.name} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-emerald-50 text-emerald-600"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="hidden lg:block">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 mt-auto border-t">
        <div className="flex items-center gap-3 px-2 py-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Jordan Smith</p>
            <p className="text-xs text-muted-foreground truncate">jordan.smith@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden md:flex md:w-64 flex-col border-r">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-40">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-background border-b h-16 flex items-center px-4 md:px-6">
          <div className="flex items-center gap-4 w-full">
            <div className="md:flex-1 flex items-center">
              <Link href="/" className="md:hidden flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-600" />
                <span className="font-bold text-xl">HANDOVER</span>
              </Link>
            </div>

            <div className="hidden md:flex flex-1 items-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search handovers, projects, or team members..."
                  className="w-full pl-8 pr-4"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Jordan Smith</p>
                      <p className="text-xs text-muted-foreground">jordan.smith@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-background border-t flex items-center justify-around p-2">
          {primaryNavItems.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-md",
                isActive(item.href) ? "text-emerald-600" : "text-muted-foreground",
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

