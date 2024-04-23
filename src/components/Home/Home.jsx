import React, { useState, useContext } from 'react'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
import Products from '../Products/Products'
import { storeContext } from '../../context/storeContext'
import Footer from '../Footer/Footer'


export default function Home() {
 
  return (
    <div>
      <MainSlider/>
      <CategoriesSlider/>
      <Products/>
      <Footer/>
    </div>
  )
}

