"use client"
import { useEffect, useState } from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { getProjects } from "@/lib/db"
import { ArrowLeftCircleIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Project } from '@/lib/types';
import { IoLogoGithub } from 'react-icons/io';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

const projectsPage = async () => {

    const router = useRouter()
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const projectsData = await getProjects();
            setProjects(projectsData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <MaxWidthWrapper className="py-20">

                <ArrowLeftCircleIcon
                    className="mb-20 cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    All Projects
                </h1>


                <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.slug} className="border-2 border-secondary rounded-lg p-4 duration-300">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-2xl mt-4">{project.title}</h2>
                            <p className="mt-2 text-muted-foreground">{project.description}</p>
                            <div className="mt-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex justify-between">
                                <Link href={`/projects/${project.slug}`}>
                                    <Button variant="ghost">Read More</Button>
                                </Link>
                                <div>


                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="ghost"><IoLogoGithub size={25} /></Button>

                                    </a>
                                    <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="ghost"><HiOutlineComputerDesktop size={25} /></Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>

        </div>
    )
}

export default projectsPage
