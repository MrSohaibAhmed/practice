import React, { Component } from 'react'

 class HeadingCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    // increaseCount=()=>{
    //     this.setState(prevState=>{
    //        return{count: prevState.count+1}
    //     })    
    // }

    increaseCount=()=>{
        this.setState(prevState=>{
            return{count : prevState.count+1}
        });
    }
  render() {
    return (
      
        <h4 onMouseOver={this.increaseCount}>HOVERED {this.state.count} TIMES</h4>
     
    )
  }
}

export default HeadingCounter