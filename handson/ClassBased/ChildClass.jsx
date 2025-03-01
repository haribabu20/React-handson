import React,{Component} from 'react'

class ChildClass extends Component{
  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true
    }
  }

  render(){
    return(
      <>
        {this.state.hasError ? "Something Went Wrong" : this.props.children}
      </>
    )
  }
}


export default ChildClass