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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4">Kako funkcioniše</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Započnite u samo 4 koraka
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jednostavna implementacija bez komplikacija. Budite operativni za manje od jednog dana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
