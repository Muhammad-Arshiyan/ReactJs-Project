import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


export const About = () => {
  return (
      <div className="container">
        <div className="row about">
          <div className="col-md-4">
              <div className="about-left">
                <img src={about_img} alt=""
                className="about-img" />
                <img src={play_icon} alt="" className="play" />
              </div>
          </div>
          <div className="col-md-8">
            <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>

            <p>Embark on a transformative education journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the Knowledge,skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, Schools, and communities</p>
            <p>Wheter you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
          </div>
          </div>

        </div>
      </div>
  )
}
