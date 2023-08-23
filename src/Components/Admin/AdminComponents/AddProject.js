// UpdateForm.js
import React, { useState } from "react";
import axios from "axios";

import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const AddProject = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const uploadProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', file);

      const response = await axios.post("http://localhost:80/sitco/PHP/admin_add_project.php", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      

      if (response.data.success) {
        setMessage(response.data.success);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    await uploadProduct();
  };

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add to Project</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="fileInput">
          <Form.Label>Select Image</Form.Label>
          <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="titleInput">
          <Form.Label>Add Image Description</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-success" type="submit">
          Add New
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);
};
export default AddProject;
