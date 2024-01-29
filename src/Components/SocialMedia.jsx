import React from 'react'
import './Style/socialMedia.css'
const SocialMedia = () => {
  return (
    <div className='social-media'>
      <a href="https://github.com/Aadarsh-Raj">
                    <img src="./icons8-github.svg" alt="" />
                </a>
           
        <a href="https://www.linkedin.com/in/aadarsh-raj-80b862216/" id="linkedin-link" className="linkedin-link">

            <div className="social linkedin">Linkedin</div><img src="./icons8-linkedin.svg" alt=""/>
        </a>
        <a href="https://wa.me/qr/4OUXJZVBKJOEE1" className="whatsapp-link">

            <div className="social whatsapp">Whats App</div><img src="./icons8-whatsapp.svg" alt=""/>
        </a>
        <a href="https://www.instagram.com/aadarshraj.dev?igsh=NG01bmI3b3puNnI3" className="insta-link">

            <div className="social instagram">Instagram</div><img src="./icons8-instagram.svg" alt=""/>
        </a>
    </div>
  )
}

export default SocialMedia
