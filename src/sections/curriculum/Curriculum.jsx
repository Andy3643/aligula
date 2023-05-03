import WhatWeOffer from '../whatWeOffer/WhatWeOffer'
import Course from '../../components/course-slider/Course'
import './curriculum.css'

const Curriculum = () => {

  
  return (
    <>
    <section id='about'>
      <h2 className='section-tittle'>School Curriculum</h2>
      <div className="container ">
      <WhatWeOffer/>
     
      </div>
      <div className="slider_courses">
      <Course/>
      </div>
    </section>

    </>
  )
}

export default Curriculum