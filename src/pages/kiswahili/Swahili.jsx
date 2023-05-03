import React from 'react'
import Navbar from '../../sections/navbar/Navbar'
import kiswahili1 from '../../assets/general/kiswahili-min.jpg'
import kiswahili2 from '../../assets/general/super-student-min.jpg'
import Requirements from '../../components/requirements/Requirements'
import ChildSafety from '../../components/child-safety/ChildSafety'
import Footer from '../../sections/footer/Footer';
import FloatingWhatsAppIcon from '../../components/FloatingWhatsAppIcon/FloatingWhatsAppIcon'
import { useNavigate } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Swahili = () => {
  const navigate = useNavigate();
  function handleContact() {
    navigate('/');
    window.location.hash = 'contact';
  }
  return (
    <>
            <Navbar/>
    <section>
      <div className=" container cambridge_header">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className='cambridge_header-img'>
            <img src={kiswahili1} alt="" />
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div>
          <h3>Why learn Swahili?</h3>
          <p id='cambridge_p'>
          Learn Swahili in its native environment with Avana Homeschooling in Kenya. Gain fluency through comprehensive courses taught by expert instructors using an engaging and interactive approach. Enhance language skills, expand cultural horizons, and achieve success with Avana Homeschooling.
          </p>
        </div>
        </AnimationOnScroll>

      </div>
    </section>
    <section>
      <h2 className='section-tittle'>Why Avana</h2>
      <div className="container bnc_guide_desc">
        <div className="left-bnc_guide_desc">
          <p id='cambridge_p'>Unlock endless opportunities with Avana Homeschooling's online Swahili courses. 
          Enhance professional skills, achieve student success, and deepen connections with our comprehensive 
          curriculum tailored to meet your individual needs.<br></br><br></br>
          Enhance your East African experience by learning Swahili with Avana Homeschooling. Our systematic approach
           caters to individuals of all levels, from beginners to non-native speakers. Create unforgettable memories and
            deepen your bond with the culture on your safari - &nbsp;<b><a className='Enroll_now' href="#contact" onClick={handleContact}>Enroll now!</a></b>
          </p>
        </div>
        
        <div className="right-bnc_guide_desc">
          <img src={kiswahili2} alt="" />
        <div>
          

          </div>

        </div>
      </div>
    </section>
    <section>
        <Requirements/>
    </section>
    <section>
        <ChildSafety/>
    </section>
    <FloatingWhatsAppIcon />
    <Footer/>
    </>
  )
}

export default Swahili