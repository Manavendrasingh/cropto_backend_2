import mongoose from "mongoose";
import 'dotenv/config'

const dbConnect = async()=>{
    return await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000 // Increase to 30 seconds
      });
}

export default dbConnect;