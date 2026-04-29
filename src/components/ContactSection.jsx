import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contact } from '../data/portfolioData';
import { fadeInUp } from '../utils/animations';

function ContactSection() {
  const emailLink = `mailto:${contact.email}?subject=${encodeURIComponent('Portfolio Contact')}&body=${encodeURIComponent('Hi Samy,\n\nI wanted to reach out regarding...')}`;

  return (
    <section
      id="contact"
      className="section container section-shell contact-wrap"
      data-section="05 / CONTACT"
    >
      <motion.div
        className="contact-card glass"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <p className="eyebrow">Contact</p>
        <h3 className="section-title">Let&apos;s Build Something Great</h3>
        <a className="email-link" href={emailLink}>
          <Mail size={18} />
          {contact.email}
        </a>

        <div className="contact-actions">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Github size={18} /> GitHub
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
