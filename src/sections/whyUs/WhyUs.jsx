import React from 'react'
import {useState} from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { whyUs } from '../../data'
import childpic from '../../assets/general/child.jpg'

 import './whyUs.css'
const WhyUs = () => {
    const [selected,setSelected]= useState(null)

    const toggle = (i) =>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <>
        <section>
            <div className="container why-Us__container">
                    <div className="left-div">
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <h2 className="why_us-tag">Why our school is the right fit for your child.</h2>
                    </AnimationOnScroll>  
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <p id='cambridge_p'>Experienced teachers, diverse curriculum, safe learning environment, individualized attention.</p>
                        </AnimationOnScroll> 
                        {/* show cards */}
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <div>
                                {whyUs.map((item,i)=>(
                                    <div className="item">
                                        <div className="title" onClick={()=>toggle(i)}>
                                            <h4 className='why-us-title'>{item.reason}</h4>
                                            <p className='pointers'>{selected ==i ?  '':<FaChevronDown/>}</p>
                                        </div>
                                        <div className={selected ==i ? 'content show' :'content'}>
                                            <p className='why-us-toggle' id='cambridge_p'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        </AnimationOnScroll> 
                    </div>
                    {/* image */}
                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                    <div className="right-div">
                                    <img src={childpic} alt="" />
                    </div>
                    </AnimationOnScroll>
            </div>
        </section>
    </>
  )
}

export default WhyUs