import ExperienceLayer from "@/components/system/ExperienceLayer";
import HUD from "@/components/system/HUD";
import Hero from "@/components/sections/Hero";
import CapabilityTicker from "@/components/sections/CapabilityTicker";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ExperienceLayer />
      <HUD />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <CapabilityTicker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
