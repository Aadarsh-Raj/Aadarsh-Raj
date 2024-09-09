
import "./Style/main.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import React, { useState, useEffect } from "react";
import "./Style/main.css";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Main;
