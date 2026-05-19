import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contact } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';
import { useScrollDirection } from '../utils/useScrollDirection';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const scrollDirection = useScrollDirection();
  const isInView = useInView(ref, inViewOptions);

  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Guard: keys not yet configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY ||
        SERVICE_ID.startsWith('your_') || TEMPLATE_ID.startsWith('your_') || PUBLIC_KEY.startsWith('your_')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('sending');

    // Timeout wrapper — fail after 8 s instead of hanging
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 8000)
    );

    try {
      await Promise.race([
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name:  form.name,
            from_email: form.email,
            message:    form.message,
            to_email:   contact.email,
          },
          PUBLIC_KEY
        ),
        timeout,
      ]);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section container section-shell contact-wrap">
      <motion.div
        ref={ref}
        className="contact-card glass"
        variants={stagger}
        custom={scrollDirection}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p className="eyebrow" variants={fadeUp}>Contact</motion.p>
        <motion.h3 className="section-title" variants={fadeUp}>
          Let&apos;s Build Something Great
        </motion.h3>

        {/* Email + social links row */}
        <motion.div className="contact-top-row" variants={fadeUp}>
          <a className="email-link" href={`mailto:${contact.email}`}>
            <Mail size={16} />
            {contact.email}
          </a>
          <div className="contact-socials">
            <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Github size={16} /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="contact-divider" variants={fadeUp} aria-hidden="true" />

        {/* Contact form */}
        <motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          noValidate
        >
          <div className="cf-row">
            <div className="cf-field">
              <label className="cf-label" htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                className="cf-input"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="cf-field">
              <label className="cf-label" htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                className="cf-input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
          </div>

          <div className="cf-field">
            <label className="cf-label" htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              className="cf-input cf-textarea"
              name="message"
              placeholder="Tell me about your project or just say hi…"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
          </div>

          <div className="cf-footer">
            {/* Status feedback */}
            {status === 'success' && (
              <span className="cf-status cf-status--ok">
                <CheckCircle size={15} /> Message sent — I'll reply soon!
              </span>
            )}
            {status === 'error' && (
              <span className="cf-status cf-status--err">
                <AlertCircle size={15} /> EmailJS not configured yet — email me directly at {contact.email}
              </span>
            )}

            <button
              type="submit"
              className="btn btn-primary cf-submit"
              disabled={status === 'sending' || !form.name || !form.email || !form.message}
            >
              {status === 'sending'
                ? <><Loader size={15} className="cf-spin" /> Sending…</>
                : <><Send size={15} /> Send Message</>
              }
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default ContactSection;