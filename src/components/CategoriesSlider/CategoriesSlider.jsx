import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Categorie from '../Categorie/Categorie';
import Slider from 'react-slick';

export default function CategoriesSlider() {
 
  const [categories, setCategories] = useState([])

  async function getCatrgoriesSlider(){
       let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
       console.log(data.data);
       setCategories(data.data);
   }

   useEffect(() => {
       getCatrgoriesSlider();
   },[])

  //  return <>
   
  //  {/* <div className="container">
  //    <div className="row">
        
  //         {categories.map((brand) => <categorie key={brand._id} brand={brand}/>)}
         
  //    </div>
  // </div> */}
   
  //  </>

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
return (
  <div className='my-5 container'>
      <h3>Shop Popular Categories</h3>
    <Slider {...settings}>
    {categories.map((item) =>(
      <div className='px-1'>
              <img src={item.image} height="200" className='w-100' alt="" />
              <h6>{item.name}</h6>

      </div>
) )}
  </Slider>
  </div>)
}