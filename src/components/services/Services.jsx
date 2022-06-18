import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services({ translate }) {
  return (
    <section id="services">
      {translate === "en" ? (
        <>
          <h5>What I Offer</h5>
          <h2>Services</h2>
          <div className="container services__container">
            <article className="service">
              <div className="service__head">
                <h3>
                  Web <br /> Developmet
                </h3>
              </div>

              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Design and operation of Web Pages.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Optimal performance.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Maintenance service and problem solving.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Updates and Improvements.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Personalized attention.</p>
                </li>
              </ul>
            </article>
          </div>
        </>
      ) : (
        <>
          <h5>Mis</h5>
          <h2>Servicios</h2>
          <div className="container services__container">
            <article className="service">
              <div className="service__head">
                <h3>
                  Desarrollador <br />
                  Web
                </h3>
              </div>

              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Diseño y funcionamiento de Páginas Web.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Rendimiento óptimo.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Servicio de mantenimiento y solución de problemas.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Actualizaciones y Mejoras.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Atención personalizada.</p>
                </li>
              </ul>
            </article>
          </div>
        </>
      )}
    </section>
  );
}

export default Services;
