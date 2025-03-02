import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../Authentication/AuthProvider'

function Home() {

  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/')
  }

  return (
    <>
      
      <h3>Welcome {auth.user}</h3>
      <h1>Home Page</h1>
      <button onClick={()=>(navigate('order-summary'))}>Place Order</button>
      <button onClick={handleLogout}>Logout</button>
    </>

    
  )
}

export default Home
