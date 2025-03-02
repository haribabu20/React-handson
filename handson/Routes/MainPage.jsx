import React from 'react'
import RouteDetail from './RoutesDetail'
import NavBar from './NavBar'
import AuthProvider  from './Authentication/AuthProvider'

const MainPage = () => {
  return (
    <>
      <AuthProvider>
        <NavBar/>
        <RouteDetail/>
      </AuthProvider>
    </>
  )
}

export default MainPage
