
import ProjectModel from "./models";
import { Project } from "./types";
import mongoose from "mongoose";

const projectsArr: Project[] = [
    {
        title: "Devorah's Lane Website",
        description: "Developed a responsive and visually appealing website for 'Devorah's Lane,' a cosmetic business by Devorah Yaffe. This project utilized React for building a dynamic and interactive user interface, complemented by Tailwind CSS for custom, responsive design. The website features an engaging user experience perfectly aligned with the brand's identity, showcasing a booking system, a treatment results gallery, and a blog for beauty tips. The emphasis was on creating a frontend that is both aesthetically pleasing and functionally rich, enhancing the online presence of Devorah’s cosmetic services.",
        tags: ["react", "tailwind-css", "frontend"],
        githubUrl: "",
        imageUrl: "https://devorahslane.com/static/media/home-banner.061ba92dc2253a0ab1a6.jpg",
        livePreviewUrl: "https://devorahslane.com/",
        slug: "1"
    },
    {
        title: "Idan Shlomo Website",
        description: "This website, designed using React and Tailwind CSS, showcases my graphic design and web development projects. It features an intuitive interface, a comprehensive project gallery, and a blog where I share industry insights. The site is fully responsive, ensuring a seamless experience on all devices, reflecting my expertise in creating visually appealing and technically robust digital solutions.",
        tags: ["react", "tailwind-css", "frontend"],
        githubUrl: "",
        imageUrl: "https://idanso.netlify.app/static/media/logoImage.png",
        livePreviewUrl: "https://idanso.netlify.app/",
        slug: "2"
    },

    {
        title: "Mali Dayan Landing page",
        description: "This landing page, crafted using React and Tailwind CSS, uniquely showcases Mali Dayan's marriage counseling services. It features a distinctive design, an engaging interface, and an interactive gallery that highlights the essence of her work. The site is fully responsive, providing a seamless experience on all devices and reflecting my capability to deliver customized and visually compelling digital solutions tailored to her professional needs",
        tags: ["react", "tailwind-css", "frontend"],
        githubUrl: "",
        imageUrl: "https://malidayan.com/static/media/logoImage.d339938cef7baa3cac14.jpeg",
        livePreviewUrl: "https://malidayan.com/",
        slug: "3"
    },

    {
        title: "Moove Media Page",
        description: "This landing page, built using React and Tailwind CSS, uniquely showcases the services of Moove Media, a digital marketing agency specializing in business strategy and video editing. It features a distinctive design, an engaging interface, and an interactive gallery that highlights the essence of their work. The site is fully responsive, providing a seamless experience on all devices and reflecting my capability to deliver customized and visually compelling digital solutions tailored to their professional needs.",
        tags: ["react", "tailwind-css", "frontend"],
        githubUrl: "",
        imageUrl: "https://moovemedia.co.il/static/media/moovemedia_logo.7862736fda1d3306e7d0.png",
        livePreviewUrl: "https://moovemedia.co.il/",
        slug: "4"
    },

    // {
    //     title: "Project Three",
    //     description: "this is three description",
    //     tags: ["next-js", "node-js", "frontend"],
    //     githubUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
    //     imageUrl: "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     livePreviewUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
    //     slug: "3"
    // },
    // {
    //     title: "Project Four",
    //     description: "this is three description",
    //     tags: ["next-js", "node-js", "frontend"],
    //     githubUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
    //     imageUrl: "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     livePreviewUrl: "https://www.youtube.com/watch?v=vCOSTG10Y4o&list=WL&index=2",
    //     slug: "4"
    // },
];
export const getProjects = async () => {
    try {
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











