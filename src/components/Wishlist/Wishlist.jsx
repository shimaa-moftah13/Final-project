import React, {  useContext, useEffect, useState } from 'react'
import { storeContext } from '../../context/storeContext'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


export default function Wishlist() {

 let { getWishlist, removeItemFromWishlist,wishlistCounter, setWishlistCounter, } = useContext(storeContext)
 const[wishlistItems, setwishlistItems] = useState([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  (async() => {
  let data = await getWishlist()
  console.log(data);
  if(data.status == 'success'){
    setwishlistItems(data)
    setLoading(false)
  }
  })()
}, [ ])

if(loading) return <Loading/>


 async function deleteProductFromWishlist(productId){
  let data = await removeItemFromWishlist(productId)
  console.log(data);
  setwishlistItems(data)
  setWishlistCounter(wishlistCounter - 1)
  toast.error('Product removed successfully from your wishlist !')

 }


  if( wishlistItems == null || wishlistItems.count == 0)
   return <h3 className='text-main text-center my-5'>No item in your wishlist.</h3>


  return (
    <>
         
          <div className="container bg-main-light my-3 p-3">
            <h3>Your Wishlist:</h3>
            
            {wishlistItems?.data?.map(item =>{
              return <div key={item?._id} className="row border-bottom py-2">
              <div className="col-md-1">
                <img src={item.imageCover} className='w-100' alt="" />
              </div>
              <div className="col-md-11 d-flex justify-content-between">
                <div>
                  <h5>{item.title}</h5>
                  <p className='text-main'>Price: {item.price} EGP</p>
                  <button onClick={()=> deleteProductFromWishlist(item?._id)} 
                     className='btn m-0 p-0 mt-2'>
                     <i className="fa-solid fa-trash-can text-main"></i>
                      Remove
                  </button>
                </div>

                
              </div>
               </div>
            })}

            </div>   


    </>
  )
}
