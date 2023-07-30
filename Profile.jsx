import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const navigate=useNavigate()
    const logout=()=>{
        navigate('/login')
    }
  return (<>
    <div>Profile</div>
    <button onClick={logout}>logout</button>
    </>
  )
}

export default Profile