export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Registrujte se",
      description: "Napravite nalog za vaš restoran ili kafić za samo nekoliko minuta. Besplatna probna verzija od 14 dana."
    },
    {
      number: "02", 
      title: "Podesite meni",
      description: "Unesite vaše artikle, kategorije i cene. Dodajte slike i opise za bolju prezentaciju."
    },
    {
      number: "03",
      title: "Obučite osoblje",
      description: "Intuitivni interfejs omogućava brzo usvajanje. Naš tim pruža besplatnu obuku."
    },
    {
      number: "04",
      title: "Počnite da zarađujete",
      description: "Povećajte efikasnost, smanjite greške i pružite bolju uslugu vašim gostima."
    }
  ]

  return (
    <section className="section-shell section-spotlight py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-5">Kako funkcioniše</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Započnite u samo 4 koraka
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jednostavna implementacija bez komplikacija. Budite operativni za manje od jednog dana.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-full top-14 z-0 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-primary/50 to-transparent lg:block" />
              )}
              <div className="surface-card relative z-10 h-full rounded-[2rem] p-7 text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 shadow-inner shadow-white/60">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
