import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (

    <div className='hero d-flex justify-content-center flex-column align-items-center pt-5'>
        <div className="hero-text container text-center">
            <h1>We Ensure better education<br/> for a better world</h1>
            <p>Our Cutting-edge curriculum is designed to empower students with the Knowledge, skills, and experiences needed <br/> to excel in the dynamic field of education</p>
            <button className='btn-con'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>

  )
}
