import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education  from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className='pt-20'>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
