import { ArrowRight } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
    {
        id:1,
        title: "My Portfolio",
        description: "Welcome to my portfolio! I'm a passionate developer skilled in React.js, JavaScript, Node.js,TailwindCSS and full-stack web development. This site showcases my projects, problem-solving abilities, and dedication to building clean, user-friendly applications. Explore my work to see how I turn ideas into impactful digital solutions.",
        image: "/projects/portfolio.jpg",
        tags: ["react","TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/sanketbarik01/portfolio",
    },
    {
        id:2,
        title: "SIH FERTILIZER RECOMMENDATION APP UI ",
        description: "A clean, intuitive Figma UI for a fertilizer recommendation app featuring crop selection, soil input, weather integration, and tailored nutrient suggestions to help farmers optimize yield and environmental sustainability.",
        image: "/projects/SIH.jpg",
        tags: ["Figma","UI","SIH"],
        demoUrl: "https://www.figma.com/design/3tyuBNdyzf2XClfluiC1q0/EDUMINATTI-ASSIGNMENT?t=7ijJsvRWc2xQpNpC-1",
        githubUrl: "#",
    },
    {
        id:3,
        title: "EDUMINNATI PROJECT",
        description: "EduMinnati is a smart recommendation platform that helps students discover top schools and universities using Al-driven filters based on location, courses, fees, rankings, and user preferences.",
        image: "/projects/EDUMINATI.png",
        tags: ["Figma","UI","SIH"],
        demoUrl: "https://www.figma.com/design/3tyuBNdyzf2XClfluiC1q0/EDUMINATTI-ASSIGNMENT?t=7ijJsvRWc2xQpNpC-1",
        githubUrl: "#",
    }
];
export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md-4xl fnt-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-center justify-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore my collection of projects that showcase my skills in web development, problem-solving, and creative thinking. <br />
                From responsive websites to dynamic applications, each project reflects my passion for building clean, user-friendly, and efficient digital solutions. <br />
                I’ve worked with technologies like React, JavaScript, Node.js, and more to bring ideas to life. These projects highlight both technical ability and attention to detail in real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-200% h-full justify-content: center align-items: center object-fit:cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => {
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    })}

                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl}
                                    className="tet-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>
            
            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex text-center mx- gap-2"
                href="https://github.com/sanketbarik01">
                    Check My Github <ArrowRight size = {16}/>
                </a>

            </div>
        </div>
    </section>
    )
}