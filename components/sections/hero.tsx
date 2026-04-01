"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, CheckCircle2, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="section-shell section-spotlight relative flex min-h-[96vh] items-center overflow-hidden bg-transparent pt-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-136 -translate-x-1/2 rounded-full bg-chart-5/20 blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-8">
            <div className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Digitalni operativni sistem za ugostiteljstvo
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-6xl lg:text-7xl">
                Sve što vašem
                <span className="bg-linear-to-r from-primary via-chart-3 to-accent bg-clip-text text-transparent"> kafiću/restoranu </span>
                treba na <span className="text-foreground border-b-2 border-accent">jednom</span> mestu
              </h1>
              
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                ORDERA objedinjuje POS, tablet naručivanje, inventar, rezervacije i analitiku u jedan elegantan tok rada za vaš tim.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-foreground/80">
              <div className="surface-card rounded-full px-4 py-2">Brža usluga bez papira</div>
              <div className="surface-card rounded-full px-4 py-2">Kontrola lokacija u realnom vremenu</div>
              <div className="surface-card rounded-full px-4 py-2">Pokretanje za manje od 24h</div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-primary px-8 text-primary-foreground shadow-xl shadow-primary/25 hover:bg-primary/90" asChild>
                <Link href="#kontakt">
                  Započnite besplatno
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/70 bg-white/70 px-8 hover:bg-white" asChild>
                <Link href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Pogledajte demo
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="surface-card rounded-3xl px-5 py-4">
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Aktivnih lokacija</p>
              </div>
              <div className="surface-card rounded-3xl px-5 py-4">
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Zadovoljnih klijenata</p>
              </div>
              <div className="surface-card rounded-3xl px-5 py-4">
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Podrška</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-x-10 top-8 h-full rounded-4xl bg-linear-to-b from-primary/20 via-accent/10 to-transparent blur-3xl" />

            <div className="surface-card relative overflow-hidden rounded-4xl p-4 shadow-[0_30px_120px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/70 to-transparent" />
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/60 bg-white/75 px-4 py-3 backdrop-blur">
                <div>
                  <p className="text-sm font-semibold text-foreground">Današnji promet</p>
                  <p className="text-xs text-muted-foreground">Usklađeno kroz sve uređaje</p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  +18.4%
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-card">
                <Image src="/orderasite1.png" alt="ORDERA POS Mockup" width={600} height={400} className="w-full h-auto object-cover" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/60 bg-white/80 p-4 backdrop-blur">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Narudžbine bez greške
                  </div>
                  <p className="text-sm text-muted-foreground">Konobari šalju stavke direktno u kuhinju i na šank bez duplih unosa.</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/80 p-4 backdrop-blur">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CalendarDays className="h-4 w-4 text-chart-3" />
                    Pametne rezervacije
                  </div>
                  <p className="text-sm text-muted-foreground">Rezervacije, raspored stolova i kapaciteti ostaju usklađeni u realnom vremenu.</p>
                </div>
              </div>
            </div>
            
            <div className="surface-card absolute -bottom-10 -left-3 rounded-2xl p-4 sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/50">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <div className="p-2 bg-primary/50 rounded-2xl animate-pulse">
                  <p className="text-sm font-medium text-foreground">Nova porudžbina</p>
                  <p className="text-xs text-foreground">Sto 12 - 3 artikla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
