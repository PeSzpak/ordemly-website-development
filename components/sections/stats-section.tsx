import { BarChart3, Users, Clock, TrendingUp } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: BarChart3,
      value: "10.000+",
      label: "Ordens Processadas",
      description: "Mensalmente",
    },
    {
      icon: Users,
      value: "500+",
      label: "Empresas Ativas",
      description: "Em todo Brasil",
    },
    {
      icon: Clock,
      value: "40%",
      label: "Redução de Tempo",
      description: "Na gestão",
    },
    {
      icon: TrendingUp,
      value: "94%",
      label: "Satisfação",
      description: "Dos clientes",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
