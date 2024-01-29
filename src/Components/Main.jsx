// import React, { useState, useEffect } from "react";
import "./Style/main.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

// const Main = (prop) => {

//   return (
//     <>
//       <main className="main" >
//         <SocialMedia />
//         <Header />
       
//         <Home />
//         <Projects />
//         <Skills />
//         <Contact />
   
//       </main>
//     </>
//   );
// };

// export default Main;
import React, { useState, useEffect } from 'react';
import './Style/main.css'
const Main = () => {
  

  return (
    <>
    <Header />
    <Home />
         <Projects />      
           <Skills />
        <Contact />
    </>


  );
};

export default Main;
