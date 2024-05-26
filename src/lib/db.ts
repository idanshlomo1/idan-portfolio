
import ProjectModel from "./models";
import { Project } from "./types";
import mongoose from "mongoose";

const projectsArr: Project[] = [
    {
        title: "Project One",
        description: "this is first description",
        tags: ["mongodb", "react", "fullstack"],
        githubUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        imageUrl: "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        livePreviewUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        slug: "1"
    },
    {
        title: "Project Two",
        description: "this is second description",
        tags: ["nextjs", "nodejs", "frontend"],
        githubUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        imageUrl: "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        livePreviewUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        slug: "2"
    },
    {
        title: "Project Three",
        description: "this is three description",
        tags: ["nextjs", "nodejs", "frontend"],
        githubUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        imageUrl: "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        livePreviewUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        slug: "3"
    },
    {
        title: "Project Four",
        description: "this is three description",
        tags: ["nextjs", "nodejs", "frontend"],
        githubUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        imageUrl: "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        livePreviewUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
        slug: "4"
    },
];
export const getProjects = async () => {
    try {
        // const projects = await ProjectModel.find()
        const projects = projectsArr
        return projects
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch projects")
    }
}
export const getProject = async (slug: string): Promise<Project | null> => {
    try {
        // const project = await ProjectModel.findOne({ slug: slug });
        const project = projectsArr.find(project => project.slug === slug);
        return project || null; // Return the project or null if not found
    } catch (error) {
        console.error("Failed to fetch project:", error);
        throw new Error("Failed to fetch project");
    }
};











