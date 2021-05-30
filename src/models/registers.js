const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        maxlength:15,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Register=new mongoose.model("Register",userSchema)

module.exports=Register
