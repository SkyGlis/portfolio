'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import NewStudy from "@/components/NewStudy";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CV from "@/components/CV";
import PitchPage from "@/components/PitchPage";
import NewPortfolioBanner from "@/components/NewPortfolioBanner";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setAnimationKey((prev) => prev + 1);
  };
  return (
    <div>
      <Navbar onNavigate={handleNavigation} active={activeSection} />
      <NewPortfolioBanner />
      
      <motion.div
        key={animationKey}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {activeSection === "hero" && <Hero handle={handleNavigation} />}
        {activeSection === "about" && <AboutMe/>}
        {activeSection === "cv" && <CV/>}
        {activeSection === "pitch" && <PitchPage />}
        {activeSection === "skills" && <NewStudy />}
        {activeSection === "projects" && <Projects />}
      </motion.div>
      <Footer />
    </div>
  );
}