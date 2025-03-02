import React from 'react'
import { useAuth } from '../Authentication/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login')

  }

  return (
    <div>
      <h1>Welcome {auth.user} to profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
