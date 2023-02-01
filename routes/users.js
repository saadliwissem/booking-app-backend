import express from "express";
const router = express.Router()
import {getUsers,getUser,deleteUser, updateUser} from "../controllers/userController.js"
import { verifyToken,verfiyUser,verifyAdmin } from "../utils/verifyToken.js";

// router to verify token 
/* router.get("/checkauth",verifyToken,(req,res,next)=>{
     res.send("logged in")
 })*/
 //router to verify the user authentication
//  router.get("/checkuser/:id",verfiyUser,(req,res)=>{
//    res.send("able to delete or update")
//  })
// // router to verify admin 
//  router.get("/checkAdmin/:id",verfiyAdmin,(req,res)=>{
//    res.send("admin is logged in, welcome") 
// })
//update
router.put("/:id",verfiyUser, updateUser);
//delete method
router.delete("/:id", verfiyUser,deleteUser);
//get User by id
router.get("/:id", verfiyUser,getUser);

  //get all Users 
router.get("/", verifyAdmin,getUsers);
export default router