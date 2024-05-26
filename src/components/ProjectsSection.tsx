import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { getProjects } from '@/lib/db';
import { Project } from '@/lib/types';
import { IoLogoGithub } from 'react-icons/io';
import { SiFacebooklive, SiLivechat, SiLivewire } from 'react-icons/si';
import { HiOutlineComputerDesktop } from "react-icons/hi2";

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
        <div id="Projects" className="py-20 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    Recent Projects
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-md mx-auto"></div>
                <p className="text-muted-foreground text-center mt-4">
                    A showcase of my recent work
                </p>

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
