import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import Logo from '../../assets/general/Avana-logo-1.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (showMenu) {
        closeMenu();
      }

      if (currentScrollPosition < lastScrollPosition) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);

  const navigate = useNavigate();

  function handleContact() {
    toggleMenu();
    navigate('/');
    window.location.hash = 'contact';
  }
  function handleAbout() {
    toggleMenu();
    navigate('/');
    window.location.hash = 'about';
  }
  function handleStaff() {
    toggleMenu();
    navigate('/');
    window.location.hash = 'staff';
  }

  return (
    <nav className={`navbar ${!navbarVisible ? 'navbar-transparent' : ''}`}>
      <div className="nav-logo">
            <img id='logo' src={Logo} alt="Avana" />
            <h3 id='navbar-title'>
              <span class="avana">AVANA</span><br></br><span class="homeschooling">HOMESCHOOLING</span>
            </h3>

      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${showMenu ? 'nav-menu-active' : ''}`}>
        <li className="nav-item">
          <NavLink exact to="/" id='nav-link' activeClassName="active" onClick={toggleMenu}>
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="#about" id='nav-link'  className="nav-link" onClick={handleAbout}>CURRICULUM</a>
        </li>
        <li className="nav-item">
          <NavLink to="/cambridge" id='nav-link'activeClassName="active" onClick={toggleMenu}>IGCSE</NavLink>
        </li>
        <li className="nav-item">
          <a id='nav-link' className="nav-link" href="#contact" onClick={handleContact}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
