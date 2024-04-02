import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading.jsx'
import Product from '../Product/Product.jsx'
import { useQuery } from 'react-query'


export default function Products() {

// ============with react query============//

function getProducts(){
 return axios.get('https://ecommerce.routemisr.com/api/v1/products')
}

let {data, isError, isFetching,isLoading, refetch} = useQuery('getProducts', getProducts)
console.log(data?.data.data);
console.log('L',isLoading);
console.log('f',isFetching);


// ==========custom===========//

// const [products, setProducts] =useState([])
// const [loading, setLoading] = useState(true)

//  async function getProducts(){
//     let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
//     setProducts(data.data);
//     setLoading(false)
//   }

//   useEffect(()=>{
//     getProducts();
//   }, [])

  if(isLoading) return <Loading/>

  return  <>

  {/* <button onClick={refetch}>refetch</button> */}
   <div className='container my-5'>
    <div className='row'>
       {data?.data.data.map(item => {
        return <Product item={item} key={item._id}/>
       })}
    </div>
      
      </div>
  </>
   
  
}
