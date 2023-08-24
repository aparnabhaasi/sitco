import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer >
        <div className="container">
          <div className=' row w-100'>
            <div className=' col-md-4 col-sm-12 col-lg-4 p-4'>
              <h2>ABOUT US</h2>
              <p>Established in 1992, Sitco has evolved into a prominent construction company in Kerala, with a rich history of successfully delivering government projects. Our journey began with a vision to contribute to the growth and development of our state through innovative construction solutions.</p>
              <br />
              <p>At Sitco, we take immense pride in being a premier construction company in Kerala, focusing exclusively on government projects.</p>
              <div className='icon flex_space'>
                <a href=""><i className='fab fa-facebook-f'></i></a>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div> 
  
            <div className=' col-md-4 col-sm-12 col-lg-4 p-4'>
              <h2>USEFUL LINKS</h2>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About us</Link>
                </li>
                <li>
                  <Link to='/destinations'>Projects</Link>
                </li>
                <li>
                  <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                  <Link to='/testimonial'>Career</Link>
                </li>
                <li>
                  <Link to='/blog'>Services</Link>
                </li>
                <li>
                  <Link to='/blog'>Our Clients</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
  
            <div className='  col-md-4 col-sm-12 col-lg-4 p-4'>
              <h2>CONTACT </h2>
              <ul>
                <li>
                  <span className="footer-text"><i class="fa-solid fa-location-dot"></i> Heavenly Plaza, 6th Floor, CS6, D.NO:11/275, J121, Kakkanad, Thrikkakara.P.O. Kochi-682021</span>
                </li><br/>

                <li>
                  <span className="footer-text"><i class="fa-solid fa-phone"></i>+91 484 4011300</span><br/>
                  <span className="footer-text">&nbsp;+91 9846581300</span><br/>
                  <span className="footer-text">&nbsp;+91 9447081300</span><br/>
                  <span className="footer-text">&nbsp;+91 484 2681167</span>

                </li><br/>
                <li>
                  <span className="footer-text"><i class="fa-solid fa-envelope"></i> sitcoassociates@gmail.com</span>
                </li>

                
                
              </ul>
            </div>
            <div>
              
            </div>
  
            {/* <div className='box'>
              <h2>NEWSLETTER</h2>
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
  
              <input type='text' name='' id='' />
              <input type='text' className='primary-btn' value='SUBSCRIBE' />
            </div> */}
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved. Designed by <a href="https://ictglobaltech.com/">ICT Global Tech</a></p>
      </div>
    </>
  )
}

export default Footer