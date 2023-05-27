import React from "react";
import BaseDefault from "../../core/Base";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Teachers_Page({teacher,setTeacher}){
    const history = useHistory();
    
    // Delete Teacher Details Function 
    const deleteTeacher = (idx) =>{
        const alterList = teacher.filter((data) => data.id !=idx);
        setTeacher(alterList);
    }

    return(
        <BaseDefault
            title="Teacher-dashboard"
            styles="title"
        >
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Contact</th>
                    <th>Performance</th>
                </tr>
                {teacher.map((data,index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.subject}</td>
                            <td>{data.contact}</td>
                            <td>{data.performance}</td>
                            <td className="btn-grp">
                                <Button onClick={()=>history.push(`/edit/teacher/${data.id}`)}>Edit</Button>                                    
                                <Button onClick={()=>history.push(`/view/teacher/${index}`)}>View</Button>
                                <Button onClick={()=>deleteTeacher(data.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </table>
            <div className="add-user">
                <Button onClick={()=>history.push("/addteacher")}>Add Teachers</Button>
            </div>
        </BaseDefault>
    )
}