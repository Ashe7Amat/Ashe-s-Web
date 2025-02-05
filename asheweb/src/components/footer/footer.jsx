import * as React from "react";
import "./footer.css";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="apps">
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://x.com/asheewee"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ashenafi-amat-oltra-4242822b0/"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/Ashe7Amat?tab=repositories"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="policies">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="copyright">
        <p>© 2025 Copyright: Ashe's Web</p>
      </div>
    </footer>
  );
}
