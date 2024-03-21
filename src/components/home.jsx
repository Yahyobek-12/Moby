import 'animate.css';
import '../styles/home.css';
import homeCards from '../constants';
import logo from '../Images/Moby.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-top">
        <div className="in-top">
          <img className='animate__animated animate__jackInTheBox' src={logo} alt="" />
          <h1 className='animate__animated animate__fadeInDown'>Hello Yahyobek</h1>
          <h2 className='animate__animated animate__fadeInUp'>How Can I Help You Today ?</h2>
        </div>
      </div>

      <div className="home-cards">
       {homeCards.map((Card, index) => (
        <Card key={index} />
       ))}
      </div> 

      <div className="footer">
          <Link to="https://yahyobek-12.vercel.app/" target="_blank">From Yahyobek-12</Link>
      </div>
    </div>
  )
}

export default Home
