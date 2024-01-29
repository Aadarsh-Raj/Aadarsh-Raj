import React from "react";
import { ReactComponent as Imgsvg } from "./Assets/pikachu.svg";
import "./Style/animationsection.css";
const AnimationSection = () => {
  return (
    <>
      <div className="animation-svg">
        <div className="welcome-para">
          <h1>Welcome you to my Portfolio</h1>
        </div>
        <Imgsvg />
      </div>
    </>
  );
};

export default AnimationSection;
