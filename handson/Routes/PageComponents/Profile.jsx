import React from 'react'
import { useAuth } from '../Authentication/AuthProvider'

const Profile = () => {

  const auth = useAuth()

  return (
    <div>
      <h1>Welcome {auth.user} to profile</h1>
    </div>
  )
}

export default Profile
