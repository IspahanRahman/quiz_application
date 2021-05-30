const express=require('express')
const path=require('path')
const ejs=require('ejs')
const setMiddleware=require('../middleware/middleware')
const router=require('../routes/authRoute')
const port=process.env.PORT || 8080
require("./db/conn")



const static_path=path.join(__dirname,"../public")
const templates_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views','views')


// hbs.registerPartials(partials_path)

//setMiddleware(app)
setMiddleware(app)
app.use(router)

 //app.use(express.static(static_path))


app.get('*',(req,res)=>{
    res.send('This page is not found')
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})