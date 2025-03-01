import React, { useEffect, useRef } from "react";

const Dom = () => {

  const inputRef = useRef()

  // const handleRef = () => {
  //   inputRef.current.focus()
  // }

  useEffect(()=>{
    inputRef.current.focus();
  },[])
  

  return (
    <div>
      <input ref={inputRef}></input>
      <button>click</button>
    </div>
  )
}

export default Dom