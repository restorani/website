"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const navLinks = [
  { href: "#funkcije", label: "Funkcije" },
  { href: "#cene", label: "Cene" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mt-3 flex h-16 items-center justify-between rounded-full border border-white/50 bg-background/70 px-5 shadow-[0_16px_48px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:mt-4 lg:h-20 lg:px-7">
          <Link href="/" className="">
            <Image src="/ordera-Photoroom.png" alt="ORDERA Logo" width={240} height={20} className="-ml-7.5 drop-shadow-sm" />
          </Link>

          <nav className="hidden lg:flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-inner shadow-white/40">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button className="rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90" asChild>
              <Link href="#kontakt">Započnite besplatno</Link>
            </Button>
          </div>

          <button
            className="rounded-full border border-white/60 bg-white/70 p-2 text-foreground shadow-sm lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="surface-card mt-3 rounded-3xl px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 border-t border-border/70 pt-4">
                <Button className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90" asChild>
                  <Link href="#kontakt">Započnite besplatno</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
