import React from 'react'
import App from '../App'
import index from '../index'
import { skills } from './Skills';
import { projects } from './Projects';
import { certificates } from './Certificates';


const About = () => {
    const skillsCount = skills.length;
    const projectsCount = projects.length;
    const certificatesCount = certificates.length;
  return (
    <div>
      <div className='bg-gray-700 py-10' id='about'>
        <hr className='border-1 border-blue-100 mx-20' />
        <div className='gradient-text text-center mt-12'>
            <h2 className='heading'>About Me</h2>
        </div>
        <div className='about-content bg-gray-800 m-8 md:mx-40 '>
            <div className='about-skills flex flex-wrap gap-4 justify-center text-center pt-10'>
                <div className='count bg-gray-700 p-4 w-32 rounded-lg'>
                    <span className='text'>{projectsCount}+</span>
                    <p className='text-white text-xm'>Projects</p>
                </div>
                <div className='count bg-gray-700 p-4 w-32 rounded-lg'>
                    <span className='text'>{certificatesCount}+</span>
                    <p className='text-white text-xm'>Certificates</p>
                </div>
                <div className='count bg-gray-700 p-4 w-32 rounded-lg'>
                    <span className='text'>{skillsCount}+</span>
                    <p className='text-white text-xm'>Technologies</p>
                </div>
            </div>
            <div className='about-me'>
                <p className=' text-gray-300 p-10 leading-8 text-center'>
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
