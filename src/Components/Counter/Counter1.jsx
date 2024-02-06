import React from 'react'
import '../../Components/Counter/Counter1.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import image1 from '../../Images/teacher1.png';
import image2 from '../../Images/student.png'
import image3 from '../../Images/class.png'
import image4 from '../../Images/leads.png'

const Counter1 = () => {
  const [counterOn, setCounterOn] = useState(false);


  return (
    <>
      <div class="counter-container">
        <div class="box1" data-aos="fade-right" data-aos-duration="1000">
          <img src={image1} className='img' />
          <h5>Teachers</h5>
          <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p style={{ fontSize: "32px" }}>
                {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}

                +
              </p>

            </ScrollTrigger>
          </div>
        </div>
        <div class="box1" data-aos="fade-down" data-aos-duration="1000">
          <img src={image2} className='img' />
          <h5>Students</h5>
          <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p style={{ fontSize: "32px" }}>
                {counterOn && <CountUp start={0} end={2200} duration={2} delay={0} />}

                +
              </p>

            </ScrollTrigger>
          </div>
        </div>
        <div class="box1" data-aos="fade-up" data-aos-duration="1000">
          <img src={image3} className='img' />
          <h5>Demo Classes</h5>
          <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p style={{ fontSize: "32px" }}>
                {counterOn && <CountUp start={0} end={1500} duration={2} delay={0} />}

                +
              </p>

            </ScrollTrigger>
          </div>
        </div>
        <div class="box1" data-aos="fade-left" data-aos-duration="1000">
          <img src={image4} className='img' />
          <h5>Leads</h5>
          <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p className='counter' style={{ fontSize: "32px" }}>
                {counterOn && <CountUp start={0} end={700} duration={2} delay={0} />}

                +
              </p>

            </ScrollTrigger>
          </div>
        </div>
      </div>


    </>
  )
}

export default Counter1;
