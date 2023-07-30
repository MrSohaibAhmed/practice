import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username :'',
        options :'select',
        email:'',
      }

    

    }

    handleusername=event=>{
        this.setState({
            username:event.target.value
        })
      }

      handleselect=event=>{
        this.setState({
            options:event.target.value
        })
      }

      handlesubmit=event=>{
        console.log(`${this.state.username} ${this.state.options}`)
      }

      handleform=event=>{
        event.preventDefault();
      }

      handlemail=event=>{
        this.setState({
        email:event.target.value})
      }
  render() {
    return (
        <>
        <form onSubmit={this.handleform}>
      <h2>form</h2>
      <label><b>USERNAME</b></label>
      <input type='text' value={this.state.username} onChange={this.handleusername}></input>
      <select value={this.state.options} onChange={this.handleselect}>
        <option value="A">A</option>
        <option value="B">B</option>
         <option value="C">C</option>

      </select>
      <input type='text' value={this.state.email} onChange={this.handlemail}></input>
<button type='submit' onClick={this.handlesubmit}>submit</button>
</form>
      </>
    )
  }
}

export default Form