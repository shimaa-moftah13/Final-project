import React from 'react'
import Slider from 'react-slick';
import slide1 from "../../assets/imgs/sliderimgs/2c2a1e95-c958-4124-9e1e-6653b5938d1d.avif"
import slide2 from  "../../assets/imgs/sliderimgs/0c96d731-8567-4b67-938f-3371927f9bea.avif"
import slide3 from  "../../assets/imgs/sliderimgs/54fbd692-db14-455f-a2ee-ea4c8eb3c4bb.avif"
import slide4 from  "../../assets/imgs/sliderimgs/en_dk_eg-hero-01-hp.1709836033.7556522.avif"
import slide5 from  "../../assets/imgs/sliderimgs/en_dk_eg-hero-01.1709663908.0830445.avif"
import slide6 from  "../../assets/imgs/sliderimgs/5df81a70-b730-404f-bd4b-55dd0f955059 (1).avif"
import slide7 from  "../../assets/imgs/sliderimgs/7595deab-f849-4a7a-a7d0-84865ca551f6.avif"
import slide8 from  "../../assets/imgs/sliderimgs/en_dk_eg-hero-01.1713188500.559499.avif"

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
      <img src={slide7} alt="" />
      <img src={slide6} alt="" />
      <img src={slide8} alt="" />
    </Slider>
    </div>
  )
}
