import React, { Component } from 'react'

export class Focus extends Component {

    constructor(props) {
      super(props)
    
     this.createref=React.createRef()
    }

    componentDidMount(){
        this.createref.current.focus();    }
  render() {
    return (
        <>
      <div>focus</div>
      <input type='text' ref={this.createref}></input>
      </>
    )
  }
}

export default Focus;