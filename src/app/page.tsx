
"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { BsBoxArrowInDown, BsBoxArrowRight } from "react-icons/bs";

const Home: React.FC = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Idan_Shlomo.pdf';
    link.download = 'CV_Idan_Shlomo.pdf';  // This can be omitted if you want the download attribute to take the name from the href
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (


    <main>
      <MaxWidthWrapper className="pt-40 md:pt-64">
        {/* Hero */}
        <div>
          <div className="max-w-2xl">
            <h1 className="text-5xl text-center md:text-left lg:text-7xl font-light">
              Idan Shlomo
            </h1>
            <h1 className="text-5xl text-center md:text-left lg:text-7xl font-light mt-2">
              Fullstack developer
            </h1>
            <div className="bgGradient h-[1px] mt-4 rounded-full">
            </div>
            <p className="text-muted-foreground text-center md:text-left  mt-4 ">
              As a 19-year-old full-stack developer, I excel in building dynamic web applications that bridge user needs with cutting-edge technology. My drive for innovation and mastery in coding fuels my passion for delivering impactful solutions.            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center">

            <Button
              className="w-full md:w-auto rounded-full flex items-center "
              variant={"default"}
              onClick={handleDownloadCV}

            >
              <p>
                Download CV
              </p>
              <BsBoxArrowInDown size={20} className="ml-2" />

            </Button>

            <Button variant={"ghost"} className="w-full md:w-auto mt-4 md:mt-0 rounded-full flex items-center md:ml-4">
              <p>

                Recent projects
              </p>
              <BsBoxArrowRight size={20} className="ml-2" />

            </Button>
          </div>
          <div>
          </div>
        </div>

        {/* About */}
        <div>

        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Home


