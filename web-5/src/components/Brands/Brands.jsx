import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'
import LodingScreen from '../LodingScreen/LodingScreen'








export default function Brands() {
  const [brands , setBrands ] = useState(null)
  const [brand , setBrand ] = useState(null)
  const [bran , setBran ] = useState(null)
  const [isLood , setIsLood ] = useState(false)
  
 function remove(brand ){

console.log(brand);
if(bran !== 0){
  setBran(true)
  setBrand(false)
}
else{
  setBran(false)
  setBrand(true)
}


  }
 




async function AllBrands(){
  setIsLood(true)

 await axios.get('https://ecommerce.routemisr.com/api/v1/brands').then((res)=>{
  setIsLood(false)
        console.log(res.data);
        setBrands(res.data)
       
      
   
        
      }).catch((error)=>{
        console.log(error);
        setIsLood(false)
      
   
    
      })
}


useEffect(()=>{
AllBrands()
},[])

async function AollBrands(brandId){
  setIsLood(true)
 

    await axios.get('https://ecommerce.routemisr.com/api/v1/brands/' + brandId).then((res)=>{
  setIsLood(false)
        console.log(res.data.data);
        setBrand(res.data.data)
      
      }).catch((error)=>{
        console.log(error);
        setIsLood(false)

        
   
    
      })
  
  }

  return (
    <>
    <>
    <Helmet>
<title> brands </title>

      </Helmet>
    
    
    </>

<>

<div className="py-12 text-center ">
      <h2 className=' text-3xl text-green-500 font-bold'>All Brands</h2>


    </div>


{isLood  ?  <LodingScreen/>  : <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">


  {brands?.data?.map((bran , ids)=>{
  return(
  <>
    
  
    
    <div  onClick={()=> AollBrands(bran._id)}   key={ids} className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">

<img className="rounded-lg  w-60 h-40" src={bran?.image} alt={bran?.image} />

<div className="p-5 text-center">


<h5 className="mb-3  line-clamp-1 ">{bran?.name}</h5>


</div>



</div>

    

    

    
    
    </>
  )
})}


    </div>}




</>

<>

{isLood ? <LodingScreen/> :<div className=" ">

    <div    className= {brand ? ' bg-gray-300   z-50  shadow-md  fixed  top-14 start-4 md:top-56 md:start-72 ' : null   }  >

<div className=" m-4">
<i onClick={()=> remove(brand)}  className={ brand ? "fa-solid fa-xmark cursor-pointer" : null} />

   
 
   <div className=" flex items-center justify-between">
<div className=" m-4">
<h5 className='text-2xl'>{brand?.name}</h5>
<p>{brand?.slug}</p>
</div>
<div className="">
<img src={brand?.image} alt={brand?.image} />
</div>

   </div>
  
   <button onClick={()=> remove(brand)}  className={ brand ? ' bg-gray-600 px-5 py-2 rounded-lg' : null}> {brand ? 'click' : null}</button>
</div>

</div>

</div>}

   



</>






  
    </>


      
  
     
  )
}
