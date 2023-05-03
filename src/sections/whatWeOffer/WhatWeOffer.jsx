import { useNavigate } from 'react-router-dom';
import igse from '../../assets/general/cambridge.jpg';
import knec from '../../assets/general/knec.jpg';
import cbc from '../../assets/general/cbc.jpg';
import swahili from '../../assets/general/swahili-min.jpg';
import code from '../../assets/general/programing-min.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './whatWeOffer.css';

const WhatWeOffer = () => {
  const navigate = useNavigate();

  const handleCambridge = () => {
    navigate('/cambridge');

  };
  const handlePrograms = () => {
    navigate('/programming');
  };
  const handleSwahili = () => {
    navigate('/swahili');
  };


  return (
    
    <>
  {/* desc one */}
  
      <div className='curriculum-desc_one'>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div>
          <h3>Cambridge Assessment International Education </h3>
          <p id='cambridge_p'>Unlock Your Child's Potential with Avana Homeschooling in Kenya! 
              We offer Cambridge Assessment International Education to develop future 
              innovators and nurture well-rounded students for lifelong success.
          </p>
          <button className='btn learn-more-btn' onClick={handleCambridge} >
            Learn More
          </button>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">   
          <img className='curriculum-desc_img' src={igse} alt='igse' />
          </AnimationOnScroll>
      </div>


{/* kiswahili */}
<div className='curriculum-desc_two'>
<AnimationOnScroll animateIn="animate__fadeInLeftBig">
<img src={swahili} alt="igse" />
</AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__fadeInRightBig">  
      <div>
          <h3>Kiswahili</h3>
          <p id='cambridge_p'>Unleash your linguistic potential with Avana 
          Homeschooling's online Swahili courses! Our innovative program empowers learners to master listening, speaking, reading, and writing skills, unlocking professional growth, academic success, family ties, and leisure experiences. Join us now for a comprehensive, 
          accessible, and transformative language education!
          </p>
          <button className='btn learn-more-btn' onClick={handleSwahili} >
            Learn More
          </button>
        </div>
        </AnimationOnScroll>
</div>

  {/* desc one */}
  <div className='curriculum-desc_one'>
  <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div>
          <h3>Programming for Kids</h3>
          <p id='cambridge_p'>Unleash your child's potential with 
          Avana Homeschooling! Our cutting-edge program empowers young
           learners with skills in Python, C, Scratch, HTML, CSS, and JavaScript. Give your child a competitive edge in the digital age.
           Enroll today and watch them soar!
          </p>
          <button className='btn learn-more-btn' onClick={handlePrograms} >
            Learn More
          </button>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <img className='curriculum-desc_img' src={code} alt='igse' />
        </AnimationOnScroll>
      </div>

  
{/* kiswahili */}
<div className='curriculum-desc_two'>
<AnimationOnScroll animateIn="animate__fadeInLeftBig">
<img  id ='cbc-icon' src={cbc} alt="igse" />
</AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__fadeInRightBig">  
      <div>
          <h3>Competent Based Curriculum (CBC)</h3>
          <p id='cambridge_p'> Looking for a flexible, learner-centered CBC homeschooling program for your
           child? Avana Homeschooling provides just that! Enroll your child today for a comprehensive 
          education that develops essential 21st-century skills.
          </p>
          <button className='btn learn-more-btn' onClick={handleSwahili} >
            Learn More
          </button>
        </div>
        </AnimationOnScroll>
</div>


  {/* desc one */}
  <div className='curriculum-desc_one'>
  <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div>
          <h3>8-4-4 Curriculum (KCPE & KCSE)</h3>
          <p id='cambridge_p'>Looking for a homeschooling program that prepares your child for KCSE and KCPE success? 
          Avana Homeschooling offers a comprehensive 8-4-4 curriculum that develops essential academic skills.
           Enroll your child today for academic excellence!
          </p>
          <button className='btn learn-more-btn' onClick={handlePrograms} >
            Learn More
          </button>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <img className='curriculum-desc_img' src={knec} alt='igse' />
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default WhatWeOffer;
