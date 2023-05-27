import React from "react";
import BaseDefault from "../../core/Base";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditUser({student,setStudent}){
    
    const [idx,setId] = useState("");
    const [name,setName] = useState("");
    const [std,setStd] = useState("");
    const [gread,setGread] = useState("");
    const [attendance,setAttendance]= useState("");

    const {id} = useParams();
    const history = useHistory();

    const selectStudent = student.find((data)=>data.id ===id);
    useEffect(()=>{
        setId(selectStudent.id)
        setName(selectStudent.name)
        setStd(selectStudent.std)
        setGread(selectStudent.greads)
        setAttendance(selectStudent.attendance)
    },[])

    const updateStudent = ()=>{
        const editIndex = student && (student?.findIndex(per=>per.id===id));
        const editData = {
            id : idx,
            name,
            std,
            gread,
            attendance,
        }
        student[editIndex]=editData;
        setStudent([...student]);
        history.push("/students")
    }
    return(
        <BaseDefault
            title={"Edit Student Details"}
            styles={"title"}
        >
            <div className="add-label">
                <TextField id="outlined-basic" onChange={(e)=>setId(e.target.value)} type="text" value={idx} label="Id" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setName(e.target.value)} type="text" value={name} label="Name" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setStd(e.target.value)} type="text" value={std} label="Class" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setGread(e.target.value)} type="text" value={gread} label="greads" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e)=>setAttendance(e.target.value)} type="text" value={attendance} label="Attendance" variant="outlined" />
                <Button onClick={updateStudent}>Submit</Button>
            </div>
        </BaseDefault>
    )
}