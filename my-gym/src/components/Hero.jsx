import React from 'react'

import '../styles/Hero.css'


const Hero = () => {
  return <div className='hero_section'>
    <div className='hero_container'>
        <div className='hero_content_left'>
            <center className='title'>
                APEX
            </center>
            <center className='subtitle'>
                SPORTS SYSTEMS
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
}

export default Hero