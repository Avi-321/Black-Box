import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {

    const navigate1= useNavigate();
  
    const logout=async ()=>{
        try{
            const res=await fetch('/logout',{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            if(res.status === 401 || !res)
            {
                window.alert("please logout later");
            }
            else{
                navigate1('/');
                window.location.reload()
            }
        } catch(error){
            console.log(error);
        }
    }

  useEffect(()=>{
    logout();   
  },[]); 
    return (
    <div> </div>
  )
}
