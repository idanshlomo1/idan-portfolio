
"use client"

import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsBoxArrowInDown, BsBoxArrowRight } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Home: React.FC = () => {

  return (
    <main>
      <MaxWidthWrapper>
        <Navbar />

        <HomeSection />

        <AboutSection />

        <ProjectsSection />

      </MaxWidthWrapper>
    </main>
  );
};

export default Home


