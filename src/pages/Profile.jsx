import React from 'react'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    if ( !localStorage.getItem('userlogin')) {
        alert ("Yeu Cầu Login ")
        return <Navigate to='/login'/>
        
    }
  return (
    <div>
      Proflie
    </div>
  )
}

export default Profile
