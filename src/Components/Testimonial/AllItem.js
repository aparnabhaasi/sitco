import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Testimonial.css";

const AllItem = () => {
  const [career, setCareer] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get("PHP/career.php/career/");
      console.log("API response:", response.data);
      if (Array.isArray(response.data)) {
        setCareer(response.data); // Update the state with fetched data
      } else {
        console.log("Invalid response data format:", response.data);
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  }

  return (
    <section className="Testimonial mtop mb-5 row">
      <div className="">
        {career.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AllItem;
