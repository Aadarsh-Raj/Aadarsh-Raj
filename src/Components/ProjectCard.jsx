import React from "react";
import "./Style/projectcard.css";
import { motion } from "framer-motion";
import studynotionImage from "./Assets/studynotion.jpg";
import notesImage from "./Assets/notesimage.jpg";
import cryptoImage from "./Assets/cryptoimage.jpg";
import codepenImage from "./Assets/codepen.jpg";
const ProjectCard = (prop) => {
  const getImageSrc = (id) => {
    switch (id) {
      case "1":
        return studynotionImage;
      case "2":
        return codepenImage;
      case "3":
        return notesImage;
      case "4":
        return cryptoImage;
      default:
        return null;
    }
  };
  const imageSrc = getImageSrc(prop.cardData.id);
  return (
    <>
      <motion.div className="project-card-item" variants={prop.variants}>
        <div className="card-image">
          <a href={prop.cardData.link} target="blank">
          {imageSrc && <img src={imageSrc} alt="image" />}
          </a>
        </div>
        <div className="card-details">
          <p>{prop.cardData.title}</p>
          <a href={prop.cardData.github} target="blank">
            Github{" "}
          </a>
          <span>|&nbsp;</span>
          <a href={prop.cardData.link} target="blank">
            Hosted Link
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
