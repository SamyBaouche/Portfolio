import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github } from 'lucide-react';
import {
  FaAws,
  FaCodeBranch,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython
} from 'react-icons/fa6';
import {
  SiDjango,
  SiDocker,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTypescript
} from 'react-icons/si';
import { projects } from '../data/portfolioData';
import { fadeUp, stagger, slideLeft, inViewOptions } from '../utils/motionVariants';

const techVisuals = {
  Python:       { icon: FaPython,      color: '#3776ab' },
  Django:       { icon: SiDjango,      color: '#44b78b' },
  HTML:         { icon: FaHtml5,       color: '#e34f26' },
  CSS:          { icon: FaCss3,        color: '#1572b6' },
  JavaScript:   { icon: SiJavascript,  color: '#f7df1e' },
  PostgreSQL:   { icon: SiPostgresql,  color: '#336791' },
  'Node.js':    { icon: FaNodeJs,      color: '#5fa04e' },
  SQL:          { icon: FaDatabase,    color: '#7aa2ff' },
  Java:         { icon: FaJava,        color: '#f89820' },
  JavaFX:       { icon: FaJava,        color: '#f89820' },
  'Spring Boot':{ icon: SiSpringboot,  color: '#6db33f' },
  React:        { icon: SiReact,       color: '#61dafb' },
  TypeScript:   { icon: SiTypescript,  color: '#3178c6' },
  Docker:       { icon: SiDocker,      color: '#2496ed' },
  AWS:          { icon: FaAws,         color: '#ff9900' },
};

const getTechVisual = (tech) => techVisuals[tech] ?? { icon: FaCodeBranch, color: '#aab2c5' };

const themeClass = {
  ZeroTrustCloud:    'project-theme-zerotrust',
  EcoNova:           'project-theme-econova',
  CourseFlow:        'project-theme-courseflow',
  'Invasion Agricole':'project-theme-invasion',
};

function ProjectsSection() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);
  const headerInView = useInView(headerRef, inViewOptions);
  const gridInView   = useInView(gridRef,   inViewOptions);

  return (
    <section id="projects" className="section container section-shell">
      {/* ── Section header ── */}
      <motion.div
        ref={headerRef}
        variants={stagger}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.p className="eyebrow" variants={fadeUp}>Projects</motion.p>
        <motion.h3 className="section-title" variants={fadeUp}>Recent Work</motion.h3>
      </motion.div>

      {/* ── Bento grid ── */}
      <motion.div
        ref={gridRef}
        className="project-grid"
        variants={stagger}
        initial="hidden"
        animate={gridInView ? 'visible' : 'hidden'}
      >
        {projects.map((project, index) => {
          const isWide   = true;
          const hasImage = Boolean(project.image);

          return (
            <motion.article
              key={project.name}
              className={[
                'project-card',
                themeClass[project.name] ?? '',
                isWide ? 'pc-wide' : '',
                hasImage ? 'pc-has-image' : '',
              ].filter(Boolean).join(' ')}
              variants={slideLeft}
            >
              <div className="pc-inner">
                {/* Centered spotlight that appears on hover */}
                <div className="pc-spotlight" aria-hidden="true" />

                {/* Text content */}
                <div className="pc-content">
                  {/* Top row: tag + github link */}
                  <div className="pc-top">
                    <span className="pc-tag">{project.description}</span>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="pc-github"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  </div>

                  {/* Project name */}
                  <h4 className="pc-name">{project.name}</h4>

                  {/* Accent divider */}
                  <div className="pc-divider" />

                  {/* Features */}
                  <ul className="pc-features">
                    {project.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="pc-stack">
                    {project.stack.map((tech) => {
                      const { icon: Icon, color } = getTechVisual(tech);
                      return (
                        <span
                          key={tech}
                          className="pc-chip"
                          style={{ '--chip-color': color }}
                        >
                          <Icon className="pc-chip-icon" aria-hidden="true" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Project screenshot — only when image is provided */}
                {hasImage && (
                  <div className="pc-screenshot-wrap">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="pc-screenshot"
                    />
                    <div className="pc-screenshot-glow" aria-hidden="true" />
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
