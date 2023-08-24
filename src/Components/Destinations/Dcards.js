import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
//import Sdata from "./Sdata"

const Cards = ({ item: { id, image, title, sidepara, desc, paraImage_one, paraImage_two } }) => {
  const [project, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("PHP/project.php/projects/")
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
     {project.map((user, index) => (
      <div className='items'>
        <div className='img'>
          <img src={`Images/project/${user.image}`}  alt='Gallery Image' />

          <Link to="project" className='blogItem-link'>
            <i className='fas fa-external-link-alt'></i>
          </Link>
        </div>
        <div className='title'>
          <h3>{user.title} </h3>
        </div>
      </div>
      ))}
    </>
  )
}

export default Cards
