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
        axios.put(`http://localhost:8000/fupdate/${id}/${iid}/${type}`)
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
            <h5>{props.name}</h5>
            {/* <h5>{props.id}</h5>
            <h5>{props.iid}</h5> */}
            <input type="texfeild" value={type} onChange={test}/>
            <input type="button" value="update" className={btnShow()} onClick={event=> editFeed(event)}/>
        </div>
    );
}
export default Feedbacks;