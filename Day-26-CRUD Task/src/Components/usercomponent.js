// import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";



export default function Usercomponent({user, setUser}){ 
   const history = useHistory()
 
//functionality
const deteteUser =(idx)=>{
    const alterList = user.filter((per, id)=>per.ID !== idx ) 
    setUser(alterList)
} 

  
    return(
        <BaseApp
        title="User Details">
            <div className="user-content">
                {user.map((person, idx)=>(
                    <div key={idx} className="user-card">
                 <h1> {person.Name} </h1>
                 <p>Email : {person.Email}</p>
                 <div className="btn-group">
                    <button 
                    className="btn edit-btn"
                    onClick={()=>history.push(`/edit/${person.ID}`)}
                    >
                        Edit
                        </button>
                        
                    <button 
                     className="btn view-btn"
                    onClick={()=>history.push(`/user/${idx}`)}
                    >
                        View</button>

                    <button 
                    className="btn del-btn"
                    onClick={()=>deteteUser(person.ID)}
                    >
                        Delete
                        </button>
                 </div>
                 </div>
                 ))}
            </div>
        </BaseApp>
    )
}