import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './PageComponents/Home'
import About from './PageComponents/About'
import NavBar from './NavBar'
import OrderSummary from './PageComponents/OrderSummary'
import NoMatch from './PageComponents/NoMatch'
import Products from './PageComponents/Products'
import Featured from './PageComponents/Featured'
import New from './PageComponents/New'


const RouteDetail = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/order-summary" element={<OrderSummary/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>

  )
}

export default RouteDetail