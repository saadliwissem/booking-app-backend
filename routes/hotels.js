import express from "express";
import { getHotelsRooms,createHotel, deleteHotel, getHotel, getHotels, updateHotel,CountByCity,CountByType } from "../controllers/hotelController.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//create
router.post("/", verifyAdmin,createHotel);
//update
router.put("/:id",verifyAdmin, updateHotel);
//delete method
router.delete("/:id", verifyAdmin,deleteHotel);
//get hotel by id
router.get("/find/:id", getHotel);

  //get all hotels 
router.get("/", getHotels); 

router.get("/CountByCity", CountByCity);
router.get("/CountByType",CountByType);
router.get("/room/:id",getHotelsRooms);


export default router;
