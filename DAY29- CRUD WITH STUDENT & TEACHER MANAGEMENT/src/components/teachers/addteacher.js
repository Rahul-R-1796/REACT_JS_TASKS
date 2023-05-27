import React, { useState } from "react";
import BaseDefault from "../../core/Base";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function AddTeacher({teacher,setTeacher}){

    const history = useHistory();

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [contact,setContact] = useState("");
    const [performance,setPerformance] = useState("");
    
    const addNewTeacher = (event) =>{
        const newTeacher = {
            id,
            name,
            subject,
            contact,
            performance,
        }
       event.preventDefault();
        setTeacher([...teacher,newTeacher]);
        history.push("/teacher")    
       
        
    }

    return(
        <BaseDefault
            title="Add a New Teacher"
            styles="title"
        >
            <div className="add-label">
                <TextField id="outlined-basic" onChange={(e)=>setId(e.target.value)} type="text" value={id} label="Id" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setName(e.target.value)} type="text" value={name} label="Name" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setSubject(e.target.value)} type="text" value={subject} label="Subject" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setContact(e.target.value)} type="text" value={contact} label="Contact" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setPerformance(e.target.value)} type="text" value={performance} label="Performance" variant="outlined" />
                <Button onClick={addNewTeacher}>Submit</Button>
            </div>
        </BaseDefault>
    )
}