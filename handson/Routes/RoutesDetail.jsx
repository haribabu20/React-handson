import React from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './PageComponents/Home'
import About from './PageComponents/About'
import NavBar from './NavBar'
import OrderSummary from './PageComponents/OrderSummary'
import NoMatch from './PageComponents/NoMatch'
import Products from './PageComponents/Products'
import Featured from './PageComponents/Featured'
import New from './PageComponents/New'
import User from './PageComponents/User'
import UserDetails from './PageComponents/UserDetails'
import Admin from './PageComponents/Admin'
import Login from './PageComponents/Login'
import Profile from './PageComponents/Profile'
// lazyLoading
const EnhancedAbout = lazy(()=> import('./PageComponents/About'))
const EnhancedAdmin = lazy(()=> import('./PageComponents/Admin'))
const EnhancedLogin = lazy(()=> import('./PageComponents/Login'))



const RouteDetail = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={
            <Suspense fallback='Loading...'>
              <EnhancedAbout/>
            </Suspense>
          }>
        </Route>
        <Route path="/order-summary" element={<OrderSummary/>}/>
        <Route path="/products" element={<Products/>}>
          <Route index element={<Featured/>} />
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="/users" element={<User/>}>
          <Route path=":userid" element={<UserDetails/>}/>
          <Route path='admin' element={
            <Suspense fallback='Loading...'>
              <EnhancedAdmin/>
            </Suspense>
          }/>
        </Route>
        <Route path='/login' element={
          <Suspense fallback='Loading...'>
            <EnhancedLogin/>
          </Suspense>
        }>
        </Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>

  )
}

export default RouteDetail