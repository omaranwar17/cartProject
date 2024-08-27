import axios from 'axios';
import React, { useEffect } from 'react'


export default function AllCategories() {
    async function AllCategres(){
      
    
        await axios.get('https://ecommerce.routemisr.com/api/v1/categories/6439d2f467d9aa4ca97064a8').then((res)=>{
         
          console.log(res.data);
          
     
          
        }).catch((error)=>{
          console.log(error);
      
        })
      }
      useEffect(()=>{
AllCategres()
      },[])





  return (
    <div>
      
    </div>
  )
}

