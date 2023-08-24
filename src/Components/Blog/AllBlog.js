import React, { useState } from "react";
import "./BlogHome.css";

const AllBlog = () => {

  return (
    <>
      <section className="blog mt-3">
        <div className="container ">
          <div className="row w-100">

            <div className="col-md-4 col-lg-4 col-sm-12 mt-4">
              <div className='items '>
                <div className='img'>
                  <img src="https://i.postimg.cc/yxfRVW4B/construction.jpg" alt='Gallery Image' />
                </div>
                <div className='details'>
                  <h3>Construction</h3>
                  <p>From Blueprint to Reality
                    Our construction services encompass every stage of the building process, ensuring a seamless and efficient journey from project inception to the final walk-through. Whether it's a residential, commercial, or industrial project, we have the expertise and experience to turn your vision into reality. Our skilled craftsmen and project managers collaborate closely with clients to ensure that every detail is executed flawlessly, resulting in exceptional construction that stands the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 mt-4">
              <div className='items '>
                <div className='img'>
                  <img src="https://i.postimg.cc/ncz73KBL/estimation.jpg " alt='Gallery Image' />
                </div>
                <div className='details'>
                  <h3>Estimation</h3>
                  <p>Transparency in Project Costs
                    Accurate cost estimation is crucial for a successful construction project. Our team of seasoned estimators utilizes industry-leading techniques to provide you with comprehensive, detailed, and reliable cost estimates. We understand that transparency in project costs is vital for effective decision-making, which is why we focus on delivering estimates that align with your budget and goals. Whether you're in the planning stages or seeking to refine your budget, our estimation services give you the insight you need to make informed choices.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4 col-lg-4 col-sm-12 mt-4">
              <div className='items '>
                <div className='img'>
                  <img src="https://i.postimg.cc/28KWMq77/sceduling.jpg" alt='Gallery Image' />
                </div>
              <div className='details'>
                  <h3>Scheduling</h3>
                  <p>Efficiency Through Effective Planning
                    In the fast-paced world of construction, time is of the essence. Our scheduling services are designed to optimize project timelines, streamline workflows, and ensure that milestones are met on schedule. We understand the importance of minimizing disruptions and delays, which is why we employ advanced scheduling techniques and tools to keep your project on track. From the initial project timeline to adjustments as the project progresses, we prioritize effective planning to deliver projects that are completed on time.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlog;
