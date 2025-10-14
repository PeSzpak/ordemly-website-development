"use client"

import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LayoutDashboard,
  Kanban,
  Package,
  FileText,
  BarChart3,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Printer,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="funcionalidades" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.featuresSection.sectionTitle}{" "}
            <span className="text-primary">{t.featuresSection.sectionTitleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t.featuresSection.sectionSubtitle}
          </p>
        </div>

        {/* Features Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-12">
            <TabsTrigger
              value="dashboard"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.dashboard.tab}</span>
            </TabsTrigger>
            <TabsTrigger
              value="kanban"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Kanban className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.kanban.tab}</span>
            </TabsTrigger>
            <TabsTrigger
              value="equipment"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Package className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.equipment.tab}</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.orders.tab}</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.featuresSection.dashboard.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.featuresSection.dashboard.description}
                </p>
                <div className="space-y-4">
                  <FeatureItem
                    icon={BarChart3}
                    title={t.featuresSection.dashboard.feature1Title}
                    description={t.featuresSection.dashboard.feature1Desc}
                  />
                  <FeatureItem
                    icon={Clock}
                    title={t.featuresSection.dashboard.feature2Title}
                    description={t.featuresSection.dashboard.feature2Desc}
                  />
                  <FeatureItem
                    icon={TrendingUp}
                    title={t.featuresSection.dashboard.feature3Title}
                    description={t.featuresSection.dashboard.feature3Desc}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  <div className="aspect-[4/3] bg-background">
                    <img src="/images/dashboard-admin.png" alt="Dashboard" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Kanban Tab */}
          <TabsContent value="kanban" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                    <div className="aspect-[4/3] bg-background">
                      <img src="/images/orders-kanban.png" alt="Kanban Board" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.featuresSection.kanban.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.featuresSection.kanban.description}</p>
                <div className="space-y-4">
                  <FeatureItem
                    icon={Users}
                    title={t.featuresSection.kanban.feature1Title}
                    description={t.featuresSection.kanban.feature1Desc}
                  />
                  <FeatureItem
                    icon={CheckCircle2}
                    title={t.featuresSection.kanban.feature2Title}
                    description={t.featuresSection.kanban.feature2Desc}
                  />
                  <FeatureItem
                    icon={AlertCircle}
                    title={t.featuresSection.kanban.feature3Title}
                    description={t.featuresSection.kanban.feature3Desc}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Equipment Tab */}
          <TabsContent value="equipment" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.featuresSection.equipment.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.featuresSection.equipment.description}
                </p>
                <div className="space-y-4">
                  <FeatureItem
                    icon={Package}
                    title={t.featuresSection.equipment.feature1Title}
                    description={t.featuresSection.equipment.feature1Desc}
                  />
                  <FeatureItem
                    icon={Clock}
                    title={t.featuresSection.equipment.feature2Title}
                    description={t.featuresSection.equipment.feature2Desc}
                  />
                  <FeatureItem
                    icon={FileText}
                    title={t.featuresSection.equipment.feature3Title}
                    description={t.featuresSection.equipment.feature3Desc}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  <div className="aspect-[4/3] bg-background">
                    <img src="/images/equipment-list.png" alt="Equipment List" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                    <div className="aspect-[4/3] bg-background">
                      <img
                        src="/images/kanban-professional.png"
                        alt="Order Details"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.featuresSection.orders.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.featuresSection.orders.description}</p>
                <div className="space-y-4">
                  <FeatureItem
                    icon={FileText}
                    title={t.featuresSection.orders.feature1Title}
                    description={t.featuresSection.orders.feature1Desc}
                  />
                  <FeatureItem
                    icon={CheckCircle2}
                    title={t.featuresSection.orders.feature2Title}
                    description={t.featuresSection.orders.feature2Desc}
                  />
                  <FeatureItem
                    icon={Package}
                    title={t.featuresSection.orders.feature3Title}
                    description={t.featuresSection.orders.feature3Desc}
                  />
                  <FeatureItem
                    icon={Printer}
                    title={t.featuresSection.orders.feature4Title}
                    description={t.featuresSection.orders.feature4Desc}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function FeatureItem({
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
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
