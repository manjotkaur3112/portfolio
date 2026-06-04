import React from 'react'
import App from '../App'
import index from '../index'
import myImage from '../assets/images/myImage.jpeg'
import github from '../assets/images/social/github.svg'
import linkedin from '../assets/images/social/linkedin.svg'
import whatsapp from '../assets/images/social/whatsapp.svg'
import instagram from '../assets/images/social/instagram.svg'
import Resume from '../assets/files/Resume.pdf'

const Home = () => {
  return (
    <div className='hero bg-gray-700 pt-10 flex justify-evenly'>
      <div className='hero-content  py-10 w-96'>
        <div className='hero-title'>
          <h3 className='text-2xl text-white'>Hi, Myself</h3>
          <h2 className='text-3xl gradient-text font-bold leading-[50px] inline'>Manjot Kaur</h2>
          <span className='text-3xl'> 👋</span>
          <h3 className='text-2xl text-white typing'>I'm MERN Stack Developer</h3>
        </div>
        <div className='hero-description my-5 text-white'>
          Computer Science Engineering student specializing in Generative AI with a passion for MERN Stack development, 
          Machine Learning, and Cloud Technologies.
          </div>
        <div className='hero-buttons flex justify-evenly my-5 float-left gap-14'>
          <a href="" className='button'>Contact Me</a>
          <a href={Resume} className='button'>Resume</a>
        </div>
      </div>
      <div className='hero-profile flex justify-between'>
        <div className='hero-img content-center py-3 '>
          <img src={myImage} alt='profile-img' className='w-80'/>
        </div>
        <div className='social-links gradient-bg'>
          <a href='https://github.com/manjotkaur3112'><img src={github} alt='github' /></a>
          <a href='https://www.linkedin.com/in/manjot-kaur31/'><img src={linkedin} alt='linkedin' /></a>
          <a href='tel:+919782100977'><img src={whatsapp} alt='whatsapp' /></a>
          <a href='https://www.instagram.com/jot_grewal30/'><img src={instagram} alt='instagram' /></a>
        </div>
      </div>
    </div>
  )
}

export default Home
