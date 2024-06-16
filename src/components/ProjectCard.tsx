"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Project } from "@/lib/types";
``

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div>
            <div className="border-2 border-pri rounded-lg p-4 duration-300 bg-gradient-to-tr from-background to-transparent">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover rounded-lg" />
                <h2 className="text-2xl mt-4">{project.title}</h2>
                {/* <p className="mt-2 text-muted-foreground">{project.description}</p> */}
                <div className="mt-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-primary-foreground rounded-full px-3 py-1 text-sm font-semibold text-muted-foreground mr-2 mb-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex justify-between">
                    <Link href={`/projects/${project.slug}`}>
                        <Button variant="ghost" >Read More</Button>
                    </Link>
                    <div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="ghost"><IoLogoGithub size={25} /></Button>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>View on GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
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
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
