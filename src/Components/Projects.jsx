import React from "react";
import "./Style/project.css";
import ProjectCard from "./ProjectCard";
import projectArray from "./project.json";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="project-container" id="project">
        <motion.div
          className="project-card-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projectArray.map((ele, index) => (
            <ProjectCard key={ele.id} cardData={ele} variants={item} />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
