"use client";
import { useEffect, useState } from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getProjects } from "@/lib/db";
import { ArrowLeftCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Project } from '@/lib/types';
import ProjectCard from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { IoMdSearch } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import Loader from '@/components/Loader';

const ProjectsPage = () => {

    const router = useRouter();
    const [projects, setProjects] = useState<Project[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            const projectsData = await getProjects();
            setProjects(projectsData);
            setLoading(false); // Set loading to false after data is fetched
        };

        fetchData();
    }, []);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <Loader />; // Display Loader while loading is true
    }

    return (
        <div className='bg-black-1'>
            <MaxWidthWrapper className="py-20 ">
                <Button
                    className="mb-20 rounded-full"
                    variant={'glow'}
                    onClick={() => router.push("/")}
                >
                    <ArrowLeftCircleIcon />
                </Button>
                <h1 className="text-5xl textGradient text-center lg:text-7xl font-light">
                    All Projects
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-md mx-auto"></div>

                <div className='flex items-center justify-center max-w-xl mx-auto mt-12 '>
                    <Input
                        placeholder="Search projects by name..."
                        onChange={e => setSearchTerm(e.target.value)}
                        className="duration-300 bg-black-1 rounded-full"
                    />
                    <IoMdSearch size={20} className='mx-4 text-gray-4' />
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
}

export default ProjectsPage;
