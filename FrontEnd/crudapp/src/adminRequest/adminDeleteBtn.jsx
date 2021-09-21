import React from "react";
import axios from "axios";

function Deletebtn(props){
    function Click(){
        const sen="user@gmail.com"
        alert(sen)
        const mess=(props.mes)
        axios.put(`http://localhost:8000/dupdate/${sen}/${mess}`)
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
                <input type="submit" value="remove" className="dbtn"/>
            </form>    
        </div>
    );
}
export default Deletebtn;