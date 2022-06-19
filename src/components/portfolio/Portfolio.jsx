import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FULL STACK - "RAMFLIX" Proyecto Individual.',
    github: "https://github.com/RamiroDiaz22/RamFlix",
    demo: "https://ramflix-db.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: 'FULL STACK - "APP PI DOGS" Henry Bootcamp.',
    github: "https://github.com/RamiroDiaz22/PI-Dogs",
    demo: "https://dogs-app-phi.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: 'FROND-END - "WEATHER APP" Henry Bootcamp.',
    github: "https://github.com/RamiroDiaz22/WEATHER-APP",
    demo: "https://weather-app-db-aa9ce.web.app/",
  },
];

function Portfolio({ translate }) {
  return (
    <section id="portfolio">
      {translate === "en" ? (
        <>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </>
      ) : (
        <>
          <h5>Mi trabajo reciente</h5>
          <h2>Portafolio</h2>
        </>
      )}

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {translate === "en" ? (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Iniciar Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
