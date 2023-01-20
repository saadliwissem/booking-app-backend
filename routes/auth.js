import express from "express";
const router = express.Router()
//the main auth page 
router.get("/",(req,res)=>{
    res.send("done")
})
//the register auth page 
router.get("/register",(req,res)=>{
    res.send("register page")
})

export default router