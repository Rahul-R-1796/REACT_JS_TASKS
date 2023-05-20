import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export function Userdetails({user}){
    const {id} = useParams();
    const person = user[id];
    // const  person = User.filter(per => per = id)
     
    return(
        <BaseApp 
        title={"User Details"}
        >
             <div className="user-content">
               
                <div className="user-card">
                 <h1> {person.Name} </h1>
                 <p>Email : {person.Email}</p>
             
                 </div>
               
            </div> 
        </BaseApp>
    )
} 