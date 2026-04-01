"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Koliko traje implementacija ORDERA sistema?",
    answer: "Većina klijenata je operativna za manje od jednog dana. Naš tim vas vodi kroz ceo proces - od podešavanja menija do obuke osoblja. Za složenije implementacije sa više lokacija, proces može trajati do 7 dana."
  },
  {
    question: "Da li mi treba posebna oprema?",
    answer: "ORDERA radi na bilo kom modernom tabletu (Android ili iPad) i računaru. Možete koristiti postojeću opremu ili nabaviti preporučene uređaje od nas po povoljnim cenama."
  },
  {
    question: "Šta ako nemam internet konekciju?",
    answer: "ORDERA ima offline režim rada. Svi podaci se čuvaju lokalno i automatski se sinhronizuju kada se internet veza uspostavi. Vaše poslovanje nikada neće stati."
  },
  {
    question: "Mogu li da integrisem ORDERA sa drugim sistemima?",
    answer: "Da, ORDERA ima otvoreni API i gotove integracije sa popularnim računovodstvenim programima, platformama za dostavu i sistemima za upravljanje zalihama."
  },
  {
    question: "Kakva je podrška dostupna?",
    answer: "Svi planovi uključuju tehničku podršku. Starter plan ima email podršku, dok Professional i Enterprise planovi imaju prioritetnu podršku putem telefona i chata, dostupnu 24/7."
  },
  {
    question: "Mogu li da otkazem pretplatu u bilo kom trenutku?",
    answer: "Da, nema dugoročnih ugovora. Možete otkazati pretplatu u bilo kom trenutku. Vaši podaci ostaju dostupni za preuzimanje 30 dana nakon otkazivanja."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="section-shell py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Često postavljana pitanja
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pronađite odgovore na najčešća pitanja o ORDERA sistemu.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="surface-card rounded-[1.5rem] px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
