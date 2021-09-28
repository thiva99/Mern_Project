import React,{useState} from "react";
import axios from "axios";
import "./adminrequest.css";

const ADRequest = (props) => {
    const email=(props.send)
    const sender="admin"
    const [message,setmessage]=useState('')
  
  const formhandler = (event)=>{
    //event.preventDefault();
   
    const data={
        sender,
        message
    }
    const details={
        email,
        data
    }
    axios.put('http://localhost:8000/update',details)
    .then(res=>{
        // alert('data added')
    })
    .catch(err=>{
        alert('error')
    })
    console.log(data)
  }

  return (
  
    <div>
       <form onSubmit={event=> formhandler(event)}> 
      <input type="text" className="message" value={message} onChange={(event)=>setmessage(event.target.value)} required placeholder="Enter message here..." />
      <input type="submit" className="send"   value="Send"/>
      </form>
    </div>
  );
}

export default ADRequest;