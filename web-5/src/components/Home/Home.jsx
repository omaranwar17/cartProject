import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productess from '../Productss/Productess'
import  CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
import LodingScreen from '../LodingScreen/LodingScreen'

import {Helmet} from 'react-helmet'





export default function Home() {
  const [ products , setProducts ] = useState([])
  
  const [ isLoding , setIsLoding ] = useState(true)


  useEffect(()=>{
productApi()
  },[])

  async function productApi(){
  setIsLoding(true)
let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
setProducts(data.data);

setIsLoding(false)
// console.log(data.data);



  }


  function Filter(event){
setProducts(products.filter((f) => f.title.toLowerCase().includes(event.target.value))  )

  }

  



  return (
<>
<>
    
    
    <Helmet>
<title> home </title>

      </Helmet>
    
    
    
    </>




<div>
<MainSlider/>
</div>
<div>
 
  <CategoriesSlider/>
</div>



<div>

<div className="relative z-0 w-9/12 mx-auto my-10 group">
  <input onChange={Filter} onBlur={Filter} type="text" name="floating_serach" id="floating_serach" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
  <label htmlFor="floating_serach" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> serach</label>
</div>




{isLoding ? <LodingScreen/> : <div className=' mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

{products.map((product , index) =>{
  return <Productess product={product} key={index}/>
    
})}

    </div> 
    
    }



</div>



</>


   
      )
   
}
