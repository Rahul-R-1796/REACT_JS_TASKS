import React from "react";
import BaseDefault from "../../core/Base";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ViewTeacher({teacher,setTeacher}){
    const {id} = useParams();
    const user = teacher[id];
    const history = useHistory();

    return(
        <BaseDefault>
            <div className="card-body">
                <div className="card">
                  <h2>{user.name}</h2>
                  <p>Subject : {user.subject}</p>
                  <p>Contact : {user.contact}</p>
                  <p>Performance : {user.performance} </p>
                  <Button onClick={()=>history.push("/teacher")} variant="primary">Back</Button>
                </div>
            </div>


        </BaseDefault>
    )
}