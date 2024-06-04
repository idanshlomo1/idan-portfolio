
"use client"

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

const Home: React.FC = () => {

  return (
    <main>
      <MaxWidthWrapper>
    
        <Navbar />

        <HomeSection />

        <AboutSection />

        <ProjectsSection />

        <ContactSection/>

      </MaxWidthWrapper>
    </main>
  );
};

export default Home


