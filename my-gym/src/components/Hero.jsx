import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Hero.css'


const Hero = () => {
  return (
  <div className='hero_section'>

    {/* Mobile */}
    <div className='mobile_hero_container'>
        <center className ='mobile_title'>
            APEX
        </center>
        <center className='mobile_subtitle'>
            PERFORMANCE
        </center>

        <p>
            YOUR ONLY LIMIT IS THE ONE YOU SET FOR YOURSELF - PUSH BEYOND IT AND UNLOCK YOUR TRUE POTENTIAL
        </p>

        <div className='mobile_btns'>
            <Link to='/' className='mobile_sign-in'>
                <div className='btn_text'>
                    Sign In
                </div>
            </Link>

            <Link to='/' className='mobile_register'>
                <div className='btn_text'>
                    Register
                </div>
            </Link>
        </div>
    </div>

    {/* Desktop */}
    <div className='hero_container'>
        <div className='hero_content_left'>
            <center className='title'>
                APEX
            </center>
            <center className='subtitle'>
                PERFORMANCE
            </center>
        </div>

        <div className='hero_content_right'>
            <p className='quote'>
                YOUR ONLY LIMIT IS THE ONE YOU SET FOR YOURSELF - PUSH BEYOND IT AND UNLOCK YOUR TRUE POTENTIAL
            </p>

            <ul className='hero_list'>
                <li>
                NUTRITION
                </li>

                <li>
                FITNESS
                </li>

                <li>
                RECOVERY
                </li>
            </ul>
        </div>
    </div>
  </div>

  )
}

export default Hero