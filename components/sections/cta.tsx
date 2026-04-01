import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="kontakt" className="section-shell relative py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-8 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-linear-to-b from-white/10 to-transparent" />
          <div className="relative z-10">
            <div className="eyebrow text-xl mb-6 border-black/60 bg-white/10 text-foreground">Kontakt i Demo</div>
            <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl">
              Spremni da digitalizujete vaš restoran?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-foreground/70">
              Započnite sa besplatnom probnom verzijom od 14 dana. Bez kreditne kartice, bez obaveza.
            </p>
            
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
                asChild
              >
                <Link href="mailto:info@ordera.rs">
                  Započnite besplatno
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full border-background/20 bg-accent/90 text-background hover:bg-white/20"
                asChild
              >
                <Link href="tel:+381111234567">
                  <Phone className="mr-2 h-5 w-5" />
                  +381 11 123 4567
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-12 text-primary font-semibold">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>14 dana besplatno</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Bez kreditne kartice</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Otkažite bilo kada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
