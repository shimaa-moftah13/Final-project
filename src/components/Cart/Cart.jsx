import React, {  useContext, useEffect, useState } from 'react'
import { storeContext } from '../../context/storeContext'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


export default function Cart() {

 let { getCart, removeItemFromCart, setCartCounter, updateQTY} = useContext(storeContext)
 const [loading, setLoading] = useState(true)
 const[cartItems, setCartItems] = useState([])

 useEffect(() => {
  (async() => {
  let data = await getCart()
  if (data?.response?.data.statusMsg == 'fail'){
    setCartItems(null)
  } else {
    setCartItems(data)
  } 
  console.log(data);
  if(data.status == 'success'){
      setCartItems(data)
      setLoading(false)
   }
  })()
}, [])


 async function deleteProduct(id){
  let data = await removeItemFromCart(id)
  // console.log(data);
  setCartItems(data)
  setCartCounter(data.numOfCartItems)
  toast.error('product deleted successfully')

 }


 async function updateProductQuantity(id, count){
  let data = await updateQTY(id, count)
  // console.log(data);
  setCartItems(data)
  setCartCounter(data.numOfCartItems)
  toast.success('product deleted successfully')

 }

  // if (cartItems.numOfCartItems == 0)
  //  return <h4 className='text-main my-5 text-center'>Your cart is empty.</h4>

  if(loading) return <Loading/>

  if( cartItems == null || cartItems.numOfCartItems == 0) return <h3 className='text-main text-center my-5'>No item in cart.</h3>
  return (
    <>
         
          <div className="container bg-main-light my-3 p-3">
            <h3>Shop Cart:</h3>
            <p className='text-main'>Total Cart Price: {cartItems?.data?.totalCartPrice} EGP</p>
            {cartItems?.data?.products.map(item =>{
              return <div key={item._id} className="row border-bottom py-2">
              <div className="col-md-1">
                <img src={item.product.imageCover} className='w-100' alt="" />
              </div>
              <div className="col-md-11 d-flex justify-content-between">
                <div>
                  <h5>{item.product.title}</h5>
                  <p className='text-main'>Price: {item.price} EGP</p>
                  <button onClick={()=> deleteProduct(item.product?._id)} className='btn m-0 p-0 mt-2'><i className="fa-solid fa-trash-can text-main"></i>  Remove</button>
                </div>

                <div>
                  <button  onClick={()=> updateProductQuantity(item.product._id, item.count + 1)} className='btn brdr'>+</button>
                  <span className='mx-2'>{item.count}</span>
                  <button disabled={item.count <= 1 } onClick={()=> updateProductQuantity(item.product._id, item.count - 1)} className='btn brdr'>-</button>
                </div>
              </div>
               </div>
            })}
           

           <Link to={`/address/${cartItems.data._id}`} className='btn bg-main text-white my-3'>Place Order</Link>

            </div>   


    </>
  )
}
