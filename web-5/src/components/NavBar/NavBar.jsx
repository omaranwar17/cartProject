import  {  useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/finalProject assets/freshcart-logo.svg'
import { UsarContext } from '../../ConText/UserContext';





export default function NavBar() {
  let [oppen, setOppen] = useState(false)
  let  {userLogin , setUserLogin}  = useContext(UsarContext)
 const useNavget = useNavigate()
function SignOut(){
setUserLogin('');
localStorage.removeItem('token');
useNavget('/login')
}

 



  function toogel(){
    setOppen(!oppen)

  }
  return (
    <div className='bg-gray-100 py-4 z-50 static lg:fixed flex top-0 end-0 start-0'>
      <div className="container px-8  md:flex items-center  justify-between relative">
        
          <div className=" md:flex items-center justify-center gap-2">
            
            <img className=' ' src={logo} width={120} alt="" />
           
            
   {userLogin && <ul className={` md:flex    gap-4 ${oppen?' block':'hidden'}`}>
            <li><NavLink className=' text-gray-700 ' to={'/'}>Home</NavLink></li>

<li><NavLink className=' text-gray-700 my-2 lg:my-0  ' to={'/products'}>Products  </NavLink></li>
<li><NavLink className=' text-gray-700 my-2 lg:my-0' to={'/categories'}>Categories</NavLink></li>
<li><NavLink className=' text-gray-700 my-2 lg:my-0 ' to={'/brands'}>Brands</NavLink></li>

<li><NavLink className=' text-gray-700 my-2 lg:my-0 ' to={'/cart'}>Cart</NavLink></li>
<li><NavLink className=' text-gray-700 my-2 lg:my-0 ' to={'/allorders'}>Orders</NavLink></li>


</ul>}
          </div>
          <div className=" md:flex items-center mt-2 md:mt-0">
            <ul className={`md:flex   gap-3 ${oppen?'block':'hidden'}`}>
           
            
           {!userLogin &&  <>
            <li><NavLink className=' text-gray-700 my-2 lg:my-0  ' to={'/login'}>Login</NavLink></li>
            <li><NavLink className=' text-gray-700 my-2 lg:my-0 ' to={'/register'}>Register</NavLink></li>
            
            
            </>}
            
           
            {userLogin && <li><button onClick={SignOut} className='text-gray-700 my-2 lg:my-0 '> Log Out</button></li>}
             <li className=' md:flex md:b  gap-3'>
              <a href=""><i className="fa-brands fa-facebook mr-1 lg:m-0 "></i></a>
              <a href=""><i className="fa-brands fa-instagram m-1 lg:m-0"></i></a>
              <a href=""><i className="fa-brands fa-tiktok m-1 lg:m-0"></i></a>
              
              <a href=""><i className="fa-brands fa-twitter m-1 lg:m-0"></i></a>
              <a href=""><i className="fa-brands fa-youtube m-1 lg:m-0"></i></a>
            </li>
           
            </ul>

          </div>


          <i onClick={toogel} className={` ${!oppen?'fa-bars':'fa-close'} fas  fa-2x absolute top-0 right-2 cursor-pointer block md:hidden `}></i>
        </div>

      </div>
      
    
  )
}
