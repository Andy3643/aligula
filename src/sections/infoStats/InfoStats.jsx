import { isVisible } from "@testing-library/user-event/dist/utils";
import {GiTeacher} from 'react-icons/gi'
import {BsBook} from 'react-icons/bs'
import { BsPeople } from 'react-icons/bs';
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import './infoStats.css'
function InfoStats({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="counter">
        <div className="container">
        <div className="counter-row">


          <div className="counter-column">
            <GiTeacher className="stat-icons"/>
            <h3 data-number="20" className="stat-icons">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={20}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            +</h3>
            <p id='cambridge_p'>TEACHERS</p>
          </div>


          <div className="counter-column">
            <BsBook className="stat-icons"/>
            <h3 data-number="120" className="stat-icons">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={120}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            +</h3>
            <p id='cambridge_p' >TEACHING<br/>SUBJECTS</p>
          </div>




               
          <div className="counter-column">
          <BsPeople className="stat-icons"/>
            <h3 data-number="120" className="stat-icons">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={120}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            +</h3>
            <p id='cambridge_p' >STUDENTS</p>
          </div>

          </div>
          </div>
      </section>
    </>
  );
}

export default InfoStats;