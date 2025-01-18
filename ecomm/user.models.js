
//S1
import mongoose from "mongoose"

//S2
const userSchema = new mongoose.schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
    },
    password:{
      type:String,
      required:true,

    }
  }, 
  {timestamps:true}
  )
//S3
export const User=mongoose.model("User",userSchema)