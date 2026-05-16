import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import {
  SiCanva,
  SiDjango,
  SiDbeaver,
  SiDocker,
  SiEclipseide,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGithub,
  SiGo,
  SiGnubash,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJsonwebtokens,
  SiKubernetes,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiPowers,
  SiReact,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import {
  FaApple,
  FaAws,
  FaCode,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaGolang,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaScrewdriverWrench,
  FaTerminal,
  FaWindows
} from 'react-icons/fa6';

const skillVisuals = {
  Java: { icon: FaJava, color: '#f89820' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  Go: { icon: FaGolang, color: '#00add8' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  'Node.js': { icon: FaNodeJs, color: '#5fa04e' },
  'Express.js': { icon: SiExpress, color: '#e6edf3' },
  Django: { icon: SiDjango, color: '#44b78b' },
  FastAPI: { icon: SiFastapi, color: '#009688' },
  PowerShell: { icon: SiPowers, color: '#5391fe' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
  HTML5: { icon: FaHtml5, color: '#e34f26' },
  CSS3: { icon: FaCss3, color: '#1572b6' },
  React: { icon: FaReact, color: '#61dafb' },
  JavaFX: { icon: FaJava, color: '#f89820' },
  Figma: { icon: FaFigma, color: '#f24e1e' },
  Canva: { icon: SiCanva, color: '#00c4cc' },
  JWT: { icon: SiJsonwebtokens, color: '#f5f5f5' },
  'Context API': { icon: SiReact, color: '#61dafb' },
  AWS: { icon: FaAws, color: '#ff9900' },
  Kubernetes: { icon: SiKubernetes, color: '#326ce5' },
  Terraform: { icon: SiTerraform, color: '#844fba' },
  Docker: { icon: FaDocker, color: '#2496ed' },
  'Windows Terminal': { icon: FaTerminal, color: '#00a4ef' },
  Bash: { icon: SiGnubash, color: '#4eaa25' },
  Git: { icon: FaGit, color: '#f05032' },
  GitHub: { icon: FaGithub, color: '#ffffff' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088ff' },
  Windows: { icon: FaWindows, color: '#00a4ef' },
  macOS: { icon: FaApple, color: '#f2f2f2' },
  'AWS Console': { icon: FaAws, color: '#ff9900' },
  'VS Code': { icon: FaCode, color: '#007acc' },
  IntelliJ: { icon: SiIntellijidea, color: '#f3f3f3' },
  Eclipse: { icon: SiEclipseide, color: '#5c2d91' },
  Postman: { icon: SiPostman, color: '#ff6c37' },
  'MySQL Workbench': { icon: FaDatabase, color: '#4479a1' },
  DBeaver: { icon: SiDbeaver, color: '#5e9f42' },
  SQL: { icon: SiPostgresql, color: '#4169e1' },
  Python: { icon: SiPython, color: '#3776ab' },
  'Git/GitHub': { icon: SiGithub, color: '#ffffff' }
};

const getSkillVisual = (skill) => {
  if (skillVisuals[skill]) {
    return skillVisuals[skill];
  }

  return {
    icon: FaScrewdriverWrench,
    color: '#8ac6ff'
  };
};

import { fadeUp, stagger, staggerFast, inViewOptions } from '../utils/motionVariants';

const pillVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

function SkillsSection() {
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const headerInView = useInView(headerRef, inViewOptions);
  const bodyInView = useInView(bodyRef, inViewOptions);

  const renderCategory = (title, items, groupClassName = '') => {
    return (
      <motion.div
        key={title}
        className={`skills-group ${groupClassName}`.trim()}
        variants={fadeUp}
      >
        <h4 className="skills-group-title">{title}</h4>
        <motion.div
          className="skills-category-grid"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px 0px' }}
        >
          {items.map((skill) => {
            const visual = getSkillVisual(skill);
            const Icon = visual?.icon;

            return (
              <motion.div
                key={`${title}-${skill}`}
                className="skill-pill"
                style={{ '--skill-color': visual?.color || '#ffffff' }}
                variants={pillVariant}
              >
                {Icon && <Icon className="skill-icon" aria-hidden="true" />}
                <span>{skill}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section container section-shell">
      <motion.div
        ref={headerRef}
        variants={stagger}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.p className="eyebrow" variants={fadeUp}>Skills</motion.p>
        <motion.h3 className="section-title" variants={fadeUp}>Technologies I Work With</motion.h3>
      </motion.div>

      <motion.div
        ref={bodyRef}
        variants={stagger}
        initial="hidden"
        animate={bodyInView ? 'visible' : 'hidden'}
      >
        {skillCategories.map((category, index) =>
          renderCategory(category.title, category.items, index > 0 ? 'skills-group-secondary' : '')
        )}
      </motion.div>
    </section>
  );
}

export default SkillsSection;
