import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Carts from './components/Carts/Carts'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import Register from './components/Register/Register'
import SignOut from './components/SignOut/SignOut'
import Categories from './components/Categories/Categories'
import CreateContextProvider from './ConText/ConText'
import UserContextProvider from './ConText/UserContext'
import ProtecteRoute from './components/ProtectedRoute/ProtecteRoute'
import ProtextAuthRoutes from './components/ProtectAuthRoutes/ProtextAuthRoutes'

import ProductDetils from './components/ProductDetils/ProductDetils'
import { Toaster } from 'react-hot-toast'
import ShippingAdress from './components/ShippingAdress/ShippingAdress'
import Order from './components/Order/Order'
import { Offline, Online } from "react-detect-offline";
import AllCategories from './components/AllCategories/AllCategories'

import ForegtPassword from './components/ForegtPassword/ForegtPassword'
import EmailVerification from './components/EmailVerification/EmailVerification'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import Brand from './components/Barnd/Brand'
import UserNwePassword from './components/UserNwePassword/UserNwePassword'





let query = new QueryClient()


const x = createBrowserRouter([
  {path:"",
    element:<Layout/>,
    children: [
      {
        index:true,
        element:<ProtecteRoute><Home/></ProtecteRoute> ,
      },
      {
        path: "login",
        element: <ProtextAuthRoutes><Login/></ProtextAuthRoutes> ,
      },
      
      {
        path: "emailVerification",
        element: <ProtextAuthRoutes> <EmailVerification/></ProtextAuthRoutes> ,
      },
      
      {
        path: "userNwePassword",
        element: <ProtextAuthRoutes> <UserNwePassword/></ProtextAuthRoutes> ,
      },
      {
        path: "foregtPassword",
        element: <ProtextAuthRoutes> <ForegtPassword/></ProtextAuthRoutes> ,
      },
      {
        path: "register",
        element: < ProtextAuthRoutes><Register/></ProtextAuthRoutes>,
      },
      {
        path: "productDetils/:id",
        element: <ProtecteRoute> <ProductDetils  /></ProtecteRoute>,
      },
      
     
      {
        path: "cart",
        element: <ProtecteRoute> <Carts/></ProtecteRoute>   ,
      },
      // {
      //   path: "brand",
      //   element: <ProtecteRoute> <Brand/></ProtecteRoute>   ,
      // },
     
     
      {
        path: "allorders",
        element: <ProtecteRoute> <Order/></ProtecteRoute>    ,
      },

      {
        path: "shippingAdress/:productId",
        element: <ProtecteRoute> <ShippingAdress/></ProtecteRoute>   ,
      },
     
      {
        path: "brands",
        element:  <ProtecteRoute><Brands/></ProtecteRoute>,
      },
     
      {
        path: "products",
        element: <ProtecteRoute><Products/></ProtecteRoute>,
      },
      {
        path: "allCategories",
        element: <ProtecteRoute><AllCategories/></ProtecteRoute>,
      },
      {
        path: "signout",
        element:<SignOut/>,
      },
      {
        path: "categories",
        element: <ProtecteRoute><Categories/></ProtecteRoute>,
      },
     
      {
        path: "*",
        element: <NotFound/>,
      },
     
     
    ]
  }
])

function App() {
  

  return (
<>


<QueryClientProvider client={query}>
<CreateContextProvider>
<UserContextProvider>
  <ReactQueryDevtools/>
<RouterProvider router={x}></RouterProvider>
<Toaster />
<Offline>
  <div className=" fixed bottom-4 start-4 bg-yellow-200 px-12 py-3 rounded-lg ">
  Only shown offline (surprise!)
  </div>
</Offline>
</UserContextProvider>
</CreateContextProvider>
</QueryClientProvider>



















</>




  )

}
   

export default App
