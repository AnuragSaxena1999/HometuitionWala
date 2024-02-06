import React from 'react';
import {MdDesignServices} from 'react-icons/md';
import {FiCodesandbox} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg';
import styled from 'styled-components';
import Card from './Card';


function Services() {
  return (
    <Container>
        
        <h3  class="loading-text">Our Services</h3>
        <Cards data-aos="fade-left" data-aos-duration="2000" >
            <Card  
            
            title = {"CLASS"}
            disc1 = {`1st-3rd`}
            disc2 = {`4th-5th`}            
            disc3 = {`6th-8th`}            
            disc4 = {`9th-10th`}            
            disc5 = {`11th-12th`}            

            
            /> 
            <Card
            
            title = {"SUBJECT"}
            disc1 = {`Maths`}
            disc2 = {`Science`}            
            disc3 = {`English`}            
            disc4 = {`Social Science`}
            disc5 = {`All Subjects`}
           
           /> 
            <Card
            
            title = {"LANGUAGE"}
            disc1 = {`French`}
            disc2 = {`German`}
            disc3 = {`English`}
            disc4 = {`Hindi`}
            disc5 = {`Sanskrit`}
            
            /> 
            <Card
            
            title = {"Computer"}
            disc1 = {`C/C++`}
            disc2 = {`Java`}
            disc3 = {`Python`}
            disc4 = {`Data Structure`}
            disc5 = {`All Courses`}
            /> 
            <Card
            
            title = {"COMPETITIVE EXAM"}
            disc1 = {`IIT-JEE`}
            disc2 = {`NEET`}
            disc3 = {`SSC`}
            disc4 = {`NDA/NA`}
            disc5 = {`CLAT`}
            /> 
            <Card
            
            title = {"HOBBY"}
            disc1 = {`Dancing`}
            disc2 = {`Singing`}
            disc3 = {`Guitar`}
            disc4 = {`Chess`}
            disc5 = {`Yoga`}
            /> 
            <Card
            
            title = {"SUBJECTS"}
            disc1 = {`Physics`}
            disc2 = {`Chemistry`}
            disc3 = {`Biology`}
            disc4 = {`Maths`}
            disc5 = {`Acounts`}
            /> 
            <Card
            
            title = {"SUBJECTS"}
            disc1 = {`Pol. Science`}
            disc2 = {`History`}
            disc3 = {`Geography`}
            disc4 = {`Bussiness`}
            disc5 = {``}
            /> 
            
        </Cards>
    </Container>
  )
}

export default Services;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media(max-width: 840px){
        width: 90%;
    }

    h3{
        
        text-align: center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        
    }

`
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 2rem;
    gap: 1rem;
    
`
