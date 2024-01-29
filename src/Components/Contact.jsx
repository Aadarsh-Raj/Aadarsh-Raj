import React, { useState } from "react";
import "./Style/contact.css";
const Contact = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const emailAddress = "aadarshraj.dev.js@gmail.com"; // Replace with the actual email address
    const subject = e.target.children[5].value; // Replace with the desired subject
    const body = e.target.children[7].value; // Replace with the desired body

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    const name = e.target.children[1].value;
    window.location.href = mailtoLink;
    alert(`Thanks for contacting me, Mr/Mrs/Miss ${name}`);
  };
  return (
    <>
      <section className="contact-container" id="contact">
        <form action="" className="form" onSubmit={(e) => handleClick(e)}>
          <label htmlFor="">Name: </label>
          <input type="text" placeholder="Enter your Name" />
          <label htmlFor="">Email: </label>{" "}
          <input type="email" placeholder="Enter your Email" />
          <label htmlFor="">Topic: </label> <input type="text" placeholder="Enter your title"/>
          <label htmlFor="">Message: </label>{" "}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your Message"
          ></textarea>
          <button>Send Email</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
