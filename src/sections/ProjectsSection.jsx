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
  SiGo,
  SiDjango,
  SiDocker,
  SiGrafana,
  SiGithubactions,
  SiJavascript,
  SiKubernetes,
  SiPrometheus,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTerraform,
  SiTypescript
} from 'react-icons/si';
import { projects } from '../data/portfolioData';
import { fadeUp, stagger, slideLeft, inViewOptions } from '../utils/motionVariants';
import { useScrollDirection } from '../utils/useScrollDirection';

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
  Go:           { icon: SiGo,          color: '#00add8' },
  Kubernetes:   { icon: SiKubernetes,  color: '#326ce5' },
  Terraform:    { icon: SiTerraform,   color: '#7b42bc' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088ff' },
  Prometheus:   { icon: SiPrometheus,  color: '#e6522c' },
  Grafana:      { icon: SiGrafana,     color: '#f46800' },
};

const getTechVisual = (tech) => techVisuals[tech] ?? { icon: FaCodeBranch, color: '#aab2c5' };

const themeClass = {
  ZeroTrustCloud:    'project-theme-zerotrust',
  NeuroOps:          'project-theme-neuroops',
  EcoNova:           'project-theme-econova',
  CourseFlow:        'project-theme-courseflow',
  'Invasion Agricole':'project-theme-invasion',
};

function ProjectsSection() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);
  const scrollDirection = useScrollDirection();
  const headerInView = useInView(headerRef, inViewOptions);
  const gridInView   = useInView(gridRef,   inViewOptions);

  return (
    <section id="projects" className="section container section-shell">
      {/* ── Section header ── */}
      <motion.div
        ref={headerRef}
        variants={stagger}
        custom={scrollDirection}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.p className="eyebrow" variants={fadeUp}>Projects</motion.p>
        <motion.h3 className="section-title" variants={fadeUp}>Recent Work</motion.h3>
      </motion.div>

      {/* ── Bento grid ── */}
      <div
        ref={gridRef}
        className="project-grid"
      >
        {projects.map((project, index) => {
          const hasImage  = Boolean(project.image);
          const fromLeft  = index % 2 === 0;

          return (
            <motion.article
              key={project.name}
              className={[
                'project-card',
                'pc-wide',
                'pc-has-image',
                themeClass[project.name] ?? '',
              ].filter(Boolean).join(' ')}
              initial={{ opacity: 0, x: fromLeft ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
                  {project.subtitle ? <p className="pc-subtitle">{project.subtitle}</p> : null}

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

                {/* Project screenshot — image or styled placeholder */}
                <div className="pc-screenshot-wrap">
                  {hasImage ? (
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="pc-screenshot"
                    />
                  ) : (
                    <div className="pc-screenshot-placeholder" aria-hidden="true">
                      <span className="pc-placeholder-name">{project.name}</span>
                      <div className="pc-placeholder-lines">
                        <span /><span /><span /><span /><span />
                      </div>
                    </div>
                  )}
                  <div className="pc-screenshot-glow" aria-hidden="true" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
