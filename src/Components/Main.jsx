import "./Style/main.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ModeChanger from "./ModeChanger";
const Main = () => {
  const [lightMode, setLightMode] = useState(false);
  const handleCheckboxChange = () => {
    setLightMode((prevMode) => !prevMode);
  };
  return (
    <>
      <main
        className="main"
        style={{ backgroundColor: lightMode ? "white" : "#2e073fd7" }}
      >
        <div className="mode-changer-container" onClick={handleCheckboxChange}>
          <ModeChanger lightMode={lightMode} />
        </div>
        <Header />
        <Home lightMode={lightMode} />
        <Projects lightMode={lightMode} />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Main;
