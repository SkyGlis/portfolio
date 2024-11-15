'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import StudyTimeline from "@/components/StudyTimeline";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

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
      
      <motion.div
        key={animationKey}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {activeSection === "hero" && <Hero />}
        {activeSection === "about" && <AboutMe />}
        {activeSection === "skills" && <StudyTimeline />}
        {activeSection === "projects" && <Projects />}
      </motion.div>
    </div>
  );
}