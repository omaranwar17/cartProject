import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'



export default function CartProducts({item , setProduct , product, setIsLoding}) {
  const [ isIncreaseLoading , setIsIncreaseLoading] = useState(false)
  const [ isDncreaseLoading , setIsDncreaseLoading] = useState(false)
  const [ productCount , setProductCount] = useState(item.count)
    async function dliteCarts(productId  ){
 
        let {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId ,{
         headers:{
          token: localStorage.getItem('token')
         }
            
        }, )
       
        console.log(data);
       setProduct(data)
     
        toast.success('product has been removed successfully', {
          duration: 4000,
          position: 'top-lift',
        });
      }


      async function updiutCarts(productId  , count ){
        if (count > item.count){
            setIsIncreaseLoading(true)
        }else {
          setIsDncreaseLoading(true)
        }

   
       
        let {data}= await axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId,{
            count
        },{
            headers: {
                token: localStorage.getItem('token')
            }
        } ,
        
     )
     setIsIncreaseLoading(false)
     setIsDncreaseLoading(false)
        console.log(data);
        setProduct(data)
       

      
      
   
    }

useEffect(()=>{
    setProductCount(item?.count)
},[product])



      
  



  return (
    <div>
      
      <div  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">

<img src={item?.product.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40" />
<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
  <div className="mt-5 sm:mt-0">
    <h2 className="text-lg line-clamp-1  text-gray-500">{item?.product.title}</h2>
    <p className="mt-1 text-xs text-gray-700">{item?.price} EGp</p>
  </div>
  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
    <div className="flex items-center border-gray-100">
      <button disabled={item.count == 1 || isDncreaseLoading} onClick={()=> updiutCarts(item?.product._id, item?.count - 1  )} className="cursor-pointer rounded-l bg-gray-100 disabled:hover:bg-gray-100 disabled:hover:text-black py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 disabled:cursor-not-allowed"> {isDncreaseLoading ?  <i className='fa-solid fa-spinner fa-spin px-1'></i>:  '-'}</button>
      <input onBlur={()=> item?.count != productCount && updiutCarts(item?.product._id, productCount)}  onChange={(e)=> setProductCount(e.target.value)}  className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" Value={productCount} min={1} />
      <button  disabled={isIncreaseLoading} onClick={()=> updiutCarts(item?.product._id, item?.count + 1  )} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> {isIncreaseLoading ?  <i className='fa-solid fa-spinner fa-spin px-1'></i>:  '+'} </button>
    </div>
    <div className="flex items-center space-x-4">
      <p className="text-sm">{item?.price * item?.count}</p>
      <svg onClick={()=> dliteCarts(item?.product._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

