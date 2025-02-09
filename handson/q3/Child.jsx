import { useState } from "react";

const Child = ({message, updateMessage}) => {

  return(
    <div>
      <h1>Child Component</h1>
      <p>{message}</p>
      <button onClick={updateMessage}>Update</button>
    </div>
  )

}

export default Child