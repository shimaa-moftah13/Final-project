import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../../context/storeContext'
import { toast } from 'react-toastify'
import like from "../../assets/imgs/like.svg"
import likeFill from "../../assets/imgs/like-fill.svg"


export default function Product({item}) {
 
let {cartCounter, setCartCounter, wishlistCounter, deleteFavHeart, setWishlistCounter, addToCart, addToWishlist, search, setSearch} = useContext(storeContext)
 let [btnLoading, setBtnLoading] = useState (true)
 let [isLiked, setIsLiked] = useState (false)

async function addProductToCart(productId){
  setBtnLoading(false)
 let data = await addToCart(productId)
 console.log(data);
  if (data.status =='success'){
    setBtnLoading(true)
    setCartCounter(data.numOfCartItems)
    toast.success("Product added successfully !")
  }
} 

async function addProductToWishlist(productId){
  setBtnLoading(false)
 let data = await addToWishlist(productId)
 console.log(data);
  if (data.status =='success'){
    setBtnLoading(true)
    setWishlistCounter(wishlistCounter + 1)
    toast.success("Product added successfully to your wishlist !")
  }
   setIsLiked(true);
}

// remove heart
async function removeHeart(productId) {
  await deleteFavHeart(productId);
  setIsLiked(false);
}


  return (
    <>
      
      <div className='col-md-2'>
      <button  type="button" className="wishlistBtn sc-b07dc364-14 dzwoLr">   
          {!isLiked ? (
           <img onClick={()=> addProductToWishlist(item._id)} src={like} alt="wishlist" width="20px" height="20px"className="sc-d13a0e88-1 eDnIKc"/>
        ) : (
          <img onClick={()=> deleteFavHeart(item._id)} src={likeFill} alt="wishlist" width="20px" height="20px"className="sc-d13a0e88-1 eDnIKc"/>
        )}
          
      </button>
      

        <div className='product cursor-pointer rouded-3 p-3'>
         <Link to={'/product-details/'+ item._id }>
         <img src={item.imageCover} className='w-100' alt="" />
          <span className='text-main'>{item.category.name}</span>
          <h6 className='my-2 fw-bold'>{item.title.split(' ').slice(0,2).join(' ')}</h6>

          <div className='d-flex justify-content-between my-3'>
            <div>
              {item.price} EGP
            </div>
            <div>
            <i className="fa-solid fa-star rating-color"></i>
              {item.ratingsAverage}
            </div>
          </div>
         </Link>

          <button disabled={!btnLoading} onClick={()=> addProductToCart(item._id)} 
             className='btn bg-main w-100 text-white '>
            {btnLoading? ' Add To Cart' : 'Loading...'}
           
            </button>
           

        </div>
       </div>
    </>
  )
}
