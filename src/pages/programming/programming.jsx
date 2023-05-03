import React from 'react'
import python from '../../assets/program/python.png'
import js from '../../assets/program/js.png'
import hopscotch from '../../assets/program/hopscotch.png'
import microbit from '../../assets/program/microbit.png'
import minecraft from '../../assets/program/minecraft.png'
import tynker from '../../assets/program/tynker.png'
import wonder from '../../assets/program/wonder.png'
import scratchjr from '../../assets/program/scratchjr.png'
import CSS from '../../assets/program/CSS-HTML.png'
import { FaGraduationCap } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { FaUsers } from 'react-icons/fa';
import { IoIosDesktop } from 'react-icons/io';
import Requirements from '../../components/requirements/Requirements'
import ChildSafety from '../../components/child-safety/ChildSafety'
import Footer from '../../sections/footer/Footer';
import FloatingWhatsAppIcon from '../../components/FloatingWhatsAppIcon/FloatingWhatsAppIcon'
import Navbar from '../../sections/navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import windowOpen from '../../assets/general/programm-window.png'
import kidsg3 from '../../assets/general/Kids-group.png'

import './programming.css'

const Programming = () => {

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
<div className='cambridge_header-img'>
    <img src={windowOpen} alt="" />
</div>

<div>
  <h3>Why should kids learn programming?</h3>
  <p id='cambridge_p'>
  Learning programming at a young age provides numerous benefits for children.
   It helps to develop critical thinking, problem-solving skills, and creativity.
    It also prepares children for the technology-driven future and opens doors to
     countless career opportunities. By teaching children programming, you are
      investing in their future success and giving them a valuable skill set that will serve them well throughout their lives. Encourage your child
   to take the programming curriculum and help them unleash their full potential.  </p>
</div>
</div>
</section>
<section>
<h2 className='section-tittle'>Programming with Avana</h2>
<div className="container bnc_guide_desc">
<div className="left-bnc_guide_desc">
<p id='cambridge_p'>
  At Avana Homeschooling, we believe that every child should have access to learning programming.
   With our expertly designed curriculum and experienced instructors, we offer a unique opportunity 
   for students to gain valuable skills in HTML, CSS, and JavaScript. Whether you prefer the convenience
    of online classes or the structure of physical classes, we have options to fit your needs. <br></br><br></br> By enrolling
     your child in our programming courses, you're not only helping them to develop valuable technical 
     skills, but you're also setting them on the path to a successful future in a rapidly growing industry.
      At Avana Homeschooling, we are committed to providing a supportive and engaging learning environment for your child. 
  Don't miss this opportunity to invest in their future success - <b><a className='Enroll_now' href="#contact" onClick={handleContact}>Enroll now!</a></b>
</p>
</div>
<div className="right-bnc_guide_desc">
  <img src={kidsg3} alt="" />
  <div>
    
  

  </div>

</div>
</div>
</section>
<section>
<h2 className='section-tittle'>skills for the 21st century</h2>
  <div className="container">
    <div className='century_skills-p'>
      <p id='cambridge_p'>Prepare for the future with our skill-based education! Stay ahead of the game in IT and other rapidly evolving industries.</p>
    </div>
    <div className="century_skills">
      <div className="tech_skills">
      <FaGraduationCap />
        <h3>New technologies</h3>
        <div>
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Flexibility and adaptability
        </p>    
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Practical, hands-on learning
        </p> 
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Industry connections
        </p>         
        </div>
      </div>


      <div className="century_skills">
      <div className="tech_skills">
      <IoIosDesktop />
        <h3>continous learning</h3>
        <div>
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Encouragement of self-directed learning
        </p>    
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Regular updates and new content
        </p> 
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Opportunities for collaboration
        </p>         
        </div>
      </div>
    </div>



    <div className="century_skills">
      <div className="tech_skills">
      <FaUsers />
        <h3>interaction skills</h3>
        <div>
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Incorporating interactive elements
        </p>    
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Encouraging collaboration
        </p> 
        <p id='cambridge_p'>
            <TiTick className='tick-icon' />Personalizing learning
        </p>         
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
<section>
    <h2 className='section-tittle'>  programing tools and environment</h2>
    <p id='cambridge_p' >Avana Homeschool offers engaging programming courses for students aged 6-18, fostering logical and analytical thinking. 
      We use handpicked, easy-to-use tools designed to inspire young minds at different learning stages.</p>
    <div className="container">
    <div className="programming_tools">
          <img src={CSS} alt="" />
          <img src={python} alt="" />
          <img src={js} alt="" />
          <img src={hopscotch} alt="" />
          <img src={minecraft} alt="" />
          <img src={microbit} alt="" />
          <img src={tynker} alt="" />
          <img src={wonder} alt="" />
          <img src={scratchjr} alt="" />
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

export default Programming