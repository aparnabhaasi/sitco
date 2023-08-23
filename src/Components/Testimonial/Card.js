import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faGraduationCap, faIndianRupeeSign,faClipboard  } from '@fortawesome/free-solid-svg-icons';
import "./Testimonial.css"
import axios from "axios";
import { Link } from "react-router-dom";


function Career() {
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
      <div className='box col-md-6 col-lg-6 col-sm-12' >
        <div className='details  container'>
          {/* <div className='img'>
          <img src={props.profile} alt='' />
        </div> */}
          <div className=' text-center'>
            {career.map((user, index) => (
              <tr key={index}>
                <h3><strong>{user.title}</strong></h3>
                <span style={{fontSize:"20px"}}>{user.location}</span>
                <hr />
                <div ><p style={{fontSize:"15px"}} className='icon-p'><FontAwesomeIcon icon={faGraduationCap} className='icon'/> Qualification </p></div>

                <div ><p style={{fontSize:"15px"}} className='icon-p'><FontAwesomeIcon icon={faSuitcase} className='icon' /> {user.experience} Years </p></div>
                <div><p style={{fontSize:"15px"}} className='icon-p'><FontAwesomeIcon icon={faIndianRupeeSign } className='icon' /> {user.salary}</p></div>
                <p style={{fontSize:"15px"}} className='icon-p'><FontAwesomeIcon icon={faClipboard  } className='icon' /> {user.description}</p><hr/>
                <Link to={`/register?id=${user.c_id}`}>Apply Now</Link>
              </tr>
            ))}



          </div>

        </div>



      </div>
    </>
  );
}
export default Career;
