"use client";

import Navbar from "@/components/Navbar";
import TechGraph from "@/components/TechGraph";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <TechGraph />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
