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
import ProjectCard from '@/components/ProjectCard';

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
                    onClick={() => router.back()}
                />
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    All Projects
                </h1>


                <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard project={project} />

                    ))}
                </div>
            </MaxWidthWrapper>

        </div>
    )
}

export default projectsPage
