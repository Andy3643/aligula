import { useState, useEffect } from 'react';
import { useInterval } from 'react-use';
import pic from '../../assets/general/teacher-student.jpg';
import './header.css';

const Header = () => {
  const [text, setText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    setText('Avana Home Schooling');
  }, []);

  useInterval(() => {
    if (typingIndex < text.length) {
      setTypingIndex(typingIndex + 1);
    }
  }, 100);

  return (
    <>
        <header className='header-section'>
            <div className="container header-container">
                <div className="left-side">
                    <h1 className='school_name'>{text.slice(0, typingIndex)}</h1>
                    <p className='school_tagline' id='cambridge_p'>We deliver a top-tier, comprehensive educational experience tailored to accommodate the unique learning preferences of each individual student.</p>
                    <div className="enrol_button">
                        <a href="#contact" className='btn primary'>Enroll Now</a>
                    </div>
                </div>
                <div className="right-side">
                  <img src={pic} alt="" />
                </div>
            </div>
        </header>
    </>
  );
}

export default Header;
