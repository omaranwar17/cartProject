import { useState } from 'react'
import * as yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet'





export default function Register() {
const [apiError , setApiError] = useState(null)
const [laoding , setLoading] = useState(false)

let navigate = useNavigate()


  const schema = yup.object().shape({
    name: yup.string().required('name is required').min(3 ,'min 3').max(10 , ' name max 10'),
    email: yup.string().required('email is required').email('invalid mail'),
    password: yup.string().required('password is required').matches(/^[a-z]{1,7}[0-9]{3,11}$/ ,'invalid password'),
    rePassword: yup.string().required('rePassword is required').oneOf([yup.ref('password')] , 'not match password') ,
    phone: yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'invalid phone')
  })


  

 



 function test(values){
  
    setLoading(true)
    console.log(values);
    // api//
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values)
    .then((data)=>{
      if(data.data.message === 'success'){
        navigate('/login')
        setLoading(false)
        console.log(data);
      }   
    })
    .catch(res=> {
      setApiError(res.response.data.message)
    
    setLoading(false);
    });
  }

const formik = useFormik({
  initialValues:{
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  },
  validationSchema:schema,
  onSubmit:test,
  
 


})








 

 return(

  <>

<>
    
    
    <Helmet>
<title> register </title>

      </Helmet>
    
    
    
    </>
  
  
  
  <>
  
  <h2 className='max-w-xl mx-auto py-4 mt-28 text-3xl font-bold'>Register:</h2>
  

<form className="max-w-xl mx-auto " onSubmit={formik.handleSubmit} >
  <div className="relative z-0 w-full mb-5 group">
    <input {...formik.getFieldProps('name')}  type="text"  id="name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name: </label>
  </div>
  
  {formik.errors.name && formik.touched.name ?  <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium"> {formik.errors.name}</span> 
</div> : ''}


 


 

  
 


  <div className="relative z-0 w-full mb-5 group">
    <input {...formik.getFieldProps('email')}  type="email"  id="email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email:</label>
  </div>

  {formik.errors.email && formik.touched.email ?   <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium"> {formik.errors.email}</span> 
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



  <div className="relative z-0 w-full mb-5 group">
    <input {...formik.getFieldProps('phone')} type="tel"  id="phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
    <label htmlFor="floating_repeat_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  </div>

  {formik.errors.phone && formik.touched.phone ?   <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium"> {formik.errors.phone}</span> 
</div> : ''}

{apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{apiError}</span> 
</div> : ''}






 
  
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-gray-500"  disabled={laoding}>
 
 submit

          {laoding && <i className='fa-solid fa-spinner fa-spin px-1'></i> } 
   </button>
</form>
<div className="mt-4 text-center">
  <span className='text-sm text-gray-500 hover:text-gray-300'>Already have an accaunt?</span>
  <Link className='text-blue-500 hover:text-blue-600' to={'/login'}>login</Link>
</div>
  
  </>
  
  </>
  
 )


}
