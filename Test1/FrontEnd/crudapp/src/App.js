 
import React from 'react'
 
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
//import ARequest from './adminRequest/adminDetails';
import Details from './adminRequest/value';
import Datas from './rating/retriveDetails';
import RateDetails from './rating/allDetails';
import Btn from './rating/btn';
import  Myfeed from './studentFeedback/studentFeedbacks';
// import Request from './request/delatils.jsx';
 


function App() {
return(

<BrowserRouter>
 
 
  {/* admin side Request function */}
  <Route path="/user/:mail" render={Details}/>
  {/* Rating function */}
  <Route exact path="/ratingprofile/:email/:avg" component={Datas}/>
   <Route exact path="/rating" component={RateDetails}/>
  <Route exact path="/ratingbox" component={Btn}/>
  <Route exact path="/myfeedback" component={ Myfeed}/>
  {/* <Route exact path="/studentreq" component={ Request}/> */}

 

  
</BrowserRouter>

);
}
export default App;
