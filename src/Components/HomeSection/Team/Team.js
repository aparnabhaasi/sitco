import React, { useState, useEffect } from 'react';
import "./Team.css";
import axios from 'axios';

function Team() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    function getUsers() {
      axios
        .get("http://localhost:80/sitco/PHP/admin_view_team.php/gallery/")
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
        <div>
            <div className='heading'>
                <h1>Meet Our Team</h1>
          
                <div className='line'></div>
            </div>
            <div className="container t ">
                <h4 className="mb-5"><strong>Behind every successful project is a team of dedicated professionals. At Sitco, our team comprises</strong></h4>
            </div>
            
            <div class="wrap">
            {users.map((user, index) => (
                <div class="box">
               
                    <div class="box-top">
                   
              
                        <img class="box-image" src={`http://localhost:80/sitco/public/Images/team/${user.image}`}  alt="profile" />
                        
                        <div class="title-flex">
                       
                            <h3 class="box-title">{user.name}</h3>
                            <p class="user-follow-info">{user.designation}</p>
                        </div>
                        <p class="description">{user.description}</p>
                  
                    </div>
                  
                </div>
                   ))}


            </div>
            <div className="container t mt-5">
                <p className="mb-5">At Sitco, we don't just build structures; we create the foundation for progress, innovation, and sustainable development in Kerala. With a steadfast commitment to excellence and a proven track record, we specialize in executing government projects that transform our state's landscape. Our skilled team, cutting-edge technology, and unwavering dedication to quality ensure that every project we undertake becomes a symbol of strength, durability, and progress.</p>
            </div>
        </div>
    )
}

export default Team