import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Signup() {

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
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
  .then(({data}) =>{
    console.log(data);
    if(data.message =='success'){
      navigate('/signin')
    }
  }).catch((error) =>{
      setErrorMsg(error.response.data.message);
      setLoading(true)
  })
  
}


// ==========validation with yup============
  function validationSchema(){

    let schema = new Yup.object({
       name:Yup.string().min(2).max(20).required(),
       email:Yup.string().email().required(),
       password:Yup.string().matches(/^[A-Z][a-zA-Z0-9@]{6,}$/, 'password must match').required(),
       rePassword:Yup.string().oneOf([Yup.ref('password')], 'Password ane rePassword not match.').required(),
       phone:Yup.number().required()
    })

    return schema
  }

// ===============================================



 let register = useFormik({
     initialValues:{
      // name:'shimaa',
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
      
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
      <h2>Register Now:</h2>
              {/* <input value={register.values.name} onChange={register.handleChange} className='form-control mb-3' type="text" name='name' id='Name' /> */}
      <form onSubmit={register.handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input onBlur={register.handleBlur} onChange={register.handleChange} className='form-control mb-3' type="text" name='name' id='Name' />
         {register.errors.name && register.touched.name ? <div className='alert alert-danger'>{register.errors.name}</div> :''}

        <label htmlFor="Email">Email:</label>
        <input onBlur={register.handleBlur} onChange={register.handleChange} className='form-control mb-3' type="email" name='email' id='Email' />
        {register.errors.email && register.touched.email ? <div className='alert alert-danger'>{register.errors.email}</div> :''}

        <label htmlFor="Password">Password:</label>
        <input onBlur={register.handleBlur} onChange={register.handleChange} className='form-control mb-3' type="password" name='password' id='Password' />
        {register.errors.password && register.touched.password ? <div className='alert alert-danger'>{register.errors.password}</div> :''}

        <label htmlFor="Repassword">Repassword:</label>
        <input onBlur={register.handleBlur} onChange={register.handleChange} className='form-control mb-3' type="password" name='rePassword' id='Repassword' />
        {register.errors.rePassword && register.touched.rePassword ? <div className='alert alert-danger'>{register.errors.rePassword}</div> :''}

        <label htmlFor="Phone">Phone:</label>
        <input onBlur={register.handleBlur} onChange={register.handleChange} className='form-control mb-3' type="phone-number" name='phone' id='Phone' />
        {register.errors.phone && register.touched.phone ? <div className='alert alert-danger'>{register.errors.phone}</div> :''}
                          
        {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ''}
                                {/* fales */}
        <button disabled={!(register.dirty && register.isValid)} className='btn bg-main text-white' type='submit'>
            {loading ? 'Signup' : <i className="fa-duotone fa-spinner fa-spin-pulse"></i>}  
          </button>
     
      </form>
      
    </div>
  )
}
