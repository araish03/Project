import React from 'react'
import './Footer.css'
import Wave from '../img/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" />
        <div className="f-content">
            <span>araish2003@gmail.com </span>
            <span>Araish Shaikh </span>
        </div>
    </div>
  )
}

export default Footer