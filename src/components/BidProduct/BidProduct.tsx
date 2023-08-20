import React from 'react'
import "./BidProduct.scss"
import Card from '../Card/Card'

const BidProduct = ({type}:{type:string}) =>{
  const data=[{
    id:1,
    img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"Nike Air Max Dia",
    isNew:true,
    oldPrice:190,
    price:130,
    
  
  
  },
  {
    id:2,
    img:"https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://hypebeast.com/image/2019/03/nike-kyrie-5-oreo-release-date-1.jpg",
    title:"Kyrie Oreo 5",
    isNew:false,
    oldPrice:160,
    price:110,
    
  
  
  },
  {
    id:3,
    img:"https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://images.pexels.com/photos/14824332/pexels-photo-14824332.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"Playstation 5",
    isNew:true,
    oldPrice:550,
    price:530,
    
  
  
  },

  ]
  return (
    <div className="bidProduct">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis mauris ac leo vestibulum pharetra. Phasellus sit amet ipsum diam. Maecenas ultricies risus libero, nec eleifend sem finibus ut. Quisque mattis viverra interdum. Proin sit amet lobortis lacus. Nunc egestas ipsum lacinia turpis euismod, eget aliquet ante congue. Morbi tempor dignissim tristique. Phasellus congue luctus elit, vel lobortis nulla porttitor convallis. Donec sodales lacinia lectus a porttitor. Proin tempor pharetra diam ac eleifend. Morbi ipsum justo, eleifend a erat quis, placerat porta dui.
        </p>
      </div>
      <div className="bottom">
{data.map(item=>(<Card item={item} key={item.id}/>))}
      </div>
    </div>
  )
}

export default BidProduct