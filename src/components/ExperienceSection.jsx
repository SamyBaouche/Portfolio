import { motion } from 'framer-motion';
import { Trophy, Briefcase, Landmark } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const iconMap = [Trophy, Briefcase, Landmark];

function ExperienceSection() {
  return (
    <section id="experience" className="section container section-shell" data-section="04 / EXPERIENCE">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <p className="eyebrow">Experience</p>
        <h3 className="section-title">Highlights</h3>
      </motion.div>

      <motion.div
        className="experience-list"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experience.map((item, index) => {
          const Icon = iconMap[index] || Briefcase;

          return (
            <motion.article
              key={item.title}
              className="experience-item glass"
              variants={fadeInUp}
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ duration: 0.24 }}
            >
              {item.link ? (
                <a
                  className="experience-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title}`}
                >
                  <div className="experience-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </a>
              ) : (
                <>
                  <div className="experience-icon">
                    <Icon size={20} />
                  </div>
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
