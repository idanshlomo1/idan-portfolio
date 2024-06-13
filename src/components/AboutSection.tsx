import { IoMdCheckmarkCircle } from "react-icons/io";

const AboutSection = () => {
    return (
        <div id="About" className="pt-40 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    About
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-md mx-auto"></div>
                <p className="text-muted-foreground text-center md:text-left mt-4">
                    At 19, I have already established myself as a proficient full-stack developer. My expertise lies in crafting dynamic web applications that seamlessly connect user needs with advanced technology. With a keen eye for detail and a commitment to excellence, I strive to push the boundaries of what's possible in web development.
                </p>
                <p className="text-muted-foreground text-center md:text-left mt-4">
                    My passion for coding is driven by a relentless pursuit of innovation and mastery. I am dedicated to delivering solutions that not only meet but exceed expectations, ensuring impactful and user-friendly experiences. By staying updated with the latest trends and technologies, I aim to continually elevate the quality and functionality of my projects.
                </p>
            </div>

            {/* Add experience */}
            <section>
                <div className="container my-8 mx-auto lg:max-w-3xl border-2 border-secondary p-8 rounded-3xl">
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-3 text-lg font-bold md:text-xl text-muted-foreground">2019 - 2022</h3>
                            <ul className="space-y-4">
                                <li className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <IoMdCheckmarkCircle className="w-4 h-4" />
                                        <h4 className="font-bold">Freelance Graphic Designer</h4>
                                    </div>
                                    <p className="ml-7 text-muted-foreground">Worked on various graphic design projects, creating visually appealing designs for clients. Developed strong skills in Adobe Creative Suite and delivered high-quality work under tight deadlines.</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold md:text-xl text-muted-foreground">2022 - 2024</h3>
                            <ul className="space-y-4">
                                <li className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <IoMdCheckmarkCircle className="w-4 h-4" />
                                        <h4 className="font-bold">Freelance Full Stack Web Developer</h4>
                                    </div>
                                    <p className="ml-7 text-muted-foreground">Specialized in building dynamic web applications using modern technologies like React, Next.js, and Node.js. Delivered robust solutions to clients, focusing on performance, scalability, and user experience.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutSection;
