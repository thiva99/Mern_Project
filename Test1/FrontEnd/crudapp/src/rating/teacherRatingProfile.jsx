import React from 'react'
import './ratingpro.css'
import Rating from '@material-ui/lab/Rating';
 
import Avatar from 'react-avatar';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Feedbacks from './allFeedbacks';
 

function Tdetails(props){
    const tmail=(props.email)
    return(
        <div className="detat">

            <div className="UnameBt">
                <u><h3 className="unamect">{tmail}</h3></u>
                <Rating name="half-rating-read" defaultValue={props.avg} precision={0.5} size="large" readOnly  /> 
                 
                
            </div>


            <div className="allBart"> 
            <div className="pBart">
            <ProgressBar striped variant="warning" now={props.one} className="bart"/> 
            <ProgressBar striped variant="warning" now={props.two} className="bart"/>
            <ProgressBar striped variant="warning" now={props.three} className="bart"/>
            <ProgressBar striped variant="warning" now={props.four} className="bart"/>
            <ProgressBar striped variant="warning" now={props.five} className="bart"/>
            </div>
            <div className="percentaget">
                <h6  className="pcrt">{props.one}%</h6>
                <h6 className=" pcrt">{props.two}%</h6>
                <h6 className=" pcrt">{props.three}%</h6>
                <h6 className=" pcrt">{props.four}%</h6>
                <h6 className=" pcrt">{props.five}%</h6>
            </div>
            <div className="rBart"> 
            <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /><br/>
            </div>
            </div>


            {/* <Avatar facebookId="100008343750912" size={150} round="20px" className="Avatra" /> */}

            
           <Avatar githubHandle="sitebase" size={150} round="20px" className="Avatrat"/>
 
 
            <div className="avgratingut">
                <center>
                  <h2>{props.avg} </h2>
                <h4>Average Rating</h4>
                <span className="rbtt"> <input type="button" value="Download Report" className="repbtnt"/> </span>
                </center>
            </div>

             <Feedbacks name={tmail} />


        </div>
    );
}
export default Tdetails;

