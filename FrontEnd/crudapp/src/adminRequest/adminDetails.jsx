import React, { Component } from "react";
import axios from 'axios';
import "./adminrequest.css";
import UMessage from "../adminRequest/Usermessage";
import ADRequest from "./adminRequest";
import Userdetails from "./chatNav";
 
 
class ARequest extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      user: [],
      mail:(props.name)
      
      
    }
  }
      componentDidMount = () => {
        this.getdispay();
      };
    
      getdispay = () => {
        axios.get(`http://localhost:8000/${this.state.mail}`)
          .then((response) =>{
            const data = response.data;
            this.setState({ user:data});
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
      display = (user ) => {
          return user.map((users,index) => (
          <div key={index}>
            
            {
              
              (typeof(users.chat)=='object')?
              <div>
                 
                {
                  users.chat.map((subrow,p)=>
                  <div key={p}>
                    <UMessage sender={subrow.sender} message= {subrow.message} />
                  
                  </div>
                  )
                }
              </div>
              :
              null
            }
          </div>
        ));
      };
    
  render(){ 
  return (
    <div> 
        
        <div id="objDiv" className="back">
        <div className="header"><p className="head">Global Education</p></div>
          <div className="scrollbar">
            {this.display(this.state.user)}
          </div>
          <ADRequest send={this.state.mail}/>
          <div className="navDetails">
             <div className="fake"> </div>
            <Userdetails/>
          </div> 
        </div>
        <div > 
           
        </div>
    
    </div>
    

  );
  }
}

export default ARequest;
  