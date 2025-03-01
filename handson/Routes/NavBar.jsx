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
    </nav>
  )
}

export default NavBar
