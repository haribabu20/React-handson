import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from './Authentication/AuthProvider'

const NavBar = () => {

  const auth = useAuth()

  const navLinkStyle = ({isActive}) => ({
      fontWeight: isActive ? 'Bolder' : '',
      textDecoration: isActive ? 'underline' : 'none'
    }
  )


  return (
    <nav>
      <NavLink style={navLinkStyle} to='/'>Home</NavLink>
      <NavLink style={navLinkStyle} to='/About'>About</NavLink>
      <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
      <NavLink style={navLinkStyle} to="/users">Users</NavLink>
      <NavLink style={{navLinkStyle}} to='/profile'>Profile</NavLink>
      {
        !auth.user && (<NavLink style={{navLinkStyle}} to='/login'>Login</NavLink>)
      }
      
    </nav>
  )
}

export default NavBar
