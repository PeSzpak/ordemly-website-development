import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ProfileViewsSection } from "@/components/sections/profile-views-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CustomizationSection } from "@/components/sections/customization-section"
import { DemoSection } from "@/components/sections/demo-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProfileViewsSection />
        <FeaturesSection />
        <CustomizationSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
