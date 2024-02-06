import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
const Result =() =>{
    return(
        <p style={{color:"red"}}>Your message have been sent</p>
    )
}
export const ContactUs = () => {
    

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
    <form ref={form} onSubmit={sendEmail}>
        <div className="formWord">
            <h2>Contact Us</h2>
            <span>Full Name</span>
            <br />
            <input type="text" name="fullname" className='input100' required />
            <br />
            <span>Phone Number</span>
            <br />
            <input type="text" name='phone' className='input100' required />
            <br />
            <span>Enter Email</span>
            <br />
            <input type="text" name='email' className='input100' required />
            <br />
        </div>
        <div className="formWord">
            <span>Message</span>
            <br />
            <textarea name="message"  required></textarea>
            <br />
            <button>SUBMIT</button>
            <div className="row">{result ? <Result/> : null} </div>
        </div>
    
      
    </form>
  );
};