import React from 'react'
import '../Payment/Payment.css'

function Payment() {
    return (
        <>
        <div className="title"  data-aos="fade-down" data-aos-duration="1000">
        <h1 class="loading-text" >Pay With UPI</h1>
        <p>"Invest in yourself and your goals. By making a payment, you are investing in your own success and satisfaction."<br /></p>
      </div>
      <div class="card-container">
    <div class="card" data-aos="fade-right" data-aos-duration="1000">
      <img src="/images/qr.jpg" alt="Image 1"/>
      <h3>UPI ID</h3>
      <p>anurags142@fbl</p>
    </div>
    
    <div class="card" data-aos="fade-up" data-aos-duration="1000">
      <img src="/images/Gpay.jpg" alt="Image 2"/>
      <h3>Google Pay</h3>
      <p>anurag1705094-1@okaxis</p>
    </div>
    
    <div class="card" data-aos="fade-left" data-aos-duration="1000">
      <img src="/images/paytm.jpeg" alt="Image 3"/>
      <h3>Paytm</h3>
      <p>7678339856236@paytm</p>
    </div>
  </div>
        </>
    )
}

export default Payment
