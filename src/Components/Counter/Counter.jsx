import React from 'react'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div class="row row-cols-4 g-3" style={{width:"1345px" , marginLeft:"2px" , marginBottom:"5px", backgroundColor:"blue"}}>
        <div class="col" style={{padding:"20px"}}>
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
              alt="Hollywood Sign on The Hill" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
              alt="Palm Springs Road" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
              alt="Palm Springs Road" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
              alt="Los Angeles Skyscrapers" />
            <div class="card-body">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h1>
                  {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}

                  +
                </h1>

              </ScrollTrigger>


            </div>
          </div>
        </div>



      </div>



    </>



  )
}

export default Counter;
