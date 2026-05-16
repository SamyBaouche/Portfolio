import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Briefcase, Landmark } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';

const iconMap = [Trophy, Briefcase, Landmark];

function ExperienceSection() {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const headerInView = useInView(headerRef, inViewOptions);
  const listInView = useInView(listRef, inViewOptions);

  return (
    <section id="experience" className="section container section-shell">
      <motion.div
        ref={headerRef}
        variants={stagger}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.p className="eyebrow" variants={fadeUp}>Experience</motion.p>
        <motion.h3 className="section-title" variants={fadeUp}>Highlights</motion.h3>
      </motion.div>

      <motion.div
        ref={listRef}
        className="experience-list"
        variants={stagger}
        initial="hidden"
        animate={listInView ? 'visible' : 'hidden'}
      >
        {experience.map((item, index) => {
          const Icon = iconMap[index] || Briefcase;

          return (
            <motion.article key={item.title} className="experience-item glass" variants={fadeUp}>
              {item.link ? (
                <a
                  className="experience-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title}`}
                >
                  <div className="experience-icon"><Icon size={20} /></div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </a>
              ) : (
                <>
                  <div className="experience-icon"><Icon size={20} /></div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </>
              )}
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ExperienceSection;
