import React, { Component } from 'react'

 class Errorhandling extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            hasError:false
             
          }
        }

        static getDerivedStateFromError(error){
            return{
                hasError:true
        }
        }

  render() {
    if(this.state.hasError){
    return (<div>SOME THING NOT GOOD ABOUT HERO</div>)
    }else{
       return( this.props.children)
    }
   
    
    
    
      
    
  }
}

export default Errorhandling;