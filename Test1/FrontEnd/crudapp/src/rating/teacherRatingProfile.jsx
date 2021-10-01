import React from 'react'
import './ratingdiolog.css'
import Rating from '@material-ui/lab/Rating';
 
import Avatar from 'react-avatar';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Feedbacks from './allFeedbacks';
 

function Tdetails(props){
    const tmail=(props.email)
    return(
        <div className="deta">

            <div className="UnameB">
                <u><h3 className="unamec">{tmail}</h3></u>
                <Rating name="half-rating-read" defaultValue={props.avg} precision={0.5} size="large" readOnly  /> 
                 
                
            </div>


            <div className="allBar"> 
            <div className="pBar">
            <ProgressBar striped variant="warning" now={props.one} className="bar"/> 
            <ProgressBar striped variant="warning" now={props.two} className="bar"/>
            <ProgressBar striped variant="warning" now={props.three} className="bar"/>
            <ProgressBar striped variant="warning" now={props.four} className="bar"/>
            <ProgressBar striped variant="warning" now={props.five} className="bar"/>
            </div>
            <div className="percentage">
                <h6  className="pcr">{props.one}%</h6>
                <h6 className=" pcr">{props.two}%</h6>
                <h6 className=" pcr">{props.three}%</h6>
                <h6 className=" pcr">{props.four}%</h6>
                <h6 className=" pcr">{props.five}%</h6>
            </div>
            <div className="rBar"> 
            <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /><br/>
            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /><br/>
            </div>
            </div>


            {/* <Avatar facebookId="100008343750912" size={150} round="20px" className="Avatra" /> */}

            
           <Avatar githubHandle="sitebase" size={150} round="20px" className="Avatra"/>
 
 
            <div className="avgratingu">
                <center>
                  <h2>{props.avg} </h2>
                <h4>Average Rating</h4>
                <span className="rbt"> <input type="button" value="Download Report" className="repbtn"/> </span>
                </center>
            </div>

             <Feedbacks name={tmail} />


        </div>
    );
}
export default Tdetails;

