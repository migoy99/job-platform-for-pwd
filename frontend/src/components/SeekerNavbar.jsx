import React from 'react'
// import { Link } from "react-router-dom"
import './styles/seekerdashboard.css'
import ProfileButton from './SeekerDashboardComponents/ProfileButton'

const SeekerNavbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <h2 className="navbar-brand" style={{fontSize: '2.3rem', color: 'white', marginTop: '1%', marginLeft: '9%'}}>ThisAbility </h2>
                </div>                  
                <div className="navbar-right">
                    <input placeholder="Search" type="search" className="input-top" />
                    <button className='notif-button'>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z" fill="currentColor"></path>
                        </svg>
                    </button>
                    {/* <Link to="/login"><button className="profile-button">Profile</button></Link> */}
                    <ProfileButton/>
                </div>

            </nav>
        </div>
    )
}

export default SeekerNavbar