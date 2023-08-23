import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login(props) {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleInputChange = (e, type) => {
    setError('');
    if (type === 'user') {
      setUser(e.target.value);
    } else if (type === 'pass') {
      setPass(e.target.value);
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    if (user !== '' && pass !== '') {
      
      fetch('http://localhost/sitco/PHP/login.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          
        },
        
        body: JSON.stringify({ user, pass }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data.result === 'Logged In') {
            setMsg('Login successful!');
            console.log('Redirecting to /admin');
            props.setIsLoggedIn(true); // Set isLoggedIn to true
            history.push('/admin'); // Redirect to the "admin" page
          } else {
            setError(data.result);
          }
        })
        .catch((err) => {
          setError('An error occurred: ' + err.message);
          console.log(err);
        });
    } else {
      setError('All fields are required!');
    }
  };

  return (
    
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Admin Login</p>
        <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#ff0000' }}>{error !== '' ? error : msg}</p>
        <form action='' method='POST'>
          <input
            type='text'
            name='email'
            value={user}
            onChange={(e) => handleInputChange(e, 'user')}
            placeholder='Email'
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type='password'
            name='password'
            value={pass}
            onChange={(e) => handleInputChange(e, 'pass')}
            placeholder='Password'
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Add your additional UI elements if needed */}
          </div>

          <button
            type='button'
            onClick={loginSubmit}
            style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
export default Login;
