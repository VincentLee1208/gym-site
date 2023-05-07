import React from 'react'

import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import Logo from '../assets/logo/logo.png'


const NavBar = () => {
  return <div className='navbar_section'>
    <div className='navbar_logo'>
        <Link to='/'>
            <img className='logo' src={Logo} alt='logo_img'/> 
        </Link>
    </div>
    <ul className='navbar_links'>
        <li>
            <Link className='home-link' to='/'>
                Home
            </Link>
        </li>

        <li>
            <Link className='about-link' to='/about'>
                About
            </Link>
        </li>

        <li>
            <Link className='services-link' to='/services'>
                Services
            </Link>
        </li>

        <li>
            <Link className='pricing-link' to='/pricing'>
                Pricing
            </Link>
        </li>

        <li>
            <Link className='contact-link' to='/contact'>
                Contact
            </Link>
        </li>
    </ul>
    <div className='navbar_btns'>
        <Link className='sign-in' to='/'>
            Sign In
        </Link>

        <Link className='register' to='/'>
            Register
        </Link>
    </div>
  </div>
}

export default NavBar