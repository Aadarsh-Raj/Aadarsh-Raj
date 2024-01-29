import React from "react";
import "./Style/projectcard.css";
import { motion } from "framer-motion";
import paymentImage from "./Assets/paymentimage.jpg";
import notesImage from "./Assets/notesimage.jpg";
import cryptoImage from "./Assets/cryptoimage.jpg";
import passwordImage from "./Assets/passwordimage.jpg";
const ProjectCard = (prop) => {
   const getImageSrc = (id) => {
    switch (id) {
      case "1":
        return paymentImage;
      case "2":
        return notesImage;
      case "3":
        return cryptoImage;
      case "4":
        return passwordImage;
      default:
        return null;
    }
  };
  const imageSrc = getImageSrc(prop.cardData.id);
  return (
    <>
      <motion.div className="project-card-item" variants={prop.variants}>
        <div className="card-image">
        {imageSrc && <img src={imageSrc} alt="image"/>}
        </div>
        <div className="card-details">
          <p>{prop.cardData.title}</p>
          <a href={prop.cardData.github} target="blank">Github </a>
          <a href={prop.cardData.link} target="blank">Hosted Link</a>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
