import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import HowIThink from "@/components/HowIThink";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FadeIn><Hero /></FadeIn>
      <FadeIn delay={0.1}><About /></FadeIn>
      <FadeIn delay={0.1}><CaseStudy /></FadeIn>
      <FadeIn delay={0.1}><Experience /></FadeIn>
      <FadeIn delay={0.1}><Projects /></FadeIn>
      <FadeIn delay={0.1}><HowIThink /></FadeIn>
      <Chatbot />
      <Contact />
    </main>
  );
}
