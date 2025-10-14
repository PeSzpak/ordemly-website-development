"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, CheckCircle2, Video } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function DemoSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const features = [
    {
      title: t.demoSection.feature1Title,
      description: t.demoSection.feature1Desc,
    },
    {
      title: t.demoSection.feature2Title,
      description: t.demoSection.feature2Desc,
    },
    {
      title: t.demoSection.feature3Title,
      description: t.demoSection.feature3Desc,
    },
  ]

  return (
    <section id="demo" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-blue-600/5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-blue-800/20 dark:from-blue-400/20 dark:via-blue-500/20 dark:to-blue-600/20 text-sm font-medium">
                <Video className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                  {t.demoSection.badge}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                {t.demoSection.title}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                  {t.demoSection.titleHighlight}
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t.demoSection.subtitle}</p>
            </div>

            <div className="space-y-4">
              <DemoFeature icon={Calendar} title={features[0].title} description={features[0].description} />
              <DemoFeature icon={Clock} title={features[1].title} description={features[1].description} />
              <DemoFeature icon={CheckCircle2} title={features[2].title} description={features[2].description} />
            </div>

            <div className="bg-card border-2 border-blue-600/20 dark:border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 dark:from-blue-400/20 dark:to-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t.demoSection.proposalTitle}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.demoSection.proposalDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-card border-2 border-blue-600/20 dark:border-blue-500/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.demoSection.formTitle}</h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 dark:from-blue-400/20 dark:to-blue-600/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{t.demoSection.successTitle}</h4>
                  <p className="text-muted-foreground">{t.demoSection.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.demoSection.nameLabel}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t.demoSection.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.demoSection.emailLabel}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.demoSection.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t.demoSection.companyLabel}</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={t.demoSection.companyPlaceholder}
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.demoSection.phoneLabel}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t.demoSection.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 dark:hover:from-blue-600 dark:hover:via-blue-700 dark:hover:to-blue-800 text-white border-0"
                  >
                    {t.demoSection.submitButton}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">{t.demoSection.privacyText}</p>
                </form>
              )}
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-700/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-800/20 dark:from-blue-400/20 dark:to-blue-600/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
