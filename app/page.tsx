import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ScrollReveal delay={100}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal delay={50}>
          <Stats />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Features />
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal delay={180}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay={220}>
          <Pricing />
        </ScrollReveal>
        <ScrollReveal delay={260}>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <CTA />
        </ScrollReveal>
      </main>
      <ScrollReveal delay={120}>
        <Footer />
      </ScrollReveal>
    </>
  )
}
