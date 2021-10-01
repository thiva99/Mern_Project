import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//import Feedbak from './rating/feedbak';
//import StudentFeedback from './rating/studentFeedback'; 
//import Tdetails from './rating/teacherRatingProfile';
//import Btn from './rating/btn';
//import Avg from './rating/avg';
//import RateDetails from './rating/allDetails';
//import Datas from './rating/retriveDetails';
//import Chatbutton from './adminRequest/chatButton';
import App from './App';
// import Feedbacks from './studentFeedback/feedbacks';
 import Details from './studentFeedback/studentFeedbacks';
//import Rating from './rating';
//import Prograse from './progressbar';
//import Retrive from './retrive2';
//import Counterfun from './retrive';
//import Userdetails from './adminRequest/chatNav';
//import Main from './main';
//import ChatPage from './request/request';
//import Request from './request/delatils.jsx';
//import ARequest from './adminRequest/adminDetails.jsx';

//<Rating />
//<Prograse/>  
//<Retrive/>
//<Counterfun/>
//<Chatbutton/>
//<Userdetails/>
//<Request/>
//<Btn/>
//<Avg/>
//<Tdetails/>
//<RateDetails/>
 
ReactDOM.render(
  <React.StrictMode>
    {/* <App />   */}
  {/* <StudentFeedback/> */}
  {/* <Feedbak/> */}
  {/* <Feedbacks/> */}

  <Details/>

 
 </React.StrictMode>,
 document.getElementById('root')
);






