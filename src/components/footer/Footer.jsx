import React from "react";
import "./Footer.css";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer({ translate }) {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Diaz Bravo, Ramiro.
      </a>

      {translate === "en" ? (
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : (
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#portfolio">Portafolio</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      )}

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ramiro-diaz-bravo-web-full-stack-developer/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/RamiroDiaz22"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/rami_bravo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://wa.me/541169977456" target="_blank" rel="noreferrer">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Diaz Bravo, Ramiro. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
