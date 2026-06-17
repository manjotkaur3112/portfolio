import React from 'react'
import App from '../App'
import index from '../index'
import complaint from '../assets/images/projects/complaint.png'
import mfa from '../assets/images/projects/mfa.png'
import portfolio from '../assets/images/projects/portfolio.png'


export const projects = [
  {img: complaint},
  {img: mfa},
  {img: portfolio}
]

const Projects = () => {
  return (
    <div>
      <div className='bg-gray-700 min-h-screen' id="projects">
        <div className='heading'>
            <h3 className='gradient-text justify-self-center'>Projects</h3>
        </div>
        <div className='projects py-10 lg:grid grid-cols-3 justify-self-center gap-8'>
            <div className='project bg-gray-800 my-8 w-72 p-8 lg:w-96'>
              <h3 className='text-center text-xl font-bold text-white'>Smart City Complaint System</h3>
              <div className='project-img py-4'>
                  <img src={complaint} alt="Complaint System"/>
              </div>
              <div className='content'>
                <p className='py-4 text-gray-300'>
                  Developed a smart complaint management platform that enables citizens to report civic issues 
                  with image uploads and OCR-based text extraction. Integrated an 
                  AI-powered chatbot for instant assistance and guidance, while providing real-time complaint tracking, 
                  status updates, and an intuitive user experience for efficient issue resolution.
                </p>
                <div className='buttons flex justify-center mt-4 gap-8'>
                    <a href="https://civicpulse-complaint.netlify.app/" className='button'>Live Demo</a>
                    <a href="https://github.com/manjotkaur3112/Smart-City-Complaint-System" className='button'>GitHub</a>
                </div>
              </div>
            </div>
            <div className='project bg-gray-800 my-8 w-72 p-8 lg:w-96'>
              <h3 className='text-center text-xl font-bold text-white'>MFA-based Learning Platform</h3>
              <div className='project-img py-4'>
                <img src={mfa} alt="Multi-Factor-Authentication System"/>
              </div>
              <div className='content'>
                <p className='py-4 text-gray-300'>
                  Developed a secure MFA system with OTP verification, 
                  session management, and account reporting features. 
                  The platform provides Computer Networks study materials along with 
                  interactive quizzes. 
                  An admin dashboard was implemented to manage users, monitor audit logs, 
                  and update educational content efficiently.
                </p>
                <div className='buttons flex justify-center mt-4 gap-8'>
                    <a href="http://securestudyhub.great-site.net/public/register.php" className='button'>Live Demo</a>
                    <a href="https://github.com/manjotkaur3112/Multi-Factor_Authentication_System" className='button'>GitHub</a>
                </div>
              </div>
            </div>
            <div className='project bg-gray-800 my-8 w-72 p-8 lg:w-96'>
              <h3 className='text-center text-xl font-bold text-white'>Portfolio</h3>
              <div className='project-img py-4'>
                  <img src={portfolio} alt="Portfolio"/>
              </div>
              <div className='content'>
                <p className='py-4 text-gray-300'>
                  Developed a smart complaint management platform that enables citizens to report civic issues 
                  with image uploads and OCR-based text extraction. Integrated an 
                  AI-powered chatbot for instant assistance and guidance, while providing real-time complaint tracking, 
                  status updates, and an intuitive user experience for efficient issue resolution.
                </p>
                <div className='buttons flex justify-center mt-4 gap-8'>
                    <a href="https://manjotkaur3112.github.io/portfolio-website/" className='button'>Live Demo</a>
                    <a href="https://github.com/manjotkaur3112/portfolio-website" className='button'>GitHub</a>
                </div>
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Projects
