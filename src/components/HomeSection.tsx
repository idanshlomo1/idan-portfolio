import { BsBoxArrowInDown, BsBoxArrowRight } from "react-icons/bs";
import { Button } from "./ui/button"
import Image from "next/image";

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

  

  return (
    <div id="Home" className="pt-40 md:pt-64 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center" >
        <div>
          <div className="max-w-2xl">
            <h1 className="text-4xl text-center md:text-left lg:text-7xl font-light">
              Idan Shlomo
            </h1>
            <h1 className="text-4xl text-center md:text-left lg:text-6xl font-light mt-2">
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


            <Button
              onClick={(e) => smoothScroll(e, "Projects")}
              variant={"ghost"} className="w-full md:w-auto mt-4 md:mt-0 rounded-full flex items-center md:ml-4">
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
            src="/programming-image.jpg"
            alt="programming image"
            width={220}
            height={220}
            className="mt-8 md:mt-0 mx-auto p-4"
          />

        </div>
      </div>
    </div>
  )
}

export default HomeSection
