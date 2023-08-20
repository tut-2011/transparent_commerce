import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import BidProduct from '../../components/BidProduct/BidProduct'
const Home = () => {
  return (
  <div className="home">
    <Slider/>
    <BidProduct type="currently-bidding"/>
    <BidProduct type="ended-bidding"/>



  </div>
  )
}

export default Home