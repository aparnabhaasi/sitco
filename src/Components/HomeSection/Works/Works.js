import React from "react"
import "../popular/MostPopular.css"
import "./Works.css"

const Works = () => {
  return (
    <>
      <div>
        <div className='heading'>
          <h1>Why Choose Sitco</h1>
          <div className='line'></div>
        </div>

        <div class="container">

          <div class="gradient-cards">
            <div class="card">
              <div class="container-card bg-green-box">
                
                <p class="card-title">Government Focus: </p>
                <p class="card-description">We specialize in government projects, understanding the regulatory framework, intricacies, and importance of timely and accurate execution.</p>
              </div>
            </div>

            <div class="card">
              <div class="container-card bg-white-box">
                
                <p class="card-title">Quality Assurance: </p>
                <p class="card-description">Our commitment to quality is unwavering. We adhere to the highest industry standards and best practices, ensuring that each project stands the test of time.</p>
              </div>
            </div>

            <div class="card">
              <div class="container-card bg-yellow-box">
                
                <p class="card-title">Skilled Team: </p>
                <p class="card-description">Our team comprises experienced professionals who are passionate about their craft. From skilled laborers to visionary architects, we have the expertise to bring any project to life.</p>
              </div>
            </div>

            <div class="card">
              <div class="container-card bg-blue-box">
                
                <p class="card-title">Innovation: </p>
                <p class="card-description">We actively welcome innovation and harness technology to supercharge efficiency, consistently going above and beyond expectations in our deliverables.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
