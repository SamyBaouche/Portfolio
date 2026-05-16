import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contact } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const emailLink = `mailto:${contact.email}?subject=${encodeURIComponent('Portfolio Contact')}&body=${encodeURIComponent('Hi Samy,\n\nI wanted to reach out regarding...')}`;

  return (
    <section id="contact" className="section container section-shell contact-wrap">
      <motion.div
        ref={ref}
        className="contact-card glass"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p className="eyebrow" variants={fadeUp}>Contact</motion.p>
        <motion.h3 className="section-title" variants={fadeUp}>Let&apos;s Build Something Great</motion.h3>

        <motion.a className="email-link" href={emailLink} variants={fadeUp}>
          <Mail size={18} />
          {contact.email}
        </motion.a>

        <motion.div className="contact-actions" variants={fadeUp}>
          <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={18} /> GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;