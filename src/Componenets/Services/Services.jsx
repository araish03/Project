import React, { useContext } from 'react'
import './Services.css';
import HeartEmoji from '../img/heartemoji.png'
import Glasses from '../img/glasses.png'
import Humble from '../img/humble.png'
import Card from '../Card/Card';
import Resume from './Resume.pdf'

import { themeContext } from '../../Context';
function Services() {

    const  theme =useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>

        <div className="awesome">
            <span style={{color: darkMode?'white': ''}} >My Awesome</span>
            <span>services</span>
            <span>In my search for new creative endeavours, I was thrilled to find the developer opening. <br></br>I believe that I would make an excellent addition to your team.</span>
           <a href={Resume} download>
           <button className="button s-button">Download CV</button>
           </a>
           
           
        <div className="blur s-blur1" style={{background:"#abf1ff94"  }}></div>
        </div>

        <div className="cards" >

            <div style={{left:'15rem'}}>
            <Card
             
            emoji={HeartEmoji}

            heading={'Design'}
            detail={"Experienced designer skilled in Figma, Sketch, Canva."}

            />
            </div>

            <div style={{left:"-1rem" , top: "12rem"}}> 
                <Card
            
                emoji={Glasses}
                heading={'Developer'}
                detail={"Proficient in HTML, CSS, JavaScript, & ReactJS, creating exceptional user experiences."}
                />
            </div>

            <div style={{left:"19rem" , top: "16rem"}}> 
                <Card
            
                emoji={Humble}
                heading={'UI/UX'}
                detail={"Creating intuitive and visually appealing user interfaces to enhance the overall user experience."}
                />
            </div>

            <div className="blur s-blur2" style={{background:"var(--purple)" }}></div>

            <div className="blur s-blur3" style={{background:"var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services