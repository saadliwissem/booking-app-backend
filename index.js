import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"

//the express app
const app = express()
//configuring .env file 
dotenv.config()
//mongoose connection
const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO)
    console.log("connected to mdb")
}
catch (error){

}
}
//verify the status of connecting to mongodb and displaying text to the console
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb is disconneced ")
})
mongoose.connection.on("connected",()=>{
    console.log("mongodb is conneced ")
})


//middlewares
app.use(express.json())
app.use("/authentication",authRoute)
app.use("/users",usersRoute)
app.use("/hotels",hotelsRoute)
app.use("/rooms",roomsRoute)


//the app start working when it's listening to a specific port
app.listen(8800, ()=>{
    connect()
    console.log("connected to backend")
})