import React, { Component } from 'react'

class FunctionClick extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         loggedIn: true
      }
    }
  render(){
  

    return(

            (this.state.loggedIn) ? <div>welcome user</div> : <div>welcome sohaib</div>

    )
    //     if(this.state.loggedIn){
    //         return(<div>WELCOME USER</div>)
    //     }
    //     else{
    //         return(<div>WELCOME USER</div>)
    //     }
  
    // return (
    //   <div>functionClick</div>
    // )
  }
}

export default FunctionClick;