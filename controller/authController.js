const bcrypt=require('bcryptjs')
const {validationResult}=require('express-validator')
const Flash=require('../utils/Flash')
const Register=require('../src/models/registers')
const errorFormatter=require('../utils/validationErrorFormatter')
const {next} = require('cheerio/lib/api/traversing')

exports.dashboardGetController=(req,res,next)=>{
    res.render('pages/index')
}

exports.signupGetController=(req,res)=>{
    res.render('pages/register',
    {
        error:{},
        value:{},
        flashMessage:Flash.getMessage(req)
    })
}

exports.signupPostController=async (req,res,next)=>{
    let{username,email,password}=req.body
    let errors=validationResult(req).formatWith(errorFormatter)

    if(!errors.isEmpty()){
       console.log(errors.mapped())

        req.flash('fail','Please Check Your Form')
        return res.render('pages/register',{
            error:errors.mapped(),
            value:{
                username,email,password
            },
            flashMessage:Flash.getMessage(req)
        })
    }
    try{
        let hashedpassword=await bcrypt.hash(password,10)
        console.log(hashedpassword)
        let registerUser=new Register({
            username,
            email,
            password:hashedpassword,
        })
        let result=await registerUser.save()
        console.log('User created successfull',result)
        req.flash('success','User created Successfully')
        res.redirect('/')
    }
    catch(e){
        next(e)
    }

}


exports.loginGetController=(req,res)=>{
    console.log(req.session.isLoggedIn, req.session.user)
    res.render('pages/login',
    {
        error:{},
        flashMessage:Flash.getMessage(req)
    })
}

exports.loginPostController=async (req,res,next)=>{
    let{email,password}=req.body
    let errors=validationResult(req).formatWith(errorFormatter)

    if(!errors.isEmpty()){
        req.flash('fail','Please Check Your form')
        return res.render('pages/login',{
            error:errors.mapped(),
            flashMessage:Flash.getMessage(req)
            
        })
    }
    try {
       let user=await Register.findOne({email})
       if(!user){
           req.flash('fail','Please Provide Valid Credentials')
           return res.render('pages/login',{
               error:{},
               flashMessage:Flash.getMessage(req)
           })
       }
       let match=await bcrypt.compare(password,user.password)
       if(!match){
           req.flash('fail','Please Provide valid Credentials')
          return res.render('pages/login',{
               error:{},
               flashMessage:Flash.getMessage(req)
           })
       }
    
       req.session.isLoggedIn=true
       req.session.user=user
       req.session.save(err => {
           if(err){
               console.log(err)
               return next(err)
           }
           req.flash('success','Successfully LoggedIn')
           res.redirect('/')
       })
        
    } catch(e) {
        next(e)
    }
}

exports.logoutController=(req,res,next)=>{
   req.session.destroy(err=>{
       if(err){
           console.log(err)
           return next(err)
       }
       return res.redirect('/login')
   }) 
}

