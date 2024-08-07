"use client";

import Loader from "@/components/Loader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoLogoGithub } from "react-icons/io";

interface SingleProjectPageClientProps {
    project: Project;
}

const SingleProjectPageClient = ({ project }: SingleProjectPageClientProps) => {
    const router = useRouter();
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="bg-black-1">
            <Button
                variant={"glow"}
                className="mt-6 ml-6 rounded-full"
                onClick={() => router.push("/projects")}
            >
                <ArrowLeftCircleIcon />
            </Button>
            <MaxWidthWrapper className="py-20">
                <h1 className="text-4xl text-left lg:text-6xl font-light text-white">
                    {project.title}
                </h1>
                <p className="mt-4 text-gray-1 text-sm lg:text-lg">
                    {showFullDescription ? project.description : `${project.description.substring(0, 200)}...`}
                    {project.description.length > 100 && (
                        <a
                            className="text-xs lg:text-sm cursor-pointer ml-2 underline text-gray-4 hover:text-gray-1 duration-300"
                            onClick={() => setShowFullDescription(!showFullDescription)}
                        >
                            {showFullDescription ? 'Read Less' : 'Read More'}
                        </a>
                    )}
                </p>

                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    height={50}
                    width={200}
                    className="w-full mt-4 h-96 object-cover rounded-lg"
                />
                <div className="mt-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-black-1 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-1 mr-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 space-x-4">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant={"idan"}>
                                <IoLogoGithub size={25} /> <span className="ml-2">View Code</span>
                            </Button>
                        </a>
                    )}
                    <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant={"idan"}>
                            <HiOutlineComputerDesktop className="animate-pulse text-red-500" size={25} /><span className="ml-2">Live Preview</span>
                        </Button>
                    </a>
                </div>

                <div className="border-t-[1px] mt-8 border-gray-3"></div>
                <div className="mt-8 text-center">
                    <Link href="/projects">
                        <Button
                            variant={"glow"}
                            className="rounded-full"
                        >
                            <ArrowLeftCircleIcon className="mr-2" size={20} /> All Projects
                        </Button>
                    </Link>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default SingleProjectPageClient;
