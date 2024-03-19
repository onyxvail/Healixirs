import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offer = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
      <h1>Exclusive Loot</h1>
      <h1>Deals for you.</h1>
      <p> Only for the hoarders of the epic loot.  </p>
      <button>Check  Now</button>
    </div>

    <div className="offers-righ">
     <img src={exclusive_image} alt="" />
    </div>

    </div>
  )
}
