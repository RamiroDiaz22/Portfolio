import React from "react";
import CVEs from "../../assets/-Ramiro-Diaz-Currículum-es.pdf";
import CVEn from "../../assets/-Ramiro-Diaz-Currículum-en.pdf";

function CTA({ translate }) {
  return (
    <div>
      {translate === "en" ? (
        <div className="cta">
          <a href={CVEn} className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      ) : (
        <div className="cta">
          <a href={CVEs} className="btn">
            Descargar CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      )}
    </div>
  );
}

export default CTA;
