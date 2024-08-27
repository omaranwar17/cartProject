import axios from 'axios'
import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import * as yup from 'yup'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'




    export default function EmailVerification() {
        const [laoding , setLoading] = useState(false)
       const navget = useNavigate()

  
        
        
        
        
        
        
          const schema = yup.object().shape({
            
            mumber: yup.string().required('the code isnt valid')
          
          
          })
        async function test(values){
          
            setLoading(true)
            console.log(values);
            // api//
       const {data}  = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' , values)
            .then((res)=>{
                console.log(res.data);
                setLoading(false)
                if(location.pathname == '/emailVerification'){
                  navget('/userNwePassword')
                }
                else{
                  navget(location.pathname)
                }
                
              
             
        
        
        })
            .catch((error)=> {
           console.log(error);
           
              setLoading(false);
            });
          
         
        
          
        
          }
        
        const formik = useFormik({
          initialValues:{
          resetCode: "",
           
           
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
      <input {...formik.getFieldProps('number')}  type="number"  id="number" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="floating_number" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">code</label>
    </div>
  
    {formik.errors.number && formik.touched.number ?   <div  className="p-4 mb-4 text-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium"> {formik.errors.number}</span> 
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







