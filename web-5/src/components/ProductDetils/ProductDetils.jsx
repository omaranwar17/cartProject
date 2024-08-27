import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import RateAverge from '../RateAverge/RateAverge';
import RelatedProducts from '../RelatedProducts/RelatedProducts'
import axios from 'axios';


import LodingScreen from '../LodingScreen/LodingScreen';
import ProductImgeSlider from '../ProductImgeSlider/ProductImgeSlider';
import { cartsProduct } from '../../ConText/ConText';
import toast from 'react-hot-toast';



export default function ProductDetils() {

  const {addToProduct}  = useContext(cartsProduct)


 async function addItemsProduct(id){
let data = await addToProduct(id)
console.log(data);
toast.success(data.data.message, {
  duration: 4000,
  position: 'top-lift',
});
  }






  
const {id } = useParams()

const [ productDetils , setProductDetils ] = useState(null)
const [ reteProd , setreteProd ] = useState([])

const [isLoding , setIsLoding ]= useState(true)


useEffect(()=>{
GetProductDetils()
// ReteProduct()

},[id])

async function GetProductDetils(){
    setIsLoding(true)
let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + id)
setProductDetils(data.data);
ReteProduct(data.data?.category._id)
setIsLoding(false)
// console.log(data.data);

}




async function ReteProduct(categoryId){
 
  

let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products', {
params :{
  'category' : categoryId
}
  
} )
setreteProd(data.data)
console.log(data.data);






}









  return (
    <>
    {isLoding? <LodingScreen/> :    <div >
  <div className="items flex flex-col sm:flex-row sm:items-center  ">
   <div className="imge sm:w-1/3 py-6 ">
<ProductImgeSlider imge={productDetils?.images} /> 
      

  

  
        </div>
     
       
<div className=" sm:w-2/3 sm:ml-12  py-6 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productDetils?.title}</h5>
    <h5 className="mb-3 ">{productDetils?.price} EGp</h5>

<div className="">
    <h4 className='text-gray-700 dark:text-gray-400'>rateing</h4>
<RateAverge rateing={productDetils?.ratingsAverage ?? 0}/>
</div>
<div className="mt-3">
    <h4 className='text-gray-700 dark:text-gray-400'>description</h4>
    <h6 className='text-gray-700 line-clamp-2 dark:text-gray-400'>{productDetils?.description}</h6>
    </div>
    <div className="mt-3">
    <h4 className='text-gray-700 dark:text-gray-400'>catigres</h4>
    <h6 className='text-gray-700 dark:text-gray-400'>{productDetils?.category.name}</h6>
    </div>
    <div className="mt-3">
    <h4 className='text-gray-700 dark:text-gray-400'>subcatigres</h4>
    <h6 className='text-gray-700 dark:text-gray-400'>{productDetils?.subcategory[0].name}</h6>
    </div>

    <div className="mt-3">
    <h4 className='text-gray-700 dark:text-gray-400'>brand</h4>
    <h6 className='text-gray-700 dark:text-gray-400'>{productDetils?.brand.name}</h6>
    </div>

    <div className=" flex items-center">
  <button onClick={() => addItemsProduct(productDetils?.id)}  href="#" className="text-white bg-blue-700   focas">Add to cart
        
        </button> 
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-1 ml-4 text-3xl text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                 </svg>
   </div>

  </div>

  </div> 

</div>}



<RelatedProducts Products={reteProd}/>








    
    
    
    </>
 
  )
}
