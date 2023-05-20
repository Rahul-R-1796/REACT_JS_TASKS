import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

 const EditUsers = ({user, setUser}) => {

    const [IDx,setIDx] = useState("")
    const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")

    const {ID} = useParams();
    const history = useHistory()

    const selectedUser = user.find((per)=>per.ID === ID);
   
    useEffect(()=>{
        setIDx(selectedUser.ID)
        setName(selectedUser.Name)
        setEmail(selectedUser.Email)
    },[])

    const updateUser = ()=> {
          // step 1: collecting new data
        const editIndex = user.findIndex(per => per.ID ===ID)
        console.log(editIndex)
             //changed data in the input field
            const editedData ={
                ID : IDx,
                Name,
                Email  
            }
            //Updating the user
            user[editIndex] = editedData
            setUser([...user]);
            history.push("/");

    }
    return(
        <BaseApp
        title={"Edit Add User Details"}
        >
              <div>
                <input 
                placeholder="ID"
                value={IDx}
                type="text"
                onChange={(event)=>setIDx(event.target.value)}
                />
                <input 
                placeholder="Name"
                value={Name}
                type="text"
                onChange={(event)=>setName(event.target.value)}
                />
                <input 
                placeholder="Email"
                value={Email}
                type="text"
                onChange={(event)=>setEmail(event.target.value)}
                />
        
                 <button
                 onClick={updateUser}
                 >
                    Update & Edit
                    </button>
        
        </div>
        </BaseApp>
    )
}
export default EditUsers