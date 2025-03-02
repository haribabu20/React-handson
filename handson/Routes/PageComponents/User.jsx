import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const User = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const activeUserFetch = searchParams.get('filter') === 'active'

  return (
    <>
      <h1>Welcome User</h1>
      <Outlet/>
      <button style={{margin:"20px"}} onClick={()=>setSearchParams({filter:"active"})}>Active User</button>
      <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      {
        activeUserFetch ? (
          <h4>Active User fetched</h4>
        ) : (
          <h4>Showing all user</h4>
        )
      }
    </>
  )
}

export default User
