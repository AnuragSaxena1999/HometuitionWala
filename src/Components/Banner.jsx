import React from 'react'
import styled from 'styled-components';
import image1 from "../Images/home.png"

import bannerimage from '../banner.png'
import image3 from '../Images/images.png'
import { Link } from 'react-router-dom';
import "../Components/Banner.css";
import { TypeAnimation } from 'react-type-animation';

function Banner() {
    return (
        <Container>
            <Texts>

                <div data-aos="fade-down" data-aos-duration="2000" className="information" style={{
                    display: "flex",
                    color: '#555',

                    alignItems: 'center',

                }}>
                    <a href="https://wa.me/+918700691364?text=Hello%20HomeTuitionWaला%20I%20need%20a%20home%20tutor%20for%20class....." target="_blank" tooltip="Whatsapp"><img src={image3} className="icon" alt="" />
                    </a>
                    <h5 className="dynamic-text" style={{ marginTop: "22px" , color:"#01be96" }}>8700691364</h5>
                </div>
                <h1 className='loading-text' style={{fontSize:"30px" , color: "black"  }}><img src={image1} alt="" className='icon' style={{height:"60px" , width:"60px"}} /><b> 𝕋𝕦𝕚𝕥𝕚𝕠𝕟 𝕎𝕒ला</b></h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Bringing learning home.',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                       "Investing in your child's future success.",
                        2000,
                        'Nurturing Knowledge, Inspiring Growth.',
                        2000,
                        'Academic Excellence Begins at Home.',
                        2000
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontSize: '1.0rem', display: 'inline-block' , fontWeight: "600",                    
                    paddingBottom: "1.2rem"}}
                    repeat={Infinity}
                />
                <p data-aos="fade-left" data-aos-duration="2000" style={{color:"#454545" , textAlign:"left" , fontSize:"16px"}}>Welcome to HomeTuitionWaला website, where excellence meets education! We are dedicated to nurturing young minds and empowering students to reach their full potential. </p>
                <button style={{ marginLeft: "5px" }}><Link to="/ht" style={{color:"white", textDecoration:"none"}}>Hire a Tutor</Link></button>

                <button  style={{ marginLeft: "10px" }}><Link to="/bt" style={{color:"white", textDecoration:"none"}}>Join as Tutor</Link></button>
                
            </Texts>
            <div data-aos="zoom-in" >
            <Profile>
                <img src={bannerimage} alt='profile' />
            </Profile>
            </div>
            
        </Container>
    )
}

export default Banner;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    @media(max-width:840px){
        width: 90%;
    }
    @media(max-width:640px){
        flex-direction: column;
    }

`
const Texts = styled.div`
    flex: 1;
    h4{
        padding: 1rem 0;
        font-weight: 500;
    }
    
    
    h1{
        font-size: 2rem;
        font-family: 'Secular One' , sans-serif;
        letter-spacing: 2px;
    }
    h3{
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p{
        font-weight: 700;
    }
    button{
        padding: 0.7rem 2rem;
        margin-top: 3rem;
        cursor: pointer;
        background-color: #01be96;
        border: none;
        color: #fff;
        font-weight: 500;
        filter: drop-shadow(0px 10px 10px #01be9551);
        :hover{
            filter: drop-shadow(0px 10px 10px #01be9570);
        } 
    }
`
const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    p{
        font-size: 1.2rem;
        @media(max-width:690px){
            font-size: 0.7rem;
        }
    }
    .social-icons{
        display: flex;
        align-items: center;
        gap: 1rem;
        span{
            width: 2.1rem;
            height: 2.2rem;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background-color: #01be96;
            position: relative;
            transition: transform 400ms ease-in-out;
            :hover{
                transform: rotate(360deg);    
            }
        }
        a{
            color:#fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
        }
    }

`
const Profile = styled.div`
    img{
        width: 40rem;
        filter: drop-shadow(0px 10px 10px #01be9570)
        transition: transform 400ms ease-in-out;
        @media(max-width:790px){
            width: 20rem;
        }

        @media(max-width:660px){
            width: 20rem;
        }

        @media(max-width:640px){
            width: 100%;
        }
    }
    :hover img{
        transform: translateY(-10px);
    }
`
