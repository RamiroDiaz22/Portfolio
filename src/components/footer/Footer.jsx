import React from "react";
import "./Footer.css";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Diaz Bravo, Ramiro.
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
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

      <div className="footer__socials">
        <a href="https//linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https//github.com">
          <FaGithub />
        </a>
        <a href="https//instagram.com">
          <FaInstagram />
        </a>
        <a href="https://wa.me/541169977456">
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
