import React from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoutes({children}) {
    let token = localStorage.getItem('token')

  try{
    const decoded = jwtDecode(token);
     console.log(decoded);

    //  ===========autho for user===========//
    
//    if(decoded.role!='user'){

//     localStorage.clear()
//     return <Navigate to = "/signin"/>
//    }

  }catch(errer) {
    localStorage.clear()
    return <Navigate to = "/signin"/>
  }


    if(token) return children


    return <Navigate to = "/signin"/>
}
