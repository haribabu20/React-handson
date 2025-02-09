import {useState} from 'react'
import Child from './Child'
const Parent = () => {

  const [message, setMessage] = useState('update in parent')


  const updateMessage = () => {
    setMessage("update in child")
  }

  return(
    <div>
      <h1>Parent Component</h1>
      <p>{message}</p>
      <Child message={message} updateMessage={updateMessage}/>
    </div>
  )
}

export default Parent