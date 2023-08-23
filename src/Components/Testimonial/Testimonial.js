import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import AllItem from "./AllItem"

const Testimonial = () => {
  return (
    <>
      <HeadTitle />

      <div className="  p-5 ">
        <div className='heading'>
          <h1>Why Choose a Career at Sitco</h1>
          <div className='line'></div>
        </div>

        <div className="container  ">
          <p className="mb-5">At Sitco, we believe that our success is a direct result of our talented and dedicated team. Joining Sitco means becoming a part of a dynamic construction company that values innovation, collaboration, and personal growth. As we continue to shape Kerala's infrastructure, we're always looking for individuals who share our passion for excellence and are eager to make a difference.</p>
        </div>
      </div>

      <div className='heading'>
        <h1><strong>Join Our Team - Explore Career Opportunities at Sitco:</strong></h1>
      </div>
      <AllItem />

        <div className='heading'>
          <h1>Why Work With Us</h1>
          <div className='line'></div>
        </div>


        <div className="">
          <div class="row w-100 container">
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 c mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="text-center">Professional Growth</h3>
                  <hr class="mx-auto w-75" />
                  <p>
                  At Sitco, we invest in our employees' growth and development. You'll have the chance to enhance your skills and knowledge in a supportive environment.
                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 c mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="text-center">Innovative Projects</h3>
                  <hr class="mx-auto w-75" />
                  <p>
                  Join a team that's involved in creating groundbreaking government projects, contributing to the advancement of Kerala's infrastructure.
                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 c mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="text-center">Collaborative Culture</h3>
                  <hr class="mx-auto w-75" />
                  <p>
                  We foster a collaborative and inclusive work culture, where ideas are welcomed, and teamwork is valued
                  </p>
                </div>
              </div>
            </div>
  
          </div>
          <div class="row w-100 mt-5 container">
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 c mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="text-center">Competitive Compensation</h3>
                  <hr class="mx-auto w-75" />
                  <p>
                  We offer competitive salaries and benefits packages to attract and retain top talent.
                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 c mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="text-center">Commitment to Quality</h3>
                  <hr class="mx-auto w-75" />
                  <p>
                  Be a part of a company that's renowned for its commitment to delivering projects of the highest quality and standards.
                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 c mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="text-center">Work-Life Balance</h3>
                  <hr class="mx-auto w-75" />
                  <p>
                  We provide flexible work arrangements and prioritize employee well-being to ensure you can excel both at work and in your personal life.
                  </p>
                </div>
              </div>
            </div>
  
          </div>
        </div>




    </>
  )
}

export default Testimonial
