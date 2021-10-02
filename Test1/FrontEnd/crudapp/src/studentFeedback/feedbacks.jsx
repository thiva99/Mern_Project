import React, { useState } from 'react'
import "./studentFeed.css"; 

import axios from 'axios';


function Feedbacks(props){
    const [hide,sethide]=useState()
    const send=(props.name)
    const btn=(props.want)
    const id=(props.id)
    const iid=(props.iid)

    const [type,settype]=useState(props.message);
  
    const btnShow = ()=>{
        if(send===btn){
            const hide="how";
            return hide;
        }
        else{
            const hide="show";
            return hide;
        }
    }
    const editFeed = (event)=>{
        axios.put(`http://localhost:8000/rating/fupdate/${id}/${iid}/${type}`)
        .then(res=>{
        alert( "Successfully updated" )
            
        })
        .catch(err=>{
        alert('Could not submit')
        })   
    }
     

    const test=(event)=>{
        settype(event.target.value);
    }
    return(
        <div className="sfeedback">
            <div className="heading"> 
            <span className="usermail"> {props.name} </span>
            </div>
            <input type="button" value="update" className={btnShow()} onClick={event=> editFeed(event)} id="btnn"/>
            <br/>
            <textarea value={type} onChange={test} className="feedbackareas"/>
            
        </div>
    );
}
export default Feedbacks;