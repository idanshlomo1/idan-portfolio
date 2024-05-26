import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';


const ProjectsSection = () => {

    return (
        <div id="Projects" className="pt-40 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    Projects
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-md mx-auto"></div>
                <p className="text-muted-foreground text-center md:text-left mt-4">
                    Recent projects built by me
                </p>


                <Link href="/projects">

                    <Button className='rounded-full' variant="ghost">
                        all projects
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ProjectsSection;
