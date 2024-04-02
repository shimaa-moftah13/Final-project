import React from 'react'
import { Link } from 'react-router-dom'

export default function Brand({item}) {
  




  return (
    <>
      
      <div className='col-md-2'>
        <div className='product cursor-pointer rouded-3 p-3'>
         <Link to={'/brand-details/'+ item._id}>
         <img src={item.image} className='w-100' alt="" />
         </Link>

        </div>
       </div>
    </>
  )
}
