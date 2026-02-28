
import { useState } from "react";
import Employee from "./Employee"

export default function  UserCard({userName,userRole}){

 const[role,setRole]=useState("junior")


 return (
    <>
    <h1> {userName}</h1>
    <h2>{userRole}</h2>
    <button>Promote</button>
    </>
 )


}