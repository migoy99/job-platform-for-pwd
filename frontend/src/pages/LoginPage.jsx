import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './pageStyles/registration.css';

const LoginPage = () => {

  const navigate = useNavigate();

  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserCreds((prevUserCreds) => ({
      ...prevUserCreds,
      [id]: value,
    }));
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/login/login-route`, userCreds);

      if (response.status === 200) {
        navigate('/seeker-dashboard');
        console.log('success')
        alert('login success..')
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.log(JSON.stringify(userCreds))
      console.log(userCreds)
      console.error('Error:', error.response);
    }
  }

  return (
    <div>
      <div className="container" style={{ width: '450px', marginTop: '5%' }}>
        <h2 style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold', backgroundColor: '#009087', padding: '3%', borderRadius: '8px' }}>ThisAbility</h2>
        <h4>Sign in</h4>
        <form action="/login" method="POST" onSubmit={handleFormSubmit} style={{ width: '400px' }}>
          <label htmlFor="email">Email</label>
          <input value={userCreds.email} onChange={handleChange} type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input value={userCreds.password} onChange={handleChange} type="password" id="password" name="password" required />

          <input type="submit" value="Sign in" style={{ height: '60px', background: '#009087' }} />
        </form>
        <h4>Don't have an account? <Link to='/register'>Register</Link></h4>
      </div>
    </div>
  )
}

export default LoginPage