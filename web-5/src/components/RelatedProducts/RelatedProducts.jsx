import React from 'react'
import RateAverge from '../RateAverge/RateAverge'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';


export default function RelatedProducts({Products}) {


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
      };
  return (
    <div className='mt-16 pb-16'>
     
<Slider {...settings}>
{
  Products.map((product , index)=> {
    return (
      <>
      <div key={index} className="   px-2 pb-8   max-w-sm overflow-hidden">
        <div className="px-5 shadow-md rounded-md">
        <div className="pt-4">
  <img className="rounded-lg" src={product.imageCover} alt={product.imageCover} />

 <Link to={'/productDetils/' + product._id}>
 <h5 className="mb-2 line-clamp-1 text-gray-400">{product.title}</h5>
 </Link>
  </div>
  <div className="">

  <RateAverge rateing={product.ratingsAverage}/>
     <div className="">
     <span className="mb-2 text-gray-400 tracking-tight ">{product.category.name}</span>
     </div>
     <div className="">
     <span className="text-2xl font-bold text-gray-400">${product.price}</span>
     </div>
   
    <div className="pt-5">
    <p className="mb-3 font-normal line-clamp-2 text-gray-700 dark:text-gray-400">{product.description} </p>
    </div>
   
     
   <div className=" flex items-center">
   <button href="#" className="text-white bg-blue-700   focas">Add to cart
        
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1 ml-4 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                 </svg>
   </div>
  
        
            

         
    
   
  </div>
        </div>
  
      </div>
  
      
      
      </>
    )
 
  
   

  })
}


</Slider>
</div>
   
  )
}
