import React from 'react'
import Rating from '@material-ui/lab/Rating';
import './ratingdiolog.css'
import { Link } from "react-router-dom";
 

function Avg(props){
    const ava=(props.avarage)
    const tEmail=(props.name)
    return(
        <div>
            
            <div className="ratebox">
                <h4 className="Tname"> {tEmail} </h4>
                <Rating name="half-rating-read" defaultValue={props.avarage} precision={0.5} readOnly className="star" />
                
                <h3 className="avg">{ava} <Link to={`/ratingprofile/${tEmail}/${ava}`}> <button className="alldetails">See more</button> </Link> </h3>
                
                <hr className="hline"/>
                     
            </div> 
         
     
        </div>

    );
}
export default Avg;