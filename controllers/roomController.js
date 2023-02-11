 import Room from "../models/Room.js";
 import Hotel from "../models/Hotel.js";


 // create room function
 export const CreateRoom = async (req,res,next)=>{
    const HotelId =req.params.HId;
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(HotelId,{
                $push:{rooms:savedRoom._id},
            })
        }catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom);
    }catch (error) {
        next(error)
    }
 }
//update room 
 export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
//delete Room

export const deleteRoom = async (req, res, next) => {
    const HotelId =res.params.HotelId;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(HotelId,{
                $pull:{rooms:res.params.id},
            })
        }catch (error) {
            next(error)
        }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

//get a Room

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//get all Rooms 

export const getRooms = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};