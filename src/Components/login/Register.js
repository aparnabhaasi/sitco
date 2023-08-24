import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation from React Router

function Register() {
  const location = useLocation(); // Get the current location

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pos, setPos] = useState('');
  const [date, setDate] = useState('');
  const [stat, setStat] = useState('');
  const [exp, setExp] = useState('');
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');

  const careerId = new URLSearchParams(location.search).get("id"); // Get the career ID from the URL

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('pos', pos);
    formData.append('date', date);
    formData.append('stat', stat);
    formData.append('exp', exp);
    formData.append('file', file);
    formData.append('career_id', careerId); // Send the career ID with the form data

    try {
      const response = await axios.post("PHP/job.php/save", formData, {
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
    e.preventDefault();
    await uploadProduct();
  };
  return (
    <>

      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <h4>To apply for a position at Sitco, please submit your updated resume and fill the details below.</h4>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input type='text' name='fname' onChange={(e) => setFname(e.target.value)} placeholder='First Name' required />
              <input type='text' name='lname' onChange={(e) => setLname(e.target.value)} placeholder='Last Name' required />
              <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='text' name='mobile' onChange={(e) => setMobile(e.target.value)} placeholder='Mobile' required />
              <input type='text' name='pos' onChange={(e) => setPos(e.target.value)} placeholder='Qualification' required />
              <input type='date' name='date' onChange={(e) => setDate(e.target.value)} placeholder='Available starting date?' required />
              <label for="fileInput">DOB</label>

              <input type='text' name='stat' onChange={(e) => setStat(e.target.value)} placeholder='Current employment status?' required />
              <input type='text' name='exp' onChange={(e) => setExp(e.target.value)} placeholder='Experience' required />
            
              <input type="file" id="fileInput" name="img" onChange={(e) => setFile(e.target.files[0])} required />
              <label for="fileInput">Upload Resume</label>
              <input type='submit' name='submit' className='primary-btn' value="Submit" />


            </form>
          </div>
        </div>
      </section>


    </>
  )

}

export default Register;






