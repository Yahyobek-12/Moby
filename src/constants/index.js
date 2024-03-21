import React from 'react';

/* HOME CARDS IMPORT */
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaLanguage } from "react-icons/fa6";
import { PiMicrophoneDuotone } from "react-icons/pi";
import { FcStackOfPhotos, FcNews   } from "react-icons/fc";

/* HOME CARDS */
const homeCards = [
  () => (
    <div className="in-home-cards">
      <div className="home-card animate__animated animate__fadeInUp">
        <h3>Generate 3D Images With Moby AI Alse For Free</h3>
        <Link to="/"><Button variant='contained'>Get Started</Button></Link>
        <FcStackOfPhotos className='home-card-icon' />
      </div>  
      <div className="home-card animate__animated animate__fadeInUp">
        <h3>Give Answer Using Mickrophone For Moby AI</h3>
        <Link to="/"><Button variant='contained'>Get Started</Button></Link>
        <PiMicrophoneDuotone className='home-card-icon' />
      </div>
      <div className="home-card animate__animated animate__fadeInUp">
        <h3>Translate World Sentences Using Moby AI</h3>
        <Link to="/"><Button variant='contained'>Get Started</Button></Link>
        <FaLanguage className='home-card-icon' />
      </div>
      <div className="home-card animate__animated animate__fadeInUp">
        <h3>Know The World News In Moby AI</h3>
        <Link to="/"><Button variant='contained'>Get Started</Button></Link>
        <FcNews className='home-card-icon' />
      </div>
    </div>
  )
];

export default homeCards;

/* COMPONENT EXPORTS */
export { default as Home } from '../components/home';
export { default as Navbar } from '../components/navbar';
export { default as Task } from '../components/tasks/task';
