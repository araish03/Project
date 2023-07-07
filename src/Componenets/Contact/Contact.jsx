import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useRef } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Contact = () => {
    const  theme =useContext(themeContext)
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const[done,setDone]= useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s3wjc0v', 'template_whwuymv', form.current, 'SfE28k960pc72GUkK')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                
                <span style={{color: darkMode?'white': ''}} >Get in touch </span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>
                </div>
            </div>
        </div>


        <div className="c-right">
            <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name'/>
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message"  className='user' placeholder='message'></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thankyou for contacting me 🥳🎉"}</span>
                <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact