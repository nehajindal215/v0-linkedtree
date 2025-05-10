import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="items-center text-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Neha Jindal" />
            <AvatarFallback className="text-xl">NJ</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-bold">Neha Jindal</CardTitle>
          <CardDescription className="text-md">Software Developer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <SocialLink href="https://github.com/nehajindal" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink
              href="https://linkedin.com/in/nehajindal"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialLink href="https://twitter.com/nehajindal" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink
              href="https://instagram.com/nehajindal"
              icon={<Instagram className="h-5 w-5" />}
              label="Instagram"
            />
            <SocialLink href="https://nehajindal.com" icon={<Globe className="h-5 w-5" />} label="Portfolio" />
          </div>
        </CardContent>
      </Card>
      <footer className="mt-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Neha Jindal</footer>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      <span className="text-sm text-slate-400">→</span>
    </Link>
  )
}
