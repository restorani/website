import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-foreground">
                ORDER<span className="text-primary">A</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kompletno rešenje za upravljanje restoranima i kafićima. 
              Digitalizujte vaše poslovanje danas.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Proizvod</h4>
            <ul className="space-y-4">
              <li><Link href="#funkcije" className="text-muted-foreground hover:text-primary transition-colors">Funkcionalnosti</Link></li>
              <li><Link href="#cene" className="text-muted-foreground hover:text-primary transition-colors">Cenovnik</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Integracije</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">API Dokumentacija</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Kompanija</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">O nama</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Karijera</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Podrška</h4>
            <ul className="space-y-4">
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Centar za pomoć</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Uslovi korišćenja</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Politika privatnosti</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} ORDERA. Sva prava zadržana.
          </p>
          <p className="text-muted-foreground text-sm">
            Napravljeno sa ljubavlju u Srbiji
          </p>
        </div>
      </div>
    </footer>
  )
}
