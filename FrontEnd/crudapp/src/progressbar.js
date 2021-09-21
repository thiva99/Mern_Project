import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Prograse(){
  
    
    return(
        <div>
            <ProgressBar striped variant="success" now={2} />
            <ProgressBar striped variant="info" now={66} />
            <ProgressBar striped variant="warning" now={30} />
            <ProgressBar striped variant="danger" now={60} />
            <ProgressBar now={60} />
            
        </div>
    );
}
export default Prograse;