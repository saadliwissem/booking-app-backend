import mongoose from "mongoose";

const HotelScehema = mongoose.Schema({
    name:{
        required :true,
        type: String,  
    },
    type:{
        required :true,
        type: String,  
    },
    city:{
        required :true,
        type: String,  
    },
    address:{
        required :true,
        type: String,  
    },
    distance:{
        required :true,
        type: String,  
    },
    photos:{
        
        type: [String],  
    },
    rating:{
        type: Number,
        min:0,
        max:5  
    },
    desc:{
        type:String,
        required : true
    },
    rooms:{
        type: [String],  
    },
    cheapestPrice:{
        required :true,
        type: Number,  
    },
    Featured:{
        default :true,
        type: Boolean,  
    }
})

export default mongoose.model("hotel",HotelScehema)