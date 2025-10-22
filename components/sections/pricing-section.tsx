"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Check, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuoteRequestModal } from "@/components/quote-request-modal";

export function PricingSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleRequestQuote = (planType: string) => {
    setSelectedPlan(planType);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="precos" className="relative py-24 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/5 to-background" />

        <div className="relative">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-blue-600/20 bg-blue-600/10 text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              {t.pricingSection.badge}
            </Badge>
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              {t.pricingSection.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                {t.pricingSection.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.pricingSection.subtitle}
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Starter Plan */}
            <Card className="group relative overflow-hidden border-blue-600/20 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-blue-600/40 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-blue-600/10 to-transparent blur-2xl" />

              <div className="relative">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">
                    {t.pricingSection.starterTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.pricingSection.starterSubtitle}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                      R$20
                    </span>
                    <span className="text-muted-foreground">
                      {t.pricingSection.perMonth}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.pricingSection.starterPriceNote}
                  </p>
                </div>

                <Button
                  onClick={() =>
                    handleRequestQuote(t.pricingSection.starterTitle)
                  }
                  className="mb-8 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:opacity-90 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t.pricingSection.ctaButton}
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.pricingSection.featuresIncluded}
                  </p>
                  <ul className="space-y-3">
                    {[
                      t.pricingSection.starterFeature1,
                      t.pricingSection.starterFeature2,
                      t.pricingSection.starterFeature3,
                      t.pricingSection.starterFeature4,
                      t.pricingSection.starterFeature5,
                      t.pricingSection.starterFeature6,
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-600/20 bg-blue-600/10">
                          <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Custom Plan */}
            <Card className="group relative overflow-hidden border-blue-600/30 bg-gradient-to-br from-blue-950/20 via-card/50 to-card/50 p-8 backdrop-blur-sm transition-all hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/20">
              <Badge className="absolute right-4 top-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white dark:from-blue-500 dark:to-blue-600">
                {t.pricingSection.popularBadge}
              </Badge>
              <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-blue-600/20 to-transparent blur-3xl" />

              <div className="relative">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">
                    {t.pricingSection.customTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.pricingSection.customSubtitle}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                      {t.pricingSection.customPrice}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.pricingSection.customPriceNote}
                  </p>
                </div>

                <Button
                  onClick={() =>
                    handleRequestQuote(t.pricingSection.customTitle)
                  }
                  className="mb-8 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:opacity-90 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t.pricingSection.ctaButton}
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.pricingSection.featuresIncluded}
                  </p>
                  <ul className="space-y-3">
                    {[
                      t.pricingSection.customFeature1,
                      t.pricingSection.customFeature2,
                      t.pricingSection.customFeature3,
                      t.pricingSection.customFeature4,
                      t.pricingSection.customFeature5,
                      t.pricingSection.customFeature6,
                      t.pricingSection.customFeature7,
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-600/30 bg-blue-600/20">
                          <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom note */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-muted-foreground">
              {t.pricingSection.bottomNote}
            </p>
          </div>
        </div>
      </section>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planType={selectedPlan}
      />
    </>
  );
}
