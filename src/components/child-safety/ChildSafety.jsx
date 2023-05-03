import './childsafety.css'
import { internetSafetyTips } from './data.js';
import children from '../../assets/general/online-safety.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ChildSafety = () => {
  return (
    <>
    <h2 className='section-tittle'>Ensuring Your Child's Online Safety</h2>

    <div className="container">
    <AnimationOnScroll animateIn="animate__fadeInRightBig">
    <div className="blog_intro">
        <img src={children} alt="" />
        <p id='cambridge_p'>The internet offers a wealth of information, entertainment, and social connections, but it also presents potential risks for children. As parents, it is crucial to take proactive steps to ensure the safety of our children as they navigate the digital world. In this blog, we will discuss five comprehensive strategies for parents to help safeguard their children's online experiences.</p>
    </div>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    <div>
      {internetSafetyTips.map((tip, index) => (
        <div key={index}>
          <h4 className='similarH4'>{tip.description}</h4>
          <p id='cambridge_p'>{tip.details}</p>
        </div>
      ))}
    </div>
    </AnimationOnScroll>
    </div>
    </>
  )
}

export default ChildSafety