import React from 'react';
import { Link } from "react-router-dom";
import './pageStyles/registration.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

    const navigate = useNavigate();

    const [userCreds, setUserCreds] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        userType: '',
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
            const response = await axios.post('http://localhost:5000/register/register-route', userCreds);

            if (response.status === 200) {

                console.log('Registered successfully');
                alert('Registered successfully.');

                // Reset the form
                setUserCreds({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                })

                //Redirect to Login Page 
                navigate('/login');

            } else {
                console.error('Error:', response.statusText);
                alert('An error occurred while registering.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error);
        }
    }

    return (
        <div>
            <div className="container" style={{ width: '450px', marginTop: '5%' }}>
                <h2 style={{fontSize: '2rem', color: 'white', fontWeight: 'bold', backgroundColor: '#009087', padding: '3%', borderRadius: '8px'}}>ThisAbility</h2>
                <h4>Register</h4>
                <form onSubmit={handleFormSubmit} style={{ width: '400px' }}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        value={userCreds.firstname}
                        onChange={handleChange}
                        type="text"
                        id="firstname"
                        name="firstname"
                        required
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input
                        value={userCreds.lastname}
                        onChange={handleChange}
                        type="text"
                        id="lastname"
                        name="lastname"
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        value={userCreds.email}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        value={userCreds.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                        required
                    />

                    <input className="registerButton" type="submit" value="Register" style={{ height: '60px', background: '#009087' }} />

                    <h4>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </h4>
                    {/* <h4>
                        hello: {userCreds.firstname} {userCreds.lastname} {userCreds.email}{' '}
                        {userCreds.password} {userCreds.userType}
                    </h4> */}
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage