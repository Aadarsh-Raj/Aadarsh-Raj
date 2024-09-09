
import "./Style/main.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import React, { useState, useEffect } from "react";
import "./Style/main.css";
const Main = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Main;
