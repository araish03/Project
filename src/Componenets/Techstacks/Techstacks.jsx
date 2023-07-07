import React from 'react'
import './Techstacks.css'
import Upwork from "../img/Upwork.png";
import Fiverr from "../img/fiverr.png";
import Amazon from "../img/amazon.png";
import Shopify from "../img/Shopify.png";
import Facebook from "../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Techstacks = () => {

    const  theme =useContext(themeContext)
    const darkMode = theme.state.darkMode;

  return (
   <div className="works" id='Techstacks'>
     
     <div className="awesome">
            <span style={{color: darkMode?'white': ''}} >Known</span>
            <span>Techstacks</span>
            <span>I am a versatile developer with expertise in HTML, CSS, JavaScript, and ReactJS. <br/> With a passion for crafting responsive and dynamic web applications, <br/>I leverage these skills to bring innovative ideas to life and deliver exceptional<br/> user experiences.</span>
           <a download>
           <button className="button s-button">Hire me</button>
           </a>
           </div>  

     <div className="w-right">

            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>

                
            </div>

            <div>
                    <div className="w-backCircle blueCircle">
                    
                    </div>

                     <div className="w-backCircle yellowCircle">
                    
                    </div>
                </div>




</div>








   </div>
  )
}

export default Techstacks