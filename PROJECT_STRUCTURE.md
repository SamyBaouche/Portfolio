# Project Structure Map

## 1) Global Architecture

- Stack: React + Vite
- Entry point: src/main.jsx
- App composition: src/App.jsx
- Global styles and class system: src/App.css
- Static assets: public/images and public/documents
- Production output: dist/

## 2) Source Tree

- src/
  - App.jsx
  - App.css
  - main.jsx
  - layout/
    - Navbar.jsx
    - Footer.jsx
  - sections/
    - HeroSection.jsx
    - ProjectsSection.jsx
    - SkillsSection.jsx
    - ExperienceSection.jsx
    - ResumeSection.jsx
    - ContactSection.jsx
  - components/
    - (reserved for reusable UI elements)
  - data/
    - portfolioData.js
  - utils/
    - animations.js
    - motionVariants.js
    - useTheme.js
    - useScrollDirection.js

## 2.1) Root Tree (cleaned)

- package.json
- package-lock.json
- vite.config.js
- index.html
- .gitignore
- PROJECT_STRUCTURE.md
- docs/
  - emailjs-template.txt
- scripts/
  - write_css.py
- public/
  - images/
  - documents/
- src/

## 3) Class Ownership (Where classes are defined)

All main UI classes are defined in one place:

- src/App.css

This file contains class groups for:

- App shell and background layers
- Navigation (desktop/mobile)
- Shared section primitives
- Hero block
- Project cards (including per-project theme classes)
- Skills grid, pills, tooltips
- Experience timeline/cards
- Resume preview/download block
- Contact form and feedback states
- Footer
- Responsive breakpoints
- Light mode overrides

## 4) Component-to-Class Mapping

- src/layout/Navbar.jsx
  Uses navigation classes (navbar, nav-links, mobile-nav, theme-toggle)

- src/sections/HeroSection.jsx
  Uses hero classes (hero-name, hero-role, hero-actions, about-blurb)

- src/sections/ProjectsSection.jsx
  Uses project card classes (project-card, pc-_, project-theme-_)

- src/sections/SkillsSection.jsx
  Uses skills classes (skills-category, skills-category-grid, skill-pill, skill-tooltip)

- src/sections/ExperienceSection.jsx
  Uses experience classes (experience-list, experience-item, experience-img-\*)

- src/sections/ResumeSection.jsx
  Uses resume classes (resume-wrap, resume-preview, resume-actions)

- src/sections/ContactSection.jsx
  Uses contact classes (contact-card, contact-form, cf-\*)

- src/layout/Footer.jsx
  Uses footer classes (footer, footer-inner, footer-link)

## 5) Data and Logic Separation

- UI text/content and list data:
  - src/data/portfolioData.js

- Animation behavior and motion variants:
  - src/utils/animations.js
  - src/utils/motionVariants.js

- UX behavior hooks:
  - src/utils/useTheme.js
  - src/utils/useScrollDirection.js

## 6) Public Assets Structure

- public/images/
  Stores project screenshots and visual assets.

- public/documents/
  Stores downloadable documents.

Examples currently used:

- images/neuroops.png
- images/zerotrustcloud.png
- images/econova.png
- images/landing.png
- images/agricole.png
- images/hackathon.png
- documents/resume_samy_swe.pdf
