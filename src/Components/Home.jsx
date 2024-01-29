import React from "react";
import profilePic from './Assets/aadarsh.jpg'
import './Style/home.css'
import { motion } from "framer-motion"
const Home = () => {
 
  return (
    <>
      <section className="landing-container" id="home" >
        <div className="left-landing-container">
          <h1>
            Hello, <br />
            This is Aadarsh Raj
          </h1>
          <p className="landing-container-para-tag">
            Professional Web Developer
          </p>
          <p className="short-intro-container">
          Crafting Tomorrow's Success, Designing Dreams, Building Realities
          </p>
          <div className="landing-page-btn-contaier">
            <a href="#contact">
                Contact Me
            </a>
            <a href="#contact">
                Hire Me
            </a>
          </div>
        </div>
        <div className="right-landing-container">
          <motion.img src={profilePic} alt=""  initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 360,
      damping: 20
    }}/>
        </div>
      </section>
    </>
  );
};

export default Home;
