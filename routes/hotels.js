import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

//create
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
//delete method
router.delete("/:id", deleteHotel);
//get hotel by id
router.get("/:id", getHotel);

  //get all hotels 
router.get("/", getHotels);

export default router;
