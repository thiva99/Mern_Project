import "./adminrequest.css";
import React from 'react';
import axios from 'axios';
import Chatbutton from "./chatButton";


class Userdetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          user: [],
        }
      }
          componentDidMount = () => {
            this.getdispay();
          };
        
          getdispay = () => {
            axios.get('http://localhost:8000')
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
              return user.map((users,index) => (
                <div key={index} >
                    
                    <Chatbutton name={users.email}/>
                    
                </div>         
            ));
          };
        
      render(){ 
      return (
        <div> 
            <div className="Navscrollbar">
                {this.display(this.state.user)}
            
            </div>
               
        </div>
        
    
      );
      }
    }
export default Userdetails;


