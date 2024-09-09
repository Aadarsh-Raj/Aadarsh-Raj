import React from "react";
import { ReactComponent as Imgsvg } from "./Assets/pikachu.svg";
import "./Style/animationsection.css";
const AnimationSection = () => {
  return (
    <>
      
      <div className="animation-svg">
        <div className="background-div">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/523/181/original/mobile-application-ui-ux-design-and-development-concept-on-smartphone-screen-and-programming-language-vector.jpg"
            alt=""
          />
        </div>
        <div></div>
        <div className="pikachu-container">
          <strong>Welcome to my Portfolio</strong>
          <div className="svg-container">
            <Imgsvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationSection;
