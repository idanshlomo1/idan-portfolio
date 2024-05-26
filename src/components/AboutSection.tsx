import { IoMdCheckmarkCircle } from "react-icons/io"

const AboutSection = () => {
    return (
        <div id="About" className="pt-40 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl text-center lg:text-7xl font-light">
                    About
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-md mx-auto">
                </div>
                <p className="text-muted-foreground text-center md:text-left  mt-4 ">
                    As a 19-year-old full-stack developer, I excel in building dynamic web applications that bridge user needs with cutting-edge technology. My drive for innovation and mastery in coding fuels my passion for delivering impactful solutions.            </p>
            </div>

            {/* Add experience */}
            <section>
                <div className="relative container my-8 mx-auto lg:max-w-3xl border-[1px] border-muted-foreground p-8 rounded-3xl">
                    {/* Floating Title Section */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background rounded-full px-4 py-1">
                        <h2 className="text-xl md:text-2xl font-bold text-muted-foreground">Experience</h2>
                    </div>

                    <div className="space-y-8 pt-6"> {/* Added padding-top to give space for the title */}
                        <div>
                            <h3 className="mb-3 text-lg font-bold md:text-xl text-muted-foreground">2019 - 2022</h3>
                            <ul className="space-y-4">
                                <li className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <IoMdCheckmarkCircle className="w-4 h-4" />
                                        <h4 className="font-bold">Freelance Graphic designer</h4>
                                    </div>
                                    <p className="ml-7 text-muted-foreground">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold md:text-xl text-muted-foreground">2022 - 2024</h3>
                            <ul className="space-y-4">
                                <li className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <IoMdCheckmarkCircle className="w-4 h-4" />
                                        <h4 className="font-bold">Freelance full stack web developer</h4>
                                    </div>
                                    <p className="ml-7 text-muted-foreground">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}

export default AboutSection
