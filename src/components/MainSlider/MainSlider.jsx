import React from 'react'
import Slider from 'react-slick';
import slide1 from "../../assets/imgs/0c96d731-8567-4b67-938f-3371927f9bea.avif"
import slide2 from  "../../assets/imgs/771300d9-3989-43c1-a1d6-36d6c9512a41.avif"
import slide3 from  "../../assets/imgs/993ed680-04f8-4a6e-886c-0c73e2f88697.avif"
import slide4 from  "../../assets/imgs/en_dk_eg-hero-01-hp.1709836033.7556522.avif"
import slide5 from  "../../assets/imgs/en_dk_eg-hero-01.1709663908.0830445.avif"
export default function MainSlider() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500
    };
  return (
    <div>
      
      <Slider {...settings}>
      <img src={slide1} alt="" />
      <img src={slide2} alt="" />
      <img src={slide3} alt="" />
      <img src={slide4} alt="" />
      <img src={slide5} alt="" />
    </Slider>
    </div>
  )
}
