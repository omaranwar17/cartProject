import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext} from "react";


let headers ={
    token: localStorage.getItem('token')
}

export let cartsProduct = createContext()


export default function CreateContextProvider(props){

   function addToProduct(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },
    {
        headers: headers
    }).then((res) => res)
    .catch((error)=> error)

    
    }

    // function IdCategres(){
    //     return axios.get('https://ecommerce.routemisr.com/api/v1/categories/6439d5b90049ad0b52b90048')
    //   }
    //  let  { data , isLoading , isError} = useQuery({
    //   queryKey: ['Idcategres'],
    //   queryFn: IdCategres,
    
    //   })
    //   console.log(data);
    //   console.log('data=>' , isLoading);


    // function getToProduct(){
    //     return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
    //         headers: headers
    //     }).then((res) => res)
    //     .catch((error)=> error)
    
        
    //     }
   


    return <cartsProduct.Provider value={{addToProduct  }}>
        {props.children}

    </cartsProduct.Provider>

}