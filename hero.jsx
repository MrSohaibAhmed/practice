import React from 'react'

function Hero(props) {

if(props.name==="joker"){
   throw new Error("NOT A HERO MAN CALL BATMAN ");
}

  return (
    <div>{props.name} is a good hero</div>
  )
}

export default Hero