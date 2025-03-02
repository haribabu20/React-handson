import React from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom'
import {Navigate} from 'react-router-dom'


const ReqdComponent = ({children}) => {
  const auth = useAuth()

  if(!auth.user){
    return (
      <Navigate to="/login"/>
    )
  }

  return children

  
}

export default ReqdComponent
