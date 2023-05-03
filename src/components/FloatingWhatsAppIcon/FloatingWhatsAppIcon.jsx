// FloatingWhatsAppIcon.js
import React from 'react';
import './FloatingWhatsAppIcon.css';
import { IoLogoWhatsapp } from 'react-icons/io';

const FloatingWhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    const url = 'https://wa.me/+254792307485';
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-icon-float" onClick={handleWhatsAppClick}>
      <div className="inner-circle">
      <IoLogoWhatsapp size="5em" color="#25D366" />
      </div>
    </div>
  );
};

export default FloatingWhatsAppIcon;
