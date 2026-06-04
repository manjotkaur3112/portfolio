import React from 'react'
import App from '../App'
import index from '../index'
import complaint from '../assets/images/projects/complaint.png'
import mfa from '../assets/images/projects/mfa.png'

const Projects = () => {
  return (
    <div>
      <div className='bg-gray-700' id="projects">
        <div className='heading'>
            <h3 className='gradient-text justify-self-center'>Projects</h3>
        </div>
        <div className='projects'>
            <div className='project bg-gray-800 background'>
              <img src={complaint} alt="Complaint System"/>
              <div className='overlay'>
                <h3 className='text-2xl font-bold text-white'>Smart City Complaint System</h3>
                <p className='p-5'>
                  Developed a smart complaint management platform that enables citizens to report civic issues 
                  with image uploads and OCR-based text extraction. Integrated an 
                  AI-powered chatbot for instant assistance and guidance, while providing real-time complaint tracking, 
                  status updates, and an intuitive user experience for efficient issue resolution.
                </p>
                <div className='buttons flex justify-evenly my-5 float-left gap-14'>
                    <a href="https://civicpulse-complaint.netlify.app/" className='button'>Live Demo</a>
                    <a href="https://github.com/manjotkaur3112/Smart-City-Complaint-System" className='button'>GitHub</a>
                </div>
              </div>
            </div>
            <div className='project bg-gray-800 background'>
              <img src={mfa} alt="Multi-Factor-Authentication System"/>
              <div className='overlay'>
                <h3 className='text-2xl font-bold text-white'>MFA-based Learning Platform</h3>
                <p className='p-5'>
                  Developed a secure MFA system with OTP verification, 
                  session management, and compromised account reporting features. 
                  The platform provides Computer Networks study materials along with 
                  interactive quizzes. 
                  An admin dashboard was implemented to manage users, monitor audit logs, 
                  and update educational content efficiently.
                </p>
                <div className='buttons flex justify-evenly my-5 float-left gap-14'>
                    <a href="http://securestudyhub.great-site.net/public/register.php" className='button'>Live Demo</a>
                    <a href="https://github.com/manjotkaur3112/Multi-Factor_Authentication_System" className='button'>GitHub</a>
                </div>
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Projects
