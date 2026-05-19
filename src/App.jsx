import { MotionConfig, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './layout/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './layout/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ambientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.92, 0.78]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 55]);

  return (
    // reducedMotion="user" automatically disables all Framer Motion animations
    // for users who have "Reduce Motion" enabled in their OS accessibility settings.
    <MotionConfig reducedMotion="user">
    <div className="app">
      <motion.div
        className="scroll-progress"
        aria-hidden="true"
        style={{ scaleX: progressScaleX }}
      />

      {/* Subtle animated background tied to scroll */}
      <motion.div
        className="ambient-gradient"
        aria-hidden="true"
        style={{ y: ambientY, opacity: ambientOpacity }}
      />
      <motion.div
        className="grid-overlay"
        aria-hidden="true"
        style={{ y: gridY }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
