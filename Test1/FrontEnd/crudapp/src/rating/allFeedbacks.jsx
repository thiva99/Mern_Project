
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './ratingpro.css'
 
 function Feedbacks(props){
    const[details,setDetails] = useState([]);
     //const[mail,setMail] = useState(props.name);
     const mail=(props.name)
     
     
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
            <div className="feedt">
            <u><h4>Student Feedback</h4></u>         
             {details.map((users) => (
             <div className="feedbackareat">
              {
                (typeof(users.feedback)=='object')?
                 <div>
                    {users.feedback.map((subrow)=>
                     <div >
                         <p className="mesFeedt">
                           
                           <span className="fsendert">{subrow.sender} </span>
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
  export default Feedbacks;
                
            
             
          
         

                  

// class Feedbacks extends Component{
//     static num1 = "teacher@gmail.com";
//     constructor(props){
//         super(props);
//         this.state = {
//             user: [],
//             mail:"teacher@gmail.com"
        
        
//       }
//     }
//         componentDidMount = () => {
//           this.getdispay();
//         };
      
//         getdispay = (num1) => {
//           axios.get(`http://localhost:8000/${num1}`)
//             .then((response) =>{
//               const data = response.data;
//               this.setState({ user:data});
//               console.log('Data has been received!!');
//             })
//             .catch(() => {
//               alert('Error retrieving data!!!');
//             });
//         }
//         display = (user ) => {
//             return user.map((users) => (
//             <div >
              
//               {
                
//                 (typeof(users.feedback)=='object')?
//                 <div>
//                    {
//                     users.feedback.map((subrow)=>
//                     <div>
//                         <p className="mesFeed">
//                           {subrow.feedback}
                       
//                          </p>


//                     </div>
//                     )
//                   }
//                 </div>
//                 :
//                 null
//               }
//             </div>
//           ));
//         };
      
//     render(){ 
//     return (
//     <div>
//         <div className="feed">
//         <u><h4>Student Feedback</h4></u>
//         <div className="feedbackarea">
          
//           {this.display(this.state.user)}
         
//         </div>
//         </div>
//     </div>
//     );
//     }
// }
     
// export default Feedbacks;
                     

                    
       
          
          
        
             
     
         

          
          
             
          
      
       
      
  

                     
