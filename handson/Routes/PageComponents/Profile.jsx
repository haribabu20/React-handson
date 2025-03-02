import React from 'react'
import { useAuth } from '../Authentication/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom'

const Profile = () => {

  const auth = useAuth();
  const navigate = useNavigate();
  const location =  useLocation(); // gets current location details

  const {username} = location.state || {} // extract username from state

  const handleLogout = () => {
    auth.logout();
    navigate('/login')
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <h3>Welcome {username ? username : "Guest"} to profile</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
