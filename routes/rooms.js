import express from "express";
const router = express.Router()
import { verifyAdmin } from "../utils/verifyToken.js";
import { CreateRoom,updateRoom,getRoom,getRooms,deleteRoom, updateRoomAvailability } from "../controllers/roomController.js";
//create
router.post("/:HId", verifyAdmin,CreateRoom);
//update
router.put("/:id",verifyAdmin, updateRoom);

//route for 
router.put("/availability/:id", updateRoomAvailability);

//delete method
router.delete("/:id/:HotelId", verifyAdmin,deleteRoom);
//get Room by id
router.get("/:id", getRoom);

  //get all Rooms 
router.get("/", getRooms);

export default router