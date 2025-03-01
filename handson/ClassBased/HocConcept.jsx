import React from 'react'

const HocConcept = (WrappedComponent) => {

  return (props) => {

    return <WrappedComponent {...props}/>
    
  }
}

export default HocConcept