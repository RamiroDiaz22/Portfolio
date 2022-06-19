import React from "react";
import "./Header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { HiOutlineTranslate } from "react-icons/hi";

function Header({ setTranslate, translate }) {
  function handleClick(e) {
    e.preventDefault();
    translate === "es" ? setTranslate("en") : setTranslate("es");
  }

  return (
    <header id="home">
      <div className="container header__container">
        {translate === "en" ? <h5>Hello I'm</h5> : <h5>Hola, soy</h5>}
        <h1>Ramiro Diaz Bravo</h1>
        {translate === "en" ? (
          <h5 className="text-light">Fullstack Developer</h5>
        ) : (
          <h5 className="text-light">Desarrollador Fullstack</h5>
        )}
        <CTA translate={translate} />
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
