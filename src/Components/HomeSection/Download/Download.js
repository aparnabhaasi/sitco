import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <div className="bdy" >
      <div className='heading'>
            <h1 style={{color:"black"}}>Quality Policy:</h1>
            <div className='line'></div>
          </div>
        <div className="p-3 mb-">
          <div className="container ">
            <div><p className="p-text">Sitco is committed to delivering construction projects that meet or <br/> exceed the highest industry standards. Our quality policy encompasses:</p></div>
          </div>
          <div className="container mt-4 mb-4">
          
            <ul>
              <li>&#10003;Ensuring adherence to regulatory requirements and safety measures.</li><br/>
              <li>&#10003; Incorporating best practices and continuous improvement in our processes.</li><br/>
              <li>&#10003; Employing skilled professionals and utilizing cutting-edge technology.</li><br/>
              <li>&#10003; Delivering projects on time and within budget without compromising quality.</li>
              
            </ul>
          </div>
        </div>
      </div><hr/>

      <div className="">
        <div className=" p-3 ">
        <div className='heading'>
            <h1 >History of Sitco</h1>
            <div className='line'></div>
          </div>
  
         <div className="container text-white mt-3">
            <p className="hstry">The jorney in concrete were started since 1992, The Firm SITCO was officially Established in 2012. The stepping stone was from Cochin refinery till 2003, afterwards company had taken works from other government bodies bith central and state, which was the turning point. Sitco has evolved into a prominent construction company in Kerala, with a rich history of successfully delivering government projects since 2000. Our journey began with a vision to contribute to the growth and development of our state through innovative construction solutions.</p>
          
         </div>
         
         </div>
      </div><hr/>
    </>
  )
}

export default Download
