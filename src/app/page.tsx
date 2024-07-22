
"use client"

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {

  return (
    <main className="bg-black-1">
      <MaxWidthWrapper>

        <Navbar />

        <HomeSection />

        <AboutSection />

        <ProjectsSection />

        <ContactSection />

      </MaxWidthWrapper>
    </main>
  );
};

export default Home


