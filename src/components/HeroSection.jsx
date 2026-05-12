import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import { socialLinks } from '../data/portfolioData';

function HeroSection() {
  return (
    <section id="home" className="hero section container">
      <div className="hero-inner">

        {/* ── Text column ── */}
        <motion.div
          className="hero-text"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p className="hero-location">
            <span className="hero-location-dot" aria-hidden="true" />
            BASED IN MONTREAL
          </p>

          <h1 className="hero-name">SAMY<br />BAOUCHE</h1>

          <p className="hero-role">
            SWE @ Concordia University&nbsp;·&nbsp;DevOps &amp; Cloud&nbsp;·&nbsp;Cloud Security&nbsp;·&nbsp;Full Stack
          </p>

          <div className="hero-bio">
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

          <div className="hero-actions">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <Github size={17} />
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
              <Linkedin size={17} />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={socialLinks.projects}
              className="btn btn-ghost"
            >
              <ArrowRight size={17} />
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* ── Photo column ── */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-glow-ring">
            <div className="profile-photo-frame">
              <img
                src="/profile-photo.png"
                alt="Samy Baouche"
                className="profile-photo"
              />
            </div>
          </div>
        </motion.div>

      </div>

      <div className="scroll-dot" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default HeroSection;
