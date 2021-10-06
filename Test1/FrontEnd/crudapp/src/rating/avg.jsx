import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { Link } from "react-router-dom";
import './ratingpro.css'
 function Avg(props){
    const ava=(props.avarage)
    const tEmail=(props.name)
    return(
        <div>
            
            <div className="rateboxt">
                <h4 className="Tnamet"> {tEmail} </h4>
                <Rating name="half-rating-read" defaultValue={props.avarage} precision={0.5} readOnly className="start" />
                
                <h3 className="avgt">{ava} <Link to={`/ratingprofile/${tEmail}/${ava}`}> <button className="alldetailst">See more</button> </Link> </h3>
                
                <hr className="hlinet"/>
                     
            </div> 
         
     
        </div>

    );
}
export default Avg;