"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AlertTriangle,
  BarChart3,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppSidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = React.useState("")

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <FileText className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Counselor Platform</span>
            <span className="text-xs text-muted-foreground">Support Dashboard</span>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                  <Link href="/dashboard">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/students")}>
                  <Link href="/students">
                    <Users className="h-4 w-4" />
                    <span>Students</span>
                  </Link>
                </SidebarMenuButton>
                <Badge variant="outline" className="ml-auto">
                  42
                </Badge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/communication")}>
                  <Link href="/communication">
                    <MessageSquare className="h-4 w-4" />
                    <span>Communication</span>
                  </Link>
                </SidebarMenuButton>
                <Badge className="ml-auto bg-primary">5</Badge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/analytics")}>
                  <Link href="/analytics">
                    <BarChart3 className="h-4 w-4" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/documentation")}>
                  <Link href="/documentation">
                    <FileText className="h-4 w-4" />
                    <span>Documentation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Urgent Cases</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/students/1")}>
                  <Link href="/students/1" className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emma Wilson" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <span>Emma Wilson</span>
                  </Link>
                </SidebarMenuButton>
                <Badge variant="destructive" className="ml-auto">
                  High
                </Badge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Olivia Davis" />
                      <AvatarFallback>OD</AvatarFallback>
                    </Avatar>
                    <span>Olivia Davis</span>
                  </Link>
                </SidebarMenuButton>
                <Badge variant="destructive" className="ml-auto">
                  High
                </Badge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jason Martinez" />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <span>Jason Martinez</span>
                  </Link>
                </SidebarMenuButton>
                <Badge variant="warning" className="ml-auto">
                  Medium
                </Badge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Upcoming</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Calendar className="h-4 w-4" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
                <Badge variant="outline" className="ml-auto">
                  3
                </Badge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <AlertTriangle className="h-4 w-4" />
                    <span>SOS Alerts</span>
                  </Link>
                </SidebarMenuButton>
                <Badge variant="destructive" className="ml-auto">
                  2
                </Badge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Counselor Name</span>
              <span className="text-xs text-muted-foreground">Burnaby North Secondary</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  )
}
