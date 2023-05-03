import { useState } from 'react'
import {Activity} from '../../data'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './activities.css'


const Activities = () => {
    const [index,setIndex] = useState(0)
     const {image,name,date,desc} = Activity[index]

     const prevActivityHandler = () =>{
        setIndex(prev => prev -1);

        if (index <= 0){
            setIndex(Activity.length -1)
        }
     }

     const nextActivityHandler = () =>{
        setIndex(prev => prev+1);

        if (index >= Activity.length - 1){
            setIndex(0)
        }
     }



  return (
    <>
        <section>
        <h2 className='staff-title'>Activities</h2>
        <div className="container activities">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className="activities_left-div">
                <img className='activities_left-img' src={image} alt="activity" />
            </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div className="activities_right-div">
                <h4>{name}</h4>
                <span>{date}</span>
                <p id='cambridge_p' >{desc}</p>
           
            </div>
            </AnimationOnScroll>
            </div>
            <div className="activities__btn-container">
                <button className='activities__btn' onClick={prevActivityHandler}><IoIosArrowDropleftCircle/></button>
                <button className='activities__btn' onClick={nextActivityHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </section>

    </>
  )
}

export default Activities