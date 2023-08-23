import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Team from "../HomeSection/Team/Team"
// import Gallery from "../HomeSection/gallery/Gallery"
import Gallery from "../gallery/Gallery"

const Home = () => {
  return (
    <>




      <Hero />

      <div className=" p-1 " style={{background:""}}>
        <div className='heading'>
          <h1 >Company Profile</h1>
          <div className='line'></div>
        </div>

        <div className="container text-white ">
          <p className="hstry">Sitco is a leading construction company in Kerala, specializing in government projects. With a focus on quality, innovation, and sustainable development, we have a proven track record of successfully delivering projects that contribute to the state's progress.</p>

        </div>

      </div>
      <HomeAbout />
      <MostPopular />
      {/* <Gallery /> */}
      <DestinationHome />
      <Works />
      <Download />
      <Team />
      {/* <Gallery /> */}

    </>
  )
}

export default Home



