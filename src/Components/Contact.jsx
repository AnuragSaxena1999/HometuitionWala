import React from 'react'
import './Contact.css';
import image1 from '../Images/email.png'
import image2 from '../Images/location.png'
import image3 from '../Images/phone.png'
import image4 from '../Images/shape.png'
import image5 from '../Images/images.png'
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import  { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Result =() =>{
    Swal.fire({icon: 'success',
  title:'Your message has been sent Successfully. Our team will connect you soon',
  
})
}
 
function Contact (){

    const form = useRef();
    const [result ,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1ctpw9', 'template_x2fpec9', form.current, 'g0nKWPupbt0PgX0KR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  setTimeout(() =>{
    showResult(false);
  }, 5000);

    return (
        <>
        
            <div className="container" data-aos="fade-down" data-aos-duration="1000" style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                padding: "2rem",
                backgroundColor: "#fafafa",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <span className="big-circle"></span>
                <img src={image4} className="square" alt="" />
                <div className="form">
                    <div className="contact-info">
                        <h3  className='title' >Let's get in touch</h3>
                        <p>

                        </p>
                        

                        <div className="info" style={{marginTop:"64px"}}>
                            <div className="information">
                                <img src={image2} className="icon" alt="" />
                                <p style={{fontSize:"17px"}}>F-92, Najafgarh , New Delhi-110043 </p>
                            </div>
                            <div className="information">
                                <img src={image1} className="icon" alt="" />
                                <p style={{fontSize:"17px"}}>info@sum.com</p>
                            </div>
                            <div className="information">
                                <img src={image3} className="icon" alt="" />
                                <p style={{fontSize:"17px"}}>870-0691-364</p>
                            </div>
                            <div className="information">
                                <img src={image5} className="icon" alt="" />
                                <p style={{fontSize:"17px"}}>870-0691-364</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p style={{fontSize:"17px"}}>Connect with us :</p>
                            <div className="social-icons">
                                <a href="https://wa.me/+918700691364?text=Hello%20HomeTuitionWaला%20I%20need%20a%20home%20tutor%20for%20class....." target='blank' >
                                    <FaWhatsapp />
                                </a>
                                <a href="#" className=''>
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaFacebook />
                                </a>
                                <a href="#">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form ref={form} onSubmit={sendEmail} >
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="user_name" className="input" required />
                                <label for="">Name</label>
                                <span>Name</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="user_email" className="input" required/>
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" required />
                                <label for="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" required></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>
                            <button className='btn' style={{borderColor:"white" , color:"white" , borderRadius:"10px"}}> 
                                Send
                            </button>
                            <div className="row">{result ? <Result/> : null} </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
