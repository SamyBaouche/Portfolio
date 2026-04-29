import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import { socialLinks } from '../data/portfolioData';

function HeroSection() {
  return (
    <section id="home" className="hero section container section-shell" data-section="01 / ABOUT">
      <motion.div
        className="hero-panel"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-layout">
          <div className="hero-left">
            <p className="hero-location">BASED IN MONTREAL</p>
            <h1 className="hero-name">SAMY BAOUCHE</h1>
            <p className="hero-role">
              SWE @ Concordia University | DevOps & Cloud | Cloud Security | Full Stack
            </p>
          </div>
        </div>

        <div className="hero-content-row">
          <div className="hero-about">
            <p className="about-blurb">
              Software Engineering student at Concordia University with a focus on cloud
              infrastructure, DevOps, and cloud security, building full stack systems to
              understand how modern applications are designed, deployed, and operated at scale.
            </p>
            <p className="about-blurb">
              I approach engineering with a production-first mindset. Writing code is only one
              part of the problem; designing systems that are reliable, scalable, and secure in
              real environments is where the real complexity lies. I am particularly interested in
              cloud-native systems, infrastructure automation, and the principles behind operating
              distributed systems under real-world constraints.
            </p>
            <p className="about-blurb">
              Through hands-on projects, I design and deploy applications end to end, focusing on
              clean architecture, observability, and operational reliability. I work across the
              stack to better understand how backend services, infrastructure, and user-facing
              systems interact in production.
            </p>
          </div>

          <div className="hero-visual hero-visual-lower">
            <div className="profile-photo-frame">
              <img
                src="/profile-photo.png"
                alt="Samy Baouche"
                className="profile-photo"
              />
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Github size={18} />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={socialLinks.projects}
            className="btn btn-ghost"
          >
            <ArrowRight size={18} />
            View Projects
          </motion.a>
        </div>

        <div className="scroll-dot" aria-hidden="true">
          <span />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
