import React from 'react'
import App from '../App'
import index from '../index'

const About = () => {
  return (
    <div>
      <div className='bg-gray-700 py-10' id='home'>
        <hr className='border-1 border-blue-100 mx-20' />
        <div className='gradient-text text-center py-5 mt-12'>
            <h2 className='heading'>About Me</h2>
        </div>
        <div className='about-content my-5 bg-gray-800 m-40'>
            <div className='about-skills flex flex-wrap gap-14 justify-center pt-10'>
                <div className='card'>
                    <span className='text'>5+</span>
                    <p className='text-white text-xm'>Projects</p>
                </div>
                <div className='card'>
                    <span className='text'>12+</span>
                    <p className='text-white text-xm'>Certificates</p>
                </div>
                <div className='card'>
                    <span className='text'>5+</span>
                    <p className='text-white text-xm'>Technologies</p>
                </div>
            </div>
            <div className='about-me'>
                <p className=' text-white p-10 leading-8'>
                    I'm Manjot Kaur, a Computer Science Engineering student specializing in Generative AI. 
                    I am passionate about full-stack development, AI, Machine Learning, and cloud technologies. 
                    With experience in MERN Stack, Python, Azure, and AI-driven applications, 
                    I enjoy building innovative solutions that address real-world challenges while continuously learning 
                    and growing as a developer.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
