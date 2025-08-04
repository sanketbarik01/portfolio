import { ArrowRight } from "lucide-react";
import { Github ,ExternalLink } from "lucide-react";


const projects = [
    {
        id:1,
        title: "My Portfolio",
        description: "Welcome to my portfolio! I'm a passionate developer skilled in React.js, JavaScript, Node.js,TailwindCSS and full-stack web development. This site showcases my projects, problem-solving abilities, and dedication to building clean, user-friendly applications. Explore my work to see how I turn ideas into impactful digital solutions.",
        image: "/portfolio/projects/portfolio.jpg",
        tags: ["react","TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/sanketbarik01/portfolio",
    },
    {
        id:2,
        title: "SIH FERTILIZER RECOMMENDATION APP UI ",
        description: "A clean, intuitive Figma UI for a fertilizer recommendation app featuring crop selection, soil input, weather integration, and tailored nutrient suggestions to help farmers optimize yield and environmental sustainability.",
        image: "/portfolio/projects/SIH.jpg",
        tags: ["Figma","UI","SIH"],
        demoUrl: "https://www.figma.com/proto/ch0ZQzwZ87k8fdIIK4ZPf2/SIH-APP-UI?node-id=0-54&starting-point-node-id=0%3A54&t=CEXr8l5UtEHZWYHj-1",
        githubUrl: "#",
    },
    {
        id:3,
        title: "EDUMINNATI PROJECT",
        description: "EduMinnati is a smart recommendation platform that helps students discover top schools and universities using Al-driven filters based on location, courses, fees, rankings, and user preferences.",
        image: "/portfolio/projects/EDUMINATI.png",
        tags: ["Figma","UI","SIH"],
        demoUrl: "https://www.figma.com/design/3tyuBNdyzf2XClfluiC1q0/EDUMINATTI-ASSIGNMENT?t=7ijJsvRWc2xQpNpC-1",
        githubUrl: "#",
    }
];
export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sanketbarik01"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
    )
}