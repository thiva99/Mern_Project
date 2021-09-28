import React from 'react';
import axios from 'axios';


class Counterfun extends React.Component {

  state = {
    user: []
  };

  componentDidMount = () => {
    this.getdispay();
  };


  getdispay = () => {
    axios.get('http://localhost:8000/thivankasaparamadu@gmail.com')
      .then((response) => {
        const data = response.data;
        this.setState({ user: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  display = (user) => {
      
    return user.map((users) => (
      <div >
        
         {users.rating}

      </div>
    ));
  };

  render() {
    return(
      <div>
        <div>
            <tr>Username:{this.display(this.state.user)}</tr>

        </div>
      </div>
    );
  }
}
export default Counterfun;