import React from 'react'
import './cards.css'

function cards({ src, price, title, desc}) {
  return (
    <div className='cards'>
        <img src={src} alt="" />
        <div className='cards_text'>
            <h3>{title}</h3>
            <h4>{desc}</h4>
            <h5>{price}</h5>
        </div>
        </div> 
  )
}

export default cards