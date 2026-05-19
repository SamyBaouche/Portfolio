import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { skillCategories } from '../data/portfolioData';
import { fadeUp, stagger, inViewOptions } from '../utils/motionVariants';
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
import { getSkillVisual } from "../utils/motionVariants";

const skillsContainerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

const skillBadgeVariants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillVisuals = {
  Java:              { icon: FaJava,           color: '#f89820', desc: 'Object-oriented language built for enterprise apps and scalable backends.' },
  'Spring Boot':     { icon: SiSpringboot,     color: '#6db33f', desc: 'Java framework for building production-ready REST APIs and microservices fast.' },
  Go:                { icon: FaGolang,         color: '#00add8', desc: 'Compiled, concurrent language by Google — blazing fast and built for cloud services.' },
  JavaScript:        { icon: SiJavascript,     color: '#f7df1e', desc: 'The language of the web — powers interactive UIs and server-side logic via Node.js.' },
  TypeScript:        { icon: SiTypescript,     color: '#3178c6', desc: 'Typed superset of JavaScript that catches bugs early and improves code maintainability.' },
  'Node.js':         { icon: FaNodeJs,         color: '#5fa04e', desc: 'JavaScript runtime built on V8 — ideal for APIs, real-time apps and microservices.' },
  'Express.js':      { icon: SiExpress,        color: '#e6edf3', desc: 'Minimal Node.js framework for building REST APIs quickly and without boilerplate.' },
  Django:            { icon: SiDjango,         color: '#44b78b', desc: '"Batteries included" Python framework for secure, scalable web apps.' },
  FastAPI:           { icon: SiFastapi,        color: '#009688', desc: 'Modern Python framework for blazing-fast APIs with automatic validation.' },
  PowerShell:        { icon: SiPowers,         color: '#5391fe', desc: 'Microsoft scripting shell for automating system tasks and managing Windows/Azure.' },
  PostgreSQL:        { icon: SiPostgresql,     color: '#336791', desc: 'Advanced open-source relational database — reliable, feature-rich and extensible.' },
  MySQL:             { icon: SiMysql,          color: '#4479a1', desc: 'Popular relational DBMS — fast and easy to deploy for most web applications.' },
  HTML5:             { icon: FaHtml5,          color: '#e34f26', desc: 'Markup language of the web — structures the content of every modern web page.' },
  CSS3:              { icon: FaCss3,           color: '#1572b6', desc: 'Cascading stylesheets — controls layout, animations and visual design on the web.' },
  React:             { icon: FaReact,          color: '#61dafb', desc: 'Meta\'s UI library for building declarative, component-based web interfaces.' },
  JavaFX:            { icon: FaJava,           color: '#f89820', desc: 'Java platform for building rich, modern desktop graphical user interfaces.' },
  Figma:             { icon: FaFigma,          color: '#f24e1e', desc: 'Cloud-based collaborative UI/UX design tool — the industry standard.' },
  Canva:             { icon: SiCanva,          color: '#00c4cc', desc: 'Online graphic design tool for creating visuals and presentations quickly.' },
  JWT:               { icon: SiJsonwebtokens,  color: '#f5f5f5', desc: 'Secure standard for authentication and signed data exchange between services.' },
  'Context API':     { icon: SiReact,          color: '#61dafb', desc: 'React\'s built-in system for sharing global state between components.' },
  AWS:               { icon: FaAws,            color: '#ff9900', desc: 'World-leading cloud platform with 200+ services including EC2, S3 and RDS.' },
  Kubernetes:        { icon: SiKubernetes,     color: '#326ce5', desc: 'Container orchestration system for deploying and scaling apps in production.' },
  Terraform:         { icon: SiTerraform,      color: '#844fba', desc: 'Infrastructure as Code tool to provision cloud resources reproducibly.' },
  Docker:            { icon: FaDocker,         color: '#2496ed', desc: 'Containerization platform that packages apps and dependencies into portable images.' },
  'Windows Terminal':{ icon: FaTerminal,       color: '#00a4ef', desc: 'Modern Microsoft terminal supporting PowerShell, CMD and WSL in one place.' },
  Bash:              { icon: SiGnubash,        color: '#4eaa25', desc: 'Standard Unix shell for automation, scripting and Linux system administration.' },
  Git:               { icon: FaGit,            color: '#f05032', desc: 'Distributed version control system — essential for any collaborative software project.' },
  GitHub:            { icon: FaGithub,         color: '#ffffff', desc: 'Git hosting platform with collaboration tools, CI/CD pipelines and code review.' },
  'GitHub Actions':  { icon: SiGithubactions,  color: '#2088ff', desc: 'GitHub\'s built-in CI/CD platform to automate tests, builds and deployments.' },
  Windows:           { icon: FaWindows,        color: '#00a4ef', desc: 'Microsoft OS — a common and well-tooled development environment.' },
  macOS:             { icon: FaApple,          color: '#f2f2f2', desc: 'Apple\'s Unix-based OS — popular among developers for its stability and tooling.' },
  'AWS Console':     { icon: FaAws,            color: '#ff9900', desc: 'Web interface to visually manage all Amazon cloud services.' },
  'VS Code':         { icon: FaCode,           color: '#007acc', desc: 'Lightweight yet powerful code editor by Microsoft, with extensions for every language.' },
  IntelliJ:          { icon: SiIntellijidea,   color: '#f3f3f3', desc: 'JetBrains IDE for Java/Kotlin with smart refactoring and advanced debugging.' },
  Eclipse:           { icon: SiEclipseide,     color: '#5c2d91', desc: 'Open-source Java IDE, extensible via plugins for many languages and frameworks.' },
  Postman:           { icon: SiPostman,        color: '#ff6c37', desc: 'API testing and documentation tool — a must-have for backend developers.' },
  'MySQL Workbench': { icon: FaDatabase,       color: '#4479a1', desc: 'Official MySQL GUI for designing, administering and querying databases visually.' },
  DBeaver:           { icon: SiDbeaver,        color: '#5e9f42', desc: 'Universal open-source DB client supporting PostgreSQL, MySQL, SQLite and more.' },
  SQL:               { icon: SiPostgresql,     color: '#4169e1', desc: 'Structured Query Language — the universal standard for querying and managing databases.' },
  Python:            { icon: SiPython,         color: '#3776ab', desc: 'Versatile, readable language dominating data science, AI, automation and web backends.' },
  'Git/GitHub':      { icon: SiGithub,         color: '#ffffff', desc: 'Version control + hosting combo — the backbone of collaborative software development.' },
};

const SkillsSection = () => {
  const headerRef = useRef(null);
  const bodyRef   = useRef(null);
  const headerInView = useInView(headerRef, inViewOptions);
  const bodyInView   = useInView(bodyRef,   inViewOptions);

  const renderCategory = (category) => (
    <div key={category.title} className="skills-category">
      <h3 className="skills-category-title">{category.title}</h3>
      <motion.div
        className="skills-category-grid"
        variants={skillsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {category.skills.map((skill) => (
          <motion.div key={skill} variants={skillBadgeVariants}>
            <SkillPill skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

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
