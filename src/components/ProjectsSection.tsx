"use client"
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { getProjects } from '@/lib/db';
import { Project } from '@/lib/types';
import { IoLogoGithub } from 'react-icons/io';
import { SiFacebooklive, SiLivechat, SiLivewire } from 'react-icons/si';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsData = await getProjects();
                setProjects(projectsData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch projects');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div id="Projects" className="pt-40 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    Recent Projects
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-2xl mx-auto"></div>
                <p className="text-muted-foreground text-center mt-4">
                    A showcase of my recent work
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link href="/projects">
                        <Button className='rounded-full' variant="ghost">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;
