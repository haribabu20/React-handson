import React, {useState} from "react"
import {useAuth} from '../Authentication/AuthProvider'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    auth.login(user)
    navigate('/profile')
  }

  return(
    <label>
      Username: {' '}
      <input type='text' onChange={(e)=>setUser(e.target.value)} />
      <button onClick={() => handleSubmit()}>Login</button>
    </label>
  )
}

export default Login