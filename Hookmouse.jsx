import React, { useEffect, useState } from 'react'

function Hookmouse() {


const[x,setx]=useState(0);
const[y,sety]=useState(0);
const mouseposition=(e)=>{
    console.log(e.clientX)
        setx(e.clientX)
        sety(e.clientY)
}




useEffect(()=>{
    console.log("use effect working");
    window.addEventListener('mouseover',mouseposition)
},[])

  return (
    <>
    <div>Hookmouse</div>
    <div>position of x is {x} and y is {y}</div>
    </>
  )
}

export default Hookmouse