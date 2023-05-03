import React from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import './footer.css';
import Logo from '../../assets/general/Avana-Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Avana" id='footer-icon' />
        </div>
        <div className="socials">
          <a href="https://wa.me/+254792307485" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
            <IoLogoWhatsapp />
          </a>
          <a href="" className="linkedin-icon" target="_blank" rel="noopener noreferrer" >
            <BsLinkedin />
          </a>
          <a href="" className="twitter-icon" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle />
          </a>
          <a href="" className="facebook-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <div className="about-us">
          <h4 className='About_Us'></h4>
          <p id='cambridge_p' className='About_Us_P'>
            At Avana Homeschooling, we provide a nurturing, personalized, and
            engaging learning environment, empowering students to thrive and
            reach their full potential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
