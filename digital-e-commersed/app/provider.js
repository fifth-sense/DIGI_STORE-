"use client"
import { useUser } from "@clerk/nextjs";
import Header from "./_components/Hearder";
import axios from "axios";
import { useEffect } from "react";

function Provider  ({children})  {
    const {user} = useUser();
    console.log('user from provider', user)

    useEffect(()=>{
      user && CheckIsNewUser()
    },[user])

     const CheckIsNewUser = async () => {
        const result = await axios.post('/api/user',{
            user: user
        })
        console.log('result--',result)
    }

    return(
        <div>
            <Header/>
            <div>
            {children}
            </div>
        </div>
    )

}
export default Provider;