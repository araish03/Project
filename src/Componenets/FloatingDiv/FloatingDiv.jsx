import React, { useContext } from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../Context'

function FloatingDiv({image ,txt1,txt2}) {
  const theme=useContext(themeContext);
  const darkMode =theme.state.darkMode;
  
  return (
   <div className="floatingdiv" style={{color: darkMode?'black': ''}} >
    <img src={image} alt="" />
    <span>
        {txt1}
        <br/>
        {txt2}
    </span>
   </div>
  )
}

export default FloatingDiv