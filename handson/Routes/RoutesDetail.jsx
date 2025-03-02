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
// import Profile from './PageComponents/Profile'
import ReqdComponent from './Authentication/ReqdComponent'

// lazyLoading
const EnhancedAbout = lazy(()=> import('./PageComponents/About'))
const EnhancedAdmin = lazy(()=> import('./PageComponents/Admin'))
const EnhancedLogin = lazy(()=> import('./PageComponents/Login'))
const LazyProfile = lazy(()=>import('./PageComponents/Profile'))



const RouteDetail = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/order-summary" element={<OrderSummary/>}/>
        <Route path='*' element={<NoMatch/>}/>

        {/* lazy loading route */}
        <Route path="/about" element={
            <Suspense fallback='Loading...'>
              <EnhancedAbout/>
            </Suspense>
          }>
        </Route>


        {/* Nested route */}
        <Route path="/products" element={<Products/>}>
          <Route index element={<Featured/>} />
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>


        {/* Nested route with lazy routing */}
        <Route path="/users" element={<User/>}>
          <Route path=":userid" element={<UserDetails/>}/>
          <Route path='admin' element={
            <Suspense fallback='Loading...'>
              <EnhancedAdmin/>
            </Suspense>
          }/>
        </Route>


        {/* lazy loading route */}
        <Route path='/login' element={
          <Suspense fallback='Loading...'>
            <EnhancedLogin/>
          </Suspense>
        }>
        </Route>
        
        {/* protected route with lazy loading */}
          <Route path='/profile' element={
            <ReqdComponent>
                <Suspense fallback="Loading...">
                  <LazyProfile/>
                </Suspense>
            </ReqdComponent>
          }></Route>
        
    
      </Routes>
    </>

  )
}

export default RouteDetail