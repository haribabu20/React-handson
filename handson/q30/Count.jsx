import React from 'react'
const Count = ({text, count}) => {
  console.log(`Rendering ${text}`)
  return(
    <h5>{text} - {count}</h5>
  )
}
export default React.memo(Count)