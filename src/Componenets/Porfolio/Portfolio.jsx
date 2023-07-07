import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Sidebar from "../img/sidebar.png"
import HOC from "../img/hoc.png"
import MusicApp from "../img/musicapp.png"
import ECOMMERCE from "../img/ecommerce.png"
import glasses from "../img/glassesimoji.png"
import Hr from "../img/hrest.png"
import bitk from "../img/bitk.png"
import ukiyo from "../img/ukiyo.png"
import ss from "../img/ss.png"
import thought from '../img/thought.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Portfolio = () => {

  const  theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode?'white': ''}} >Recent Project</span>
        <span>Portfolio</span>
        <span className='blur1'></span>
       {/* <span><img src={glasses} alt="" /></span> */}
       
        <Swiper  
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
           <SwiperSlide>
              <a href="https://araish03.github.io/Blog-Website/" target='__blank'>                <img src={thought} alt="" />
</a>
             
            </SwiperSlide>

            <SwiperSlide>
              <a href="https://araish03.github.io/E-learning/" target='__blank'><img src={ss} alt="" /></a>
                
               
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.behance.net/gallery/164238593/ukiyo-a-well-being-app/modules/926288981" target='__blank'> <img src={ukiyo} alt="" /></a>
           
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://devfolio.co/projects/shopalytics-shopping-analytics-f359" target='__blank'><img src={bitk} alt="" /></a>
            
               
            </SwiperSlide>

            <SwiperSlide>
              <a href="https://www.canva.com/design/DAFflC49dhs/GeYQh4Awr9rHjz83DJtlhQ/edit?utm_content=DAFflC49dhs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">                <img src={Hr} alt="" />
</a>
             
            </SwiperSlide>

            
          
            


         
                
        </Swiper>
    </div>
  )
}

export default Portfolio