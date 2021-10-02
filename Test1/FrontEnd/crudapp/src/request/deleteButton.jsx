import React from "react";
import axios from "axios";

function Deletebtn(props){
    
    function Click(){
        const mess=(props.mes)
        const sender="user@gmail.com"
        
        axios.put(`http://localhost:8070/request/${sender}/${mess}`)
        .then(res=>{
            alert('Deleted')
        })
        .catch(err=>{
            alert('error')
        })
    }
    return(
        <div>
           
           <form onSubmit={Click.bind((props.mes))} >
                <input type="submit" value="remove" className={props.send}/>
            </form>    
        </div>
    );
}
export default Deletebtn;