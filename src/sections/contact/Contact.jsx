import React from 'react'
import serviceCare from '../../assets/general/customer care.png'
import EmailForm from '../../components/email/EmailForm'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './contact.css'
const Contact = () => {
  return (
    <>
        <section id='contact'>
       
          <div className="container contacts-container">
                      <div className="left_contacts-container">
            <EmailForm/>
            </div>
                        <div className="right_contacts-container">
              <img src={serviceCare} alt="" />
            </div>

          </div>
            
        </section>
    </>
  )
}

export default Contact