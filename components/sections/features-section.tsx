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
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
                    <div className="h-full bg-background rounded-lg border border-border p-4 space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-border">
                        <div className="font-semibold text-foreground">Dashboard</div>
                        <LayoutDashboard className="w-5 h-5 text-primary" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: t.featuresSection.dashboard.mockActive, value: "24", color: "primary" },
                          { label: t.featuresSection.dashboard.mockCompleted, value: "156", color: "chart-3" },
                          { label: t.featuresSection.dashboard.mockPending, value: "8", color: "accent" },
                        ].map((stat, i) => (
                          <div key={i} className="bg-muted/50 rounded-lg p-2 border border-border">
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                            <div className="text-xl font-bold text-foreground">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 border border-border">
                        <div className="text-xs text-muted-foreground mb-2">
                          {t.featuresSection.dashboard.mockPerformance}
                        </div>
                        <div className="flex items-end gap-1 h-20">
                          {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                            <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
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
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
                      <div className="h-full bg-background rounded-lg border border-border p-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
                          <div className="font-semibold text-foreground">{t.featuresSection.kanban.mockBoard}</div>
                          <Kanban className="w-5 h-5 text-primary" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 h-[calc(100%-3rem)]">
                          {[
                            t.featuresSection.kanban.mockPending,
                            t.featuresSection.kanban.mockInProgress,
                            t.featuresSection.kanban.mockCompleted,
                          ].map((status, i) => (
                            <div key={i} className="bg-muted/30 rounded-lg p-2 border border-border">
                              <div className="text-xs font-medium text-muted-foreground mb-2">{status}</div>
                              <div className="space-y-2">
                                {[1, 2].map((card) => (
                                  <div key={card} className="bg-card rounded p-2 border border-border shadow-sm">
                                    <div className="w-full h-2 bg-muted rounded mb-1" />
                                    <div className="w-2/3 h-1.5 bg-muted/50 rounded" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
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
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
                    <div className="h-full bg-background rounded-lg border border-border p-4 space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-border">
                        <div className="font-semibold text-foreground">{t.featuresSection.equipment.mockTitle}</div>
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-muted/50 rounded-lg p-3 border border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Package className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-foreground/20 rounded w-3/4 mb-2" />
                              <div className="h-2 bg-muted-foreground/20 rounded w-1/2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
                      <div className="h-full bg-background rounded-lg border border-border p-4 space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-border">
                          <div className="font-semibold text-foreground">
                            {t.featuresSection.orders.mockOrderNumber}
                          </div>
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            {[
                              t.featuresSection.orders.mockTabDetails,
                              t.featuresSection.orders.mockTabDefect,
                              t.featuresSection.orders.mockTabService,
                              t.featuresSection.orders.mockTabAttachments,
                            ].map((tab, i) => (
                              <div
                                key={i}
                                className={`flex-1 text-xs py-1.5 px-2 rounded ${
                                  i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {tab}
                              </div>
                            ))}
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 border border-border space-y-2">
                            {[1, 2, 3, 4].map((line) => (
                              <div key={line} className="flex items-center gap-2">
                                <div className="w-16 h-2 bg-muted-foreground/30 rounded" />
                                <div className="flex-1 h-2 bg-foreground/20 rounded" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
