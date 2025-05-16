import PageHero from "@/components/page-hero"
import OurStory from "@/components/about/our-story"
import WhyChooseUs from "@/components/about/why-choose-us"
import SectorsDetailed from "@/components/about/sectors-detailed"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/call-to-action"

export default function AboutPage() {
  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url('https://i.ibb.co/sJkB90BZ/about-1-11zon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      <PageHero 
        title="about_title" 
        description="asp" 
        backgroundImage="https://i.ibb.co/sJkB90BZ/about-1-11zon.jpg"
      />
{/*       <PageHero title="about_title" description="asp" src="https://i.ibb.co/sJkB90BZ/about-1-11zon.jpg" /> */}
      <OurStory />
      <WhyChooseUs />
      <SectorsDetailed />
      <Testimonials />
      <CallToAction title="cta_content" description="cta_contentp" buttonText="Touch" buttonLink="/contact" />
    </>
  )
}
