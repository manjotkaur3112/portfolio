import React from 'react'
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

const Skills = () => {
  return (
    <div>
      <div className='bg-gray-700 py-10' id='skills'>
            <div className='heading'>
                <h2 className='gradient-text justify-self-center'>Skills</h2>
            </div>
            <div className='skills bg-gray-800 mx-40 p-10 leading-8 flex flex-wrap gap-5 place-content-center'>
                <div className="card">
                    <img src={html} alt="HTML" className='w-16 h-16' />
                    <span className='text-white'>HTML</span>
                </div>
                <div className="card">
                    <img src={css} alt="CSS" className='w-16 h-16' />
                    <span className='text-white'>CSS</span>
                </div>
                <div className="card" >
                    <img src={js} alt="JavaScript" className='w-16 h-16' />
                    <span className='text-white'>JavaScript</span>
                </div>
                <div className="card">
                    <img src={php} alt="PHP" className='w-16 h-16' />
                    <span className='text-white'>PHP</span>
                </div>
                <div className="card">
                    <img src={mysql} alt="MySQL" className='w-16 h-16' />
                    <span className='text-white'>MySQL</span>
                </div>
                <div className="card">
                    <img src={talwind} alt="Tailwind CSS" className='w-16 h-16' />
                    <span className='text-white'>Tailwind CSS</span>
                </div>
                <div className="card">
                    <img src={mongo} alt="MongoDB" className='w-16 h-16' />
                    <span className='text-white'>MongoDB</span>
                </div>
                <div className="card">
                    <img src={express} alt="ExpressJs" className='w-16 h-16' />
                    <span className='text-white'>ExpressJs</span>
                </div>
                <div className="card">
                    <img src={react} alt="ReactJs" className='w-16 h-16' />
                    <span className='text-white'>ReactJs</span>
                </div>
                <div className="card">
                    <img src={node} alt="NodeJs" className='w-16 h-16' />
                    <span className='text-white'>NodeJs</span>
                </div>
                <div className="card">
                    <img src={cpp} alt="C++" className='w-16 h-16' />
                    <span className='text-white'>C++</span>
                </div>
                <div className="card">
                    <img src={python} alt="Python" className='w-16 h-16' />
                    <span className='text-white'>Python</span>
                </div>
                <div className="card">
                    <img src={java} alt="Java" className='w-16 h-16' />
                    <span className='text-white'>Java</span>
                </div>
                <div className="card">
                    <img src={dsa} alt="Data Structures and Algorithms" className='w-16 h-16' />
                    <span className='text-white'>DSA</span>
                </div>
                <div className="card">
                    <img src={aws} alt="AWS" className='w-16 h-16' />
                    <span className='text-white'>AWS</span>
                </div>
                <div className="card">
                    <img src={ml} alt="Machine Learning" className='w-16 h-16' />
                    <span className='text-white'>Machine Learning</span>
                </div>
                <div className="card">
                    <img src={nlp} alt="NLP" className='w-16 h-16' />
                    <span className='text-white'>NLP</span>
                </div>
                <div className="card">
                    <img src={dl} alt="Deep Learning" className='w-16 h-16' />
                    <span className='text-white'>Deep Learning</span>
                </div>
                <div className="card">
                    <img src={services} alt="Cognitive Service" className='w-16 h-16' />
                    <span className='text-white'>Cognitive Service</span>
                </div>
                <div className="card">
                    <img src={github} alt="Git and GitHub" className='w-16 h-16' />
                    <span className='text-white'>Git and GitHub</span>
                </div>
                <div className="card">
                    <img src={docker} alt="Docker" className='w-16 h-16' />
                    <span className='text-white'>Docker</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Skills
