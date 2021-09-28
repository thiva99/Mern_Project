import React from 'react';
import Rating from './ratingdiolog';
import{useState} from 'react';
import './ratingdiolog.css'


function  Btn(){
 
  const [buttonPopup,setbuttonPopup]=useState(false);
 
  return (
    <div className="App">
     
     <button onClick={()=>setbuttonPopup(true)} className="addclass">Go</button>
     
     <Rating trigger={buttonPopup} setTrigger={setbuttonPopup}/>
     </div>
  );
}

export default Btn;
