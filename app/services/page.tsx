import PageHero from "@/components/page-hero"
import ServiceCategories from "@/components/services/service-categories"
import CallToAction from "@/components/call-to-action"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="our_services"
        description="our_servicespro"
        backgroundImage="/assets/termite-service_15_11zon.jpg"
      />
      <ServiceCategories />
      <CallToAction title="cta_sectionh" description="cta_sectionp" buttonText="Quote" buttonLink="/contact" />
    </>
  )
}
