import React from 'react'
import cambridge from '../../assets/general/cambridge/faq_2.jpg'
import Navbar from '../../sections/navbar/Navbar'
import './cambridge.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Requirements from '../../components/requirements/Requirements'
import ChildSafety from '../../components/child-safety/ChildSafety'
import Footer from '../../sections/footer/Footer'; 
import FloatingWhatsAppIcon from '../../components/FloatingWhatsAppIcon/FloatingWhatsAppIcon'
import { useNavigate } from 'react-router-dom';
import Subjects from '../../components/subjects/Subjects';
const Cambridge = () => {
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
            <img src={cambridge} alt="" />
        </div>
        </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div>
          <h3>What is the Cambridge Curriculum?</h3>
          <p id='cambridge_p'>The Cambridge Curriculum is a globally recognized, innovative educational program developed 
            by the University of Cambridge. Focused on nurturing critical thinking and problem-solving 
            skills, it offers students a flexible, inquiry-based approach. Available for primary, secondary, 
            and advanced levels, the curriculum prepares learners for success in the ever-changing world,
             fostering intellectual curiosity, creativity, and cross-cultural understanding.</p>
        </div>
      </AnimationOnScroll>

      </div>
    </section>
    <section>
      <h2 className='section-tittle'>BNC Curriculum guide</h2>
      <div className="container bnc_guide_desc">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="left-bnc_guide_desc">
          <p id='cambridge_p'>The Cambridge Curriculum is a comprehensive program for 5-19 year olds, promoting academic 
            excellence and life skills through subjects like English, math, science, humanities and languages. 
            Emphasizes critical thinking, creativity and practical application with a global perspective -
            &nbsp;<b><a className='Enroll_now' href="#contact" onClick={handleContact}>Enroll now!</a></b> 
            </p>
        </div>
        </AnimationOnScroll>
        <div className="right-bnc_guide_desc">
          
          <div>

          <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <table>
  <tr>
    <th>Stage</th>
    <th>Years</th>
  </tr>
  <tr>
    <td>Reception/preschool/Kindergarten</td>
    <td></td>
  </tr>
  <tr>
    <td>Key stage 1 (KS1)</td>
    <td>Year 1-2<br></br>Lower primary</td>
  </tr>
  <tr>
    <td>Key stage 2 (KS2)</td>
    <td>Year 3-6<br></br>Upper primary</td>
  </tr>
  <tr>
    <td>Key stage 3 (KS3)</td>
    <td>Year 7-9<br></br>Lower secondary</td>
  </tr>
  <tr>
    <td>Key stage 4 (KS4)</td>
    <td>Year 10-11<br></br>Upper secondary -IGSE</td>
  </tr>
  <tr>
    <td>Key stage 5 (KS5)6th form</td>
    <td>Year 12-13(A-level)<br></br>Year 12-As-level<br></br>Year 13-A2 level</td>
  </tr>
</table>
</AnimationOnScroll>

          </div>

        </div>
      </div>
      <Subjects/>
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

export default Cambridge