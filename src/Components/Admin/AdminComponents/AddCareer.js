import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddCareer = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    experience: '',
    salary: '',
    jobDescription: '',
    jobQualification: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    axios
      .post('PHP/add_career.php', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.success) {
          setSuccess('Job posted successfully');
          setError(null);
        } else {
          setError('Error posting job');
          setSuccess(null);
        }
      })
      .catch((error) => {
        setError('Error posting job');
        setSuccess(null);
        console.error('Error:', error);
      })
      .finally(() => {
        // Close the modal or reset form fields as needed
        handleClose();
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Post New Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="jobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              value={formData.jobTitle}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter Job Location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="experience">
            <Form.Label>Experience Required</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              placeholder="Enter Required Experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              placeholder="Enter Salary package"
              value={formData.salary}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="jobDescription">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              as="textarea"
              name="jobDescription"
              placeholder="Enter Job Description"
              value={formData.jobDescription}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="jobQualification">
            <Form.Label>Job Qualification</Form.Label>
            <Form.Control
              as="textarea"
              name="jobQualification"
              placeholder="Enter Job Qualification"
              value={formData.jobQualification}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" type="submit" className=''>
            Post New Job
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
      </Modal.Footer>
    </Modal>
  );
};

export default AddCareer;
