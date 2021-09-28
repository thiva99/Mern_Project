const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();

//port Number Assign
const port = process.env.port || 8070;
app.use(cors());
app.use(bodyParser.json());

//Database Connection URL
const URL = process.env.DB_URL;

mogoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

//Check the database connection
const connection = mogoose.connection;
connection.once("open",()=>{
    console.log("This database is Connection success!");
})

 const Request = require("./routes/requestRoutes");
 
 app.use("/request",Request);





//Display the working prot
app.listen(port,()=>{
    console.log(`This Server is running in this ${port} port`)
})