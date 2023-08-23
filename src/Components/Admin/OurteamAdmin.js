import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Admin.css';
import TeamUpdate from './AdminComponents/TeamUpdate';

import AddTeam from './AdminComponents/AddTeam';
import axios from 'axios';

const GalleryAdmin = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUpdateClick = (userId) => {
    setShowUpdateForm(true);
    setSelectedUserId(userId);
  };

  const handleAddClick = () => {
    setShowAddTeam(true);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedUserId(null);
  };

  const handleCloseAddTeam = () => {
    setShowAddTeam(false);
  };

  const handleDeleteClick = (userId) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      axios
        .delete(`http://localhost:80/sitco/PHP/update_team.php?id=${userId}`)
        .then(function (response) {
          console.log(response.data);
          if (response.data.success) {
            getUsers(); // Refresh the data after deletion
          } else {
            console.error("Failed to delete image:", response.data.error);
          }
        })
        .catch(function (error) {
          console.error("API request error:", error);
        });
    }
  };

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
    <div className=' mt-5'>
      <div className='w-100 text-center mb-4'>
        <Button variant="success" onClick={handleAddClick}>
          Add New <i className="fa-solid fa-file-circle-plus"></i>
        </Button>
      </div>
      <div className='container'>
        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>ID</th>
              <th style={{ textAlign: 'center' }}>Image</th>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Designation</th>
              <th style={{ textAlign: 'center' }}>Description</th>
              <th style={{ textAlign: 'center' }}>Edit</th>
              <th style={{ textAlign: 'center' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.id}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <img src={`http://localhost:80/sitco/public/Images/team/${user.image}`} alt="" width="200" />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.name}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.designation}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.description}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <Button variant="outline-info" onClick={() => handleUpdateClick(user.id)}>
                    Update <i className="fa-solid fa-pen"></i>
                  </Button>
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <Button variant="outline-danger" onClick={() => handleDeleteClick(user.id)}>
                    Delete <i className="fa-solid fa-pen"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {showUpdateForm && (
        <TeamUpdate show={showUpdateForm} handleClose={handleCloseUpdateForm} imageId={selectedUserId} />
      )}

      {showAddTeam && (
        <AddTeam show={showAddTeam} handleClose={handleCloseAddTeam} />
      )}
    </div>
  );
};

export default GalleryAdmin;
