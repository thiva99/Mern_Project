import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './ratingdiolog.css'
import Avg from './avg';

function StudentFeedback(){

    const[details,setDetails] = useState([]);
    const[mail,setMail] = useState("teacher2@gmail.com");
    
    useEffect(() => {
     axios.get(`http://localhost:8000/rating/${mail}`)
       .then(res => {
           setDetails(res.data)
       })
       .catch(() => {
         alert('Error retrieving data!!!');
       });
   },[])
  
    return(
        <div>
           <div>
           
            {details.map((users) => (
            <div>
             {
               (typeof(users.feedback)=='object')?
                <div>
                   {users.feedback.map((subrow)=>
                    <div >
                        <p>
                          
                          <span>{subrow.sender}</span>
                          <br/>
                          <ul>
                          <li>{subrow.feedback}</li>
                          </ul>
                           
                        </p>
                    </div>
                    )
                }
                </div>
                :
                null
              }
            </div>
          ))}
          </div>
         </div>
     )
 
}
export default StudentFeedback;