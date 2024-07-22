import { BsBoxArrowInDown, BsBoxArrowRight } from "react-icons/bs";
import { Button } from "./ui/button"
import Image from "next/image";
import { useRef } from "react";
const HomeSection = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Idan_Shlomo.pdf';
    link.download = 'CV_Idan_Shlomo.pdf';  // This can be omitted if you want the download attribute to take the name from the href
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const cvRef = useRef<HTMLDivElement>(null);


  return (
    <div id="Home" className="pt-40 md:pt-64 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center" >
        <div>
          <div className="max-w-2xl">
            <h1 className="text-5xl textGradient text-center md:text-left md:text-5xl lg:text-7xl font-light text-white">
              Idan Shlomo
            </h1>
            <h1 className="text-3xl textGradient text-center md:text-left md:text-4xl lg:text-6xl font-light mt-2 text-white">
              Full Stack Developer
            </h1>
            <div className="bgGradient h-[1px] mt-4 rounded-full">
            </div>
            <p className="text-gray-1 text-center md:text-left  mt-4 ">
              As a 19-year-old full-stack developer, I excel in building dynamic web applications that bridge user needs with cutting-edge technology. My drive for innovation and mastery in coding fuels my passion for delivering impactful solutions.            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center">

            <Button
              variant={"idan"}
              className="w-full  md:w-auto rounded-full flex items-center "
              onClick={handleDownloadCV}

            >
              <p>
                Download CV
              </p>
              <BsBoxArrowInDown size={20} className="ml-2" />


            </Button>


            <Button
              variant={"glow"}
              onClick={(e) => smoothScroll(e, "Projects")}
              className="w-full md:w-auto mt-4 md:mt-0 rounded-full flex items-center md:ml-4">
              <p

              >

                Recent projects
              </p>
              <BsBoxArrowRight size={20} className="ml-2" />

            </Button>


          </div>
        </div>
        <div>
          <Image
            src="/logo.png"
            alt="programming image"
            width={170}
            height={170}
            className="mt-8 md:mt-0 mx-auto p-4"
          />

        </div>
      </div>
    </div>
  )
}

export default HomeSection
