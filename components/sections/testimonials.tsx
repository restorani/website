import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marko Petrović",
    role: "Vlasnik, Kafana Stari Grad",
    content: "ORDERA nam je promenila način rada. Konobari su duplo brži, a greške u porudžbinama su gotovo nestale. Preporučujem svima.",
    rating: 5
  },
  {
    name: "Ana Jovanović", 
    role: "Menadžer, Restoran Balkan",
    content: "Inventar koji se ažurira u realnom vremenu je fantastičan. Više nikada nismo ostali bez ključnih namirnica. Uštedeli smo preko 20% na nabavkama.",
    rating: 5
  },
  {
    name: "Stefan Nikolić",
    role: "Vlasnik lanca kafića",
    content: "Upravljam sa 5 lokacija i sve pratim sa jednog dashboarda. Analitika mi pomaže da donesem prave poslovne odluke.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4">Iskustva korisnika</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Šta kažu naši klijenti
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pridružite se stotinama zadovoljnih vlasnika restorana i kafića koji su već digitalizovali svoje poslovanje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
