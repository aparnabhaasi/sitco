import React from "react"
import "./About.css"
import { Link } from "react-router-dom"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard  flex_space p-5'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            Building <span>the Future of Kerala</span>'s Infrastructure
          </h1>
          <p>At Sitco, we take immense pride in being a premier construction company in Kerala, focusing exclusively on government projects. Established with a vision to contribute to the state's growth and development, we bring a wealth of expertise and experience to every project we embark upon.</p>
          <p></p>
          <Link to="about">
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </Link>
        </div>
        <div className='row image'>
          <img src='/Images/about.jpg' alt='' />
          <div className='control-btn'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
