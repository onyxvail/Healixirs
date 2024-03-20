import React from 'react'
import './NewsLetter.css'


export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Subscribe to our Newsletter</h1>
        <p>Get the latest news and updates from Healixirs</p>
        <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
        </div>

    </div>
  )
}
