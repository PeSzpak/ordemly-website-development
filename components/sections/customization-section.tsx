"use client";

import type React from "react";
import { Palette, Globe, Smartphone, Moon, Sun, Monitor } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function CustomizationSection() {
  const { t } = useLanguage();

  return (
    <section id="personalizacao" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.customizationSection.sectionTitle}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              {t.customizationSection.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t.customizationSection.sectionSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <CustomizationCard
            icon={Palette}
            title={t.customizationSection.themesTitle}
            description={t.customizationSection.themesDesc}
            features={[
              t.customizationSection.themesFeature1,
              t.customizationSection.themesFeature2,
              t.customizationSection.themesFeature3,
              t.customizationSection.themesFeature4,
            ]}
          />
          <CustomizationCard
            icon={Globe}
            title={t.customizationSection.domainTitle}
            description={t.customizationSection.domainDesc}
            features={[
              t.customizationSection.domainFeature1,
              t.customizationSection.domainFeature2,
              t.customizationSection.domainFeature3,
              t.customizationSection.domainFeature4,
            ]}
          />
          <CustomizationCard
            icon={Smartphone}
            title={t.customizationSection.brandingTitle}
            description={t.customizationSection.brandingDesc}
            features={[
              t.customizationSection.brandingFeature1,
              t.customizationSection.brandingFeature2,
              t.customizationSection.brandingFeature3,
              t.customizationSection.brandingFeature4,
            ]}
          />
        </div>

        {/* Theme Preview */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border-2 border-blue-600/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              {t.customizationSection.previewTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ThemePreview
                icon={Sun}
                title={t.customizationSection.lightTheme}
                description={t.customizationSection.lightThemeDesc}
                gradient="from-white to-gray-50"
              />
              <ThemePreview
                icon={Moon}
                title={t.customizationSection.darkTheme}
                description={t.customizationSection.darkThemeDesc}
                gradient="from-gray-900 to-gray-800"
                dark
              />
              <ThemePreview
                icon={Monitor}
                title={t.customizationSection.autoTheme}
                description={t.customizationSection.autoThemeDesc}
                gradient="from-gray-100 via-gray-200 to-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomizationCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-600/50 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-transparent dark:hover:from-blue-950/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/20 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ThemePreview({
  icon: Icon,
  title,
  description,
  gradient,
  dark = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  dark?: boolean;
}) {
  return (
    <div className="space-y-3">
      <div
        className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${gradient} border border-border p-4 relative overflow-hidden`}
      >
        <div
          className={`absolute inset-0 ${dark ? "bg-black/20" : "bg-white/20"}`}
        />
        <div className="relative space-y-2">
          <div
            className={`h-2 w-3/4 rounded ${
              dark ? "bg-white/30" : "bg-black/20"
            }`}
          />
          <div
            className={`h-2 w-1/2 rounded ${
              dark ? "bg-white/20" : "bg-black/10"
            }`}
          />
        </div>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
          <div className="font-semibold text-foreground text-sm">{title}</div>
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
