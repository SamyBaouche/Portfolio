import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Briefcase, Landmark } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';
import { useScrollDirection } from '../utils/useScrollDirection';

const iconMap = [Trophy, Briefcase, Landmark];

function ExperienceSection() {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const scrollDirection = useScrollDirection();
  const headerInView = useInView(headerRef, inViewOptions);
  const listInView = useInView(listRef, inViewOptions);

  return (
    <section id="experience" className="section container section-shell">
      <motion.div
        ref={headerRef}
        variants={stagger}
        custom={scrollDirection}
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
        custom={scrollDirection}
        initial="hidden"
        animate={listInView ? 'visible' : 'hidden'}
      >
        {experience.map((item, index) => {
          const Icon = iconMap[index] || Briefcase;

          return (
            <motion.article
              key={item.title}
              className={`experience-item glass${item.image ? ' experience-item-has-img' : ''}`}
              variants={fadeUp}
            >
              {item.link ? (
                <a
                  className="experience-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title}`}
                >
                  <div className="experience-icon"><Icon size={20} /></div>
                  <div className="experience-body">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                  {item.image && (
                    <div className="experience-img-wrap">
                      <img src={item.image} alt={item.title} className="experience-img" />
                      <div className="experience-img-overlay" aria-hidden="true" />
                    </div>
                  )}
                </a>
              ) : (
                <>
                  <div className="experience-icon"><Icon size={20} /></div>
                  <div className="experience-body">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                  {item.image && (
                    <div className="experience-img-wrap">
                      <img src={item.image} alt={item.title} className="experience-img" />
                      <div className="experience-img-overlay" aria-hidden="true" />
                    </div>
                  )}
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
