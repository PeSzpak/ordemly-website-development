"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

export function HeroSection() {
  const { t, language } = useLanguage();
  const getDashboardAdminImage = () => {
    const langSuffix =
      language === "pt" ? "PT" : language === "en" ? "EN" : "ES";
    return `/images/dashboard-admin-${langSuffix}.png`;
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-blue-600/5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-blue-800/20 dark:from-blue-400/20 dark:via-blue-500/20 dark:to-blue-600/20 text-sm font-medium">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full animate-pulse" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                {t.hero.tag}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
              {t.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 dark:hover:from-blue-600 dark:hover:via-blue-700 dark:hover:to-blue-800 text-white border-0"
                asChild
              >
                <Link href="#demo">
                  {t.hero.ctaDemo}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 dark:border-blue-500 dark:hover:bg-blue-500/10"
                asChild
              >
                <Link href="#funcionalidades">
                  <Play className="mr-2 w-5 h-5" />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                    {t.hero.ctaLearnMore}
                  </span>
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-sm text-muted-foreground">
                {t.hero.trustedBy}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-600/20 dark:border-blue-500/20 bg-card">
              <div className="bg-background">
                <img
                  src={getDashboardAdminImage()}
                  alt="Ordemly Dashboard Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-700/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
