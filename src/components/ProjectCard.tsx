"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton"; // Adjust the import path as necessary
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Project } from "@/lib/types";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new window.Image();
        img.src = project.imageUrl;
        img.onload = () => setImageLoaded(true);
    }, [project.imageUrl]);

    return (
        <div className="text-gray-4 border-[1px] border-gray-3 bg-black-2 hover:bg-black-2 hover:shadow-xl shadow-black-2 rounded-lg p-4 duration-300">
            {!imageLoaded ? (
                <div className="flex flex-col space-y-3">
                    <Skeleton className="w-full h-56 rounded-lg" />
                </div>
            ) : (
                <Image
                    width={800}
                    height={600}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-lg"
                />
            )}
            <h2 className="text-2xl mt-4 text-white">{project.title}</h2>

            <div className="mt-4 flex flex-col justify-between space-y-4">
                <Link href={`/projects/${project.slug}`}>
                    <Button variant={"idan"} className=" w-full">Read More</Button>
                </Link>
                <div className="space-x-4">
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
            </div>
            <div className="mt-4">
                {project.tags.map((tag, index) => (
                    <span key={index} className="inline-block rounded-full px-3 py-1 text-[12px] font-semibold text-gray-1 mr-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
