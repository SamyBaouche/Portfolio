import { motion } from 'framer-motion';
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
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTypescript
} from 'react-icons/si';
import { projects } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const projectTechVisuals = {
  Python: { icon: FaPython, color: '#3776ab' },
  Django: { icon: SiDjango, color: '#44b78b' },
  HTML: { icon: FaHtml5, color: '#e34f26' },
  CSS: { icon: FaCss3, color: '#1572b6' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  'Node.js': { icon: FaNodeJs, color: '#5fa04e' },
  SQL: { icon: FaDatabase, color: '#7aa2ff' },
  Java: { icon: FaJava, color: '#f89820' },
  JavaFX: { icon: FaJava, color: '#f89820' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  React: { icon: SiReact, color: '#61dafb' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  Docker: { icon: SiDocker, color: '#2496ed' },
  AWS: { icon: FaAws, color: '#ff9900' }
};

const getProjectTechVisual = (tech) => {
  if (projectTechVisuals[tech]) {
    return projectTechVisuals[tech];
  }

  return { icon: FaCodeBranch, color: '#aab2c5' };
};

const getProjectThemeClass = (name) => {
  switch (name) {
    case 'ZeroTrustCloud':
      return 'project-theme-zerotrust';
    case 'EcoNova':
      return 'project-theme-econova';
    case 'CourseFlow':
      return 'project-theme-courseflow';
    case 'Invasion Agricole':
      return 'project-theme-invasion';
    default:
      return '';
  }
};

function ProjectsSection() {
  return (
    <section id="projects" className="section container section-shell" data-section="02 / PROJECTS">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <p className="eyebrow">Projects</p>
        <h3 className="section-title">Recent Work</h3>
      </motion.div>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className={`project-card glass ${getProjectThemeClass(project.name)}`.trim()}
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.018, rotateX: 2.5, rotateY: -2.5 }}
            whileTap={{ scale: 0.995 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-main">
              <div className="project-copy">
                <div className="project-card-head">
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  <h4>{project.name}</h4>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={`${project.name}-${feature}`}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-side">
                <p className="project-stack-label">Tech Stack</p>
                <div className="chip-list">
                  {project.stack.map((tech) => {
                    const visual = getProjectTechVisual(tech);
                    const Icon = visual.icon;

                    return (
                      <span
                        className="chip"
                        key={`${project.name}-${tech}`}
                        style={{ '--chip-color': visual.color }}
                      >
                        <Icon className="project-chip-icon" aria-hidden="true" />
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>

                <div className="project-actions">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.links.github}
                    className="btn btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
