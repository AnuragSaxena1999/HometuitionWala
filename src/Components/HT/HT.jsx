import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Result =() =>{
  Swal.fire({icon: 'success',
  title:'Your response has been sent Successfully. Our team will connect you soon',
  
})
}

export const HT = () => {

  const form = useRef();
    const [result ,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_629k4aj', 'template_njjhpek', form.current, 'jm5u7gp7Jz5OXs65l')
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
        <h1 class="loading-text" >Hire a Tutor</h1>
        <p>"Individualized Attention for Extraordinary Results: Hire a Private Tutor Today."<br />Your private tutor is just one step away.</p>
      </div>
      <div className='bt-container container'>
        <form action="" ref={form} onSubmit={sendEmail}>

          <div className="content" data-aos="fade-right" data-aos-duration="1000" >
            <div className="input-box" >
              <label htmlFor="name">Student Name</label>
              <input type="text" placeholder='enter full name' name='Student_name' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">Parent Name</label>
              <input type="text" placeholder='enter name' name='Parent_name' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">Mobile Number</label>
              <input type="text" placeholder='enter mobile' name='Phone_Number' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">Email</label>
              <input type="email" placeholder='enter email' name='Email' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">Address with Landmark</label>
              <input type="address" placeholder='enter address' name='Address' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">City</label>
              <input type="city" placeholder='enter city' name='City' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">Pincode</label>
              <input type="number" placeholder='enter pincode' name='Pincode' required />
            </div>
            
            <div className="input-box" >
              <label htmlFor="name">Class</label>
              <input type="number" placeholder='enter class' name='Class' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">School Name</label>
              <input type="text" placeholder='enter school name' name='School_Name' required />
            </div>
            <div className="input-box" >
              <label htmlFor="name">Board</label>
              <input type="Text" placeholder='enter board' name='Board' required />
            </div>

            <span className="gender-title">Gender</span>
            <div className="gender-category">
              <input type="radio" name='gender' id='male' />
              <label htmlFor="gender">Male</label>
              <input type="radio" name='gender' id='female' />
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
            <button type='submit'>Submit</button>
          </div>
          <div className="row">{result ? <Result/> : null} </div>
        </form>

      </div>
    </>
  )
};

export default HT;