import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import Projects from "@/components/Projects"
import Form from "@/components/Form"
import SocialLinks from "@/components/SocialLinks"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <Projects />
      <Form />
      <SocialLinks />
    </main>
  )
}
