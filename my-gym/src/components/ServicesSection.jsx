import React, {useState } from 'react'

import '../styles/Services.css'
import defaultImg from '../assets/services/default.jpg'
import trainingImg from '../assets/services/training.jpg'
import groupImg from '../assets/services/group.jpg'
import saunaImg from '../assets/services/sauna2.jpg'
import massageImg from '../assets/services/massage.jpg'
import nutritionImg from '../assets/services/dietitian.png'
import cafeImg from '../assets/services/cafe.jpg'

const ServicesSection = () => {
  var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const[state, setState] = useState({ 
    title:"SERVICES", 
    subtitle:"PROVIDED BY APEX",
    text: text,
    url: defaultImg
  });

  const backgroundStyle = {
    background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${state.url}), no-repeat`,
    backgroundSize: 'cover',
  }
 

  return (
    <div className='services_section'>
        <div className='services_container'>
            <div className='services_text' style={backgroundStyle}>
              <h1>
              {state.title}
              </h1>

              <h2>
                {state.subtitle}
              </h2>

              <p>
                {state.text}
              </p>
            </div>

            <div className='services_plans'> 
              
              <table className='services'>
                <tbody>
                  <tr>
                    <td onClick={e => setState({
                      title:'PERSONAL TRAINING',
                      subtitle: 'YOUR PERSONAL MENTOR',
                      text: text,
                      url: trainingImg
                    })}>
                      Personal Training
                    </td>
                    <td onClick={e => setState({
                      title:'GROUP CLASSES',
                      subtitle: 'FIND YOUR COMMUNITY',
                      text: text,
                      url: groupImg
                    })}>
                      Group Lessons
                    </td>
                  </tr>

                  <tr>
                    <td onClick={e => setState({
                      title:'IR SAUNA',
                      subtitle: 'SWEAT TO YOUR GOALS',
                      text: text,
                      url: saunaImg
                    })}>
                      IR Sauna
                    </td>

                    <td onClick={e => setState({
                      title:'MASSAGE THERAPY',
                      subtitle: 'RELAX YOUR BODY',
                      text: text,
                      url: massageImg
                    })}>
                      Massage Therapy
                    </td>
                  </tr>

                  <tr>
                    <td onClick={e => setState({
                      title:'NUTRITONAL GUIDANCE',
                      subtitle: 'TREAT YOUR BODY RIGHT',
                      text: text,
                      url: nutritionImg
                    })}>
                      Nutritional Guidance
                    </td>
                    <td onClick={e => setState({
                      title:'GYM CAFE',
                      subtitle: 'FUEL YOUR BODY',
                      text: text,
                      url: cafeImg
                    })}>
                      Gym Cafe
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection