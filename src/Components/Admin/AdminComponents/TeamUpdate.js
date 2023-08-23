import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const GalleryUpdate = ({ show, handleClose, imageId, currentName,currentDes,currentDescription, onUpdate }) => {
  const [tname, setTname] = useState(currentName || '');
  const [des, setDes] = useState(currentDes || '');
  const [description, setDescription] = useState(currentDescription || '');
  const [file, setFile] = useState(null);

  const handleTitleChange = (e) => {
    setTname(e.target.value);
  };
  const handledesChange = (e) => {
    setDes(e.target.value);
  };
  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('id', imageId);
    formData.append('tname', tname);
    formData.append('des', des);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('http://localhost:80/sitco/PHP/update_team.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const updatedImageData = await response.json();
        onUpdate(updatedImageData); // Update the UI with the new data
        handleClose(); // Close the modal
      } else {
        console.error('Failed to update the image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="imageTitle">
            <Form.Label>Update Name</Form.Label>
            <Form.Control type="text" placeholder="Enter updated Name" value={tname} onChange={handleTitleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageTitle">
            <Form.Label>Update Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter updated designation" value={des} onChange={handledesChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageTitle">
            <Form.Label>Update Description</Form.Label>
            <Form.Control type="text" placeholder="Enter updated description" value={description} onChange={handledescriptionChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageFile">
            <Form.Label>Update Image File</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryUpdate;
