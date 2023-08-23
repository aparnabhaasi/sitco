import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./Cards";
import "./Gallery.css";

import HeadTitle from "../../Common/HeadTitle/HeadTitle";

function Gallery() {
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
      <HeadTitle />

      <section className="gallery top">
        <div className="container grid">
          {users.map((user, index) => (
            <Cards key={index} image={`http://localhost:80/sitco/public/Images/gallery/${user.image}`}  title={user.title} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
