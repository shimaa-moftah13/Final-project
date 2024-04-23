import axios from "axios";
import { useState } from "react";

import { createContext } from "react";
import { baseURL } from "../utilts/baseUrl";

export let storeContext = createContext(0)




async function addToCart(productId){
  return axios.post(baseURL + 'cart', {productId},{
      headers:{
        token: localStorage.getItem('token')
      }

  })
     .then(({data}) => data).catch(error=> error)
}

async function getCart(){
  return axios.get(baseURL + 'cart',{
      headers:{
        token: localStorage.getItem('token')
      }

  })
     .then(({data}) => data).catch(error => error)
}

async function removeItemFromCart(productId){
  return axios.delete(baseURL + 'cart/' + productId, {
      headers:{
        token: localStorage.getItem('token')
      }

  })
     .then(({data}) => data).catch(error=> error)
}

async function updateQTY(productId, count){
  return axios.put(baseURL + 'cart/' + productId, {count}, {
      headers:{
        token: localStorage.getItem('token')
      }

  })
     .then(({data}) => data).catch(error=> error)
}

async function pay(cartId, shippingAddress){
  return axios.post(baseURL + 'orders/checkout-session/' + cartId, {shippingAddress}, {
      headers:{
        token: localStorage.getItem('token')
      }

  })
     .then(({data}) => data).catch(error=> error)
}

async function addToWishlist(productId){
  return axios.post(baseURL + 'wishlist', {productId},{
      headers:{
        token: localStorage.getItem('token')
      }

  })
     .then(({data}) => data).catch(error=> error)
}

  async function getWishlist(){
    return axios.get(baseURL + 'wishlist',{
        headers:{
          token: localStorage.getItem('token')
        }
  
    })
       .then(({data}) => data).catch(error => error)
  }

  async function removeItemFromWishlist(productId) {
    return axios.delete(baseURL + 'wishlist/' + productId, {
        headers:{
          token: localStorage.getItem('token')
        }
  
    })
       .then(({data}) => data).catch(error=> error)
  }

  // favorite wishlist

function deleteFavHeart(productId){
  const { data } = axios.delete(baseURL + 'wishlist/' + productId,
   {
      headers: { token: localStorage.getItem("token") }
  })
  .then((res) => {
      console.log("remove fav", res.data);
      getWishlist() ;
      
      return res   
  })
  .catch((err) => {
      // console.log("err remove", err);
  });

  // console.log("fav data", data);
}

 




export default function  StoreContextProvider({children}){
  
     let [cartCounter, setCartCounter] = useState(0)
     let [wishlistCounter, setWishlistCounter] = useState(0)

     let [search, setSearch] = useState()


    //===========share with========//
    return <storeContext.Provider value={
        {cartCounter,
         setCartCounter,
         wishlistCounter,
         setWishlistCounter,
         addToCart,
         getCart,
         addToWishlist,
         getWishlist,
         deleteFavHeart,
         removeItemFromWishlist,
         removeItemFromCart,
         updateQTY,
         pay,
         search,
         setSearch
        }}>
        {children}
        </storeContext.Provider>
}

