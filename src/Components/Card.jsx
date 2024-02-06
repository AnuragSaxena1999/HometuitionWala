import React from 'react'

import styled from 'styled-components';

const Card = (props) => {
    const {Icon , disc1 , disc2, disc3 ,disc4 ,disc5,title} = props;
  return (
    <Container>
        
        <h1>{title}</h1>
        <p>{disc1}</p>
        <p>{disc2}</p>
        <p>{disc3}</p>
        <p>{disc4}</p>
        <p>{disc5}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 80%;
    background-color: #fff;
    border-radius: 5px ;
    padding: 20px;
    padding-top: 40px;
    margin: 0 auto;
    text-align: center;
    letter-spacing:  1px;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    overflow: hidden;
    position: relative;
    z-index: 0;
    
    text-align: center;

    :before{
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    :after{
        width: 100%;
        height: 100%;
        background-color: #FBDA61;
        background-image: linear-gradient(45deg ,#FBDA61 0%, #FF5ACD 100%);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        clip-path: circle(20% at 90% 10%);
        transition: .2s;
    }
    :nth-child(2):after{
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093e9 0%, #80D0c7 100%);
    }
    :nth-child(8):after{
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093e9 0%, #80D0c7 100%);
    }
    :nth-child(5):after{
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093e9 0%, #80D0c7 100%);
    }
    :nth-child(3):after{
        background-color: #08AEEA;
        background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    }
    :nth-child(6):after{
        background-color: #08AEEA;
        background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    }
    :hover::after{
        clip-path: circle(100%);
    }
    :hover ::before{
        background-color: rgba(0, 0, 0, .1);
    }
    span{
        font-size: 4rem;
    }
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
        :hover{
            color: #fff;
        }
        
    }
    p{
        font-size: 15px;
        color: #777;
        :hover{
            color: #fff;
        }
    }
    
`
