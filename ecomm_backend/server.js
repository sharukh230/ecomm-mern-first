const express = require("express")
const connection = require("./config/db")
require("dotenv").config()


const app = express()

app.use(express.json()) 

//routes imports
const product = require("./routes/productRoute")

app.use("/api/v1",product)

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err);
        console.log("Error Connecting to DB")
    }
    console.log(`server running on ${process.env.PORT}`)
})