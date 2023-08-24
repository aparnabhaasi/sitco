import React from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import Card from "./Card"; // Import the Career component

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

      {/* Use the Career component here */}
      <Card />

      <div className='heading'>
        <h1>Why Work With Us</h1>
        <div className='line'></div>
      </div>

      <div className="">
        {/* Rest of your component */}
      </div>
    </>
  );
}

export default Testimonial;
