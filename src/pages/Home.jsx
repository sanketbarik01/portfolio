import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from "../components/StarBackground.jsx";
import { AboutMe } from "../components/AboutMe.jsx";
import { SkillSection } from "../components/SkillsSection.jsx";
import { ProjectSection } from "../components/ProjectSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx"
import { Navbar } from "../components/Navbar.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { Footer } from "../components/Footer.jsx";

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