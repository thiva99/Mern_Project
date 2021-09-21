import React from"react";
import "./adminrequest.css";
//import { MDBInput } from "mdbreact";
 //import Toast from 'react-bootstrap/Toast'
 import Deletebtn from "./adminDeleteBtn";
function UMessage(props){
  const name=(props.sender)
    return(
          <div className={props.sender}>
            <div className="card">
              <div className="container">
                <h6 className="name">{name}</h6>
                <Deletebtn s={name} mes={props.message}/>
                <hr className="line"/> 
                <p>{props.message}</p> 
              </div>
            </div>
          </div>  
              

    )
}

export default UMessage;