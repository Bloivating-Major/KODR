import mongoose from "mongoose";
import config from "../config/config.js";

export const connect = ()=>{
    mongoose.connect(config.MONGODB_URI)
   .then(()=>console.log("Connected to MongoDB"))
   .catch(err=>console.error(err));
}

export default connect