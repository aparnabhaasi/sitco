import React from "react"
import Card from "./Card"
import "./Testimonial.css"
import { useState, useEffect } from "react"
import axios from "axios"

const AllItem = () => {
  const [career, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get(`http://localhost:80/sitco/PHP/career.php/career/`)
      .then(function (response) {
        console.log('API response:', response.data);
        if (Array.isArray(response.data)) {
          setUsers(response.data); // Update the state with fetched data
        } else {
          console.log('Invalid response data format:', response.data);
        }
      })
      .catch(function (error) {
        console.error('API request error:', error);
      });
  }
  return (
    <>
      <section className='Testimonial mtop mb-5'>
        <div className='container '>
        {career.map((value, index) => {
            return <Card key={index} {...value} />
          })}

        </div>
      </section>
    </>
  )
}

export default AllItem
