import React from 'react'
import img1 from '../../assets/finalProject assets/images/slider-image-1.jpeg'
import img2 from '../../assets/finalProject assets/images/slider-image-2.jpeg'
import img3 from '../../assets/finalProject assets/images/slider-image-3.jpeg'

import img4 from '../../assets/finalProject assets/images/slider-2.jpeg'
import img5 from '../../assets/finalProject assets/images/grocery-banner-2.jpeg'
import Slider from 'react-slick'








export default function MainSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
       
      };
  return (
    <div>
        <h2>main slider</h2>
        <div className=" grid grid-cols-12 pb-12">
        <div className="  col-span-12 md:col-span-8  ">
        <Slider {...settings}>
            <img className='h-[400px] w-full object-cover' src={img1} alt="" />
            <img className='h-[400px] w-full object-cover' src={img4} alt="" />
            <img className='h-[400px] w-full object-cover' src={img5} alt="" />
            </Slider>
            </div>
          
        
            <div className=" col-span-12 md:col-span-4  ">
                <img className=' h-[200px] w-full object-cover' src={img2} alt="" />
                <img  className=' h-[200px] w-full object-cover'src={img3} alt="" />
            </div>
        </div>
      
    </div>
  )
}
