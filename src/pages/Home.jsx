import AboutSection from "../Components/AboutSection" 
import ContactSection from "../Components/ContactSection" 
import Footer from "../Components/Footer"  
import HeroSection from "../Components/HeroSection" 
import Navbar from "../Components/Navbar" 
import ProjectsSection from "../Components/ProjectsSection" 
import SkillsSection from "../Components/SkillsSection" 
import StarBackground from "../Components/StarBackground" 
import ThemeToggle from "../Components/ThemeToggle" 

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* NavBar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home