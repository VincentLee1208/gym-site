import React from 'react'

import trainer1 from '../assets/trainers/trainer1.jpg'
import '../styles/Trainers.css'

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const Trainers = () => {
    return <div className='trainers_section'>
                <div className='trainers_title'>
                    <h1>MEET THE TRAINERS</h1>
                </div>
                    <div>
                        <div className='trainers_content'>
                            <div className='trainers_image'>
                                <img className='trainer' src={trainer1} alt='trainer1_img'/>
                            </div>

                            <div className='trainers_info'>
                                <div className='trainer_name'>
                                    <h1>
                                        Michael Schlera
                                    </h1>
                                </div>

                                <div className='trainer_qualifications'>
                                    <p>
                                        {text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
}

export default Trainers