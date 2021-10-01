import React,{useState} from 'react';
import axios from "axios";
import {FaStar} from "react-icons/fa";
import './ratingdiolog.css'

function Rating( props){
    
    const[rating , setRating]=useState('')
    const[feedback , setText]=useState('')
    const[hover, setHover]=useState(null)
    const email="teacher3@gmail.com"
    const sender="test@gmail.com"
    const [feedError,setError]=useState('');
    const [rateError,setrateError]=useState('');

    
    const Validation = ()=>{
         
        if(rating==0){
            setrateError('please Enter a rating')
            return false;
        }
        else if(!feedback)
        {
            setError('this field canot be null')
            return false;
        }
        else if(feedback.length<10)
        {
            setError('enter a feedback at least 10 character')
            return false;
        }
        else{
            return true
        }    
    }
    const ratinghandler = (event)=>{
         
        
        const IsTrue=Validation();
        
        if(IsTrue==false){
            event.preventDefault();
        }
        else{    
        const details={
            sender,
            feedback
        }
        const data={
            email,
            rating,
            details
        }
        axios.put('http://localhost:8000/update',data)
        .then(res=>{
        alert( "Your feedback submited" )
            
        })
        .catch(err=>{
        alert('Could not submit')
        })
         
    }
        
    }



    
    return(props.trigger) ? (
        <div>
       <center>
        <form className="box2">
        
        <h3 className="txt">How would you rate your teacher? </h3>
        {[...Array(5)].map((star, i)=>{
            const ratingValue=i+1;

            return( 
                 
            <label key={i}> 
            
                <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)} />
                <FaStar className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } size={40}  onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)}/>
            </label>
            )
        })}
        <div className="Error">{rateError}</div>
         <h3 className="txt">What can i do to improve your knowledge? </h3>
        
        <textarea className="text_area" value={feedback} onChange={(event)=>setText(event.target.value)}/>
        <div className="Error">{feedError}</div>
         

        <input type="submit" className="submit" onClick={event=> ratinghandler(event)} value="Submit" required/>
        <br/>
        
        <button onClick={()=> props.setTrigger(false)} className="close">close</button>
        {props.children}
        </form>
         
        </center>
        </div>
       
    ):"";
  
}

export default Rating;