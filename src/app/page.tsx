"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedExperience from "@/components/home/FeaturedExperience";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HomeCta from "@/components/home/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedExperience />
      <FeaturedProjects />
      <HomeCta />
    </>
  );
}