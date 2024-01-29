import React, { useState, useEffect } from 'react'
import './Style/header.css';
const Header = (prop) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Arya");
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);


  return (
    <>
    <header className={`navbar ${visible ? '' : 'navbar--hidden'}`} >
        <div className="header-name">
            <h2>AADARSH RAJ</h2>
        </div>
        <nav className="nav">
            <a href='#home'>Home</a>
            <a href='#project'>Projects</a>
            <a href='#skill'>Skills</a>
            <a href='#contact'>Contact</a>
        </nav>
        <div className="hire-button">
        <a href='#contact'>Hire Me</a>
        </div>
    </header>
    
    </>
  )
}

export default Header


// <nav >
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>