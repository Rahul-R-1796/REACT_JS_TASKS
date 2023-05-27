import React from "react";
import BaseDefault from "../../core/Base";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ViewStudent({student,setStudent}){
    const history = useHistory();
    const {id} = useParams();
    const person = student[id];

    return(
        <BaseDefault>
            <div className="card-body">
                <div className="card">
                    <h2>{person.name}</h2>
                    <p>Class : {person.std}</p>
                    <p>Gread : {person.gread}</p>
                    <p>Attendance : {person.attendance}</p>
                    <Button onClick={()=>history.push("/students")}>Back</Button>
                </div>
            </div>

        </BaseDefault>
    )
}