import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { AboutMe } from "../components/AboutMe";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen ">
        {/*Theme toggle*/}
        {" "}
        <ThemeToggle/>
        {/* {Background effects} */}
        <StarBackground/>
        {/* {Navbar} */}
        <Navbar />
        {/* {Main Content} */}
        <main>
            <HeroSection />
            <AboutMe />
            <SkillSection />
            <ProjectSection/>
            <ContactSection/>
        </main>
        {/* {Footer} */}
        <Footer />
    </div>;
}