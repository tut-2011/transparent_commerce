import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom";
type Col = {
    id:Number,
    img:string,
    img2:string,
    title:string,
    isNew:Boolean,
    oldPrice:number,
    price:number,
  };
const Card = ({item}:{item:Col}) => {
  return (
    <Link className="link" to={`/products/${item.id}`}>
   <div className="card">
    <div className="image">
        {item.isNew&&<span>New Collection</span>}
        <img src={item.img} alt="img1" className='mainImg'/>
        <img src={item.img2} alt="img2" className="secondImg" />
    </div>
    <h2>{item.title}</h2>
    <div className="prices">
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
    </div>
   </div>
   </Link>
  )
}

export default Card