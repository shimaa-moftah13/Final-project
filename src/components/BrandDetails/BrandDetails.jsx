import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function BrandDetails() {


    // let {counter, setCounter} = useContext(storeContext)

   let x = useParams();
   console.log(x);
   const [brand, setBrand] = useState({});
   const [loading, setLoading] = useState(true)

  async function getBrand(){
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${x.id}`)
  setBrand(data.data)
  setLoading (false) 
}
useEffect(()=>{ 
    getBrand()
}, [])

if(loading) return <Loading/>
  return (
    <div>
    <div className='container my-5'>
         <div className='row mt-5'>
          <div className='col-md-3'>
              <img src={brand.image} className='w-100' alt="" />
          </div>
          <div className='col-md-9'>
              <h4>{brand.name}</h4>
            
         
          </div>
         </div>
    </div>
  </div>
  )
}
