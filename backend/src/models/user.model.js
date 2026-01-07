import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        default:""
    },
    clerkId:{
        type:String,
        unique:true,
        required:true,
    },
    addresses:[]
})