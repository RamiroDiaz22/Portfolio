import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [translate, setTranslate] = useState("en");

  return (
    <div className="App">
      <Header setTranslate={setTranslate} translate={translate} />
      <Nav />
      <About translate={translate} />
      <Experience translate={translate} />
      <Services translate={translate} />
      <Portfolio translate={translate} />
      <Contact translate={translate} />
      <Footer />
    </div>
  );
}

export default App;
