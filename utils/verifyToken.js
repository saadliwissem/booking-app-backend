import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken =(req,res,next)=>{
    const token = req.cookies.access_token;
    if (!token){
        return next(createError(401,"you should authenticate"));
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403,"token is not valid"));
        req.user=user;
         next()
    })
}
export const verfiyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if (req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
            if(err) return next(createError(403,"you are not autherized"));
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
          } else {
            return next(createError(403, "You are not authorized as admin!"));
          }  
    });
       
    
    
  };