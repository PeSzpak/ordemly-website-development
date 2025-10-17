"use client"

import type React from "react"
require('dotenv').config();
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.contactSection.sectionTitle}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              {t.contactSection.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t.contactSection.sectionSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">{t.contactSection.leftTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.contactSection.leftSubtitle}</p>
            </div>

            <div className="space-y-6">
              <ContactInfo
                icon={Phone}
                title={t.contactSection.phoneTitle}
                content={t.contactSection.phoneValue}
                href="tel:+5541996062151"
              />
              <ContactInfo
                icon={Mail}
                title={t.contactSection.emailTitle}
                content={t.contactSection.emailValue}
                href="mailto:contato@mmti.io"
              />
              <ContactInfo
                icon={MapPin}
                title={t.contactSection.locationTitle}
                content={t.contactSection.locationValue}
                href="https://www.google.com/maps/place/R.+Veríssimo+Marques,+1096+-+Centro,+São+José+dos+Pinhais+-+PR,+83005-410/@-25.5350747,-49.202365,17z/"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="bg-card border-2 border-blue-600/20 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.contactSection.formTitle}</h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/20 text-blue-700 dark:text-blue-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{t.contactSection.successTitle}</h4>
                  <p className="text-muted-foreground">{t.contactSection.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">{t.contactSection.nameLabel}</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder={t.contactSection.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">{t.contactSection.emailLabel}</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder={t.contactSection.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contactSection.subjectLabel}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder={t.contactSection.subjectPlaceholder}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contactSection.messageLabel}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t.contactSection.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 w-5 h-5" />
                    {t.contactSection.submitButton}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: React.ElementType
  title: string
  content: string
  href: string
}) {
  return (
    <a href={href} className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/20 text-blue-700 dark:text-blue-400 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/30 transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="font-semibold text-foreground mb-1">{title}</div>
        <div className="text-muted-foreground group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
          {content}
        </div>
      </div>
    </a>
  )
}
