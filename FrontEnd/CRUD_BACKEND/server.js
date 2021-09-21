const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

require('./DB/connectDB')

app.use(express.json())
app.use(cors())


const apiRoutes = require('./routes/apiRoutes')
app.use(apiRoutes)

const port=process.env.PORT


app.listen(port,()=>{
    console.log('Server is started')
})
