import React, { useContext, useEffect, useState } from 'react'
import LodingScreen from '../LodingScreen/LodingScreen'

import {Helmet} from 'react-helmet'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import AllCategories from '../AllCategories/AllCategories'


export default function Categories() {
  const [categr , setCategr] = useState(false)

  const [lood , setIsLood] = useState(false)


 
  





  function AllCategres(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    
  }
 let  { data , isLoading } = useQuery({
  queryKey: ['categres'],
  queryFn: AllCategres,
  retry: Infinity,
  retryDelay: 2000,

  })
  console.log(data);
  console.log('data=>' , isLoading);


  async function IdCategres(categresId){
    setIsLood(true)

    await axios.get('https://ecommerce.routemisr.com/api/v1/categories/' + categresId).then((res)=>{
     
      console.log(res.data.data);
      setCategr(res.data.data)
      setIsLood(false)
      
    }).catch((error)=>{
      console.log(error);
      setIsLood(false)
    })
  }


  return (
    <>
     <>
    
    
    <Helmet>
<title> categories </title>

      </Helmet>
    
    </>


    <>

   


{isLoading ?  <LodingScreen/>  : <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">


{data?.data?.data.map((categres , ids)=>{
  return(
    <>
    
    
    <div onClick={()=> IdCategres(categres._id) } key={ids} className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">

<img className="rounded-lg w-full h-60" src={categres.image} alt={categres.image} />

<div className="p-5 text-center">

<h5 className="mb-3  line-clamp-1 text-2xl text-green-500 ">{categres.name}</h5>


</div>



</div>

    
    
    </>
  )
})}


    </div>}
    </>


 <>




{ lood ? <LodingScreen/> : <div className="">
<div className=" text-center text-green-500 text-2xl mt-5">
<h2>{categr.name} {categr ?  'subcategories': null}</h2>

</div>

<div className=" grid  md:grid-cols-2 xl:grid-cols-5">


 
<div  className={  categr ? "bg-gray-200 w-60 rounded-lg text-2xl  hover:shadow-lg text-center py-6 grid-cols-4 my-8" : null}>
<h4>{categr.name}</h4>
   
   </div>
   
   <div  className={  categr ? "bg-gray-200 rounded-lg text-2xl hover:shadow-lg w-60 text-center py-6 grid-cols-4 my-8" : null}>
   <h4>{categr.slug}</h4> 
 
   </div> 

</div>


</div>}








</>


    
    
    
    </>
  
 
   
  )
}
