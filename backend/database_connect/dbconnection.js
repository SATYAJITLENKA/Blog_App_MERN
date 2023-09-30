import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({path:'./.env'})

const url=process.env.URL
const dbConnected=()=>{
    mongoose.connect(url)
    .then(()=>console.log("database connected"))
    .catch((err)=>console.log(err))
}

export default dbConnected;