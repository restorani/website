import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Idealno za male kafiće",
    price: "4.900",
    period: "mesečno",
    features: [
      "Do 1 lokacije",
      "2 korisnika",
      "POS sistem",
      "Osnovna analitika",
      "Email podrška"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Za restorane koji rastu",
    price: "9.900",
    period: "mesečno", 
    features: [
      "Do 3 lokacije",
      "10 korisnika",
      "Tablet naručivanje",
      "Upravljanje inventarom",
      "Sistem rezervacija",
      "Napredna analitika",
      "Prioritetna podrška"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Za lance restorana",
    price: "Kontakt",
    period: "prilagođeno",
    features: [
      "Neograničene lokacije",
      "Neograničeni korisnici",
      "Sve funkcionalnosti",
      "API integracije",
      "Dedicirani menadžer",
      "SLA garancija",
      "Prilagođeni razvoj"
    ],
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="cene" className="section-shell py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-5">Cenovnik</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Transparentne cene bez skrivenih troškova
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Izaberite plan koji odgovara veličini vašeg poslovanja. Svi planovi uključuju besplatnu probnu verziju.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-[2rem] p-8 ${
                plan.popular 
                  ? 'surface-card scale-[1.03] border-primary/40 shadow-[0_35px_100px_rgba(15,23,42,0.16)]' 
                  : 'surface-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25">
                  Najpopularniji
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Kontakt" && <span className="text-muted-foreground"> RSD</span>}
                  <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90' 
                    : 'rounded-full bg-secondary/80 text-secondary-foreground hover:bg-secondary'
                }`}
                size="lg"
                asChild
              >
                <Link href="#kontakt">
                  {plan.price === "Kontakt" ? "Kontaktirajte nas" : "Započnite besplatno"}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
