import React from 'react';
import './Aboutus.css'
import Slider from '../Slider';

const AboutUs = () => {
  return (

    <>
      <div className="title" data-aos="fade-down" data-aos-duration="1000">
        <h1 class="loading-text" >About Us</h1>
        <p>What makes a us great?It’s the Tutors who deliver the amazing services</p>
      </div>
      <div class="container">


        <div class="about-section" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="loading-text">Who We Are</h2>
          <p  >At HomeTuitionWaला, we understand that every student has unique learning needs. That's why we take a personalized approach to tutoring, tailoring our services to meet the specific requirements of each individual. Our team of highly qualified tutors are experienced in a wide range of subjects and possess the skills and expertise necessary to deliver exceptional educational support.</p>
        </div>

        <div class="about-section" data-aos="fade-left" data-aos-duration="1000">
          <h2 class="loading-text">Our Mission</h2>
          <p>We believe that learning should be an enjoyable and rewarding experience. Our tutors not only strive to enhance academic performance but also foster a love for learning in our students. We create a nurturing environment where students feel comfortable asking questions, exploring new concepts, and developing critical thinking skills.Our mission is that every student get personalized tutur and every tutor have good quality of students.</p>
        </div>


      </div>
      <Slider />



    </>
  );

};

export default AboutUs;
