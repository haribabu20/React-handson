import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {

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
    </nav>
  )
}

export default NavBar
