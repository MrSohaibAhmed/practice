import React, { useState } from 'react'
import { useauthoriation } from './Authorization'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[user,setuser]=useState('')
    const auth=useauthoriation()
    const navigate=useNavigate()
    const login=()=>{
        setuser(user)
        navigate('/profile')
    }
    

  return (
   <>
   <label>USERNAME:
    <input type='text'  onChange={(e)=>setuser(e.target.value)}/>
   </label>
   <button onClick={login}>login</button>
   </>
  )
}

export default Login