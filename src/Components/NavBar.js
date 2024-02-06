import React from 'react'
import { useRef } from 'react'
import { FaBars, FaPhone, FaTimes, FaWhatsapp } from 'react-icons/fa';
import '../Components/NavBar.css'

import { Link } from 'react-router-dom';

import image1 from '../Images/property.png'

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <Link to="/" class="logo" style={{ textDecoration: "none" }}>
                <img src={image1} alt="Logo" style={{ marginTop: "15px" }} />
                <p style={{color:"white" , fontSize:"16px" , fontWeight:"600"}}>Tuition Waला</p>
                
               
            </Link>
            <nav ref={navRef} >
               
               <Link to="/" >Home</Link>
               <Link to="/Contact">Contact</Link>
               <Link to="/ht">Hire a Tutor</Link>
               <Link to="/bt">Become a Tutor</Link>
               
               <Link to="/payment">Payment</Link>
               <Link to="/aboutus">About</Link>
               <Link to="/">FAQ</Link>
                



                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>

            </nav>
            <button className='nav-btn ' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar
