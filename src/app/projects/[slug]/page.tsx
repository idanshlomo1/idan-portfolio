"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { getProject } from "@/lib/db";
import { Project } from "@/lib/types";
import { ArrowLeftCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
    slug: string;
}

interface SingleProjectPageProps {
    params: Params;
}

const SingleProjectPage = ({ params }: SingleProjectPageProps) => {
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
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
                <ArrowLeftCircleIcon
                    className="mb-20 cursor-pointer"
                    onClick={() => router.back()}
                />
                <h1 className="text-5xl text-left lg:text-7xl font-light">
                    {project.title}
                </h1>
                <p className="mt-4 text-muted-foreground text-xl lg:text-3xl">
                    {project.description}
                </p>

                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full mt-4 h-80 object-cover rounded-lg"
                />
                <div className="mt-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">GitHub</Button>
                    </a>
                    <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">Live Preview</Button>
                    </a>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}

export default SingleProjectPage;
