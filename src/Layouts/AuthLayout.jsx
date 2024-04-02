import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from "../assets/imgs/freshcart-logo.svg"
export default function AuthLayout() {
  return (
    <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid mx-3">
    <NavLink className="navbar-brand" to="/home">
        <img src={logo} alt="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

       <li className="nav-item">
         <NavLink className="nav-link position-relative" to="/signup">
            SginUp
         </NavLink>
       </li>

       <li className="nav-item">
         <NavLink className="nav-link position-relative" to="/signin">
            SginIn
         </NavLink>
       </li>
      
      
     </ul>
      
    </div>
  </div>
</nav>
      <Outlet/>
    </div>
  )
}
