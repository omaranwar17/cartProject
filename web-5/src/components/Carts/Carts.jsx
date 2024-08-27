  import axios from 'axios'
 import React, {  useEffect, useState } from 'react'
import LodingScreen from '../LodingScreen/LodingScreen'
import toast from 'react-hot-toast'
import CartProducts from '../CartProducts/CartProducts'
import { Link, useParams } from 'react-router-dom'
import {Helmet} from 'react-helmet'

 

 export default function Carts() {
  const [product , setProduct] = useState(null)
  const [isLoding , setIsLoding] = useState(true)

  useEffect(()=>{
    getCarts()
      },[])


  async function getCarts(){
    setIsLoding(true)
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token: localStorage.getItem('token')
      },
    },).finally(()=>{
      setIsLoding(false)
    })
  
    console.log(data);
    setProduct(data)
    
    
  }



  async function removesCarts(){
  setIsLoding(true)
    let {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token: localStorage.getItem('token')
      },
    },) .finally(()=>{
      setIsLoding(false)
      setProduct(null)
    })
  
  console.log(data);
  toast.success(' success', {
    duration: 4000,
    position: 'top-lift',
  });

  
  }

 










if(isLoding){
return(
<>
<LodingScreen/>

</>

)

}



  return (

    <>
    <>
    
    
    <Helmet>
<title> cart </title>

      </Helmet>
    
    
    
    </>
    
    
    
    
    
    <>



  {product    ?  <div className=" pt-20">
  <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-2/3">
  {product?.data.products.map((item , index) =>{
    return (
      <>

     <CartProducts item={item} key={index} setProduct={setProduct} product={product}  setIsLoding={setIsLoding}/>
      
      </>
    )    
  })}
      
    </div>
    
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">

  
   
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{product?.data.totalCartPrice}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">0</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className>
          <p className="mb-1 text-lg font-bold">{product?.data.totalCartPrice} USD</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <Link to={'/shippingAdress/' + product?.data._id} className="mt-6 w-full rounded-md text-white text-center focas block">Check out</Link>
    </div>
  </div>
  <div className="py-5  ">
  <button onClick={removesCarts} className=' text-red-500 border-2 border-red-500 mx-auto hover:text-white hover:bg-red-500 block    py-3 px-10 text-center  rounded-lg '>remove</button>
</div>

</div>: <h2 className=' text-2xl font-bold text-center'> not items carts</h2>}

    </>
    
    
    
    
    
    
    </>







    
  
     
          




          
          
          
        
    
  
  )
}
















  











