import { Github, Linkedin } from 'lucide-react';
import { contact } from '../data/portfolioData';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p className="footer-copy">© {year} Samy Baouche</p>
        <nav className="footer-links" aria-label="Social links">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
