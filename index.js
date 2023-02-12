import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//the express app
const app = express();
//configuring .env file
dotenv.config();
//config cross origin
app.use((req, res, next) => {
  res.setHeader(Access-Control-Allow-Origin, "*");
  res.setHeader(
    Access-Control-Allow-Headers,
    Origin, X-Requested-With, Content-Type, Accept
  );
  res.setHeader(
    Access-Control-Allow-Methods,
    GET, POST, PATCH, DELETE, OPTIONS
  );
  next();
});
//mongoose connection
const connect = () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("connected to mdb");
  } catch (error) {}
};
//verify the status of connecting to mongodb and displaying text to the console
mongoose.connection.on("disconnected", () => {
  console.log("mongodb is disconneced ");
});
mongoose.connection.on("connected", () => {
  console.log("mongodb is conneced ");
});

//middlewares
app.use(cors("*"));
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//the app start working when it's listening to a specific port
app.listen(process.env.PORT, () => {
  connect();
  console.log("connected to backend port : " + process.env.PORT);
}) || 3002;
