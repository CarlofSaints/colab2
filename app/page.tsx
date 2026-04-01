import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Timeline from "@/components/Timeline";
import ColabHouse from "@/components/ColabHouse";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Companies />
      <Timeline />
      <ColabHouse />
      <Contact />
      <Footer />
    </main>
  );
}
