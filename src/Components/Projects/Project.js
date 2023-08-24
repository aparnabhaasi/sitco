import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./Cards";
import "./Project.css";

import HeadTitle from "../../Common/HeadTitle/HeadTitle";

function Projects() {
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
      <HeadTitle />

      <section className="gallery top">
        <div className="container grid">
          {project.map((user, index) => (
            <Cards key={index} image={`Images/project/${user.image}`}  title={user.title} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
