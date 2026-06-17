import React from 'react'
import App from '../App'
import index from '../index'

const Education = () => {
  return (
    <div>
      <div className='bg-gray-700 py-10 min-h-screen' id='education'>
        <div className=''>
            <h2 className='gradient-text text-2xl font-bold justify-self-center'>Education</h2>
        </div>
        <div className='educations'>
            <div className='education m-10 bg-gray-800 p-8 leading-8 md:mx-40'>
                <h4 className='text-white font-bold text-xl'>🎓 B.Tech CSE (Generative AI)</h4>
                <p className='text-gray-300'>Lovely Professional University, Jalandhar, Punjab</p>
                <span className='navbar-link'>7.77 CGPA - 2028</span>
            </div>
            <div className='education m-10 bg-gray-800 p-8 leading-8 md:mx-40 '>
                <h4 className='text-white font-bold text-xl'>🎓 Senior Secondary (Class XII)</h4>
                <p className='text-gray-300'>Swami Keshavnanda Children Public Sr. Sec. School, Hanumangarh, Rajasthan</p>
                <span className='navbar-link'>80.40 % - 2024</span>
            </div>
            <div className='education m-10 bg-gray-800 p-8 leading-8 md:mx-40'>
                <h4 className='text-white font-bold text-xl'>🎓 ITI (Computer Hardware And Network Maintenance)</h4>
                <p className='text-gray-300'>Industrial Training Institute, Hanumangarh, Rajasthan</p>
                <span className='navbar-link'>89.00 % - 2022</span>
            </div>
            <div className='education m-10 bg-gray-800 p-8 leading-8 md:mx-40'>
                <h4 className='text-white font-bold text-xl'>🎓 Secondary (Class X)</h4>
                <p className='text-gray-300'>Saraswati Model Sr. Sec. School, Goluwala, Hanumangarh, Rajasthan</p>
                <span className='navbar-link'>92.00 % - 2021</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education
