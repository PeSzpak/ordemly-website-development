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
  const { t, language } = useLanguage()

  // Funções helper para obter imagens baseadas no idioma
  const getDashboardAdminImage = () => {
    const langSuffix = language === "pt" ? "PT" : language === "en" ? "EN" : "ES"
    return `/images/dashboard-admin-${langSuffix}.png`
  }

  const getKanbanImage = () => {
    const langSuffix = language === "pt" ? "PT" : language === "en" ? "EN" : "ES"
    return `/images/order${langSuffix}.png`
  }

  const getEquipmentImage = () => {
    const langSuffix = language === "pt" ? "PT" : language === "en" ? "EN" : "ES"
    return `/images/equip${langSuffix}.png`
  }

  const getOrdersImage = () => {
    const langSuffix = language === "pt" ? "PT" : language === "en" ? "EN" : "ES"
    return `/images/ordem${langSuffix}.png`
  }

  return (
    <section id="funcionalidades" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.featuresSection.sectionTitle}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              {t.featuresSection.sectionTitleHighlight}
            </span>
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
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.dashboard.tab}</span>
            </TabsTrigger>
            <TabsTrigger
              value="kanban"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30"
            >
              <Kanban className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.kanban.tab}</span>
            </TabsTrigger>
            <TabsTrigger
              value="equipment"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30"
            >
              <Package className="w-5 h-5" />
              <span className="text-sm font-medium">{t.featuresSection.equipment.tab}</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30"
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-600/20 bg-card">
                  <div className="bg-background">
                    <img 
                      src={getDashboardAdminImage()} 
                      alt="Dashboard" 
                      className="w-full h-auto" 
                    />
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-600/20 bg-card">
                    <div className="bg-background">
                      <img 
                        src={getKanbanImage()} 
                        alt="Kanban Board" 
                        className="w-full h-auto" 
                      />
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-600/20 bg-card">
                  <div className="bg-background">
                    <img 
                      src={getEquipmentImage()} 
                      alt="Equipment List" 
                      className="w-full h-auto" 
                    />
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-600/20 bg-card">
                    <div className="bg-background">
                      <img 
                        src={getOrdersImage()} 
                        alt="Order Details" 
                        className="w-full h-auto" 
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
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/20 text-blue-700 dark:text-blue-400 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
