import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./studentFeed.css"; 
import Feedbacks from './feedbacks';

function Myfeed(){
    const[details,setDetails] = useState([]);
    //const[mail,setMail] = useState(props.name);
    const mail=('test@gmail.com')
     
    
    useEffect(() => {
     axios.get(`http://localhost:8000/rating/search/${mail}`)
       .then(res => {
           setDetails(res.data)
       })
       .catch(() => {
         alert('Error retrieving data!!!');
       });
   },[])


  
    return(
        <div className="myfeedbackarea"> 
           <div >   
            {details.map((users) => (
            <div>
               
             {
               (typeof(users.feedback)=='object')?
                <div>
                   {users.feedback.map((subrow)=>
                    <div>
                      <Feedbacks name={subrow.sender} message={subrow.feedback} want={mail} id={subrow._id} iid={users._id}/>    
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
export default  Myfeed;