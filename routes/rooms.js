import express from "express";
const router = express.Router()
import { verifyAdmin } from "../utils/verifyToken.js";
import { CreateRoom,updateRoom,getRoom,getRooms,deleteRoom } from "../controllers/roomController.js";
//create
router.post("/HotelId", verifyAdmin,CreateRoom);
//update
router.put("/:id",verifyAdmin, updateRoom);
//delete method
router.delete("/:id/:HotelId", verifyAdmin,deleteRoom);
//get Room by id
router.get("/:id", getRoom);

  //get all Rooms 
router.get("/", getRooms);

export default router