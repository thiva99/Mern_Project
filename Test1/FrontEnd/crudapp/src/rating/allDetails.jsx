import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './ratingdiolog.css'
import Avg from './avg';


function RateDetails() {
  const[details,setDetails] = useState([]);
  const[search,setSearch] = useState('');
  

  
  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => {
        
        setDetails(res.data)
       
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  },[])

  const filterteacher=details.filter(mail=>{
    return mail.email.toLowerCase().includes(search.toLowerCase())
  })
  

  return(
      <div> 
        <input type="search" className="profileSearch" placeholder="Search teacher's email..." onChange={e=>setSearch(e.target.value)}/>
      <div className ="profileArea">
        {filterteacher.map((detail,index)=>(
         <div key={index} >
         <Avg name= {detail.email} avarage={detail.avg}/>
         </div>
         ))}
      </div>
      </div>
 );
}

export default RateDetails;
             
           
           
           
             
               
            
             
             
       
                