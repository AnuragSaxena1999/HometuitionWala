import React from 'react'
import Banner from './Banner'
import Services from './Services';

import Slider from './Slider'; 
import Compare from '../Components/Compare/Compare';
import Why from '../Components/Why/Why';
import Cards from './Cardss/Cards';
import Counter from './Counter/Counter';
import Counter1 from './Counter/Counter1';


function Home() {
  
  

  return (
    <div>
      
      <Banner/>
      <Services/>
      
      <Compare/>
      <Why/>
      <Slider/>
     <Counter1/>
      
    </div>
  );
}

export default Home;
