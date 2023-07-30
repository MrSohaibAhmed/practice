import React, { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react';


const authorization=createContext(null);
export const Authorization=({children})=> {
const[user,setuser]=useState(null)

const login=()=>{
    setuser(user)
}

const logout=()=>{
    setuser(null)
}

  return (
    <Authorization.Provider value={{login,logout,user}}>
        {children}
    </Authorization.Provider>
  )
}




export const useauthoriation=()=> {
  return  useContext(authorization)
  
}

