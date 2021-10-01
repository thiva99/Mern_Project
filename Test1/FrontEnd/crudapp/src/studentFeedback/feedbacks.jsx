import React, { useState } from 'react'
import "./studentFeed.css"; 
function Feedbacks(props){

    const [type,settype]=useState(props.message);

    const test=(event)=>{
        settype(event.target.value);
    }
    return(
        <div className="sfeedback">
            <h5>{props.name}</h5>
            <input type="texfeild" value={type} onChange={test}/>
            <input type="button" value="update"   className={props.name}/>
        </div>
    );
}
export default Feedbacks;