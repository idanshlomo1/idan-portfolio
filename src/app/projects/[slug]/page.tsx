import SingleProjectPageClient from "@/components/SingleProjectPageClient";
import { getProject } from "@/lib/db";
import { Metadata } from "next";

interface Params {
    slug: string;
}

interface SingleProjectPageProps {
    params: Params;
}

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const generateMetadata = async ({ params }: SingleProjectPageProps): Promise<Metadata> => {
    const { slug } = params;
    const project = await getProject(slug);

    return {
        title: project ? `${project.title} | My Portfolio` : "Project | My Portfolio",
        description: project ? project.description.substring(0, 160) : "Project description",
        openGraph: {
            title: project ? project.title : "Project",
            description: project ? project.description.substring(0, 160) : "Project description",
            images: project ? [{ url: project.imageUrl }] : [],
            url: project ? `${NEXT_PUBLIC_URL}/projects/${slug}` : NEXT_PUBLIC_URL,
        },
        twitter: {
            card: "summary_large_image",
        },
    };
};

const SingleProjectPage = async ({ params }: SingleProjectPageProps) => {
    const { slug } = params;
    const project = await getProject(slug);

    if (!project) {
        // Handle project not found
        return <div>Project not found</div>;
    }

    return <SingleProjectPageClient project={project} />;
};

export default SingleProjectPage;
