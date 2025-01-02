import mongoose from "mongoose";


export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://shyambabujayswal:7084721408@cluster0.lvcoj.mongodb.net/tomato').then(()=>{
    console.log("DB Connected");
    

  })
     
}  