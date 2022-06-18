import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worlwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>
            Hi!!!👋 I am 20 years old, I am a Full Stack Junior web developer
            and also a university public accountant student. I am ventured into
            this world, learning what I am passionate about. I entered the path
            of IT technologies through courses on YouTube and information found
            in different media. With this base, I have known a Bootcamp,
            training myself in multiple programming languages. My main goal is
            to be able to find a job that gives me the opportunity to deepen and
            improve my skills. I work to improve every day, looking for an
            increasingly clean code and correct semantics, ensuring that every
            detail is resolved.
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
  );
}

export default About;
