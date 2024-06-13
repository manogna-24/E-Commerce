const express=require('express')
const router= express.Router()
const userApi= require('../apis/userApi')
router.get("/userfetch",userApi.user_all)
router.post("/register",userApi.register)
router.post("/login",userApi.login)
router.put("/userupdate",userApi.update_user)
router.delete("/userdelete",userApi.delete_user)
module.exports= router