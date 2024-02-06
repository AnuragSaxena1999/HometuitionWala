import React from 'react'
import '../../Components/Why/Why.css'

function Why() {
    return (
    <>  
    <div className='heading'>
    <h3 class="loading-text">Why HomeTuitionWaला?</h3>
        
    </div>
        <div className="why-container container">
            <div className="box" data-aos="fade-right" data-aos-duration="2000">
            <h4 style={{color:"#E73895" , textAlign: 'center' , fontSize:"22px",fontStyle: "italic"}}>HomeTuitionWaला</h4>
            <hr />
            <ul className='' style={{fontSize: "16px",fontStyle: "italic"}}>
                <li><b>Low Charges:</b>We charge just one time Rs 299 registration fees from Tutor.We do not take any commission from monthly tuition fee.</li>
                <li><b>Fast & Reliable:</b>We provide tutor to the students/Parents with in some couple of hours.100% of the tuition fee goes to tutor. So they continue for long time.</li>
                <li><b>Affordable Price:</b>Parents/Students can bargain charges directly to the Tutor according your demands </li>
                <li><b>Qualified Teachers:</b>We have highly qualified and experienced Tutors who have experience atleast three years of Home Tuitions </li>
                <li><b>Best Customer Support:</b>Tutors and Students/Parents can contact us through phone/whatsapp/email daily from 9am to 8pm.</li>
                
               
                
            </ul>
                 

            </div>
            <div className="box" data-aos="fade-left" data-aos-duration="2000">
            <h4 style={{color:"#E73895" , textAlign: 'center' , fontSize:"22px" , fontStyle: "italic"}}>Other Agencies</h4>
            <hr />
            <ul className='' style={{fontSize: "16px", fontStyle: "italic"}}>
            <li><b>High Charges:</b>They charge Rs 1000 registration fees from Tutor.Charge 50% of first month tuition fee. Some agencies charge 20% to 30% of tuition fee every month.</li>
                <li><b>Slow & Unreliable:</b>Limited number of tutors/tuitions.Also tutors need to pay commission to the agency. So tutors usually discontinue tuitions.</li>
                <li><b>Affordable Price:</b>Parents/Students cannot bargain or fix the charges from directly tutor.</li>
               
                <li><b>Limited Customer Support:</b>Tutors and Students/Parents cannot contact them after payment recieved.</li>
                
            </ul>
            </div>
        </div>
    </>
    )
}

export default Why;
