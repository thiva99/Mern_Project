import React from "react";
import ARequest from "./adminDetails";
function Details(props){
    return(
        <div>
            <ARequest name={props.match.params.mail}/>
        </div>
    );
}
export default Details;
            
            