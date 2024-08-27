
import React, { useContext } from 'react'
import RateAverge from '../RateAverge/RateAverge'
import { Link  } from 'react-router-dom'
import { cartsProduct } from '../../ConText/ConText'
import toast from 'react-hot-toast'

// 





export default function Productess({product}) {
  const {addToProduct}  = useContext(cartsProduct)


 async function addItemsProduct(id){
let data = await addToProduct(id)

console.log(data);
toast.success(data.data.message,{
  duration: 4000,
  position: 'top-lift',
});
  }





  return (
    <>
    
   <div className='product'>


   <Link to={`/ProductDetils/${product._id}`}>
<div  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800   dark:border-gray-700">
    <img className="p-8 rounded-t-lg" src={product.imageCover} alt="product image" />
    </div>
  </Link>
  <div className="px-5 pb-5">
    
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">{product.title}</h5>
      <p className=' line-clamp-2'>{product.description}</p>
      </div>
   

    <RateAverge rateing={product.ratingsAverage}/>
    <div className="pb-4">
      <span className="  ">{product.price} EGp</span>
      </div>
      <button onClick={()=> addItemsProduct(product._id)}   href="#" className="text-white bg-green-500 w-full py-2 rounded-lg btn  ">Add to cart</button>
     


   </div>
    
  
  
  
    </>
    
  
  
  
  
  
  

      
    
  )
}
