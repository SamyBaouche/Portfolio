import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    // reducedMotion="user" automatically disables all Framer Motion animations
    // for users who have "Reduce Motion" enabled in their OS accessibility settings.
    <MotionConfig reducedMotion="user">
    <div className="app">
      {/* Subtle static background */}
      <div className="ambient-gradient" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
