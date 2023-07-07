import React from 'react'
import './Intro.css';
import Github from '../../img/github.png'
import Insta from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/new.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv';
import { themeContext } from '../../../Context';

import { useContext } from 'react';
import {motion} from 'framer-motion'

function Intro() {

  
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
   <div className="intro">
    <div className="i-left">

        <div className="i-name">
            <span style={{color: darkMode?'white': ''}} >Hey! I Am</span>
            <span >Araish Shaikh</span>
            <span >Frontend magician, weaving together pixels and code to craft stunning <br/>and user-friendly digital wonders.Bringing websites to life with a touch of magic.
            </span>
            <button className="i-button button">
            Hire me
        </button>

        <div className="i-icons">
            <a href="https://github.com/araish03" target="_blank">  <img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/araish-shaikh-984195225/" target="_blank">  <img src={Linkedin} alt="" /></a>
           <a href="https://www.behance.net/araishshaikh" target="_blank"> <img src={Insta} alt="" /></a>
           
          
        </div>
        </div>
       
    </div>
    <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img src={boy}  className="myimg" alt="" />
      
       <img
        
        transition={{ delay: 1 }}
       src={glassesemoji} 
       alt=""  ></img>
       
    
       
       <div style={{top:'-4%', left:'68%'}}>
        <FloatingDiv    className="floating-div1" image={crown} txt1='Web' txt2='Developer'/>
    </div>

    <div style={{top:'20rem' ,left:'0.85rem'}}>
        <FloatingDiv className="floating-div2" image={thumbup} txt1='Best UI/UX' txt2='Design' />
    </div>

    <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
    <div className='blurb' style={{background:"rgb(120 216 230)"}}></div>
    
    </div>
  
   
    </div>
     
  )
}

export default Intro