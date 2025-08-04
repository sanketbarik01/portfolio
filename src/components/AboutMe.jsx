import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
    return (
    <section id="about" className=" py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About 
                <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3  className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        I’m a passionate and detail-oriented full-stack developer with a strong foundation in JavaScript, React.js, Node.js, and MongoDB. <br />
                        With hands-on experience building scalable web applications and APIs, I thrive in solving real-world problems through clean, efficient code.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#Contact" className="cosmic-button ">Get In Touch
                            </a>
                            
                            <a href="/portfolio/projects/RESUME.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV
                            </a>
                        </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Building responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive, engaging interfaces that enhance user experience through layout, color, and seamless interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project management</h4>
                                <p className="text-muted-foreground">
                                    Organizing, planning, and executing projects efficiently to meet goals, timelines, and client expectations successfully.
                                </p>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>)
}