import React, { useRef , useState } from 'react';
import "./BT.css"
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
const Result =() =>{
    
      Swal.fire({icon: 'success',
      title:'Your response has been sent Successfully. Our team will connect you soon'
})
    
}
export const BT = () => {
  

  const form = useRef();
    const [result ,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p3dvw1v', 'template_3iuzbqa', form.current, 'jm5u7gp7Jz5OXs65l')
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
    <div className="title"  data-aos="fade-down" data-aos-duration="1000">
    <h1 class="loading-text" >Become a Tutor</h1>
    <p>Are you still asking for pocket money? Join Us as a tutor and earn a decent amount of money</p>
    </div>
    <div className='bt-container container'>
       <form action="" ref={form} onSubmit={sendEmail}>
        <h2>registeration</h2>
        <div className="content" data-aos="fade-right" data-aos-duration="1000">
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder='enter full name' name='name' required />
          </div>
          <div className="input-box">
            <label htmlFor="name">Email</label>
            <input type="email" placeholder='enter email' name='email' required />
          </div>
          <div className="input-box">
            <label htmlFor="name">Mobile Number</label>
            <input type="text" placeholder='enter mobile' name='Number' required />
          </div>
          <div className="input-box">
            <label htmlFor="name">Address</label>
            <input type="address" placeholder='enter address' name='Address' required />
          </div>
          <div className="input-box">
            <label htmlFor="name">Age in Years</label>
            <input type="number" placeholder='enter age' name='age' required />
          </div>
          <div className="input-box">
            <label htmlFor="name">Highest Qualification</label>
            <input type="Text" placeholder='enter Qualification' name='Qualification' required />
          </div>
          <div className="input-box">
            <label htmlFor="name">Experience in Years</label>
            <input type="number" placeholder='enter experience' name='Experience' required />
          </div>
          <span className="gender-title">Gender</span>
          <div className="gender-category">
            <input type="radio" name='gender' id='male' />
            <label htmlFor="gender">Male</label>
            <input type="radio" name='gender' id='female'/>
            <label htmlFor="gender">Female</label>
            <input type="radio" name='gender' id='other' />
            <label htmlFor="gender" >other</label>
          </div>
        </div>
        
        <div class="tacbox">
            <input type="checkbox" required/>
            I agree to these <a href="#">Terms and Conditions</a>.
          </div>
        <div className="button-container" data-aos="fade-up" data-aos-duration="1000">
          <button type='submit' >Register</button>
        </div>
        <div className="row">{result ? <Result/> : null} </div>
      </form>
      
    </div>
    </>
  )
}

export default BT;