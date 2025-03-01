import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
      <input/>
      <nav>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet/>
    </>
  )
}

export default Products
