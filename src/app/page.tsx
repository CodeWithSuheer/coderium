import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TestimonialCards from "@/components/TestimonialCards";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <About /> */}
      <Projects />
      <TestimonialCards />
    </main>
  );
}
