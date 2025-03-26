import React, { useState,useEffect } from 'react'
import About from './components/home/About'
import AboutPage from './components/about/About'
import AboutSection from './components/home/AboutSection'
import { Loader } from 'lucide-react';
import CourseCard from './components/home/CourseCard'
import Footer from './components/home/Footer'

import HeroSection from './components/home/HeroSection'
import HomeNavBar from './components/home/HomeNav'
import Instructors from './components/home/Instructors'
import Stats from './components/home/Stats'
import Testimonials from './components/home/Testimonials'
import Contact from './components/about/Contact'
import { Route, Router, Routes } from 'react-router-dom'
import { ReturnTop } from './components/home/ReturnTop'
import HowItWorks from './components/home/HowItWorks'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);  

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
  return (
    <>
    {isOnline?<div className='overflow-hidden'>
        <Routes>
        <Route path="/" element={<>
        <HomeNavBar/>
    <HeroSection/>
    <HowItWorks/>
    <CourseCard/>
    <AboutSection/>
    <Instructors />
    <Testimonials />

    <Stats />
    
    </>} />
        <Route path="/contact" element={ <>       <HomeNavBar/> 
          <Contact/></>} />
        <Route path="/about" element={<>        <HomeNavBar/> <AboutPage/>
          </>} />

        </Routes>
      
        <ReturnTop/>
    <Footer/>
    </div>:<div className="flex justify-center items-center h-screen">
      <Loader
        className="text-blue-500 animate-spin"
        style={{ width: '100px', height: '100px' }} 
      />
    </div>}
    </>
  )
}

export default App
