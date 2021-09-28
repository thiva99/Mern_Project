import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './ratingdiolog.css'
import Avg from './avg';


function RateDetails() {
  const[details,setDetails] = useState([]);
  // const[avg,setavg] = useState();
  

  
  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => {
        
        setDetails(res.data)
       
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  },[])

  
  function filterData(details,searckey){
    console.log(searckey)
    const result =details.filter((details)=>
    details.email.includes(searckey)
    )
    setDetails(details.result)
  }

  function searchhandleChange(e) {
    const searckey= e.currentTarget.value
    axios.get('http://localhost:8000/')
    .then(res => {
      if(res.data.success){
        filterData(res.data,searckey)
      }
    })
  }

    return(
      <div> 
        <input type="text" className="profileSearch" placeholder="Search teacher's email..." onChange={searchhandleChange}/>
      <div className ="profileArea">
        {details.map((detail,index)=>(
         <div key={index} >
         <Avg name= {detail.email} avarage={detail.avg}/>
         </div>
         ))}
      </div>
      </div>
 );
}

export default RateDetails;
             
           
           
           
             
               
            
             
             
       
                