import React from "react";
import "./Header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { HiOutlineTranslate } from "react-icons/hi";

function Header({ setTranslate, translate }) {
  function handleClick(e) {
    e.preventDefault();
    translate === "en" ? setTranslate("es") : setTranslate("en");
  }

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ramiro Diaz Bravo</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div className="header__icon" onClick={handleClick}>
          <HiOutlineTranslate className="header__translate" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
