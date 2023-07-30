import axios from 'axios'
import React, { Component } from 'react'

 class Getapi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userID:'',
         title:'',
         body:''
      }
    }

    handleuserid=(event)=>{

            this.setState({
                userID:event.target.value
            })
    }
    handlebody=(event)=>{

        this.setState({
            body:event.target.value
        })
}
handletitle=(event)=>{

    this.setState({
        title:event.target.value
    })
}


    handlesubmit=(event)=>{
        event.preventDefault();
        console.log("work hard please")
        console.log(this.state.body)
        console.log(this.state.title)
        console.log(this.state.userID)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })

    }
  render() {
    return (
      <>
      <input type='text' name='userId' value={this.state.userID} onChange={this.handleuserid} ></input>

      <input type='text ' name='title'  value={this.state.title} onChange={this.handletitle}></input>

      <input type='text' name='body'  value={this.state.body} onChange={this.handlebody}></input>

      <button type='submit' onClick={this.handlesubmit}>submit</button>
      
      
      
      
      </>
    )
  }
}

export default  Getapi