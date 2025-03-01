import React from 'react'
const Title = ({clr}) => {
  console.log("Rendering Title")
  return (
      <h2 style={{color: clr}}>
        React.Memo, useMemo and useCallback Example code for optimization
      </h2>
  )
}
export default React.memo(Title)
