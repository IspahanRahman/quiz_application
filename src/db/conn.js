require('dotenv').config()
const mongoose=require('mongoose')

const db_username=process.env.DB_USERNAME
const db_password=process.env.DB_PASSWORD

const MONGODB_URI=`mongodb+srv://${db_username}:${db_password}@cluster0.d2fg3.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('database connect successfully')
})
.catch((e)=>{
    console.log(e)
})