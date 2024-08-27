import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'



export default function CategoriesSlider() {
  const [categres , setCategres ] = useState([])



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows:false
   
  };
 useEffect(()=>{
GetCategrsSlider()
    },[])

    async function GetCategrsSlider(){
      
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')

    
    console.log(data.data);
    setCategres(data.data)
    
    }
    
 



  return (
    <div>
        <h2 className='pb-5 text-lg'>Shop Popular Categories  </h2>
        
        <Slider {...settings}>
            {categres.map((img ) =>{
                return (
                    <>
                 
                    <div key={img.id} className=" mt-10 mx-2">
                    <img className=' rounded-lg px-2 h-[350px] w-full object-cover' src={img.image} alt={img.image} />
                    <h5 className='text-center text-gray-500 mt-4 text-sm'>{img.name}</h5>
                    </div>
                 
                    
                    
                    
                    
                    </>
                )
            })}

        </Slider>
      
    </div>
  )
}

