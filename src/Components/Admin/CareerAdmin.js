import React, { useState, useEffect } from 'react';
import "./Admin.css";
import Button from 'react-bootstrap/Button';

import axios from 'axios';

const CareerAdmin = (props) => {
  const {
    jobDesignation,
    firstName,
    lastName,
    email,
    mobile,
    currentEmploymentStatus,
    experience,
  } = props;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:80/sitco/PHP/view_application.php/projects/")
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

  const downloadResume = (resumeId, resumeFileName) => {
    axios
      .get(`http://localhost:80/sitco/PHP/download_resume.php?id=${resumeId}`, {
        responseType: 'blob', // Receive binary data as a blob
      })
      .then((response) => {
        // Create a Blob object from the binary data
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = resumeFileName; // Set the desired file name
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
      })
      .catch(function (error) {
        console.error("API request error:", error);
      });
  }

  const sendMail = (emailAddress) => {
    // You can use the "mailto" protocol to open the user's default email client
    window.location.href = `mailto:${emailAddress}`;
  }

  const makeCall = (phoneNumber) => {
    // You can use the "tel" protocol to trigger a phone call
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <div className='mt-3'>
      
      {users.map((user, index) => (
        <div className='container ' key={user.id}>
          <div className='col-md-6 col-sm-12 col-lg-6'>
            <div className="job-application-card p-5 " >
              <div className='text-center'><h2>{user.title}</h2></div><hr />
              <div className="applicant-details">
                <p>
                  Applicant Name: <strong>{user.fname} {user.lname}</strong>
                </p>
                <p>
                  Email: <strong>{user.email}</strong>
                </p>
                <p>
                  Mobile: <strong>{user.mobile}</strong>
                </p>
                <p>
                  Employment Status: <strong>{user.status}</strong>
                </p>
                <p>
                  Experience: <strong>{user.exp}</strong> years
                </p>
                <p>
                  Qualification: <strong>{user.position}</strong>
                </p>
                <hr />
                <div className='text-center'>
                  <Button variant="outline-dark" onClick={() => downloadResume(user.resumeId, user.resume)}>Download Resume <i className="fa-regular fa-eye"></i></Button>
                </div>
                <hr />
                <div className='text-center mt-4'>
                  <a className='mx-5' href="#" onClick={() => makeCall(user.mobile)}><i className="fa-solid fa-phone fa-xl"></i></a>
                  <a className='mx-5' href="#" onClick={() => sendMail(user.email)}><i className="fa-solid fa-envelope fa-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerAdmin;
