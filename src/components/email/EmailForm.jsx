import React from 'react';
import { useState } from "react";
import './emailForm.css';

const EmailForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); // Add phone state
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    // Add handlePhoneChange
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (name === "") {
        setNameError("Please enter your name.");
        return;
      }
      if (email === "") {
        setEmailError("Please enter your email address.");
        return;
      }
  
      fetch("https://formspree.io/f/xeqwzypp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }), // Include phone
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          console.log("Email sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
  
      setName("");
      setEmail("");
      setPhone(""); // Clear phone field
      setMessage("");
  
      setFormSubmitted(true);
    };
  
    return (
      <div>
        {formSubmitted ? (
          <p className="contact-thankyou">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Send us an enrolment Request<br></br>&nbsp;</h3>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
              className="contact-input"
            />
            &nbsp;
            {nameError && <span className="contact-error">{nameError}</span>}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              className="contact-input"
            />
            &nbsp;
            {emailError && <span className="contact-error">{emailError}</span>}
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="contact-input"
            />
            &nbsp;
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message"
              className="contact-input"
            />
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        )}
      </div>
    );
  }
  
export default EmailForm;
