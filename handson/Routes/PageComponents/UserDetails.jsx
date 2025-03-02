import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

  const {userid} = useParams()

  return (
    <div>
      <h1>User Details {userid}</h1>
    </div>
  )
}

export default UserDetails
