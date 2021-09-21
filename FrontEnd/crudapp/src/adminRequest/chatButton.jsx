import "./adminrequest.css";
import React from "react";
import { Link } from "react-router-dom";
function Chatbutton(props){
    const mail=(props.name)
    return(
        <div>
            <button onClick={() => window.location.reload(true)} className="navBttn"><Link to={`/user/${mail}`}>{props.name}</Link></button>
        </div>
        );
}
export default Chatbutton;
 

    
 

            
           
              
          
         

