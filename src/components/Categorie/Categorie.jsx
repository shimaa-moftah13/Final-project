import React from 'react'

export default function Categorie({item}) {
  return (
    <>
    <div className='col-md-3'>
        <div className='product cursor-pointer rouded-3 p-3'>
        <img src={item.image} height="350" className='w-100' alt="" />
        <h5 className='text-main'>{item.name}</h5>
        </div>
        </div>
      
    </>
  )
}
