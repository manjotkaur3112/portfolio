import React from 'react'
import App from '../App'
import index from '../index'
import myImage from '../assets/images/myImage.jpeg'
import github from '../assets/images/social/github.svg'
import linkedin from '../assets/images/social/linkedin.svg'
import whatsapp from '../assets/images/social/whatsapp.svg'
import instagram from '../assets/images/social/instagram.svg'
import Resume from '../assets/files/Resume.pdf'
import Contact from './Contact.js'


const Home = () => {
  return (
    <div className='hero bg-gray-700 min-h-screen flex flex-col md:flex-row items-center justify-evenly'>
      <div className='hero-content  py-10 w-64 md:min-w-96'>
        <div className='hero-title'>
          <h3 className='text-2xl text-white'>Hi, Myself</h3>
          <h2 className='text-3xl gradient-text font-bold leading-[50px] inline'>Manjot Kaur</h2>
          <span className='text-3xl'> 👋</span>
          <h3 className='text-2xl text-white typing'>I'm MERN Stack Developer</h3>
        </div>
        <div className='hero-description my-5 text-gray-300'>
          Computer Science Engineering student specializing in Generative AI with a passion for MERN Stack development, 
          Machine Learning, and Cloud Technologies.
          </div>
        <div className='hero-buttons flex justify-evenly my-5 float-left gap-14'>
          <a href={Contact} className='button'>Contact Me</a>
          <a href={Resume} className='button'>Resume</a>
        </div>
      </div>
      <div className='hero-profile flex gap-5 md:flex justify-between'>
        <div className='hero-img content-center'>
          <img src={myImage} alt='profile-img' className='w-48 lg:w-80'/>
        </div>
        <div className='lg:absolute w-8 place-self-center social-links gradient-bg lg:right-5 lg:w-12'>
          <a href='https://github.com/manjotkaur3112'><img src={github} alt='github' className='border-2 border-white'/></a>
          <a href='https://www.linkedin.com/in/manjot-kaur31/'><img src={linkedin} alt='linkedin' className='border-2 border-white'/></a>
          <a href='tel:+919782100977'><img src={whatsapp} alt='whatsapp' className='border-2 border-white'/></a>
          <a href='https://www.instagram.com/jot_grewal30/'><img src={instagram} alt='instagram' className='border-2 border-white'/></a>
        </div>
      </div>
    </div>
  )
}

export default Home
