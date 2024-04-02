import React, { useContext, useEffect } from 'react'
import logo from "../../assets/imgs/freshcart-logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { storeContext } from '../../context/storeContext'
export default function Navbar() {

 let {counter, getCart, setCounter} = useContext(storeContext)

   useEffect(() => {
       (async() => {
       let data = await getCart()
       console.log(data);
       if(data.status== 'success'){
        setCounter(data.numOfCartItems)
       }
       })()
   }, [])


 
  return (
    <>
      

      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid mx-3">
    <NavLink className="navbar-brand" to="/home">
        <img src={logo} alt="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/brands">Brands</NavLink>
        </li>
       
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
       <li className="nav-item">
         <NavLink className="nav-link position-relative" to="/cart">
            Cart
            <i className="fa-solid fa-cart-shopping cartIcon mx-2"></i>
         {counter ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             {counter}
            <span className="visually-hidden">unread messages</span>
            </span> : ''}
         </NavLink>

        
       </li>


       {/* <li className="nav-item">
         <NavLink className="nav-link position-relative" to="/wishlist">
            WishList
            <i className="fa-solid fa-heart cartIcon mx-2"></i>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             1
            <span className="visually-hidden">unread messages</span>
            </span>
         </NavLink>
       </li> */}

       <li className="nav-item">
         <NavLink className="nav-link position-relative" to="/">
            SginOut
         </NavLink>
       </li>
      
      
     </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
