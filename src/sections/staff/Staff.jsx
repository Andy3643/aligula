import React from 'react'
import Teacher from '../../components/ourTeachers/Teacher'
import './staff.css'
const Staff = () => {
  return (
    <>
        <section id='staff'>
        <h2 className='staff-title'>Our Staff</h2>
        <div className="container teachers">
            <Teacher/>
            
            </div>
        </section>
        
    </>
  )
}

export default Staff