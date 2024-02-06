import React from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact';
import BT from './Components/BT/BT';
import FAQ from './Components/FAQ/FAQ';
import HT from './Components/HT/HT';
import Payment from './Components/Payment/Payment';
import { FloatButton } from 'antd';
import {  WhatsAppOutlined } from '@ant-design/icons';
import AboutUs from './Components/Aboutus/Aboutus';


function App() {
  return (
    <>
      <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/bt" element={<BT />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ht" element={<HT />} />
          <Route path="/payment" element={<Payment />} />
          
        </Routes>
        <FloatButton icon={<WhatsAppOutlined />} style={{ backgroundColor: "#01be96", color: "white" }} className='' shape='square' href="https://wa.me/+918700691364?text=Hello%20HomeTuitionWaला%20I%20need%20a%20home%20tutor%20for%20class....." target="_blank" tooltip="Whatsapp" type='danger' />
        <Footer/>
      </div>
    </Router>
        
     

    </>
  );
}

export default App;
