const router=require('express').Router()

const signupValidator=require('../validator/auth/signUpValidator')
const loginValidator=require('../validator/auth/loginValidator')
const {isAuthenticated}=require('../middleware/authMiddleware')
const {isUnAuthenticated}=require('../middleware/authMiddleware')
const {
    dashboardGetController,
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController
}=require('../controller/authController')

router.get('/',isAuthenticated,dashboardGetController)
router.get('/register',isUnAuthenticated,signupGetController)
router.post('/register',isUnAuthenticated,signupValidator,signupPostController)
router.get('/login',isUnAuthenticated,loginGetController)
router.post('/login',isUnAuthenticated,loginValidator,loginPostController)
router.get('/logout',logoutController)

module.exports=router