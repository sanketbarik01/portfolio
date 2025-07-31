import { useState } from "react";
import { cn } from "../lib/utils";

const skills =[
    {
    name: "HTML/CSS",
    level: 95,
    category: "Frontend"
},{
    name: "Javascript",
    level: 90,
    category: "Frontend"
},{
    name: "React",
    level: 90,
    category: "Frontend"
},{
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend"
},

//Backend
{
    name: "Node.js",
    level: 80,
    category: "Backend"
},
{
    name: "Express",
    level: 50,
    category: "Backend"
},
{
    name: "MongoDB",
    level: 50,
    category: "Backend"
},

//Tools
{
    name: "GitHub",
    level: 70,
    category: "Tools"
},{
    name: "Figma",
    level: 90,
    category: "Tools"
},{
    name: "VS Code",
    level: 95,
    category: "Tools"
},
];
const categories = ["all","Frontend","Backend","Tools"];
export const SkillSection = () => {
    const [activeCategory,setactiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill)=>activeCategory === "all" || skill.category === activeCategory
    )

    return (
    <section id="skills" className="py-24 px-4 relative bg-decondary/30">
        <div className="container mx-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button 
                    key = {key} 
                    onClick={() => setactiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground": "bg-secondary/70 text-foreground hover:bg-secondary")}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key)=>(
                    <div
                    key={key}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"
                            style={{width: skill.level + "%"}} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}