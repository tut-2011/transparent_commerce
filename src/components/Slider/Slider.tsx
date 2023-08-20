import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import "./Slider.scss"







const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0);
    const data=[

        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltbe156a2a7a1b6878/64df6f7440aec5fb641586c9/adidas_Yeezy_Slide_Slate_GreyPrimary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246",
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blte394f97dd3fa0e38/64de24423f378a5865f0b3c7/adidas_Stan_Smith_Homer_Simpson_(New_Release)Primary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246",
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc8f99f3f3d7740c3/64da2d842b55eb812140c5ed/BTS_Sp5derPrimary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246"
    ];
    const prevSlide=()=>{
      //alert("hello");
        setCurrentSlide(currentSlide===0?2:(prev)=>prev-1);
        };
        const nextSlide = () => {
            setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
          };
  return (
    <div className="slider">
    <div className="container" style={{transform:`translateX(-${currentSlide * 120}vw)`}}>
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
    </div>
    <div className="icons">
      <div className="icon" onClick={prevSlide}>
        <WestOutlinedIcon />
      </div>
      <div className="icon" onClick={nextSlide}>
        <EastOutlinedIcon />
      </div>
    </div>
  </div>
  )
}

export default Slider