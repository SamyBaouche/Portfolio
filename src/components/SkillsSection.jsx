import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
  Java:              { icon: FaJava,           color: '#f89820', desc: 'Langage orienté objet robuste, idéal pour les applications d\'entreprise et les backends scalables.' },
  'Spring Boot':     { icon: SiSpringboot,     color: '#6db33f', desc: 'Framework Java pour construire des APIs REST et microservices production-ready rapidement.' },
  Go:                { icon: FaGolang,         color: '#00add8', desc: 'Langage compilé de Google, ultra-rapide et concurrent, parfait pour les services cloud.' },
  JavaScript:        { icon: SiJavascript,     color: '#f7df1e', desc: 'Le langage du web — rend les pages interactives côté client et serveur via Node.js.' },
  TypeScript:        { icon: SiTypescript,     color: '#3178c6', desc: 'Superset typé de JavaScript qui réduit les bugs et améliore la maintenabilité du code.' },
  'Node.js':         { icon: FaNodeJs,         color: '#5fa04e', desc: 'Runtime JavaScript côté serveur basé sur V8, idéal pour les APIs et apps temps réel.' },
  'Express.js':      { icon: SiExpress,        color: '#e6edf3', desc: 'Framework minimaliste Node.js pour construire des APIs REST rapidement et simplement.' },
  Django:            { icon: SiDjango,         color: '#44b78b', desc: 'Framework Python "batteries incluses" pour développer des apps web sécurisées rapidement.' },
  FastAPI:           { icon: SiFastapi,        color: '#009688', desc: 'Framework Python moderne et ultra-rapide pour créer des APIs, avec validation automatique.' },
  PowerShell:        { icon: SiPowers,         color: '#5391fe', desc: 'Shell et langage de script Microsoft pour l\'automatisation système et la gestion Windows/Azure.' },
  PostgreSQL:        { icon: SiPostgresql,     color: '#336791', desc: 'Base de données relationnelle open-source avancée, fiable et extensible.' },
  MySQL:             { icon: SiMysql,          color: '#4479a1', desc: 'SGBD relationnel populaire, rapide et facile à déployer pour la plupart des applications web.' },
  HTML5:             { icon: FaHtml5,          color: '#e34f26', desc: 'Langage de balisage du web — structure le contenu de toutes les pages web modernes.' },
  CSS3:              { icon: FaCss3,           color: '#1572b6', desc: 'Feuilles de style en cascade — contrôle le design, les animations et la mise en page des sites.' },
  React:             { icon: FaReact,          color: '#61dafb', desc: 'Bibliothèque UI JavaScript de Meta pour construire des interfaces déclaratives et réactives.' },
  JavaFX:            { icon: FaJava,           color: '#f89820', desc: 'Plateforme Java pour créer des interfaces graphiques de bureau riches et modernes.' },
  Figma:             { icon: FaFigma,          color: '#f24e1e', desc: 'Outil de design UI/UX collaboratif basé sur le cloud, standard de l\'industrie.' },
  Canva:             { icon: SiCanva,          color: '#00c4cc', desc: 'Outil de design graphique en ligne, idéal pour créer visuels et présentations rapidement.' },
  JWT:               { icon: SiJsonwebtokens,  color: '#f5f5f5', desc: 'JSON Web Tokens — standard sécurisé pour l\'authentification et l\'échange de données signé.' },
  'Context API':     { icon: SiReact,          color: '#61dafb', desc: 'Système natif React pour partager l\'état global entre composants sans bibliothèque externe.' },
  AWS:               { icon: FaAws,            color: '#ff9900', desc: 'Amazon Web Services — plateforme cloud leader mondial avec +200 services (EC2, S3, RDS…).' },
  Kubernetes:        { icon: SiKubernetes,     color: '#326ce5', desc: 'Orchestrateur de conteneurs open-source pour déployer, scaler et gérer des apps en production.' },
  Terraform:         { icon: SiTerraform,      color: '#844fba', desc: 'Outil d\'Infrastructure as Code (IaC) pour provisionner le cloud de façon reproductible.' },
  Docker:            { icon: FaDocker,         color: '#2496ed', desc: 'Plateforme de conteneurisation qui package les apps et leurs dépendances en images portables.' },
  'Windows Terminal':{ icon: FaTerminal,       color: '#00a4ef', desc: 'Terminal moderne Microsoft supportant PowerShell, CMD et WSL dans un seul outil.' },
  Bash:              { icon: SiGnubash,        color: '#4eaa25', desc: 'Shell Unix standard pour l\'automatisation, les scripts et l\'administration de systèmes Linux.' },
  Git:               { icon: FaGit,            color: '#f05032', desc: 'Système de contrôle de version distribué — essentiel pour tout projet logiciel collaboratif.' },
  GitHub:            { icon: FaGithub,         color: '#ffffff', desc: 'Plateforme d\'hébergement Git avec outils de collaboration, CI/CD et review de code.' },
  'GitHub Actions':  { icon: SiGithubactions,  color: '#2088ff', desc: 'Plateforme CI/CD intégrée à GitHub pour automatiser tests, builds et déploiements.' },
  Windows:           { icon: FaWindows,        color: '#00a4ef', desc: 'Système d\'exploitation Microsoft, environnement de développement courant et bien outillé.' },
  macOS:             { icon: FaApple,          color: '#f2f2f2', desc: 'OS Apple basé sur Unix, très populaire chez les développeurs pour sa stabilité et ses outils.' },
  'AWS Console':     { icon: FaAws,            color: '#ff9900', desc: 'Interface web AWS pour gérer visuellement l\'ensemble des services cloud Amazon.' },
  'VS Code':         { icon: FaCode,           color: '#007acc', desc: 'Éditeur de code léger et puissant de Microsoft, avec extensions pour tous les langages.' },
  IntelliJ:          { icon: SiIntellijidea,   color: '#f3f3f3', desc: 'IDE JetBrains ultra-complet pour Java/Kotlin, avec refactoring intelligent et débogage avancé.' },
  Eclipse:           { icon: SiEclipseide,     color: '#5c2d91', desc: 'IDE open-source Java historique, extensible via plugins pour divers langages et frameworks.' },
  Postman:           { icon: SiPostman,        color: '#ff6c37', desc: 'Outil de test et documentation d\'APIs REST/GraphQL, incontournable pour les développeurs backend.' },
  'MySQL Workbench': { icon: FaDatabase,       color: '#4479a1', desc: 'GUI officielle MySQL pour concevoir, administrer et interroger des bases de données visuellement.' },
  DBeaver:           { icon: SiDbeaver,        color: '#5e9f42', desc: 'Client universel de base de données multi-SGBD (PostgreSQL, MySQL, SQLite…) open-source.' },
  SQL:               { icon: SiPostgresql,     color: '#4169e1', desc: 'Langage de requête structurée — standard universel pour interroger et manipuler des bases de données.' },
  Python:            { icon: SiPython,         color: '#3776ab', desc: 'Langage polyvalent et lisible, dominant en data science, IA, automatisation et web backend.' },
  'Git/GitHub':      { icon: SiGithub,         color: '#ffffff', desc: 'Combo versionning + hébergement — la colonne vertébrale du travail collaboratif en développement.' },
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

const tooltipVariant = {
  hidden:  { opacity: 0, y: 8, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1,   transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 6, scale: 0.94, transition: { duration: 0.15 } },
};

function SkillPill({ skill, title }) {
  const visual = getSkillVisual(skill);
  const Icon = visual?.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={`${title}-${skill}`}
      className="skill-pill"
      style={{ '--skill-color': visual?.color || '#ffffff' }}
      variants={pillVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {Icon && <Icon className="skill-icon" aria-hidden="true" />}
      <span>{skill}</span>

      <AnimatePresence>
        {hovered && visual?.desc && (
          <motion.div
            className="skill-tooltip"
            variants={tooltipVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="tooltip"
          >
            <div className="skill-tooltip-icon-wrap" style={{ '--tip-color': visual.color }}>
              {Icon && <Icon className="skill-tooltip-icon" aria-hidden="true" />}
            </div>
            <div className="skill-tooltip-body">
              <span className="skill-tooltip-name">{skill}</span>
              <p className="skill-tooltip-desc">{visual.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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
          {items.map((skill) => (
            <SkillPill key={`${title}-${skill}`} skill={skill} title={title} />
          ))}
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
