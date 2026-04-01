const stats = [
  { value: "20+", label: "Aktivnih lokacija", description: "širom regiona" },
  { value: "200 000+", label: "Porudžbina mesečno", description: "obrađeno kroz sistem" },
  { value: "100%", label: "Zadovoljnih klijenata", description: "preporučuje ORDERA" },
  { value: "30%", label: "Povećanje efikasnosti", description: "u proseku" },
]

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-medium text-primary-foreground/90 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
