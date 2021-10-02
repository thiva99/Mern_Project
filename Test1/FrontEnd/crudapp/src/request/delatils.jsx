import React, { Component } from "react";
import axios from 'axios';
import "./request.css";
import Message from "./message";
import DRequest from "./request";

class Request extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      user: []
    }
  }
      componentDidMount = () => {
        this.getdispay();
      };
    
      getdispay = () => {
        axios.get('http://localhost:8070/request/user@gmail.com')
          .then((response) =>{
            const data = response.data;
            this.setState({ user:data});
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
    
      display = (user) => {
          return user.map((users) => (
          <div className="scrollbar">
            
            {
              (typeof(users.chat)=='object')?
              <div>
                
                <div className="header"><p className="head"><span className="hello">Hello...</span> <span className="uName">{users.email}</span>  </p>  </div>
                
                
                {
                  users.chat.map((subrow)=>
                     
                  <div>
                    
                    <Message sender={subrow.sender} message= {subrow.message}/>
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
          
          <div >
            {this.display(this.state.user)}
          </div>
          <DRequest/>
        </div>
    
    </div>
    

  );
  }
}

export default Request;