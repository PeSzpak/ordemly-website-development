"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl text-foreground">Ordemly</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footerSection.tagline}</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footerSection.productTitle}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#perfis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.footerSection.productProfiles}
                </Link>
              </li>
              <li>
                <Link
                  href="#funcionalidades"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footerSection.productFeatures}
                </Link>
              </li>
              <li>
                <Link
                  href="#personalizacao"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footerSection.productCustomization}
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.footerSection.productDemo}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footerSection.companyTitle}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground">{t.footerSection.companyName}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t.footerSection.companyLocation}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footerSection.contactTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5541996062151"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +55 41 9 9606-2151
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@mmti.io"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@mmti.io
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{t.footerSection.companyLocation}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">{t.footerSection.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.footerSection.privacy}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.footerSection.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
