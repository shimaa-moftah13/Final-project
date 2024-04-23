import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { storeContext } from '../../context/storeContext';
import { toast } from 'react-toastify'
import like from "../../assets/imgs/like.svg"
import likeFill from "../../assets/imgs/like-fill.svg"

export default function ProductDetails({item}) {

  let {cartCounter, setCartCounter, wishlistCounter, setWishlistCounter, addToWishlist, deleteFavHeart} = useContext(storeContext)
   let x = useParams();
   let [product, setProduct] = useState({});
   let [loading, setLoading] = useState(true)
   let [isLiked, setIsLiked] = useState (false)

   async function addProductToWishlist(productId){
   let data = await addToWishlist(productId)
    if (data.status =='success'){
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


  async function getProduct(){
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
  setProduct(data.data)
  setLoading (false) 
 }

  useEffect(()=>{
    getProduct()
  }, [])

if(loading) return <Loading/>
  return (
    <div>
      <div className='container my-5'>
           <div className='row mt-5'>
            <div className='col-md-3'>
                <img src={product.imageCover} className='w-100' alt="" />
            </div>
            <div className='col-md-9'>
                <h4>{product.title}</h4>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='my-3'>{product.description}</p>
                  </div>
                  <div>
                  <button  type="button" className="wishlistBtn sc-b07dc364-14 dzwoLr">   
                   {!isLiked ? (
                    <img onClick={()=> addProductToWishlist(product._id)} src={like} alt="wishlist" width="20px" height="20px"className="sc-d13a0e88-1 eDnIKc"/>
                   ) : (
                    <img onClick={()=> deleteFavHeart(product._id)} src={likeFill} alt="wishlist" width="20px" height="20px"className="sc-d13a0e88-1 eDnIKc"/>
                   )}
          
                 </button>
                  </div>

                </div>
                
                <span>{product.category.name}</span>
            <div className='d-flex justify-content-between my-4'>
                <div>
                   <div>  
                   <p>{product.price} EGP</p> 
                </div>
                </div>

                <div>                
                    <i className="fa-solid fa-star rating-color"></i>
                    {product.ratingsAverage}
                </div>            
            </div>
            <button onClick={()=> setCartCounter(cartCounter + 1)} 
            className='btn bg-main text-white w-100'>Add To Cart</button>
            </div>
           </div>
      </div>
    </div>
  )
}
