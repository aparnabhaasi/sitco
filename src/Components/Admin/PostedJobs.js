import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddCareer from './AdminComponents/AddCareer';
import './Admin.css';
import axios from 'axios';

const GalleryAdmin = () => {
  const [showAddCareer, setShowAddCareer] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:80/sitco/PHP/career.php/gallery/")
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

  const handleAddCareerClick = () => {
    setShowAddCareer(true);
  }
  const handleCloseAddCareer = () => {
    setShowAddCareer(false);
  }


  const handleDeleteClick = (userId) => {
    console.log("Deleting user with ID:", userId);
    if (window.confirm("Are you sure you want to delete this image?")) {
      axios
        .delete(`http://localhost:80/sitco/PHP/admin_delete_jobs.php?id=${userId}`)
        .then(function (response) {
          console.log(response.data);
          if (response.data.success) {
            getUsers(); // Refresh the data after deletion
          } else {
            console.error("Failed to delete record:", response.data.error);
          }
        })
        .catch(function (error) {
          console.error("API request error:", error);
        });
    }
  };

  return (
    <div className=' mt-5'>
      <div className='w-100 text-center mb-4'>
        <Button variant="success" onClick={handleAddCareerClick}>Post New Job <i className="fa-solid fa-file-circle-plus"></i></Button>
      </div>
      <div className='container'>
        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>ID</th>
              <th style={{ textAlign: 'center' }}>Job Title</th>
              <th style={{ textAlign: 'center' }}>Location</th>
              <th style={{ textAlign: 'center' }}>Experience</th>
              <th style={{ textAlign: 'center' }}>Qualification</th>
              <th style={{ textAlign: 'center' }}>Salary</th>
              <th style={{ textAlign: 'center' }}>Description</th>
              <th style={{ textAlign: 'center' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.c_id}>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.c_id}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.title}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.location}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.experience}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.qualification}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.salary}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.description}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <Button variant="outline-danger" onClick={() => handleDeleteClick(user.c_id)}>
                    Delete <i className="fa-solid fa-pen"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showAddCareer && (
        <AddCareer show={showAddCareer} handleClose={handleCloseAddCareer} />
      )}
    </div>
    
  );
};

export default GalleryAdmin;
