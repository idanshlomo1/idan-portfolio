"use client"
import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
import { BsBoxArrowInDown } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {


    const [open, setOpen] = useState(false)
    const session = true;
    const isAdmin = true;

    const linksData = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ]


    return (
        <div className="fixed top-0 left-0 right-0 z-10">
            <MaxWidthWrapper className="max-w-screen-lg">
                {/* md+ screens nav */}
                <div className="hidden md:block">
                    <div className="flex justify-between items-center border-gray-400 p-4 m-4 border-[1px] rounded-full ">
                        <Link
                            href="/">
                            <Image
                                className="mx-4"
                                width={25}
                                height={25}
                                alt="Logo Image"
                                src="/logo.png"
                            />
                        </Link>


                        <div className="mx-4">
                            {linksData.map((linkData) => (
                                <Link
                                    className="text-gray-400 hover:text-white duration-200 mx-4"
                                    key={linkData.title}
                                    href={linkData.href}
                                >
                                    {linkData.title}
                                </Link>
                            ))}
                        </div>

                        <Button
                            className="rounded-full mx-4 flex items-center"
                            variant={"default"}
                        >
                            <p>
                                Download CV
                            </p>
                            <BsBoxArrowInDown size={20} className="ml-2" />

                        </Button>
                    </div>
                </div>


                {/* sm screen nav */}
                <div className="md:hidden">
                    <div className="flex justify-between items-center border-gray-400 p-4 m-4 border-[1px]  rounded-full ">
                        <Link
                            href="/">
                            <Image
                                className="mx-4"
                                width={25}
                                height={25}
                                alt="Logo Image"
                                src="/logo.png"
                            />
                        </Link>

                        <label className="hamburger">
                            <input
                                onClick={() => { setOpen(prev => !prev) }}
                                type="checkbox"
                            />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>


                    {open &&
                        <div className="flex flex-col justify-between items-center border-gray-400 p-4 m-4 border-[1px]  rounded-3xl ">



                            <div className="mx-4 flex flex-col text-center">
                                {linksData.map((linkData) => (
                                    <Link
                                        onClick={() => { setOpen(prev => !prev) }}
                                        className="text-gray-400 hover:text-white duration-200 mx-4 my-4 text-xl"
                                        key={linkData.title}
                                        href={linkData.href}
                                    >
                                        {linkData.title}
                                    </Link>
                                ))}
                            </div>

                            <Button
                                className="rounded-full mx-4 flex items-center mt-4 py-6 w-full text-xl"
                                variant={"default"}
                            >
                                <p>
                                    Download CV
                                </p>
                                <BsBoxArrowInDown size={20} className="ml-2" />

                            </Button>
                        </div>
                    }

                </div>

            </MaxWidthWrapper>
        </div>
    )
}

export default Navbar