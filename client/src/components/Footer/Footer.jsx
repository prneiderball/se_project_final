import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2024 Supersite, Powered by News API
      </p>

      <div className="footer__links">
        <a href="/" className="footer__link">Home</a>
        <a
          href="https://tripleten.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          TripleTen
        </a>

        <div className="footer__social">
          <a
            href="https://github.com/prneiderball"
            target="_blank"
            rel="noreferrer"
            className="footer__social-icon footer__social-icon_type_github"
          ></a>
          <a
            href="https://linkedin.com/in/prneiderball"
            target="_blank"
            rel="noreferrer"
            className="footer__social-icon footer__social-icon_type_linkedin"
          ></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
