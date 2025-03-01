import { Component } from "react";

class ErrorBoundary extends Component{

  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      errorMsg: ""
    }
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true,
      errorMsg: error.message
    }
  }

  componentDidCatch(error, info){
    console.log(error.message);
    console.log(info.componentStack)
  }

  render(){
    return(
      <>
        {this.state.hasError ? <h1>{this.state.errorMsg}</h1> : this.props.children}
      </>
    )
  }
}

export default ErrorBoundary