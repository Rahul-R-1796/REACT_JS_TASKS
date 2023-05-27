import React from "react";
import BaseDefault from "../../core/Base";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Students_Page({student,setStudent}){
    const history = useHistory();

    // Delete the student details function
    const deleteStudent = (idx) =>{
        const alterList = student.filter((data)=>data.id !=idx);
        setStudent(alterList);
    }
    return(
        <BaseDefault
            title="Students-dashboard"
            styles="title"
        >

            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Gread</th>
                    <th>Attendance</th>
                </tr>
                    {student.map((data,idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.std}</td>
                                <td>{data.gread}</td>
                                <td>{data.attendance}</td>
                                <td className="btn-grp">
                                    <Button onClick={()=>history.push(`/editstudent/${data.id}`)}>Edit</Button>
                                    
                                    <Button onClick={()=>history.push(`/view/student/${idx}`)}>View</Button>
                                    <Button onClick={()=>deleteStudent(data.id)}>Delete</Button>
                                </td>
                            </tr>
                        )})}
            </table>
            <div className="add-user">
                <Button onClick={()=>history.push("/addstudent")}>Add Student</Button>
            </div>
        </BaseDefault>
    )
}