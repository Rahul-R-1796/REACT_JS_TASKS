import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
    const history = useHistory();
    return(
        <div>
            <div>
            <div className="nav-styles">
                <span>
                     <button 
                     className="nav-buttons"
                     onClick={()=>history.push("/add/user")}
                     >
                        Add User
                        </button>
                </span>
                <span>
                     <button 
                     className="nav-buttons"
                     onClick={()=>history.push("/")}
                     >
                        Dashboard
                        </button>
                </span>
            </div>
           <div className="title">{title}</div>
           </div>
           <div className="children">{children}</div>
           <footer>
              <div>Thank You</div>
           </footer>
        </div>
    )
}  