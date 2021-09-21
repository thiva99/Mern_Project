import React,{useState} from 'react';
import {FaStar} from "react-icons/fa";

function Rating(){
    
    const[rating , setRating]=useState(null)
    const[hover, setHover]=useState(null)
    
    const ratinghandler = (event)=>{
        event.preventDefault();
        
        const data={
          rating
        }
        console.log(data)
    }




    return(
        <div>
        <center>
        <form>
        {[...Array(5)].map((star, i)=>{
            const ratingValue=i+1;

            return( 
            <label> 
                <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)} />
                <FaStar className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } size={40}  onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)}/>
            </label>
            )
        })}
        <p>{rating}</p>
        <input type="submit" onClick={event=> ratinghandler(event)} value="aaa"/>
        </form>
        </center>
        </div>
    );
  
}




export default Rating;