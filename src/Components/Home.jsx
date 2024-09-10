import React, { useEffect, useState } from "react";
import profilePic from "./Assets/aadarsh.jpg";
import "./Style/home.css";
import { motion } from "framer-motion";
const Home = ({ lightMode }) => {
  const texts = [
    "Web Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const type = () => {
      if (charIndex < texts[textIndex].length) {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (charIndex === texts[textIndex].length) {
        // Delay before moving to the next text
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the first text after the last one
        }, 1000); // 1-second delay
      }
    };

    const typingInterval = setTimeout(type, 100); // Adjust speed by changing the interval time

    return () => clearTimeout(typingInterval); // Clean up the interval on component unmount
  }, [charIndex, textIndex, texts]);
  return (
    <>
      <section
        className="landing-container"
        style={{ color: lightMode ? "#7A1CAC" : "white" }}
        id="home"
      >
        <div className="left-landing-container">
          <h1>
            Hello👋 I'm
            <br />
            <span>Aadarsh Raj</span>
          </h1>
          <p className="landing-container-para-tag">
            And I'm a <span>{currentText}</span>
          </p>
          <p className="short-intro-container">
            Crafting Tomorrow's Success, Designing Dreams, Building Realities
          </p>
          <div className="landing-page-btn-contaier">
            <a href="https://www.linkedin.com/in/aadarsh-raj-80b862216/">
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/aadarsh-raj-80b862216/">
              Hire Me
            </a>
          </div>
        </div>
        <div className="right-landing-container">
          <motion.img
            src={profilePic}
            alt=""
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 20,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
