import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() { 
  return (
    <footer className="text-light"style={{backgroundColor:"#01be96"}} data-aos="fade-up" data-aos-duration="1000">
      <div className="container py-5 "style={{backgroundColor:"#01be96"}}>
        <div className="row ">
          <div className="col-md-4 ">
            <h4 style={{color:"#fff", fontFamily: "Times New Roman"}}>HomeTuitionWaला</h4>
            <hr />
  
            <p style={{fontSize:"15px"}}>"Join us on this educational journey, where every student's success is our ultimate goal. "</p>
            
          </div>
          <div className="col-md-2">
            <h4 style={{color:"#fff", fontFamily: "Times New Roman"}}>Useful Links</h4>
            <hr />
            <ul className="list-unstyled">
              <li ><Link to="/#" style={{color:"black"}}>Home</Link></li>
              <li><Link to="/ht" style={{color:"black"}}>Hire a tutor</Link></li>
              <li><Link to="/bt" style={{color:"black"}}>Become a tutor</Link></li>
             
            </ul>
          </div>
          <div className="col-md-2">
            <h4 style={{color:"#fff", fontFamily: "Times New Roman"}}>Contact Us</h4>
            <hr />

            <ul className="list-unstyled">
              <li><a href="tel:870-069-1364" target="_blank" style={{color:"black"}}>870-069-1364</a></li>
              <li><a href="mailto:info@abc.in" target="_blank" style={{color:"black"}}>info@abc.in</a></li>
              
            </ul>
          </div>
          <div className="col-md-4">
            <h4 style={{color:"#fff", fontFamily: "Times New Roman"}}>Get Connected Us</h4>
            <hr />

            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://wa.me/+918700691364?text=Hello%20HomeTuitionWaला%20I%20need%20a%20home%20tutor%20for%20class....." target="_blank" style={{color:"black"}}>
                  <FaWhatsapp />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="tel:870-069-1364" target="_blank" style={{color:"black"}}>
                  <FaPhone />
                </a>
              </li>


              <li className="list-inline-item ">
                <a href="https://www.instagram.com/surya__jeweller" target="_blank" style={{color:"black"}}>
                  <FaInstagram />
                </a>
              </li>

              <li className="list-inline-item ">
                <a href="/" target="_blank" style={{color:"black"}}>
                  <FaFacebook />
                </a>
              </li>
            </ul>
            
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p className="text-muted" style={{fontSize:"15px"}}>© {new Date().getFullYear()} HomeTuitionWaला. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
