import React from "react";
import BaseDefault from "../../core/Base";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";

export default function AddNewStudent({student,setStudent}){
    const history = useHistory();

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [std,setStd] = useState("");
    const [greads,setGreads] = useState("");
    const [attendance,setAttendance] = useState("");
    
    const addStudent = (event) =>{
        const newStudent = {
            id,
            name,
            std,
            greads,
            attendance,
        }
       event.preventDefault();
        setStudent([...student,newStudent]);
        history.push("/students")    
       
        
    }
    return(
        <BaseDefault
            title={"Add a New Student"}
            styles={"title"}
        >   
            <div className="add-label">
                <TextField id="outlined-basic" onChange={(e)=>setId(e.target.value)} type="text" value={id} label="Id" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setName(e.target.value)} type="text" value={name} label="Name" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setStd(e.target.value)} type="text" value={std} label="Class" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setGreads(e.target.value)} type="text" value={greads} label="Greads" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setAttendance(e.target.value)} type="text" value={attendance} label="Attendance" variant="outlined" />
                <Button onClick={addStudent}>Submit</Button>
            </div>
        </BaseDefault>
    )
}