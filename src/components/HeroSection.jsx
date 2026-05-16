import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';

function HeroSection() {
  const ref = useRef(null);
  // Hero is always above the fold — no offset needed
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section id="home" className="hero section container">
      <motion.div
        ref={ref}
        className="hero-text"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p className="hero-location" variants={fadeUp}>
          <span className="hero-location-dot" aria-hidden="true" />
          BASED IN MONTREAL
        </motion.p>

        <motion.h1 className="hero-name" variants={fadeUp}>
          SAMY<br />BAOUCHE
          <span className="hero-code-tag" aria-hidden="true">&lt;/&gt;</span>
        </motion.h1>

        <motion.p className="hero-role" variants={fadeUp}>
          SWE @ Concordia University&nbsp;·&nbsp;DevOps &amp; Cloud&nbsp;·&nbsp;Cloud Security&nbsp;·&nbsp;Full Stack
        </motion.p>

        <motion.div className="hero-bio" variants={fadeUp}>
          <p className="about-blurb">
            Software Engineering student at Concordia University focused on cloud infrastructure,
            DevOps, and security — building full-stack systems designed to run reliably in production.
          </p>
          <p className="about-blurb">
            I care about the full picture: clean architecture, automation, and what it takes to
            operate distributed systems under real-world constraints. Currently exploring cloud-native
            design patterns and infrastructure as code.
          </p>
        </motion.div>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-primary">
            <Github size={17} />
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Linkedin size={17} />
            LinkedIn
          </a>
          <a href={socialLinks.projects} className="btn btn-ghost">
            <ArrowRight size={17} />
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
