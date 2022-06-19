import React from "react";
import "./About.css";
import GIF from "../../assets/GIF.gif";
import GIF2 from "../../assets/GIF2.gif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

function About({ translate }) {
  return (
    <div>
      {translate === "en" ? (
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
            <div>
              <div className="about__me">
                <div className="about__me-image">
                  <img src={GIF} alt="me" />
                </div>
              </div>
              <div className="about__me about__me-delete">
                <div className="about__me-image">
                  <img src={GIF2} alt="me" />
                </div>
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Education</h5>
                  <small>Soy Henry</small> <br />
                  <small>+800hs</small>
                </article>
                <article className="about__card">
                  <FiUsers className="about__icon" />
                  <h5>Projects</h5>
                  <small>4 Completed</small>
                </article>
              </div>

              <p>
                Hi!!!👋 I am 20 years old, I am a Full Stack web developer and
                also a university public accountant student. I am ventured into
                this world, learning what I am passionate about. I entered the
                path of IT technologies through courses on YouTube and
                information found in different media. With this base, I have
                known a Bootcamp, training myself in multiple programming
                languages. My main goal is to be able to find a job that gives
                me the opportunity to deepen and improve my skills. I work to
                improve every day, looking for an increasingly clean code and
                correct semantics, ensuring that every detail is resolved.
              </p>

              <h5 className="about__text">
                Ready to work individually or in a team, and give my best.
              </h5>

              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section id="about">
          <h5>Sobre mi</h5>
          <h2>Ramiro Diaz</h2>

          <div className="container about__container">
            <div>
              <div className="about__me">
                <div className="about__me-image">
                  <img src={GIF} alt="me" />
                </div>
              </div>
              <div className="about__me about__me-delete">
                <div className="about__me-image">
                  <img src={GIF2} alt="me" />
                </div>
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Formación</h5>
                  <small>Soy Henry</small> <br />
                  <small>+800hs</small>
                </article>
                <article className="about__card">
                  <FiUsers className="about__icon" />
                  <h5>Proyectos</h5>
                  <small>4 completados</small>
                </article>
              </div>

              <p>
                Hola!!!👋 Tengo 20 años, soy desarrollador web Full Stack y
                también estudiante universitario, aspirante a Contador Público.
                Estoy incursionado en este mundo, aprendiendo lo que me
                apasiona. Me adentré en el camino de las tecnologías IT mediante
                cursos en YouTube e información encontrada en diferentes medios.
                Con esta base, he conocido un Bootcamp, en donde me forme
                profesionalmente, capacitándome en múltiples lenguajes de
                programación. Mi principal objetivo es poder encontrar un
                trabajo que me brinde la oportunidad de profundizar y mejorar
                mis habilidades. Trabajo en mejorar cada día, buscando un código
                cada vez más limpio y una semántica correcta, logrando que cada
                detalle quede resuelto.
              </p>

              <h5 className="about__text">
                Listo para trabajar de manera individual o en equipo y dar lo
                mejor de mí.
              </h5>

              <a href="#contact" className="btn btn-primary">
                Hablemos
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default About;
