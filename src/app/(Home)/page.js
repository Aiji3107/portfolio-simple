"use client"
import { useEffect, useState } from "react";
import AboutSection from "@/components/about";
import EducationSection from "@/components/education";
import HomeSection from "@/components/homePage";
import LanguageSection from "@/components/language";
import ProjectSection from "@/components/project";
import { motion } from "motion/react"

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".snap-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.7 } // 70% elemen terlihat untuk dianggap aktif
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="snap-x flex snap-mandatory h-screen w-screen overflow-scroll">
      {[
        <HomeSection />,
        <AboutSection />,
        <EducationSection />,
        <LanguageSection />,
        <ProjectSection />,
      ].map((Section, index) => (
        <motion.div
          key={index}
          className="snap-section snap-start h-screen w-screen"
          initial={{ opacity: 0 }} // Ketika elemen pertama kali dimuat
          animate={{ opacity: activeIndex === index ? 1 : 0 }} // Saat elemen aktif
          transition={{ duration: 0.5 }} // Durasi animasi
        >
          {Section}
        </motion.div>
      ))}
    </div>
  );
}
