
import axios from 'axios'
import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import * as yup from 'yup'
import {useFormik} from 'formik'




    export default function UserNwePassword() {
        const [laoding , setLoading] = useState(false)

  
        
        
        
        
        
        
          const schema = yup.object().shape({
            
            currentPassword: yup.string().required('password is required').matches(/^[0-9]{2,12}$/ ,'invalid password'),
            password: yup.string().required('password is required').matches(/^[a-z]{1,7}[0-9]{3,11}$/ ,'invalid password'),
            rePassword: yup.string().required('rePassword is required').oneOf([yup.ref('password')] , 'not match password') ,
          
          
          })
        async function test(values){
          
            setLoading(true)
            console.log(values);
            // api//
       const {data}  = await axios.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword' , values ,{
        headers:{
            token : localStorage.getItem('token')
        }
       })
            .then((res)=>{
                console.log(res.data);
                setLoading(false)
                
              
             
        
        
        })
            .catch((error)=> {
           console.log(error);
           
              setLoading(false);
            });
          
         
        
          
        
          }
        
        const formik = useFormik({
          initialValues:{
          
    currentPassword:"",
    password:"",
    rePassword:"",
           
           
          },
          validationSchema:schema,
          onSubmit:test,
          
         
        
        
        })
        
        
        
        
        
        
        
        
         
        
         return (
          <>
        
        <>
            
            
            <Helmet>
        <title> emailVerification </title>
        
              </Helmet>
            
            
            
            </>
          
          
          
          <>
       <div className="">
       <h2 className='max-w-xl mt-24  py-4 mx-auto text-3xl font-bold'>reset your account password</h2>
       </div>
          
        
          <form className="max-w-xl gap-3 mx-auto " onSubmit={formik.handleSubmit} >
          <div className="relative z-0 w-full mb-5 group">
    <input {...formik.getFieldProps('currentPassword')} type="password"  id="currentPassword" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"placeholder=" "    />
    <label htmlFor="floating_repeat_currentPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">currentPassword:</label>
  </div>

  {formik.errors.currentPassword && formik.touched.currentPassword ?   <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium"> {formik.errors.currentPassword}</span> 
</div> : ''}



<div className="relative z-0 w-full mb-5 group">
    <input {...formik.getFieldProps('password')} type="password"  id="password" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"placeholder=" "    />
    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password:</label>
  </div>

  {formik.errors.password && formik.touched.password ?   <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium"> {formik.errors.password}</span> 
</div> : ''}



<div className="relative z-0 w-full mb-5 group">
    <input {...formik.getFieldProps('rePassword')}  type="Password"  id="rePassword" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RePassword</label>
  </div>

  {formik.errors.rePassword && formik.touched.rePassword ?   <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium"> {formik.errors.rePassword}</span> 
</div> : ''}

            
           
        
        
      <div className=" mt-8 ">
           
      <button type="submit" className="text-white bg-green-700 block  hover:bg-green-800  font-medium rounded-lg text-sm w-auto sm:w-80  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      
                      Verify
                              {laoding && <i className='fa-solid fa-spinner fa-spin px-1'></i>   } 
                       </button>
      </div>
          </form>
         
          
          
          
          
          </>
          
          </>
          
        
          
          
        
          
          
         )
        
        
        }
