"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getProject } from "@/lib/db";
import { Project } from "@/lib/types";
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";  // Corrected import for useRouter
import { useEffect, useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoLogoGithub } from "react-icons/io";

interface Params {
    slug: string;
}

interface SingleProjectPageProps {
    params: Params;
}

const SingleProjectPage = ({ params }: SingleProjectPageProps) => {
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const { slug } = params;

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProject = await getProject(slug);
            setProject(fetchedProject);
        };

        fetchData();
    }, [slug]); // Dependency on 'slug' to refetch when it changes

    if (!project) {
        return <div>Loading...</div>; // Handle loading state properly
    }

    return (
        <div>
            <MaxWidthWrapper className="py-20">
                <Button
                    className="mb-20"
                    variant="ghost"
                    onClick={() => router.back()}>
                    <ArrowLeftCircleIcon

                    />
                </Button>

                <h1 className="text-4xl text-left lg:text-6xl font-light">
                    {project.title}
                </h1>
                <p className="mt-4 text-muted-foreground text-sm lg:text-lg">
                    {showFullDescription ? project.description : `${project.description.substring(0, 200)}...`}
                    {project.description.length > 100 && (
                        <a className="text-xs lg:text-sm cursor-pointer ml-2 underline text-primary hover:text-muted-foreground duration-300" onClick={() => setShowFullDescription(!showFullDescription)}>
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
                        <span key={index} className="inline-block bg-primary-foreground rounded-full px-3 py-1 text-sm font-semibold text-muted-foreground mr-2 mb-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 space-x-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost"><IoLogoGithub size={25} /></Button>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>View on Github</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost"><HiOutlineComputerDesktop size={25} /></Button>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>View live preview</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <div className="border-t-[1px] mt-8"></div>
                <div className="mt-8 text-center">
                    <Link href="/projects">
                        <Button className='rounded-full' variant="ghost">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}

export default SingleProjectPage;
