import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import HowIThink from "@/components/HowIThink";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Chatbot />
      <CaseStudy />
      <Projects />
      <Experience />
      <HowIThink />
      <Contact />
    </main>
  );
}
