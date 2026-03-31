"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Novo: AI asistent za restorane
            </div> */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
              Sve što vašem
              <span className="text-primary"> restoranu </span>
              treba na jednom mestu
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              ORDERA je kompletno rešenje za upravljanje kafićima i restoranima - 
              od naručivanja putem tableta do upravljanja inventarom i zakazivanja.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
                <Link href="#kontakt">
                  Započnite besplatno
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary" asChild>
                <Link href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Pogledajte demo
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Aktivnih lokacija</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Zadovoljnih klijenata</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center hidden sm:block">
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Podrška</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Mock POS Interface */}
              <div className="bg-foreground/5 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 text-sm text-muted-foreground">ORDERA POS</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {['Espresso', 'Cappuccino', 'Latte', 'Americano', 'Macchiato', 'Mocha'].map((item, i) => (
                    <div 
                      key={item} 
                      className={`p-4 rounded-xl text-center transition-all hover:scale-105 cursor-pointer ${
                        i === 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                      }`}
                    >
                      <p className="text-sm font-medium">{item}</p>
                      <p className="text-xs opacity-70">{(180 + i * 20)} RSD</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Sto 5</span>
                    <span className="text-sm text-muted-foreground">3 stavke</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Ukupno:</span>
                    <span className="text-primary">580 RSD</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Naplati
                </Button>
              </div>
            </div>
            
            {/* Floating notification card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg border border-border p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Nova porudžbina</p>
                  <p className="text-xs text-muted-foreground">Sto 12 - 3 artikla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
