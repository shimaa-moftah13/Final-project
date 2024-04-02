import axios from "axios";
import { useState } from "react";

import { createContext } from "react";
import { baseURL } from "../utilts/baseUrl";

export let storeContext = createContext(0)




function addToCart(productId){
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

 async function removeItem(productId){
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




export default function  StoreContextProvider({children}){
  
     let [counter, setCounter] = useState(0)


    //===========share with========//
    return <storeContext.Provider value={
        {counter, 
        setCounter, 
        addToCart,
        getCart,
        removeItem,
        updateQTY,
        pay
        }}>
        {children}
        </storeContext.Provider>
}

