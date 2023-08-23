import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularData from "./PopData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  }
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:80/sitco/PHP/index.php/gallery/")
      .then(function (response) {
        console.log("API response:", response.data);
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.log("Invalid response data format:", response.data);
        }
      })
      .catch(function (error) {
        console.error("API request error:", error); 
      });
  }

  return (
    <>
      <Slider {...settings}>
      {users.map((user, index) => {
          return (
            <>
              <div className='cards'>
                <div className='item'>
                  <div className='imgae'>
                    <img src={`http://localhost:80/sitco/public/Images/gallery/${user.image}`}  alt='' />
                   
                  </div>
                
                  <div className='details'>
                    <h2>{user.title}</h2>
                    <div className='boarder'></div>
                    
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Cards
