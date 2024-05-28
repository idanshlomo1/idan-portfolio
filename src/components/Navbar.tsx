"use client"
import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
import { BsBoxArrowInDown } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const session = true;
    const isAdmin = true;

    const linksData = [
        {
            title: "Home",
        },
        {
            title: "About",
        },
        {
            title: "Projects",
        },
        {
            title: "Contact",
        },
    ]


    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV_Idan_Shlomo.pdf';
        link.download = 'CV_Idan_Shlomo.pdf';  // This can be omitted if you want the download attribute to take the name from the href
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
        setOpen(false);
    };



    return (
        <div className="fixed top-0 left-0 right-0 ">
            <MaxWidthWrapper className="max-w-screen-lg z-navbar ">
                {/* md+ screens nav */}
                <div className="hidden md:block  ">
                    <div className="flex justify-between items-center border-secondary p-4 m-4 border-2 rounded-full bg-background ">
                        <a
                            href="/">
                            <Image
                                className="mx-4"
                                width={25}
                                height={25}
                                alt="Logo Image"
                                src="/logo.png"
                            />
                        </a>


                        <div className="mx-4">
                            {linksData.map((linkData) => (
                                <a
                                    className="text-muted-foreground hover:text-primary duration-200 mx-4"
                                    key={linkData.title}
                                    href={`#${linkData.title}`}
                                    onClick={(e) => smoothScroll(e, linkData.title)}

                                >
                                    {linkData.title}
                                </a>
                            ))}
                        </div>

                        {/* <Button
                            className="rounded-full mx-4 flex items-center"
                            variant={"default"}
                            onClick={handleDownloadCV}

                        >
                            <p>
                                Download CV
                            </p>
                            <BsBoxArrowInDown size={20} className="ml-2" />

                        </Button> */}

                        <ModeToggle />
                    </div>
                </div>


                {/* sm screen nav */}
                <div className="md:hidden  ">
                    <div className="flex justify-between items-center border-secondary p-4 m-4 border-2  rounded-full bg-background ">
                        <a
                            href="/">
                            <Image
                                className="mx-4"
                                width={25}
                                height={25}
                                alt="Logo Image"
                                src="/logo.png"
                            />
                        </a>


                        <label className="hamburger">
                            <input
                                type="checkbox"
                                checked={open}
                                onChange={() => setOpen(prev => !prev)}
                            />
                            <svg viewBox="0 0 32 32" className={`burger-icon ${open ? 'open' : ''}`}>
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>

                    </div>


                    {open &&
                        <div className="flex flex-col justify-between items-center border-secondary p-4 m-4 border-2 bg-background  rounded-3xl ">
                            <div className=" flex flex-col px-4 w-full">
                                {linksData.map((linkData, index) => (
                                    <a
                                        onClick={(e) => {
                                            setOpen(prev => !prev);  
                                            smoothScroll(e, linkData.title); 
                                        }}
                                        className={`text-muted-foreground hover:text-primary duration-200  py-4 w-full ${index !== 0 ? "border-t-2 border-secondary" : ""
                                            }`}
                                        key={linkData.title}
                                        href={`#${linkData.title}`}

                                    >
                                        <div className="my-2">
                                            {linkData.title}
                                        </div>
                                    </a>
                                ))}

                            </div>






                            <Button
                                className="rounded-full mx-4 flex items-center mt-4 w-full "
                                variant={"default"}
                                onClick={handleDownloadCV}

                            >
                                <p>Download CV</p>
                                <BsBoxArrowInDown size={20} className="ml-2" />
                            </Button>

                            <div className="mt-4">
                                <ModeToggle />

                            </div>

                        </div>

                    }

                </div>

            </MaxWidthWrapper>
        </div>
    )
}

export default Navbar
