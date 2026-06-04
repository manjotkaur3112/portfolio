import React from 'react'
import App from '../App'
import index from '../index.css'
import mail from '../assets/images/social/mail.png'
import phone from '../assets/images/social/phone.png'
import location from '../assets/images/social/location.png'

const Contact = () => {
  return (
    <div>
      <div className='contact bg-gray-700'>
        <h2 className='gradient-text justify-self-center'>Get In Touch</h2>
        <div className='contact-info bg-gray-800'>
            <div className='contact-details'>
                <p className='text-white text-xl font-bold py-7'>I'm always open to new opportunities and meaningful conversations. <br/>Let's connect!</p>
                <div className='contact-card'>
                    <img src={mail} alt="email icon"></img>                       
                    <a href="mailto:manjotkaur311205@gmail.com">manjotkaur311205@gmail.com</a>
                </div>
                <div className='contact-card'>
                    <img src={phone} alt="phone icon"></img>                        
                    <a href="tel:+91 9782100977">+91 9782100977</a>
                </div>
                <div className='contact-card'>
                    <img src={location} alt="map icon"></img>
                    <a href="https://www.google.com/maps/dir/31.2475648,75.7039104/">Lovely Professional University, Punjab</a>
                </div>
            </div>
            <div className=''></div>
                <form className='contact-form'>
                    <input type='text' placeholder='Name' required />
                    <input type='email' placeholder='Email' required />
                    <textarea placeholder='Message' required></textarea>
                    <button type='submit' onClick='' className='button'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
