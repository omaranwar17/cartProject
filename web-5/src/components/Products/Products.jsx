import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'
import LodingScreen from '../LodingScreen/LodingScreen'
import RateAverge from '../RateAverge/RateAverge';
import { cartsProduct } from '../../ConText/ConText';
import toast from 'react-hot-toast';


export default function Products() {

  const [ products , setProduct] = useState(null)
  const [ isLood , setIsLood] = useState(false)


  const {addToProduct}  = useContext(cartsProduct)


  async function addItemsProduct(id){
 let data = await addToProduct(id)
 console.log(data);
 toast.success(data.data.message, {
   duration: 4000,
   position: 'top-lift',
 });
   }




async function AllProduct(){

  setIsLood(true)
   await axios.get('https://ecommerce.routemisr.com/api/v1/products').then((res)=>{
    
    console.log(res.data.data);
    setProduct(res.data.data)
    setIsLood(false)
    
  }).catch((error)=>{
    console.log(error);
    setIsLood(false)
  })
}
useEffect(()=>{
AllProduct()
},[])

function Filter(event){
  setProduct(products.filter((f) => f.title.toLowerCase().includes(event.target.value))  )
  
    }



  return (

<>
<>

<Helmet>
<title> categories </title>

      </Helmet>



</>

<>
<div className="relative z-0 w-9/12 mx-auto my-10 group">
  <input  onChange={Filter} onBlur={Filter} type="text" name="floating_serach" id="floating_serach" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
  <label htmlFor="floating_serach" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> serach</label>
</div>


{isLood ?  <LodingScreen/>  : <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 ">


{products?.map((prod , ids)=>{
  return(
  <>
  
<div key={ids} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow product dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg" src={prod.imageCover} alt />

<div className="p-5">

<h5 className="mb-3 font-normal text-gray-400 line-clamp-1 ">{prod.title}</h5>
<p className=' line-clamp-1 text-gray-400'>{prod.category.name}</p>
<p className=' line-clamp-1 text-gray-400'>{prod.price} EGp</p>

</div>
<RateAverge rateing={prod?.ratingsAverage ?? 0}/>
<div className="pb-8 text-center">
<button onClick={()=> addItemsProduct(prod._id)}  href="#" className=" text-white bg-green-500 w-full py-3 btn rounded-lg ">Add to product
        
        </button> 
</div>

</div>







     </>

      )
    })}


    </div>}
    </>











</>






  


  )
}
