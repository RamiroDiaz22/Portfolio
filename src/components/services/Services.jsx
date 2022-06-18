import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Developmet</h3>
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
    </section>
  );
}

export default Services;
