import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { storeContext } from '../../context/storeContext'

export default function Address() {
    let navigate = useNavigate()
    // =========custom validation with formik===========//
    // function validate(values){
  
    //   const myError = {}
  
    //   if (!values.name){
    //     myError.name = 'name is required.'
    //   }
    //   if (!values.email){
    //     myError.email = 'email is required.'
    //   }
    //   if (!/^[A-Z][A-Za-z0-9@]{6,}$/.test(values.password)){
    //     myError.password = 'Password must be 7 characters or more and start with capital letter.'
    //   }
    //   if (values.rePassword != values.password){
    //     myError.rePassword = 'Password ane rePassword not match.'
    //   }
    //   if (!values.phone){
    //     myError.phone = 'phone is required.' 
    //   }
      
    //   return myError
    // }
  // =====================================================//
  
  // ========= send data to backend=========//
  let {id}=useParams()
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)
  let {pay} = useContext(storeContext) 

 async function payOnline(){
  let data = pay()
  }

 
  
 async function sendDataToApi( values){
    setLoading(false)
    let data = await pay(id, values) 
      console.log(data);
      if(data.status == 'success'){
        window.location.href=data.session .url
      }
    }
   
  
  
 
   let address = useFormik({
       initialValues:{
        details:'',
        phone:'',
        city:''
       },
  
       onSubmit:(values)=>{
         
          // convert to json
          // send to api
          sendDataToApi(values)
       }
   })
     

    return (
      <div className='w-75 m-auto my-5'>
        <h2>Address Now:</h2>
                {/* <input value={login.values.name} onChange={login.handleChange} className='form-control mb-3' type="text" name='name' id='Name' /> */}
        <form onSubmit={address.handleSubmit}>
  
          <label htmlFor="Details">Details:</label>
          <textarea onBlur={address.handleBlur} onChange={address.handleChange} className='form-control mb-3' type="text" name='details' id='Details' />
  
          <label htmlFor="Phone">Phone:</label>
          <input onBlur={address.handleBlur} onChange={address.handleChange} className='form-control mb-3' type="numper" name='phone' id='Phone' />

              <label htmlFor="City">City:</label>
          <input onBlur={address.handleBlur} onChange={address.handleChange} className='form-control mb-3' type="text" name='city' id='City' />
                         
          {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ''}
                                  {/* fales */}
          <button disabled={!(address.dirty && address.isValid)} className='btn bg-main text-white' type='submit'>
              {loading ? 'Pay' : <i class="fa-solid fa-spinner fa-spin-pulse"></i>}  
            </button>
       
        </form>
        
      </div>
    )
  }
