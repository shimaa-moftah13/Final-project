import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainSlider from './components/MainSlider/MainSlider'
import Categories from './components/Categories/Categories'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Brands from './components/Brands/Brands'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Cart from './components/Cart/Cart'
import Wishlist from './components/Wishlist/Wishlist'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import AuthLayout from './Layouts/AuthLayout'
import NotFound from './components/NotFound/NotFound'
import ProductDatails from  './components/productDetails/productDetails' 
import { Offline, Online } from "react-detect-offline";
import ProtectedRoutes from './ProtectedRpotes/ProtectedRoutes'
import StoreContextProvider from './context/storeContext'
import BrandDetails from './components/BrandDetails/BrandDetails'
import CategoriesSlider from './components/CategoriesSlider/CategoriesSlider'
import { ToastContainer, toast } from 'react-toastify';
import Address from './components/Address/Address'
import TokenContextProvider, { TokenContext } from './context/Token'
export default function App() {

  let {setToken} = useContext(TokenContext)

  let router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
      {index: true, element: <ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path: 'home', element: <ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path: 'home', element: <ProtectedRoutes> <CategoriesSlider/> </ProtectedRoutes>},
      {path: 'categories', element: <ProtectedRoutes> <Categories/> </ProtectedRoutes>},
      {path: 'products', element: <ProtectedRoutes> <Products/> </ProtectedRoutes>},
      {path: 'brands', element: <ProtectedRoutes> <Brands/> </ProtectedRoutes>},
      {path: 'cart', element: <ProtectedRoutes> <Cart/> </ProtectedRoutes>},
      {path: 'wishlist', element: <ProtectedRoutes> <Wishlist/> </ProtectedRoutes>},
      {path: 'product-details/:id', element: <ProtectedRoutes> <ProductDatails/> </ProtectedRoutes>},
      {path: 'brand-details/:id', element: <ProtectedRoutes> <BrandDetails/> </ProtectedRoutes>},
      {path: 'address/:id', element: <ProtectedRoutes> <Address/> </ProtectedRoutes>},

      {path: '*', element: <NotFound/>}
    ] },

    {path: '', element: <AuthLayout/>, children:[
      
      {path: 'signup', element: <Signup/>},
      {path: 'signin', element: <Signin/>}
      
    ] }
  ])

  useEffect(()=>{
    if (localStorage.getItem("userToken") != null) {
      setToken(localStorage.getItem("userToken"));
    }
  })
  return (
    <>
      
    <Offline>
      <div className='offline'>You are offline now!</div>
    </Offline>

    <ToastContainer theme='colored' autoClose={300}/>
    
   <StoreContextProvider>
      <RouterProvider router={router}/>
   </StoreContextProvider>
        
  
    
    
  
      {/* <Navbar/>
      <MainSlider/>
      <Categories/> */}
    </>
  )
}

