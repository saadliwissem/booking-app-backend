import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const updateddHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateddHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete method
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
    
  } catch (err) {
    res.status(500).json(err);
  }
});
//get hotel by id
router.get("/:id", async (req, res) => {
    try {
      const hotel= await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
      
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

  //get all hotels 
router.get("/", async (req, res) => {
    try {
      const hotels= await Hotel.find(req.params.id);
      res.status(200).json(hotels);
      
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

export default router;
