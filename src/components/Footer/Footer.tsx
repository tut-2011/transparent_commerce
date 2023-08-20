import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
   <div className="footer">
    <div className="top">
<div className="item">
  <h1>Categories</h1>
  <span>Tech</span>
  <span>Sneakers</span>
  <span>Arts</span>
</div>
<div className="item">
  <h1>Links</h1>
  <span>FAQS</span>
  <span>Pages</span>
  <span>Stores</span>
</div>
<div className="item">
  <h1>About</h1>
  We are a company that prioritises transparency and provide a fair reselling marketplace to both buyers and sellers
</div>
<div className="item">
<h1>Contact</h1>
  We are a company that prioritises transparency and provide a fair reselling marketplace to both buyers and sellers
</div>
    </div>
    <div className="bottom">
<div className="left">

  <span className="logo">

  </span>
  <span className='copyright'>Copyright 2023.All Rights Reserved</span>
  
  
  </div>
  <div className="right">

    <img src="/images/payment.png" alt="payment methods"/>
  </div>


    </div>
   </div>
  )
}

export default Footer