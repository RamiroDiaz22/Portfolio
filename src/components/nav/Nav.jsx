import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    let position1 = document.getElementById("home").getBoundingClientRect().top;
    let position2 = document
      .getElementById("about")
      .getBoundingClientRect().top;
    let position3 = document
      .getElementById("experience")
      .getBoundingClientRect().top;
    let position4 = document
      .getElementById("services")
      .getBoundingClientRect().top;
    let position5 = document
      .getElementById("contact")
      .getBoundingClientRect().top;

    if (position1 < 150 && position1 > -150) {
      setActiveNav("#home");
    }
    if (position2 < 150 && position2 > -150) {
      setActiveNav("#about");
    }
    if (position3 < 150 && position3 > -150) {
      setActiveNav("#experience");
    }
    if (position4 < 150 && position4 > -150) {
      setActiveNav("#services");
    }
    if (position5 < 150 && position5 > -150) {
      setActiveNav("#contact");
    }
  });

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
