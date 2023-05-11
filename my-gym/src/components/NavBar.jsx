import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import Logo from '../assets/logo/logo.png'
import Hamburger from '../assets/menu-line.png'
import HamburgerClose from '../assets/menu-line-close.png'

const NavBar = () => {

    const[state, setState] = useState(false);

  return <div className='navbar_section'>
    <div className='navbar_logo'>
        <Link to='/'>
            <img className='logo' src={Logo} alt='logo_img'/> 
        </Link>
    </div>

    {/* Mobile */}

    <div className='mobile_navbar'>
        <div className='mobile_hamb'>
            <img src={Hamburger} className='hamburger' alt='mob_hamb' onClick={e => setState(!state)}/>
        </div>

    </div>

    
    {state ? (
        <div className='menu_panel'>
            <img src={HamburgerClose} className='hamburger_close' alt='mob_hamb' onClick={e => setState(!state)}/>
        
            <div className='hamburger_links'>
                <Link to='/' className='hamb_link' onClick={e => setState(false)}>
                    Home
                </Link>
                <Link to='/' className='hamb_link' onClick={e => setState(false)}>
                    About
                </Link>
                <Link to='/' className='hamb_link' onClick={e => setState(false)}>
                    Services
                </Link>
                <Link to='/' className='hamb_link' onClick={e => setState(false)}>
                    Pricing
                </Link>
                <Link to='/' className='hamb_link' onClick={e => setState(false)}>
                    Contact
                </Link>
            </div>
        </div>
    ) : (
        <></>
    )}
    





    {/* Desktop */}

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