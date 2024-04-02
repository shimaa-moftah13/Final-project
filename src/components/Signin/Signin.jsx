import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Signin() {

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

const [errorMsg, setErrorMsg] = useState('')
const [loading, setLoading] = useState(true)

function sendDataToApi(values){
  setLoading(false)
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
  .then(({data}) =>{
    console.log(data);

    if (data.message =='success'){
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
  }).catch((error) =>{
      setErrorMsg(error.response.data.message);
      setLoading(true)
  })
  
}


// ==========validation with yup============
  function validationSchema(){

    let schema = new Yup.object({
      
       email:Yup.string().email().required(),
       password:Yup.string().matches(/^[A-Z][a-zA-Z0-9@]{6,}$/, 'password must match').required(),
   
    })

    return schema
  }

// ===============================================



 let login = useFormik({
     initialValues:{
      // name:'shimaa',
     
      email:'',
      password:'',
     
      
     },
         validationSchema,

     onSubmit:(values)=>{
       
        // convert to json
        // send to api
        sendDataToApi(values)
     }
 })
   



  return (
    <div className='w-75 m-auto my-5'>
      <h2>login Now:</h2>
              {/* <input value={login.values.name} onChange={login.handleChange} className='form-control mb-3' type="text" name='name' id='Name' /> */}
      <form onSubmit={login.handleSubmit}>

        <label htmlFor="Email">Email:</label>
        <input onBlur={login.handleBlur} onChange={login.handleChange} className='form-control mb-3' type="email" name='email' id='Email' />
        {login.errors.email && login.touched.email ? <div className='alert alert-danger'>{login.errors.email}</div> :''}

        <label htmlFor="Password">Password:</label>
        <input onBlur={login.handleBlur} onChange={login.handleChange} className='form-control mb-3' type="password" name='password' id='Password' />
        {login.errors.password && login.touched.password ? <div className='alert alert-danger'>{login.errors.password}</div> :''}
                          
        {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ''}
                                {/* fales */}
        <button disabled={!(login.dirty && login.isValid)} className='btn bg-main text-white' type='submit'>
            {loading ? 'Signin' : <i className="fa-duotone fa-spinner fa-spin-pulse"></i>}  
          </button>
     
      </form>
      
    </div>
  )
}
