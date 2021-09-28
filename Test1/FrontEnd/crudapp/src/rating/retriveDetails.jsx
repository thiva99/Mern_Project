import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Tdetails from './teacherRatingProfile';

function Datas(props){
    
    const umail=(props.match.params.email)
    const avg=(props.match.params.avg)
    const[details,setDetails] = useState([]);
  // const[avg,setavg] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8000/pecentage/${umail}`)
      .then(res => {
        
        setDetails(res.data)
       
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  },[])
    return(
        <div>
             {details.map((detail,index)=>(
              <div key={index} >
                <Tdetails email={umail} avg={avg} one={detail.one} two={detail.two} three={detail.three} four={detail.four} five= {detail.five}/>
              </div> 

            ))}
          </div>
      );
  }
  export default Datas;
  

  
               
            
             
