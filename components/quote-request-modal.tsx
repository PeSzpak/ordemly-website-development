"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Mail, User, Building2, Phone, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useMobile } from "@/hooks/use-mobile"

interface QuoteRequestModalProps {
  isOpen: boolean
  onClose: () => void
  planType: string
}

export function QuoteRequestModal({ isOpen, onClose, planType }: QuoteRequestModalProps) {
  const { t } = useLanguage()
  const isMobile = useMobile()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with form data
    const emailBody = `
${t.quoteModal.greeting}

${t.quoteModal.planLabel}: ${planType}

${t.quoteModal.contactInfo}:
${t.quoteModal.nameLabel}: ${formData.name}
${t.quoteModal.emailLabel}: ${formData.email}
${t.quoteModal.phoneLabel}: ${formData.phone}
${t.quoteModal.companyLabel}: ${formData.company}

${t.quoteModal.messageLabel}:
${formData.message}
    `.trim()

    const subject = encodeURIComponent(`${t.quoteModal.emailSubject} - ${planType}`)
    const body = encodeURIComponent(emailBody)
    const mailtoLink = `mailto:contato@mmti.io?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Close modal after a short delay
    setTimeout(() => {
      onClose()
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 500)
  }

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6 pt-4 px-4 pb-4">
      {/* Plan Type Display */}
      <div className="rounded-lg border border-blue-600/20 bg-blue-600/5 p-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">{t.quoteModal.selectedPlan}</p>
        <p className="mt-1 text-lg font-semibold text-foreground">{planType}</p>
      </div>

      {/* Form Fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4 text-blue-600" />
            {t.quoteModal.nameLabel}
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.quoteModal.namePlaceholder}
            className="border-blue-600/20 focus:border-blue-600"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-600" />
            {t.quoteModal.emailLabel}
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.quoteModal.emailPlaceholder}
            className="border-blue-600/20 focus:border-blue-600"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-blue-600" />
            {t.quoteModal.phoneLabel}
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t.quoteModal.phonePlaceholder}
            className="border-blue-600/20 focus:border-blue-600"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-blue-600" />
            {t.quoteModal.companyLabel}
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder={t.quoteModal.companyPlaceholder}
            className="border-blue-600/20 focus:border-blue-600"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-blue-600" />
          {t.quoteModal.messageLabel}
        </Label>
        <Textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t.quoteModal.messagePlaceholder}
          className="resize-none border-blue-600/20 focus:border-blue-600"
        />
      </div>

      {/* Info Note */}
      <div className="rounded-lg border border-muted bg-muted/50 p-4 text-center">
        <p className="text-sm text-muted-foreground">{t.quoteModal.infoNote}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="min-w-[140px] border-blue-600/20 hover:bg-blue-600/5 bg-transparent"
        >
          {t.quoteModal.cancelButton}
        </Button>
        <Button
          type="submit"
          className="min-w-[140px] bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:opacity-90"
        >
          <Mail className="mr-2 h-4 w-4" />
          {t.quoteModal.submitButton}
        </Button>
      </div>
    </form>
  )

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-h-[90vh] overflow-y-auto">
          <DrawerHeader className="text-center space-y-3">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-1">
                <DrawerTitle className="text-2xl font-bold">{t.quoteModal.title}</DrawerTitle>
                <DrawerDescription className="text-base">{t.quoteModal.subtitle}</DrawerDescription>
              </div>
            </div>
          </DrawerHeader>
          <FormContent />
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="mx-auto max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-3">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-1">
              <DialogTitle className="text-2xl font-bold">{t.quoteModal.title}</DialogTitle>
              <DialogDescription className="text-base">{t.quoteModal.subtitle}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <FormContent />
      </DialogContent>
    </Dialog>
  )
}
