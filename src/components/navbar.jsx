import '../styles/navbar.css'
import logo5 from '../Images/Moby.png'
import { RiTodoFill } from "react-icons/ri"
import { Link, NavLink } from 'react-router-dom'
import { IoPersonCircle } from "react-icons/io5"
import { BiSolidDashboard } from "react-icons/bi";


const navbar = () => {
  return (
    <div className='navbar'>
      <div className="top-bar">
        <NavLink to='/' className='logo'><img src={logo5} alt="logo-5" /> <span>AI</span></NavLink>
        <ul className="nav">
            <NavLink className='nav-link' to='/tasks'><RiTodoFill /></NavLink>
            <NavLink className='nav-link' to='/dashboard'><BiSolidDashboard /></NavLink>
            <NavLink className='nav-link' to='/profile'><IoPersonCircle /></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default navbar
