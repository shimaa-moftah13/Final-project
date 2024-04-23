import React from 'react'
import styles from './Footer.module.css';
import paypal from "../../assets/imgs/PayPal-Logo.png"
import americanexpress from '../../assets/imgs/americanexpress.23e3b98512ffad5d0ad1.png'
import masterCart from "../../assets/imgs/mastercard_logo.svg__3.png"
import download from "../../assets/imgs/doenload.png"
export default function Footer() {
  return (

    <>

<div className="bg-body-tertiary mt-5">
        <div className="container py-4  ">
          <div className="">
            <h2>Get the Frech Cart App</h2>
            <p>We will send you a link, ioen it on your phone to download the app</p>
            <div className="row">
              <div className="col-md-9">
                <input type="email" className="form-control" placeholder="Email..." />
              </div>
              <div className="col-md-3 btnFooter">
                <button className='  btn btn-success bg-main'>Share App Link</button>
              </div>
            </div>
            <hr />
          </div>

          <div className=" d-flex px-3 py-2 justify-content-between">
            <div className=" d-flex">
              <p className={`fw-bold px-1`}>payment partners</p>
              <div className=" row">
                <img src={masterCart} height="60"   className='width col-md-6' alt="" />
                <img src={paypal} height="60"   className='width col-md-6' alt="" />
              </div>
            </div>
            <div className=" d-flex px-2 py-2 overflow-hidden">
              <p className={` ${styles.pp}fw-bold`}>Get deliveries with FreshCart</p>
              <div className=" d-flex overflow-hidden">
                <img src={download} height="90"  className={`${styles.widthfootr}`} alt="" />
              </div>
            </div>

          </div>
          <div className="">
            <div className=" text-center">
              <p className="copyright m-0 fs-6">
                © 2024 Shimaa Moftah  , All Rights Reserved

              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}