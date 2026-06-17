// import React from 'react'
import React, { useState } from 'react';
import App from '../App'
import index from '../index'
import html from '../assets/images/skills/html.svg'
import css from '../assets/images/skills/css.svg'
import js from '../assets/images/skills/js.svg'
import php from '../assets/images/skills/php.svg'
import mysql from '../assets/images/skills/mysql.svg'
import mongo from '../assets/images/skills/mongodb.svg'
import express from '../assets/images/skills/express.svg'
import react from '../assets/images/skills/react.svg'
import node from '../assets/images/skills/node.svg'
import talwind from '../assets/images/skills/tailwind.svg'
import c from '../assets/images/skills/c.svg'
import cpp from '../assets/images/skills/cpp.svg'
import python from '../assets/images/skills/python.svg'
import java from '../assets/images/skills/java.svg'
import dsa from '../assets/images/skills/dsa.svg'
import aws from '../assets/images/skills/aws.svg'
import ml from '../assets/images/skills/ml.png'
import nlp from '../assets/images/skills/nlp.png'
import dl from '../assets/images/skills/dl.png'
import vision from '../assets/images/skills/vision.png'
import services from '../assets/images/skills/services.png'
import rag from '../assets/images/skills/rag.png'
import github from '../assets/images/skills/github.png'
import docker from '../assets/images/skills/docker.png'


 export const skills = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: js, name: "JavaScript" },
        { img: php, name: "PHP" },
        { img: mysql, name: "MySQL" },
        { img: talwind, name: "Talwind CSS" },
        { img: mongo, name: "MongoDB" },
        { img: express, name: "ExpressJs" },
        { img: react, name: "ReactJs" },
        { img: node, name: "NodeJs" },
        { img: cpp, name: "C++" },
        { img: python, name: "Python" },
        { img: java, name: "Java" },
        { img: dsa, name: "DSA" },
        { img: aws, name: "AWS" },
        { img: ml, name: "Machine Learning" },
        { img: nlp, name: "NLP" },
        { img: dl, name: "Deep Learning" },
        { img: services, name: "Cognitive Services" },
        { img: github, name: "Git & GitHub" },
        { img: docker, name: "Docker" },
    ];

const Skills = () => {
    // const skillsCount = document.querySelectorAll('.card').length;
    const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <div className='bg-gray-700 py-10 min-h-screen' id='skills'>
            <div className='heading mb-4'>
                <h2 className='gradient-text justify-self-center'>Skills</h2>
            </div>
            <div className='skills bg-gray-800 m-8 justify-items-center lg:mx-40 p-10 md:mx-20 sm:mx-10'>
                <div className=' flex flex-wrap gap-3 place-content-center justify-self-center'>
                    {skills.map((skill, index) => (
                        <div key={index} className={`card ${index>=8 && !showAll ? 'hidden lg:block' : ''} w-[100px] md:w-[170px] p-4`}>
                            <img src={skill.img} alt={skill.name} className='pb-2 h-14' />
                            <span className='text-white text-xs'>{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className=' mt-8 lg:hidden'>
                    <button onClick={() => setShowAll(!showAll)} className="button">
                        {showAll ? 'Show Less' : 'View All'}
                    </button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Skills
