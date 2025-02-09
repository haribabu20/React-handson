import {useState} from 'react'
import Child from './Child'
const Parent = () => {

  const [username, setUsername] = useState('')

  const updateUsername = (name) => {
    setUsername(name)
  }

  return(
    <div>
      {username && (
        <div>
          <h1>Parent Component</h1>
          <p>{username}</p>
        </div>
      )}
      <Child username={username} updateUsername={updateUsername}/>
    </div>
  )
}

export default Parent