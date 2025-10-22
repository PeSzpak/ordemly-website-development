"use client";

import { CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      title: t.benefits.card1Title,
      description: t.benefits.card1Desc,
    },
    {
      icon: Shield,
      title: t.benefits.card2Title,
      description: t.benefits.card2Desc,
    },
    {
      icon: Sparkles,
      title: t.benefits.card3Title,
      description: t.benefits.card3Desc,
    },
    {
      icon: CheckCircle2,
      title: t.benefits.card4Title,
      description: t.benefits.card4Desc,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              {t.benefits.title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 dark:from-blue-400/20 dark:to-blue-600/20 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-800 dark:group-hover:from-blue-500 dark:group-hover:to-blue-700 transition-all">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
