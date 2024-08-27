import { createContext, useEffect, useState } from "react";



 export const UsarContext = createContext();



 export default function UserContextProvider({children}){
     const [userLogin, setUserLogin ] =useState(localStorage.getItem('token') ?? "");
   
    return <UsarContext.Provider value={{ userLogin , setUserLogin}}>
{children}
    </UsarContext.Provider>

     }
