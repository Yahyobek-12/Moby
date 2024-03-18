import '../styles/home.css'
import logo from '../Images/Moby.png'
import { Link } from 'react-router-dom'
import { FaLanguage } from "react-icons/fa6";
import { PiMicrophoneDuotone } from "react-icons/pi";
import { FcStackOfPhotos, FcNews   } from "react-icons/fc";




const Home = () => {
  return (
    <div className='home'>
      <div className="home-top">
        <div className="in-top">
          <img src={logo} alt="" />
          <h1>Hello Yahyobek</h1>
          <h2>How Can I Help You Today ?</h2>
        </div>
      </div>

      <div className="home-cards">
        <div className="in-home-cards">
          <div className="home-card">
            <h3>Generate 3D Images With Moby AI Alse For Free</h3>
            <FcStackOfPhotos className='home-card-icon' />
          </div>
          <div className="home-card">
            <h3>Give Answer Using Mickrophone For Moby AI</h3>
            <PiMicrophoneDuotone className='home-card-icon' />
          </div>
          <div className="home-card">
            <h3>Translate World Sentences Using Moby AI</h3>
            <FaLanguage className='home-card-icon' />
          </div>
          <div className="home-card">
            <h3>Know The Wolrd News In Moby AI</h3>
            <FcNews className='home-card-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
