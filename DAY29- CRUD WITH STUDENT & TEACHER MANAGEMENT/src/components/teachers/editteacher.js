import React from "react";
import BaseDefault from "../../core/Base";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditTeacher({teacher,setTeacher}){
    const [idx,setId] = useState("");
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [contact,setContact] = useState("");
    const [performance,setPerformance] = useState("");

    const {id} = useParams();
    const history = useHistory();

    const selectTeacher = teacher.find((per)=>per.id===id);
    
    useEffect(()=>{
        setId(selectTeacher.id)
        setName(selectTeacher.name)
        setSubject(selectTeacher.subject)
        setContact(selectTeacher.contact)
        setPerformance(selectTeacher.performance)
    },[])
    
    const updateTeacher = ()=>{
        const editIndex = teacher&&(teacher?.findIndex(per=>per.id===id));
        const editData = {
            id:idx,
            name,
            subject,
            contact,
            performance,
        }

        teacher[editIndex] = editData;
        setTeacher([...teacher]);
        history.push("/teacher");
    }

    return(
        <BaseDefault
            title={"Edit a Teacher Details"}
            styles={"title"}
        >
        <div className="add-label">
                <TextField id="outlined-basic" onChange={(e)=>setId(e.target.value)} type="text" value={idx} label="Id" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setName(e.target.value)} type="text" value={name} label="Name" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setSubject(e.target.value)} type="text" value={subject} label="Class" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setContact(e.target.value)} type="text" value={contact} label="Marks" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setPerformance(e.target.value)} type="text" value={performance} label="Attendance" variant="outlined" />
                <Button onClick={updateTeacher}>Submit</Button>
            </div>
        </BaseDefault>
    )
}