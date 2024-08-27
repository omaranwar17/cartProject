
import  {useContext, useState}   from 'react';
import * as yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { UsarContext } from '../../ConText/UserContext';
import {Helmet} from 'react-helmet'
import LodingScreen from '../LodingScreen/LodingScreen';


export default function ForegtPassword() {
const navegt =   useNavigate()


const [laoding , setLoading] = useState(false)
let {setUserLogin } = useContext(UsarContext)






  const schema = yup.object().shape({
    
    email: yup.string().required('email is required').email('invalid mail'),
  
  
  })
async function test(values){
  
    setLoading(true)
    console.log(values);
    // api//
 const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' , values)
    .then((res)=>{
   console.log(res.data);
   if(location.pathname == '/foregtPassword'){
    navegt('/emailVerification')
  }
  else{
    navegt(location.pathname)
  }

    


})
    .catch((error)=> {
   console.log(error);
   
      setLoading(false);
    });
  
 

  

  }

const formik = useFormik({
  initialValues:{
    email: "",
   
   
  },
  validationSchema:schema,
  onSubmit:test,
  
 


})








 

 return (
  <>

<>
    
    
    <Helmet>
<title> login </title>

      </Helmet>
    
    
    
    </>
  
  
  
{
    laoding ? <LodingScreen/> :   <>

  
    <h2 className='max-w-xl mt-24  py-4 mx-auto text-3xl font-bold'>please enter your verification code</h2>
  
      
    
      <form className="max-w-xl mx-auto " onSubmit={formik.handleSubmit} >
        
        <div className="relative z-0 w-full mb-5 group">
          <input {...formik.getFieldProps('email')}  type="email"  id="email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email adderss</label>
        </div>
      
        {formik.errors.email && formik.touched.email ?   <div  className="p-4 mb-4 text-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium"> {formik.errors.email}</span> 
      </div> : ''}
      <Link to={'/login'}>
      <div className=" text-right cursor-pointer hover:text-blue-500">
    <p className=' text-xl'>    login?</p>
      </div>
      </Link>
    
    
     
       
       
       <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  
                  verify
                          {laoding && <i className='fa-solid fa-spinner fa-spin px-1'></i>   } 
                   </button>
      </form>
  

 
  
  
  
  
  </>
  
}
  </>
  

  
  

  
  
 )


}
