import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./studentFeed.css"; 
import Feedbacks from './feedbacks';

function Details(){
    const[details,setDetails] = useState([]);
    //const[mail,setMail] = useState(props.name);
    const mail=('test1@gmail.com')
    
    
    useEffect(() => {
     axios.get(`http://localhost:8000/search/${mail}`)
       .then(res => {
           setDetails(res.data)
       })
       .catch(() => {
         alert('Error retrieving data!!!');
       });
   },[])


  
    return(
        <div> 
           <div >   
            {details.map((users) => (
            <div>
             {
               (typeof(users.feedback)=='object')?
                <div>
                   {users.feedback.map((subrow)=>
                    <div>
                      <Feedbacks name={subrow.sender} message={subrow.feedback}/>    
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
export default Details;