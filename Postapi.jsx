import axios from 'axios'
import React, { Component } from 'react'

export class Postapi extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            products:[],
            error:""
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            this.setState({products:response.data})
            console.log(response.data);
        }).catch((error)=>{
            this.setState({error:"ERROR 404 💀💀"});
            console.log(error);
        })
    }
  render() {

   const{products}=this.state;  

    return (
      <>
      
      <h2>Postapi</h2>
    {   products.length?
        // <div>PLEASE WORK HARD </div>
        products.map(item=><div key={item.id}>{item.title}   with id {item.userId}</div>)
        :null
    }
    {
        this.state.error?<div>{this.state.error}</div>:null
    }
      
      </>
    )
  }
}

export default Postapi