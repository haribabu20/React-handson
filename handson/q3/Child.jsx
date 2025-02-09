import { useState } from "react";

const Child = ({username, updateUsername}) => {

  const [name, setName] = useState('')

  return(
    <div>
      <h1>Child Component</h1>
      <input
        type = "text"
        onChange = {(e)=>setName(e.target.value)}
      />
      <button onClick={()=>updateUsername(name)}>login</button>
      {/* <p>{username}</p> */}

    </div>
  )

}

export default Child