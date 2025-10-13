"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Wrench, User, ChevronRight, LayoutDashboard, Kanban, Settings, ClipboardList } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"

type ProfileType = "administrator" | "professional" | "enduser"

export function ProfileViewsSection() {
  const { t } = useLanguage()
  const [activeProfile, setActiveProfile] = useState<ProfileType>("administrator")

  const profiles = [
    {
      id: "administrator" as ProfileType,
      icon: Shield,
      title: t.profileViews.administrator.title,
      subtitle: t.profileViews.administrator.subtitle,
      description: t.profileViews.administrator.description,
      features: [
        t.profileViews.administrator.feature1,
        t.profileViews.administrator.feature2,
        t.profileViews.administrator.feature3,
        t.profileViews.administrator.feature4,
        t.profileViews.administrator.feature5,
        t.profileViews.administrator.feature6,
      ],
      color: "primary",
    },
    {
      id: "professional" as ProfileType,
      icon: Wrench,
      title: t.profileViews.professional.title,
      subtitle: t.profileViews.professional.subtitle,
      description: t.profileViews.professional.description,
      features: [
        t.profileViews.professional.feature1,
        t.profileViews.professional.feature2,
        t.profileViews.professional.feature3,
        t.profileViews.professional.feature4,
        t.profileViews.professional.feature5,
        t.profileViews.professional.feature6,
      ],
      color: "accent",
    },
    {
      id: "enduser" as ProfileType,
      icon: User,
      title: t.profileViews.enduser.title,
      subtitle: t.profileViews.enduser.subtitle,
      description: t.profileViews.enduser.description,
      features: [
        t.profileViews.enduser.feature1,
        t.profileViews.enduser.feature2,
        t.profileViews.enduser.feature3,
        t.profileViews.enduser.feature4,
        t.profileViews.enduser.feature5,
        t.profileViews.enduser.feature6,
      ],
      color: "chart-3",
    },
  ]

  const currentProfile = profiles.find((p) => p.id === activeProfile) || profiles[0]
  const Icon = currentProfile.icon

  return (
    <section id="perfis" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.profileViews.sectionTitle} <span className="text-primary">{t.profileViews.sectionTitleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t.profileViews.sectionSubtitle}</p>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          {profiles.map((profile) => {
            const ProfileIcon = profile.icon
            return (
              <button
                key={profile.id}
                onClick={() => setActiveProfile(profile.id)}
                className={cn(
                  "flex-1 p-6 rounded-xl border-2 transition-all duration-300 text-left",
                  activeProfile === profile.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border bg-card hover:border-primary/30 hover:bg-card/80",
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      activeProfile === profile.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <ProfileIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div
                      className={cn(
                        "font-semibold",
                        activeProfile === profile.id ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {profile.title}
                    </div>
                  </div>
                </div>
                <p
                  className={cn("text-sm", activeProfile === profile.id ? "text-foreground" : "text-muted-foreground")}
                >
                  {profile.subtitle}
                </p>
              </button>
            )
          })}
        </div>

        {/* Profile Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description and Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Icon className="w-4 h-4" />
                {currentProfile.title}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{currentProfile.subtitle}</h3>

              <p className="text-lg text-muted-foreground leading-relaxed">{currentProfile.description}</p>
            </div>

            <div className="space-y-3">
              {currentProfile.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <a href="#demo">
                {t.profileViews.viewDemo}
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Right - Visual Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
                {/* Mock Interface */}
                <div className="h-full bg-background rounded-lg border border-border p-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{currentProfile.title}</div>
                        <div className="text-xs text-muted-foreground">{t.profileViews.mainDashboard}</div>
                      </div>
                    </div>
                    <Settings className="w-5 h-5 text-muted-foreground" />
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                      <LayoutDashboard className="w-5 h-5 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground">Dashboard</div>
                      <div className="text-lg font-bold text-foreground">24</div>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
                      <Kanban className="w-5 h-5 text-accent mb-2" />
                      <div className="text-xs text-muted-foreground">Kanban</div>
                      <div className="text-lg font-bold text-foreground">12</div>
                    </div>
                    <div className="col-span-2 bg-muted/50 rounded-lg p-3 border border-border">
                      <ClipboardList className="w-5 h-5 text-muted-foreground mb-2" />
                      <div className="text-xs text-muted-foreground mb-2">Ordens Recentes</div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="flex-1 h-2 bg-border rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
