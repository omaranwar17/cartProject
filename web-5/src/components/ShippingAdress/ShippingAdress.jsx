import React from 'react'
import  { useState}   from 'react';
import * as yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios';
import {  Link, useNavigate, useParams } from 'react-router-dom';





export default function ShippingAdress(){
  const [laoding , setLoading] = useState(false);
  const [details , setDetails] = useState('');
  const [phone , setPhone] = useState('');
  const [city , setCity] = useState('');
  const {productId} = useParams();
 const navegt  =  useNavigate()

 async function Carts(){
  setLoading(true)

  const x = {
    shippingAddress:{
      details,
      phone,
      city,
      },
      
      
  };
  console.log(x);

   await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}` ,
     x,
    {
        headers:{
            token: localStorage.getItem('token')
        },
        params:{
            url:'http://localhost:5173'
        }
    }
  ).then((res)=>{
    setLoading(false)
    console.log(res.data.session.url);
    location.href  =res.data.session.url;
  
    

    
  }).catch((error)=>{
    console.log(error);
    setLoading(false)
    
  })
  




  



}







 async function cashCarts(){
  setLoading(true)

  const x = {
    shippingAddress:{
      details,
      phone,
      city,
      },
      
      
  };
  console.log(x);

  await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${productId}`, x,
    {
      headers:{
      token: localStorage.getItem('token')
        },
     
    },

  ).then((res)=>{
    setLoading(false)
    console.log(res);
    navegt('/allorders')

    
  }).catch((error)=>{
    console.log(error);
    setLoading(false)
    
  })
  




  



}




return (
  <>
      <div className="relative z-0 w-full mb-5 group">
    <input onChange={(e)=> setDetails(e.target.value)}  type="text"  id=" details" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_ details" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> details</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input  onChange={(e)=> setPhone(e.target.value())}  type="namber"  id="phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input onChange={(e)=> setCity(e.target.value)} type="text"  id="city" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
  </div>

  <button onClick={Carts}  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 md:mx-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

            CheekOut

          {laoding &&  <i className='fa-solid fa-spinner fa-spin px-1'></i> } 
   </button>
   <button onClick={cashCarts}  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

            CashOut

          {laoding &&  <i className='fa-solid fa-spinner fa-spin px-1'></i> } 
   </button>
  
  
  
  
  </>
)













 }





















//   const {productId} = useParams()

  



// const [laoding , setLoading] = useState(false)

//   const schema = yup.object().shape({
    
//     details: yup.string().required('details is required'),
//     phone: yup.string().required('phone is required'),
//     city: yup.string().required('city is required'),
  
//   })
// async function test(values){

//     setLoading(true)
//     console.log(values);

//     // api//
//  let  {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + productId , {shippingAddress: values},
//     {
//         headers:{
//             token: localStorage.getItem('token')
//         },
//         params:{
//             url:'http://localhost:5173'
//         }
//     }
//   ).then((res)=>{
//     setLoading(false)
    // console.log(res.data.session.url);
    // location.href  =res.data.session.url;
//   }).catch((error)=>{
//     setLoading(false)
//     console.log(error);
//   })

// };

// const formik = useFormik({
//   initialValues:{
//     "details": '',
//     'phone': '',
//     "city": '',
//   },
//   validationSchema:schema,
//   onSubmit:test,
  
 


// })

//  return (
//   <>
//   <h2 className='max-w-xl mt-24  py-4 mx-auto text-xl font-bold'>Add Your Shiping AdDress</h2>
  

//   <form className="max-w-xl mx-auto " onSubmit={formik.handleSubmit} >
    
    // <div className="relative z-0 w-full mb-5 group">
    //   <input {...formik.getFieldProps('details')}   type="text"  id=" details" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    //   <label htmlFor="floating_ details" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> details</label>
    // </div>
        
    // <div className="relative z-0 w-full mb-5 group">
    //   <input {...formik.getFieldProps('phone')}    type="tel"  id="phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    //   <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
    // </div>
        
    // <div className="relative z-0 w-full mb-5 group">
    //   <input {...formik.getFieldProps('city')}  type="text"  id="city" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    //   <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
    // </div>
  
    // <button  type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

    //           CheekOut
  
    //         {laoding &&  <i className='fa-solid fa-spinner fa-spin px-1'></i> } 
    //  </button>
//   </form>

  
  
  
  
//   </>

  
  

  
  
//  )
