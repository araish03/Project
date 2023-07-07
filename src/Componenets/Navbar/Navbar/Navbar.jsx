import React from 'react'
import './Navbar.css'
import logo from '../../img/1.png'
import Toggle from '../../Toggle/Toggle'
import {Link} from 'react-scroll'
import Services from '../../Services/Services'
import Techstacks from '../../Techstacks/Techstacks'
import Portfolio from '../../Porfolio/Portfolio'
import Contact from '../../Contact/Contact'
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Araish</div>
            <Toggle/>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true}  to ='Navbar' smooth={true} activeClass='activeClass'  >
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to ='Techstacks' smooth={true} >
                    <li>Techstacks</li>
                    </Link>
                    <Link spy={true} to ='Portfolio' smooth={true} >
                    <li>Portfolio</li>
                    </Link>
               
               
                </ul>
            </div>
            <Link spy={true} to ='Contact' smooth={true} >
            <button className="button n-button">
                Contact Me
            </button>
                    </Link>
            
        </div>
    </div>
  )
}

export default Navbar