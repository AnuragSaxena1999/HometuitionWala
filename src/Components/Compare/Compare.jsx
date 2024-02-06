import React from 'react'
import '../Compare/Compare.css'

function Compare() {
    return (
    <>  <div className="heading">
        <h3 class="loading-text">Why Home Tuitions?</h3>
        </div>
        
        <div className="compare-container container">
            <div className="box" data-aos="fade-right" data-aos-duration="2000">
            <h4 style={{color:"#E73895" , textAlign: 'center' , fontSize:"22px",fontStyle: "italic" }}>Students</h4>
            <hr />
            <ul className='' style={{fontSize: "16px", fontStyle: "italic"}}>
                <li><b>Personalized Attention:</b> Home tuition offers one-on-one attention from a tutor, allowing them to focus solely on the student's individual needs, learning style, and pace.  </li>
                
               
               <li><b>Flexible Learning Environment:</b> Tutors provide flexible scheduling options and can conduct sessions in the comfort of your own home, allowing for a seamless learning experience.</li>
               <li><b>Individualized Support:</b>This individualized support helps students overcome challenges, develop stronger study skills, and reach their full potential.</li>
               <li><b>Convenience for Parents:</b>Parents can oversee their child's learning directly, engage with the tutor, and stay updated on their progress.</li>
               <li><b>Safety and Security:</b>Home tuition provides a secure and controlled learning environment.</li>
                
            </ul>
                 

            </div>
            <div className="box" data-aos="fade-left" data-aos-duration="2000">
            <h4 style={{color:"#E73895" , textAlign: 'center' , fontSize:"22px",fontStyle: "italic"}}>Tutors</h4>
            <hr />
            <ul className='' style={{fontSize: "16px",fontStyle: "italic"}}>
                <li><b>Be Your own Boss!:</b>Being a home tutor can provide a sense of being your own boss.This level of independence allows you to have control over your work and teaching approach.</li>
                <li><b>Flexibility and Autonomy:</b>Enjoy greater flexibility and autonomy in their work, and  choose their preferred teaching hours, set their own rates, and design customized lesson plans based on the specific needs and goals of each student.   </li>
                <li><b>Higher Earnings:</b>Tutors can charge higher rates compared to group tutoring or teaching in institutions and have the freedom to determine their own rates based on their qualifications, experience, and market demand. </li>
                <li><b>Professional Growth:</b>Home tuition provides an opportunity for tutors to continuously enhance their teaching skills and subject knowledge.</li>
               
                
            </ul>
            </div>
        </div>
    </>
    )
}

export default Compare;
