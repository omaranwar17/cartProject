import React, { useContext } from 'react'
import { UsarContext } from '../../ConText/UserContext'
import { Navigate } from 'react-router-dom'

import Login from '../Login/Login'

export default function ProtecteRoute({children}) {

    let { userLogin} = useContext(UsarContext)
  return (
<>
<div className='mt-24'>
     {userLogin ? children : <Login/> }
    </div>


</>

  
  )
}
