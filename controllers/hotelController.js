import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"
import { createError } from "../utils/error.js";

//create hotel
export const createHotel =async (req,res,next)=>{
    const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err)
  }
}
// update hotel

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
//delete hotel

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

//get a hotel

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//get all hotels 

export const getHotels = async (req, res, next) => {
  const {min,max,...others} = req.query
  try {
    const hotels = await Hotel.find({...others,cheapestPrice: {$gt:min || 1,$lt:max||999}}).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

//getting hotels by cities

export const CountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map(city=>{
      return Hotel.countDocuments({city:city})
    }));
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
//getting hotels by cities

export const CountByType = async (req, res, next) => {
  try {
  const HotelCount =await Hotel.countDocuments({type: "hotel"});
  const appartmentCount =await  Hotel.countDocuments({type: "appartment"});
  const resortCount =await Hotel.countDocuments({type: "resort"});
  const villaCount =await Hotel.countDocuments({type: "villa"});
  const cabinCount =await Hotel.countDocuments({type: "cabin"});

  res.status(200).json([
    {type: "hotel", count: HotelCount},
    {type: "appartment", count: appartmentCount},
    {type: "villa", count: villaCount},
    {type: "resort", count: resortCount},
    {type: "cabin", count: cabinCount},


  ])
    
  
  } catch (err) {
    next(err);
  }
};

export const getHotelsRooms = async(req, res , next )=>{
  try {
    const hotel =await  Hotel.findById(req.params.id)
    const list =await  Promise.all(hotel.rooms.map(room=>{
      return Room.findById(room)
    }))
    res.status(200).json(list)
    console.log(list)
  } catch (error) {
    next(error)
  }
}
