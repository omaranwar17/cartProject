import React from 'react'
import Slider from "react-slick";

export default function ProductImgeSlider({imge}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
           <Slider {...settings}>
     {imge?.map((src) =>{
      return(
        <>
        <img className=" h-full  mx-auto object-cover rounded-lg " src={src} alt={src} />
        </>
      )
     })}
    </Slider>
      
    </div>
  )
}
