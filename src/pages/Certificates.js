import React, { useState } from 'react'
import App from '../App'
import index from '../index'
import php from '../assets/images/certificates/Php_development.png'
import aiea from '../assets/images/certificates/Azure_ai_engineer_associate.jpg'
import aif from '../assets/images/certificates/Azure_ai_fundamentals.jpg'
import adf from '../assets/images/certificates/Azure_data_fundamentals.jpg'
import af from '../assets/images/certificates/Azure_fundamentals.jpg'
import { href } from 'react-router-dom'


export const certificates = [
        { img: aiea, title: "🏆Azure AI Engineer Associate", name: "Microsoft Certified - 2026", link: aiea },
        // { file: aiea, title: "🏆Responsive Web Design", name: "freeCodeCamp - 2026" },
        { img: adf, title: "🏆Azure Data Fundamentals", name: "Microsoft Certified - 2025", link: adf },
        { img: php, title: "🏆PHP Development", name:  "Dextor Labs - 2025", link: php},
        // { img: , title: "🏆ONE INDIA - ONE WORLD", name: "Lovely Professional University - 2025" },
        { img: aif, title: "🏆Azure AI Fundamentals", name: "Microsoft Certified - 2025", link: aif },
        { img: af, title: "🏆Azure Fundamentals", name: "Microsoft Certified - 2024", link: af },
        // { img: , title: "🏆Git and GitHub", name: "MS Learn Student Ambassadors - 2024" }
    ];

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);
  return (
    <div>
        <div className='bg-gray-700 py-10 min-h-screen justify-items-center' id='certifications'>
            <div className='heading my-8'>
                <h2 className='gradient-text justify-self-center'>Certificates</h2>
            </div>
            <div className='certificates flex flex-wrap place-content-center mx-5 md:mx-40 p-5 gap-10'>
                {certificates.map((certificate, index) => (
                    <div key={index} className={`background ${index>=4 && !showAll ? 'hidden' : ''} justify-self-center overflow-hidden relative h-[225px] sm:w-[250px] md:w-[400px] md:h-[300px] `}>
                        <img src={certificate.img} alt={certificate.name} className='justify-center'/>
                        <div className='overlay'>
                            <h3 className='text-xl font-bold text-white'>{certificate.title}</h3>
                            <p className='text-gray-300 py-4'>{certificate.name}</p>
                            <a href={certificate.link} className='button'>View</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className=' mt-8 '>
                <button onClick={() => setShowAll(!showAll)} className="button">
                    {showAll ? 'Show Less' : 'View All'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Certificates
