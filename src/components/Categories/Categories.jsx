import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
import Categorie from '../Categorie/Categorie'

export default function Categories() {

  function getCategories(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  let {data, isLoading} = useQuery('getCategories', getCategories)
  console.log(data?.data.data);


  if(isLoading) return <Loading/>
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
       {data?.data.data.map(item => {
         return <Categorie item={item} key={item._id}/>
       })}
    </div>
      
      </div>
    </>
  )
}

