import { 
  Tablet, 
  Package, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  Users,
  Bell,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: Tablet,
    title: "Tablet naručivanje",
    description: "Konobari primaju porudžbine direktno na tabletu. Bez papira, bez grešaka, brža usluga.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: CreditCard,
    title: "Kompletan POS sistem",
    description: "Moderna kasa sa podrškom za sve načine plaćanja - gotovina, kartice, QR kodovi.",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Package,
    title: "Upravljanje inventarom",
    description: "Pratite zalihe u realnom vremenu. Automatska upozorenja kada ponestane robe.",
    color: "bg-chart-3/10 text-chart-3"
  },
  {
    icon: Calendar,
    title: "Sistem zakazivanja",
    description: "Online rezervacije stolova, upravljanje kapacitetom i automatski podsetnici.",
    color: "bg-chart-4/10 text-chart-4"
  },
  {
    icon: BarChart3,
    title: "Analitika i izveštaji",
    description: "Detaljna statistika prodaje, najprodavaniji artikli, prometni sati i trendovi.",
    color: "bg-chart-5/10 text-chart-5"
  },
  {
    icon: Users,
    title: "Upravljanje osobljem",
    description: "Rasporedi smena, praćenje radnog vremena i učinka svakog zaposlenog.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Bell,
    title: "Obaveštenja u realnom vremenu",
    description: "Instant notifikacije o novim porudžbinama, rezervacijama i važnim događajima.",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Smartphone,
    title: "Mobilna aplikacija",
    description: "Upravljajte biznisom sa bilo kog mesta putem mobilne aplikacije za vlasnike.",
    color: "bg-chart-3/10 text-chart-3"
  }
]

export function Features() {
  return (
    <section id="funkcije" className="section-shell relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-5">Funkcionalnosti</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sve što vam treba za uspešan ugostiteljski objekat
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Od primanja porudžbina do analize poslovanja - ORDERA pokriva svaki aspekt 
            vašeg restorana ili kafića.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="surface-card group rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} shadow-sm transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
