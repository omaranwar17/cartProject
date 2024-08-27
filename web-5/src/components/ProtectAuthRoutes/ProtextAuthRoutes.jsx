
import React, { useContext } from 'react'
import { UsarContext } from '../../ConText/UserContext'
import { Navigate } from 'react-router-dom'


export default function ProtextAuthRoutes({children}) {
 let { userLogin} =  useContext(UsarContext)


  return (
    <div>
      {!userLogin ? children : <Navigate to={'/'}/> }
    </div>
  )
}
