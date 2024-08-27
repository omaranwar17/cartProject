import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode'
import {Helmet} from 'react-helmet'
import axios from 'axios'
import LodingScreen from '../LodingScreen/LodingScreen'


export default function Order() {
 const {id}= jwtDecode(localStorage.getItem('token'))
 const [isLood , setIsLood] = useState(false)
 const [isData , setIsData] = useState(false)

console.log(id);

 async function allOrders(){
  setIsLood(true)
 await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`).then((res)=>{
  res.data
  console.log(res.data);
  setIsData(res.data)
  setIsLood(false)
 }).catch((error)=>{
  console.log(error);
  setIsLood(false)
  
 })

 


 }
 useEffect(()=>{
allOrders()
 },[])


 
 
  return (
    <>
    <>
    <Helmet>
<title> orders </title>


      </Helmet>
    
    
    </>

    {isLood ? <LodingScreen/> :     <div className=" w-full mx-auto mt-12">
      <div className="mx-auto  px-6  xl:px-0">
      <div className="rounded-lg ">
      { isData? isData.map((data , ids)=>{
        return (
          <>
          <div key={ids} className=" bg-gray-100 mt-4 w-full text-center py-24">
<div className=" grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-6 gap-4 text-center">
  {data.cartItems.map((img)=>{
    return(
      <>
      

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mb-8  dark:border-gray-700">
  
    <img className=" rounded-lg" src={img.product.imageCover} alt={img.product.imageCover} />

  <div className="p-5">
 
      <h5 className="mb-2 text-gray-400 line-clamp-1"> {img.product.title}</h5>
      <h5 className="mb-2 text-gray-400 line-clamp-1"> {img.product.brand.name}</h5>

    <p className=' text-gray-400 text-nowrap'>{img.product.category.name    }</p>
   
    
  </div>
</div>


    
 
      
      </>
    )
  })  }


</div>
<div className=" bg-gray-200 rounded-lg py-8">
<h3>
total Order Price : {data.totalOrderPrice}

</h3>
<h4>payment Method Type : {data.paymentMethodType}
</h4>
</div>



          </div>
          
          
          
          </>
        )

      }) : ''}
      </div>
      </div>
     

    </div>}

  
    
    
    
    
    
    
    
    </>


  )
}
