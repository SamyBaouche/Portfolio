import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { resume } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';
import { useScrollDirection } from '../utils/useScrollDirection';

function ResumeSection() {
  const ref = useRef(null);
  const scrollDirection = useScrollDirection();
  const isInView = useInView(ref, inViewOptions);
  const isPdfPreview = resume.image.toLowerCase().endsWith('.pdf');

  return (
    <section id="resume" className="section container section-shell">
      <motion.div
        ref={ref}
        className="resume-wrap"
        variants={stagger}
        custom={scrollDirection}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="resume-copy" variants={fadeUp}>
          <p className="eyebrow">{resume.title}</p>
          <h3 className="section-title resume-title">{resume.subtitle}</h3>
          <p className="resume-text">{resume.description}</p>

          <div className="resume-actions">
            <a href={resume.fileUrl} download={resume.fileName} className="btn btn-primary">
              <Download size={17} />
              Download Resume
            </a>
            <a href={resume.image} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <ExternalLink size={17} />
              Open Preview
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="resume-preview" aria-label="Resume preview">
          <span className="resume-badge">
            <FileText size={14} />
            Resume Preview
          </span>
          {isPdfPreview ? (
            <iframe
              src={resume.image}
              title={resume.imageAlt}
              className="resume-pdf-preview"
              loading="lazy"
            />
          ) : (
            <img src={resume.image} alt={resume.imageAlt} className="resume-image" loading="lazy" />
          )}
          <span className="resume-frame-glow" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ResumeSection;