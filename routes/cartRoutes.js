const express=require('express')
const router = express.Router()
const cartAPI=require('../apis/cartApi')
router.get('/cartfetch',cartAPI.cart_all)
router.post('/cartInsert',cartAPI.insert_cart)
module.exports=router