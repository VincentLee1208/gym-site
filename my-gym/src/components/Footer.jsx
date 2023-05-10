import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo/logo.png'
import InstaLogo from '../assets/socialmedia/instagram-line.png'
import FacebookLogo from '../assets/socialmedia/facebook-box-fill.png'
import TwitterLogo from '../assets/socialmedia/twitter-line.png'
import YoutubeLogo from '../assets/socialmedia/youtube-fill.png'

import '../styles/Footer.css'

const Footer = () => {
  return <div className='footer_section'>
    <div className='footer_logo'>
      <img className='logo' src={Logo} alt='logo_img'/>
    </div>

    <div className='footer_socialmedia'>
      <img className='facelogo' src={FacebookLogo} alt='facelogo_img'/>
      <img className='instalogo' src={InstaLogo} alt='instalogo_img'/>
      <img className='twitterlogo' src={TwitterLogo} alt='twitterlogo_img'/>
      <img className='youtubelogo' src={YoutubeLogo} alt='youtubelogo_img'/>
    </div>

    <div className='footer_information'>
      <p>
        111-123-1234 | 32 Lorem, Imsum Delor | info@domain.ca
      </p>
    </div>

    <div className='footer_links'>
      <Link className='link' to='/'>
        Home
      </Link>
      |
      <Link className='link' to='/about'>
        About
      </Link>
      |
      <Link className='link' to='/services'>
        Services
      </Link>
      |
      <Link className='link' to='/pricing'>
        Pricing
      </Link>
      |
      <Link className='link' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
}

export default Footer